/**
 * ACT_CANCEL_EDIT
 *
 * Wired to the Short Editor "Cancel" and "Close" buttons. Discards the
 * current draft (when it's a brand-new empty chip) and routes back to
 * Short Operations without committing edits to the shared store.
 *
 * Existing chips are preserved on cancel - only empty drafts are removed,
 * so the user can dismiss the editor without losing real work.
 */

import { createStandaloneAppShell } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import type { TaskChip } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

export interface CancelEditResult {
  discarded: boolean;
  removedChipId: string | null;
  operationsSurface: 'SURF_SHORT_OPERATIONS';
}

function isEmptyDraft(chip: TaskChip): boolean {
  return chip.id.startsWith('chip-draft-') && chip.title === 'Untitled chip' && chip.description === '';
}

/**
 * Decide whether the currently-selected chip should be removed on cancel.
 * Only brand-new, untouched drafts are discarded so real edits survive.
 */
export function shouldDiscardDraft(chip: TaskChip | null): boolean {
  if (!chip) return false;
  return isEmptyDraft(chip);
}

/**
 * Cancel the editor. Discards empty drafts, clears the selection, and
 * routes back to Short Operations. Falls back to the standalone shell so
 * tests still get a deterministic result.
 */
export function actCancelEdit(): CancelEditResult {
  const shell =
    typeof window !== 'undefined' && window.app
      ? window.app
      : createStandaloneAppShell();
  const selectedId = shell.getSelectedChipId();
  const chips = shell.getChips();
  const selected = selectedId
    ? chips.find((chip) => chip.id === selectedId) ?? null
    : null;
  let removedChipId: string | null = null;
  if (shouldDiscardDraft(selected)) {
    shell.removeChip(selected!.id);
    removedChipId = selected!.id;
  }
  shell.selectChip(null);
  shell.setActiveSurface('SURF_SHORT_OPERATIONS');
  return {
    discarded: removedChipId !== null,
    removedChipId,
    operationsSurface: 'SURF_SHORT_OPERATIONS',
  };
}
