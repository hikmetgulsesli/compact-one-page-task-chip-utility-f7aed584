/**
 * Fixture data for the Compact One Page Task Chip Utility.
 *
 * The fixture module provides deterministic seed data for tests, story
 * scaffolding, and integration smoke checks. It must not reach into React or
 * the runtime store - it only constructs plain data structures that match the
 * domain types declared in the feature module.
 */

import {
  AppPersistedState,
  PanelId,
  SurfaceId,
  TaskChip,
} from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';
import {
  CURRENT_SCHEMA_VERSION,
  DEFAULT_PREFERENCES,
  makeDefaultPersistedState,
} from '../features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.repo';

const FIXTURE_TIMESTAMP = '2026-07-11T00:00:00.000Z';

export const SAMPLE_CHIPS: ReadonlyArray<TaskChip> = [
  {
    id: 'chip-fixture-active-review',
    title: 'Review Q3 marketing plan',
    description:
      'Final review of the Q3 marketing initiatives and budget allocation before the steering committee.',
    status: 'active',
    priority: 'high',
    createdAt: FIXTURE_TIMESTAMP,
    updatedAt: FIXTURE_TIMESTAMP,
  },
  {
    id: 'chip-fixture-active-refactor',
    title: 'Refactor shared utilities',
    description: 'Break up the growing helpers module into focused utility files.',
    status: 'active',
    priority: 'normal',
    createdAt: FIXTURE_TIMESTAMP,
    updatedAt: FIXTURE_TIMESTAMP,
  },
  {
    id: 'chip-fixture-done-announcement',
    title: 'Draft launch announcement',
    description: 'Write the launch announcement for the new task chip utility.',
    status: 'done',
    priority: 'normal',
    createdAt: FIXTURE_TIMESTAMP,
    updatedAt: FIXTURE_TIMESTAMP,
  },
  {
    id: 'chip-fixture-archived-research',
    title: 'Research competitor offerings',
    description: 'Compile the latest competitor landscape for the chip utility market.',
    status: 'archived',
    priority: 'low',
    createdAt: FIXTURE_TIMESTAMP,
    updatedAt: FIXTURE_TIMESTAMP,
  },
];

export interface FixtureOverrides {
  activeSurface?: SurfaceId;
  activePanel?: PanelId;
  selectedChipId?: string | null;
  chips?: ReadonlyArray<TaskChip>;
  preferences?: AppPersistedState['preferences'];
}

/**
 * Build a deterministic persisted-state fixture. Useful for unit tests that
 * need to seed the store without going through localStorage.
 */
export function makeFixturePersistedState(
  overrides: FixtureOverrides = {},
): AppPersistedState {
  const base = makeDefaultPersistedState();
  return {
    ...base,
    schemaVersion: CURRENT_SCHEMA_VERSION,
    activeSurface: overrides.activeSurface ?? base.activeSurface,
    activePanel: overrides.activePanel ?? base.activePanel,
    selectedChipId:
      overrides.selectedChipId !== undefined ? overrides.selectedChipId : base.selectedChipId,
    preferences: {
      ...DEFAULT_PREFERENCES,
      ...(overrides.preferences ?? {}),
    },
    chips: overrides.chips ? [...overrides.chips] : [...SAMPLE_CHIPS],
  };
}