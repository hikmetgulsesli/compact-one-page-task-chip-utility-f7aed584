/**
 * ACT_SAVE_RECORD
 *
 * Wired to the Short Editor "Save Chip" submit button. Persists the
 * currently-selected chip through the shared app shell, bumps its
 * `updatedAt` timestamp, and routes back to the Short Operations screen
 * so the user sees the saved chip in the list.
 *
 * The editor draft values themselves are derived from the live shell state
 * (selected chip) so this handler stays a thin coordinator. Empty chips
 * are rejected with a `false` result so callers can render an inline
 * validation error without losing the draft.
 */

import { createStandaloneAppShell } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import type { TaskChip } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

export interface SaveRecordInput {
  title?: string;
  description?: string;
  priority?: TaskChip['priority'];
  status?: TaskChip['status'];
}

export interface SaveRecordResult {
  saved: boolean;
  chip: TaskChip | null;
  operationsSurface: 'SURF_SHORT_OPERATIONS';
  validationError: string | null;
}

/**
 * Trim + validate a draft payload. Returns `null` when the payload is
 * missing or invalid, or a sanitized chip when ready to persist.
 */
export function sanitizeDraft(
  selected: TaskChip | null,
  input: SaveRecordInput,
): TaskChip | null {
  if (!selected) return null;
  const title = (input.title ?? selected.title).trim();
  if (title.length === 0) return null;
  return {
    ...selected,
    title,
    description: (input.description ?? selected.description).trim(),
    priority: input.priority ?? selected.priority,
    status: input.status ?? selected.status,
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Persist the editor draft. When no chip is selected or the draft fails
 * validation the result reports `saved: false` so callers can render
 * inline feedback.
 */
export function actSaveRecord(input: SaveRecordInput = {}): SaveRecordResult {
  const shell =
    typeof window !== 'undefined' && window.app
      ? window.app
      : createStandaloneAppShell();
  const selectedId = shell.getSelectedChipId();
  const chips = shell.getChips();
  const selected = selectedId
    ? chips.find((chip) => chip.id === selectedId) ?? null
    : null;
  const sanitized = sanitizeDraft(selected, input);
  if (!sanitized) {
    return {
      saved: false,
      chip: selected,
      operationsSurface: 'SURF_SHORT_OPERATIONS',
      validationError: selected
        ? 'Chip title cannot be empty.'
        : 'No chip selected to save.',
    };
  }
  shell.upsertChip(sanitized);
  shell.setActiveSurface('SURF_SHORT_OPERATIONS');
  return {
    saved: true,
    chip: sanitized,
    operationsSurface: 'SURF_SHORT_OPERATIONS',
    validationError: null,
  };
}
