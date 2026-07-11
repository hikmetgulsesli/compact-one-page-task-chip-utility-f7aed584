/**
 * App store for the Compact One Page Task Chip Utility.
 *
 * Responsibilities:
 *   - Hold the shared app shell state (active surface, active panel, selected
 *     chip, preferences, chip collection, storage status, last error).
 *   - Bootstrap the state from the persistence adapter on mount
 *     (`ACT_APP_STATE_BOOTSTRAP`).
 *   - Persist state changes through the persistence adapter so a reload
 *     recovers the same surface, panel, and chip collection.
 *   - Surface a stable, framework-agnostic API on `window.app` for tests and
 *     sibling stories. The same API is reachable from React through the
 *     `useAppState` selector hook so screens stay reactive.
 *
 * The store intentionally avoids global side effects at import time: nothing
 * reads from `localStorage` or touches `window.app` until a provider mounts.
 * This keeps the module safe to import during SSR-like hosts and unit tests
 * that render the provider manually.
 */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import {
  AppPersistedState,
  AppRuntimeState,
  AppShell,
  PanelId,
  StorageStatus,
  SurfaceId,
  TaskChip,
  UserPreferences,
} from './compact-one-page-task-chip-utility.types';
import {
  clearPersistedState,
  loadPersistedState,
  makeDefaultPersistedState,
  savePersistedState,
} from './compact-one-page-task-chip-utility.repo';

interface StoreSnapshot {
  persisted: AppPersistedState;
  storageStatus: StorageStatus;
  lastError: string | null;
}

type Listener = () => void;

class AppStoreCore {
  private snapshot: StoreSnapshot;
  private listeners: Set<Listener> = new Set();

  constructor(initial: StoreSnapshot) {
    this.snapshot = initial;
  }

