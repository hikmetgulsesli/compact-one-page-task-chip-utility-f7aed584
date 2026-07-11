/**
 * ACT_CREATE_RECORD
 *
 * Wired to the Short Operations "New Task" primary button. Creates a fresh
 * chip draft, persists it through the shared app shell, and routes the
 * user to the Short Editor so they can fill in the details. Keeps the
 * draft lifecycle owned by this story; the editor screen reads back the
 * selected chip id from the same store.
 */

import { createStandaloneAppShell } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import type { TaskChip } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

export interface CreateRecordResult {
  chip: TaskChip;
  selectedChipId: string;
  editorSurface: 'SURF_SHORT_EDITOR';
}

let draftCounter = 0;
function nextDraftId(): string {
  draftCounter += 1;
  return `chip-draft-${Date.now().toString(36)}-${draftCounter}`;
}

/**
 * Build a brand new chip draft using the active panel as the default
 * status. Falls back to the panel default when the shell is unreachable
 * (headless tests / SSR hosts).
 */
export function buildNewChipDraft(now: Date = new Date()): TaskChip {
  const timestamp = now.toISOString();
  return {
    id: nextDraftId(),
    title: 'Untitled chip',
    description: '',
    status: 'active',
    priority: 'normal',
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

/**
 * Persist the new chip through the live app shell, select it, and route
 * to the Short Editor so the user can edit it. Uses the standalone shell
 * when `window.app` is not mounted so callers in tests still get a valid
 * `TaskChip` payload back.
 */
export function actCreateRecord(): CreateRecordResult {
  const chip = buildNewChipDraft();
  const shell =
    typeof window !== 'undefined' && window.app
      ? window.app
      : createStandaloneAppShell();
  shell.upsertChip(chip);
  shell.selectChip(chip.id);
  shell.setActiveSurface('SURF_SHORT_EDITOR');
  return {
    chip,
    selectedChipId: chip.id,
    editorSurface: 'SURF_SHORT_EDITOR',
  };
}
