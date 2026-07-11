/**
 * Persistence adapter for the Compact One Page Task Chip Utility.
 *
 * Loads and saves the persisted app state to localStorage. The repo owns:
 *   - serialization / deserialization
 *   - schema-version guards
 *   - corruption detection and recovery (returns `null` so the store can
 *     rebuild a clean state and surface recoverable feedback).
 *
 * The repo never throws into the caller; any failure becomes a `null` return
 * with a `lastError` reason. The store decides how to react (reset + show
 * recoverable feedback vs. mark storage as unavailable in non-browser hosts).
 */

import {
  AppPersistedState,
  ChipStatus,
  PanelId,
  SurfaceId,
  TaskChip,
  UserPreferences,
} from './compact-one-page-task-chip-utility.types';

export const STORAGE_KEY = 'compact-one-page-task-chip-utility:v1';
export const CURRENT_SCHEMA_VERSION = 1 as const;

const PANEL_SET: ReadonlySet<PanelId> = new Set<PanelId>(['PANEL_ACTIVE', 'PANEL_DONE', 'PANEL_ARCHIVE']);
const SURFACE_SET: ReadonlySet<SurfaceId> = new Set<SurfaceId>([
  'SURF_SHORT_OPERATIONS',
  'SURF_SHORT_EDITOR',
  'SURF_SETTINGS_AND_PREFERENCES',
  'SURF_EMPTY_AND_ERROR_RECOVERY',
]);
const STATUS_SET: ReadonlySet<ChipStatus> = new Set<ChipStatus>(['active', 'done', 'archived']);

export const DEFAULT_PREFERENCES: UserPreferences = {
  defaultView: 'PANEL_ACTIVE',
  showCompletedByDefault: false,
  density: 'comfortable',
  theme: 'light',
};

export function makeDefaultPersistedState(): AppPersistedState {
  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    activeSurface: 'SURF_SHORT_OPERATIONS',
    activePanel: 'PANEL_ACTIVE',
    selectedChipId: null,
    preferences: { ...DEFAULT_PREFERENCES },
    chips: [],
  };
}

let isStorageAvailableCache: boolean | null = null;
function isStorageAvailable(): boolean {
  if (isStorageAvailableCache !== null) return isStorageAvailableCache;
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      isStorageAvailableCache = false;
      return false;
    }
    const probe = '__compact_probe__';
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    isStorageAvailableCache = true;
    return true;
  } catch {
    isStorageAvailableCache = false;
    return false;
  }
}

function isUserPreferences(value: unknown): value is UserPreferences {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.defaultView === 'string' &&
    PANEL_SET.has(v.defaultView as PanelId) &&
    typeof v.showCompletedByDefault === 'boolean' &&
    (v.density === 'comfortable' || v.density === 'compact') &&
    (v.theme === 'light' || v.theme === 'dark' || v.theme === 'system')
  );
}

function isTaskChip(value: unknown): value is TaskChip {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.title === 'string' &&
    typeof v.description === 'string' &&
    typeof v.status === 'string' &&
    STATUS_SET.has(v.status as ChipStatus) &&
    (v.priority === 'low' || v.priority === 'normal' || v.priority === 'high') &&
    typeof v.createdAt === 'string' &&
    typeof v.updatedAt === 'string'
  );
}

function isPersistedState(value: unknown): value is AppPersistedState {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  if (v.schemaVersion !== CURRENT_SCHEMA_VERSION) return false;
  if (typeof v.activeSurface !== 'string' || !SURFACE_SET.has(v.activeSurface as SurfaceId)) return false;
  if (typeof v.activePanel !== 'string' || !PANEL_SET.has(v.activePanel as PanelId)) return false;
  if (v.selectedChipId !== null && typeof v.selectedChipId !== 'string') return false;
  if (!Array.isArray(v.chips)) return false;
  for (const chip of v.chips) {
    if (!isTaskChip(chip)) return false;
  }
  if (!isUserPreferences(v.preferences)) return false;
  return true;
}

export interface LoadResult {
  state: AppPersistedState | null;
  status: 'ready' | 'corrupted' | 'unavailable';
  reason?: string;
}

/**
 * Load persisted state from localStorage. Returns a normalized result so the
 * store can update storage status and lastError without re-parsing.
 */
export function loadPersistedState(): LoadResult {
  if (!isStorageAvailable()) {
    return { state: null, status: 'unavailable', reason: 'localStorage is not available' };
  }
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch (err) {
    return {
      state: null,
      status: 'corrupted',
      reason: `localStorage.getItem threw: ${(err as Error)?.message ?? String(err)}`,
    };
  }
  if (raw === null || raw === '') {
    return { state: null, status: 'ready' };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    return {
      state: null,
      status: 'corrupted',
      reason: `JSON.parse failed: ${(err as Error)?.message ?? String(err)}`,
    };
  }
  if (!isPersistedState(parsed)) {
    return {
      state: null,
      status: 'corrupted',
      reason: 'persisted payload failed schema validation',
    };
  }
  return { state: parsed, status: 'ready' };
}

/**
 * Persist the given state. Returns `true` on success, `false` if storage is
 * unavailable or the write throws (quota, private mode, etc).
 */
export function savePersistedState(state: AppPersistedState): boolean {
  if (!isStorageAvailable()) return false;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function clearPersistedState(): boolean {
  if (!isStorageAvailable()) return false;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
