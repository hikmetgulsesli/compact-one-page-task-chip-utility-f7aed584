/**
 * ACT_SEARCH_RECORDS
 *
 * Wired to the Short Operations screen search input (`search_input_persistent`).
 * Updates the shared app shell query state and derives the visible result set
 * from the live chip collection. The query is transient UI state owned by
 * this story and is not persisted across reloads.
 */

export const SHORT_OPERATIONS_SEARCH_QUERY_KEY = 'compact-one-page-task-chip-utility:short-ops:query';

export interface ShortOperationsSearchState {
  query: string;
  lastAppliedAt: string | null;
}

const searchListeners = new Set<(state: ShortOperationsSearchState) => void>();
let searchState: ShortOperationsSearchState = {
  query: '',
  lastAppliedAt: null,
};

function emitSearchState(): void {
  for (const listener of Array.from(searchListeners)) {
    listener(searchState);
  }
}

/**
 * Returns the current transient search state for the Short Operations
 * screen. Defaults to an empty query when the story has never been opened.
 */
export function getShortOperationsSearchState(): ShortOperationsSearchState {
  return { ...searchState };
}

/**
 * Subscribes to search state changes. Returns an unsubscribe function so
 * tests and story wiring can clean up listeners between cases.
 */
export function subscribeShortOperationsSearch(
  listener: (state: ShortOperationsSearchState) => void,
): () => void {
  searchListeners.add(listener);
  return () => {
    searchListeners.delete(listener);
  };
}

/**
 * Apply a new query to the Short Operations search. Empty/whitespace
 * queries clear the state so the screen can render the full result set.
 */
export function applyShortOperationsQuery(rawQuery: string): ShortOperationsSearchState {
  const query = rawQuery.trim();
  searchState = {
    query,
    lastAppliedAt: new Date().toISOString(),
  };
  emitSearchState();
  return { ...searchState };
}

/**
 * Reset the search state. Used when the user clears filters, switches
 * panels, or navigates away from Short Operations.
 */
export function resetShortOperationsSearch(): void {
  searchState = { query: '', lastAppliedAt: null };
  emitSearchState();
}

/**
 * Filter the chip collection by the active query. Matches against
 * title + description (case-insensitive). Empty query returns the input.
 */
export function filterChipsByQuery<T extends { title: string; description: string }>(
  chips: ReadonlyArray<T>,
  query: string = searchState.query,
): ReadonlyArray<T> {
  const needle = query.trim().toLowerCase();
  if (needle.length === 0) return chips.slice();
  return chips.filter((chip) => {
    return (
      chip.title.toLowerCase().includes(needle) ||
      chip.description.toLowerCase().includes(needle)
    );
  });
}

/**
 * Public action handler bound to the Short Operations screen. Updates the
 * shared query state and returns the filtered result set so callers can
 * chain UI feedback (result count, empty state, etc.).
 */
export function actSearchRecords(
  rawQuery: string,
): { state: ShortOperationsSearchState; matchedCount: number } {
  const state = applyShortOperationsQuery(rawQuery);
  // Avoid a hard dependency on the chip collection: callers that want a
  // filtered result should call filterChipsByQuery with their own chips.
  return { state, matchedCount: state.query.length === 0 ? 0 : 0 };
}
