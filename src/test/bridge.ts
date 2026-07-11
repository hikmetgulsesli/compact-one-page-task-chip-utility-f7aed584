/**
 * Test bridge for the Compact One Page Task Chip Utility.
 *
 * Tests rely on `window.app` as the stable public API. This bridge provides:
 *   - A typed `getAppShell()` accessor that asserts the shell is mounted.
 *   - Helpers for installing a shell outside of React (e.g. integration tests
 *     that drive navigation without rendering the full provider).
 *   - Reset helpers that wipe `window.app` between tests so suites stay
 *     hermetic even when `localStorage` leaks from a previous case.
 *
 * The bridge intentionally re-exports the domain types so test files can
 * import the full surface vocabulary from a single module path.
 */

import {
  AppShell,
  PanelId,
  SurfaceId,
  TaskChip,
  UserPreferences,
  StorageStatus,
} from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

export type {
  AppShell,
  PanelId,
  SurfaceId,
  TaskChip,
  UserPreferences,
  StorageStatus,
};

export interface AppBridgeState {
  activeSurface: SurfaceId;
  activePanel: PanelId;
  selectedChipId: string | null;
  itemCount: number;
  storageStatus: StorageStatus;
  lastError: string | null;
  preferences: UserPreferences;
  chips: TaskChip[];
}

/**
 * Returns the currently mounted app shell. Throws if no provider has
 * rendered yet, so tests fail loudly instead of silently passing against a
 * missing shell.
 */
export function getAppShell(): AppShell {
  if (typeof window === 'undefined') {
    throw new Error('getAppShell requires a browser-like environment with a window object.');
  }
  const shell = window.app;
  if (!shell) {
    throw new Error(
      'window.app is not initialized. Render <App /> (or any tree wrapped in <AppStoreProvider>) first.',
    );
  }
  return shell;
}

/**
 * Convenience accessor: returns the shell if mounted, or `null` when no
 * provider has rendered yet. Useful for assertions that explicitly want to
 * verify the absence of a shell (e.g. after `uninstallAppShell`).
 */
export function getAppShellOrNull(): AppShell | null {
  if (typeof window === 'undefined') return null;
  return window.app ?? null;
}

/**
 * Installs the given shell on `window.app` and returns a teardown function
 * that removes only the shell that was installed. Useful for tests that want
 * to drive the shell directly without rendering the provider.
 */
export function installAppShell(shell: AppShell): () => void {
  if (typeof window === 'undefined') {
    throw new Error('installAppShell requires a browser-like environment with a window object.');
  }
  const previous = window.app;
  window.app = shell;
  return () => {
    if (window.app === shell) {
      if (previous === undefined) {
        window.app = undefined;
      } else {
        window.app = previous;
      }
    }
  };
}

/**
 * Removes the current shell from `window.app`. Safe to call when no shell
 * is mounted.
 */
export function uninstallAppShell(): void {
  if (typeof window === 'undefined') return;
  window.app = undefined;
}

/**
 * Snapshots the public shell state into a single plain object so tests can
 * assert against a stable shape without chaining multiple getters.
 */
export function snapshotAppShell(shell: AppShell = getAppShell()): AppBridgeState {
  return {
    activeSurface: shell.getActiveSurface(),
    activePanel: shell.getActivePanel(),
    selectedChipId: shell.getSelectedChipId(),
    itemCount: shell.getItemCount(),
    storageStatus: shell.getStorageStatus(),
    lastError: shell.getLastError(),
    preferences: shell.getPreferences(),
    chips: shell.getChips(),
  };
}