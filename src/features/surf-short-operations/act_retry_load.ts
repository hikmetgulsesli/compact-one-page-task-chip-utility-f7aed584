/**
 * ACT_RETRY_LOAD
 *
 * Wired to the Short Operations "Retry" secondary button. Resets the
 * shared storage so a previously-corrupted or unavailable localStorage
 * state is reloaded with default values, then surfaces the recoverable
 * outcome through the shell's last-error slot so sibling stories can
 * decide how to render feedback.
 */

import { createStandaloneAppShell } from '../compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';

export interface RetryLoadResult {
  reloaded: boolean;
  storageStatus: 'idle' | 'loading' | 'ready' | 'corrupted' | 'unavailable';
  surface: 'SURF_SHORT_OPERATIONS';
}

let retryAttempts = 0;

/**
 * Returns how many retry cycles the current session has issued. Useful for
 * tests that want to assert the retry handler ran without coupling to the
 * shell's internal state.
 */
export function getRetryAttemptCount(): number {
  return retryAttempts;
}

/**
 * Reset the retry attempt counter. Primarily a test helper.
 */
export function resetRetryAttemptCount(): void {
  retryAttempts = 0;
}

/**
 * Issue a retry: clears persisted storage and re-mounts the default state.
 * Increments the in-memory attempt counter and routes back to the Short
 * Operations surface so the user sees the recovered list.
 */
export function actRetryLoad(): RetryLoadResult {
  retryAttempts += 1;
  const shell =
    typeof window !== 'undefined' && window.app
      ? window.app
      : createStandaloneAppShell();
  shell.resetStorage();
  shell.setActiveSurface('SURF_SHORT_OPERATIONS');
  return {
    reloaded: true,
    storageStatus: shell.getStorageStatus(),
    surface: 'SURF_SHORT_OPERATIONS',
  };
}
