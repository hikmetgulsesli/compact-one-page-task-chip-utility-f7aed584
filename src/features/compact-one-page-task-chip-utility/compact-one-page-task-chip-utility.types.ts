/**
 * Domain types for the Compact One Page Task Chip Utility.
 *
 * These types describe the shared app shell state, the persistence payload,
 * and the navigation/action vocabulary used by sibling stories. They are
 * intentionally framework-agnostic so the store, repo, fixture, and test
 * bridge can all import them without pulling in React.
 */

export const SURFACE_IDS = [
  'SURF_SHORT_OPERATIONS',
  'SURF_SHORT_EDITOR',
  'SURF_SETTINGS_AND_PREFERENCES',
  'SURF_EMPTY_AND_ERROR_RECOVERY',
] as const;

export type SurfaceId = (typeof SURFACE_IDS)[number];

export const PANEL_IDS = [
  'PANEL_ACTIVE',
  'PANEL_DONE',
  'PANEL_ARCHIVE',
] as const;

export type PanelId = (typeof PANEL_IDS)[number];

export type StorageStatus = 'idle' | 'loading' | 'ready' | 'corrupted' | 'unavailable';

export type ChipStatus = 'active' | 'done' | 'archived';

export interface TaskChip {
  id: string;
  title: string;
  description: string;
  status: ChipStatus;
  priority: 'low' | 'normal' | 'high';
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  defaultView: PanelId;
  showCompletedByDefault: boolean;
  density: 'comfortable' | 'compact';
  theme: 'light' | 'dark' | 'system';
}

export interface AppPersistedState {
  schemaVersion: 1;
  activeSurface: SurfaceId;
  activePanel: PanelId;
  selectedChipId: string | null;
  preferences: UserPreferences;
  chips: TaskChip[];
}

export interface AppRuntimeState extends AppPersistedState {
  storageStatus: StorageStatus;
  lastError: string | null;
  itemCount: number;
}

export interface AppShell {
  getActiveSurface(): SurfaceId;
  getActivePanel(): PanelId;
  getSelectedChipId(): string | null;
  getStorageStatus(): StorageStatus;
  getLastError(): string | null;
  getItemCount(): number;
  getPreferences(): UserPreferences;
  getChips(): TaskChip[];
  setActiveSurface(surface: SurfaceId): void;
  setActivePanel(panel: PanelId): void;
  selectChip(chipId: string | null): void;
  setPreferences(prefs: Partial<UserPreferences>): void;
  upsertChip(chip: TaskChip): void;
  removeChip(chipId: string): void;
  resetStorage(): void;
}

declare global {
  interface Window {
    app?: AppShell;
  }
}
