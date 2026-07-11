/**
 * ACT_SELECT_RECORD
 *
 * Wired to the Short Operations "edit" buttons (`edit-6`, `edit-7`,
 * `edit-8`). Resolves the chip at the requested index from the live
 * collection, selects it, and routes to the Short Editor. Falls back to
 * the standalone shell so headless tests still receive a stable result.
 */

import { createStandaloneAppShell } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import type { TaskChip } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

export interface SelectRecordResult {
  index: number;
  selectedChipId: string | null;
  editorSurface: 'SURF_SHORT_EDITOR';
  chip: TaskChip | null;
}

/**
 * Resolve a chip by index in the live collection. Out-of-range indices
 * return `null` so callers can render an empty state without crashing.
 */
export function resolveChipByIndex(
  chips: ReadonlyArray<TaskChip>,
  index: number,
): TaskChip | null {
  if (!Number.isInteger(index) || index < 0 || index >= chips.length) return null;
  return chips[index] ?? null;
}

/**
 * Select the chip at `index` and route to the Short Editor. The selection
 * is persisted through the shared app shell so reloading the editor keeps
 * the draft context.
 */
export function actSelectRecord(index: number): SelectRecordResult {
  const shell =
    typeof window !== 'undefined' && window.app
      ? window.app
      : createStandaloneAppShell();
  const chips = shell.getChips();
  const chip = resolveChipByIndex(chips, index);
  if (chip) {
    shell.selectChip(chip.id);
  } else {
    shell.selectChip(null);
  }
  shell.setActiveSurface('SURF_SHORT_EDITOR');
  return {
    index,
    selectedChipId: chip?.id ?? null,
    editorSurface: 'SURF_SHORT_EDITOR',
    chip,
  };
}