  getSnapshot(): StoreSnapshot {
    return this.snapshot;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private commit(next: StoreSnapshot, options?: { persist?: boolean }): void {
    this.snapshot = next;
    if (options?.persist !== false) {
      this.persist();
    }
    for (const listener of Array.from(this.listeners)) {
      listener();
    }
  }

  private persist(): void {
    if (this.snapshot.storageStatus === 'unavailable') return;
    const ok = savePersistedState(this.snapshot.persisted);
    if (!ok) {
      this.snapshot = {
        ...this.snapshot,
        storageStatus: 'unavailable',
        lastError: this.snapshot.lastError ?? 'failed to persist state to storage',
      };
    }
  }

  setActiveSurface(surface: SurfaceId): void {
    if (this.snapshot.persisted.activeSurface === surface) return;
    this.commit({
      ...this.snapshot,
      persisted: { ...this.snapshot.persisted, activeSurface: surface },
    });
  }

  setActivePanel(panel: PanelId): void {
    if (this.snapshot.persisted.activePanel === panel) return;
    this.commit({
      ...this.snapshot,
      persisted: { ...this.snapshot.persisted, activePanel: panel },
    });
  }

  selectChip(chipId: string | null): void {
    if (this.snapshot.persisted.selectedChipId === chipId) return;
    this.commit({
      ...this.snapshot,
      persisted: { ...this.snapshot.persisted, selectedChipId: chipId },
    });
  }

  setPreferences(prefs: Partial<UserPreferences>): void {
    this.commit({
      ...this.snapshot,
      persisted: {
        ...this.snapshot.persisted,
        preferences: { ...this.snapshot.persisted.preferences, ...prefs },
      },
    });
  }

  upsertChip(chip: TaskChip): void {
    const chips = this.snapshot.persisted.chips;
    const index = chips.findIndex((existing) => existing.id === chip.id);
    const nextChips =
      index >= 0 ? chips.map((existing, i) => (i === index ? chip : existing)) : [...chips, chip];
    this.commit({
      ...this.snapshot,
      persisted: { ...this.snapshot.persisted, chips: nextChips },
    });
  }

  removeChip(chipId: string): void {
    const chips = this.snapshot.persisted.chips;
    if (!chips.some((chip) => chip.id === chipId)) return;
    const nextChips = chips.filter((chip) => chip.id !== chipId);
    const selectedChipId =
      this.snapshot.persisted.selectedChipId === chipId ? null : this.snapshot.persisted.selectedChipId;
    this.commit({
      ...this.snapshot,
      persisted: { ...this.snapshot.persisted, chips: nextChips, selectedChipId },
    });
  }

  resetStorage(): void {
    const cleared = clearPersistedState();
    const persisted = makeDefaultPersistedState();
    const storageStatus: StorageStatus = cleared
      ? this.snapshot.storageStatus === 'unavailable'
        ? 'unavailable'
        : 'ready'
      : this.snapshot.storageStatus;
    this.commit(
      {
        persisted,
        storageStatus,
        lastError: null,
      },
      { persist: false },
    );
    if (storageStatus !== 'unavailable') {
      this.persist();
    }
  }
}

function bootstrapCore(): AppStoreCore {
  const result = loadPersistedState();
  if (result.status === 'ready' && result.state) {
    return new AppStoreCore({
      persisted: result.state,
      storageStatus: 'ready',
      lastError: null,
    });
  }
  if (result.status === 'corrupted') {
    return new AppStoreCore({
      persisted: makeDefaultPersistedState(),
      storageStatus: 'corrupted',
      lastError: result.reason ?? 'persisted state was corrupted',
    });
  }
  return new AppStoreCore({
    persisted: makeDefaultPersistedState(),
    storageStatus: 'unavailable',
    lastError: result.reason ?? 'localStorage is not available',
  });
}

function buildRuntimeState(snapshot: StoreSnapshot): AppRuntimeState {
  return {
    ...snapshot.persisted,
    storageStatus: snapshot.storageStatus,
    lastError: snapshot.lastError,
    itemCount: snapshot.persisted.chips.length,
  };
}

function createAppShell(core: AppStoreCore): AppShell {
  return {
    getActiveSurface: () => core.getSnapshot().persisted.activeSurface,
    getActivePanel: () => core.getSnapshot().persisted.activePanel,
    getSelectedChipId: () => core.getSnapshot().persisted.selectedChipId,
    getStorageStatus: () => core.getSnapshot().storageStatus,
    getLastError: () => core.getSnapshot().lastError,
    getItemCount: () => core.getSnapshot().persisted.chips.length,
    getPreferences: () => core.getSnapshot().persisted.preferences,
    getChips: () => core.getSnapshot().persisted.chips,
    setActiveSurface: (surface) => core.setActiveSurface(surface),
    setActivePanel: (panel) => core.setActivePanel(panel),
    selectChip: (chipId) => core.selectChip(chipId),
    setPreferences: (prefs) => core.setPreferences(prefs),
    upsertChip: (chip) => core.upsertChip(chip),
    removeChip: (chipId) => core.removeChip(chipId),
    resetStorage: () => core.resetStorage(),
  };
}

const AppStoreContext = createContext<AppStoreCore | null>(null);

export interface AppStoreProviderProps {
  children: ReactNode;
}

/**
 * Wraps the application and exposes the store to descendant components and to
 * `window.app`. Mounting the provider runs `ACT_APP_STATE_BOOTSTRAP`, which
 * loads persisted state (or surfaces a recoverable error), then installs the
 * imperative shell on the global window so sibling stories and tests can
 * drive navigation and persistence without rendering the React tree.
 */
export function AppStoreProvider({ children }: AppStoreProviderProps): JSX.Element {
  const coreRef = useRef<AppStoreCore | null>(null);
  if (coreRef.current === null) {
    coreRef.current = bootstrapCore();
  }
  const core = coreRef.current;
  const shell = useMemo(() => createAppShell(core), [core]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const previous = window.app;
    window.app = shell;
    return () => {
      if (window.app === shell) {
        if (previous === undefined) {
          delete window.app;
        } else {
          window.app = previous;
        }
      }
    };
  }, [shell]);

  return <AppStoreContext.Provider value={core}>{children}</AppStoreContext.Provider>;
}

function useStoreCore(): AppStoreCore {
  const core = useContext(AppStoreContext);
  if (core === null) {
    throw new Error('useAppState must be used inside an <AppStoreProvider>.');
  }
  return core;
}

/**
 * Reactive selector hook for React components. Components pass a selector
 * that derives a value from the runtime state; the component re-renders when
 * the selected value changes.
 */
export function useAppState<T>(selector: (state: AppRuntimeState) => T): T {
  const core = useStoreCore();
  return useSyncExternalStore(
    (callback) => core.subscribe(callback),
    () => selector(buildRuntimeState(core.getSnapshot())),
    () => selector(buildRuntimeState(core.getSnapshot())),
  );
}

/**
 * Returns the live imperative shell bound to the current provider instance.
 * Useful for event handlers that need to invoke navigation or persistence
 * actions without going through `useAppState`.
 */
export function useAppShell(): AppShell {
  const core = useStoreCore();
  return useMemo(() => createAppShell(core), [core]);
}

/**
 * Test-only entry point. Builds a fresh shell from a freshly bootstrapped
 * core without mounting a provider. Useful for headless tests; production
 * code should rely on `<AppStoreProvider>` + `useAppState` / `useAppShell`.
 */
export function createStandaloneAppShell(): AppShell {
  return createAppShell(bootstrapCore());
}