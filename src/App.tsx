import { useMemo } from 'react';
import {
  ShortEditorCompactOnePageTaskChipUtility,
  ShortOperationsCompactOnePageTaskChipUtility,
} from './screens';
import {
  AppStoreProvider,
  useAppShell,
  useAppState,
} from './features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import type { SurfaceId } from './features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';
import { actCreateRecord } from './features/surf-short-operations/act_create_record';
import { actRetryLoad } from './features/surf-short-operations/act_retry_load';
import { actSelectRecord } from './features/surf-short-operations/act_select_record';
import { actCancelEdit } from './features/surf-short-editor/act_cancel_edit';
import { actSaveRecord } from './features/surf-short-editor/act_save_record';

/**
 * Renders the surface that matches the active surface id. Sibling stories
 * extend this switch to claim their own surface ids without touching the
 * shell, the store, or the persistence adapter. Surfaces not yet claimed by
 * a sibling story simply render nothing - the shell stays mounted so
 * `window.app` keeps working, but no stale or placeholder UI appears.
 */
function renderSurface(surface: SurfaceId): JSX.Element | null {
  switch (surface) {
    case 'SURF_SHORT_OPERATIONS':
      return <ShortOperationsCompactOnePageTaskChipUtility />;
    case 'SURF_SHORT_EDITOR':
      return <ShortEditorCompactOnePageTaskChipUtility />;
    default:
      return null;
  }
}

function AppShell(): JSX.Element {
  const activeSurface = useAppState((state) => state.activeSurface);
  const shell = useAppShell();

  /**
   * Action adapters for the Short Operations screen. Each adapter is bound
   * to the live app shell so navigation, selection, and persistence stay
   * synchronized with the shared store. Unowned actions stay minimal so
   * the screen still renders without crashing.
   */
  const operationsActions = useMemo(
    () =>
      ({
        'settings-1': () => shell.setActiveSurface('SURF_SETTINGS_AND_PREFERENCES'),
        'help-2': () => {
          /* help overlay owned by a sibling story; keep no-op here */
        },
        'new-task-3': () => actCreateRecord(),
        'retry-4': () => actRetryLoad(),
        'filter-5': () => {
          /* filter UI owned by a sibling story */
        },
        'edit-6': () => actSelectRecord(0),
        'edit-7': () => actSelectRecord(1),
        'edit-8': () => actSelectRecord(2),
        'close-9': () => {
          /* preview close owned by a sibling story */
        },
        'pause-10': () => {
          /* pause control owned by a sibling story */
        },
        'terminate-11': () => {
          /* terminate control owned by a sibling story */
        },
        'active-1': () => shell.setActivePanel('PANEL_ACTIVE'),
        'done-2': () => shell.setActivePanel('PANEL_DONE'),
        'archive-3': () => shell.setActivePanel('PANEL_ARCHIVE'),
        'clear-cache-4': () => shell.resetStorage(),
        'export-json-5': () => {
          /* export json owned by a sibling story */
        },
      }) satisfies Partial<
        Record<
          import('./screens').ShortOperationsCompactOnePageTaskChipUtilityActionId,
          () => void
        >
      >,
    [shell],
  );

  /**
   * Action adapters for the Short Editor screen. Save/Cancel drive the
   * editor draft lifecycle owned by this story; the rest stay minimal so
   * the editor renders without crashing.
   */
  const editorActions = useMemo(
    () =>
      ({
        'settings-1': () => shell.setActiveSurface('SURF_SETTINGS_AND_PREFERENCES'),
        'help-2': () => {
          /* help overlay owned by a sibling story */
        },
        'new-task-3': () => actCreateRecord(),
        'close-4': () => actCancelEdit(),
        'cancel-5': () => actCancelEdit(),
        'save-chip-6': () => actSaveRecord(),
        'active-1': () => shell.setActivePanel('PANEL_ACTIVE'),
        'done-2': () => shell.setActivePanel('PANEL_DONE'),
        'archive-3': () => shell.setActivePanel('PANEL_ARCHIVE'),
        'clear-cache-4': () => shell.resetStorage(),
        'export-json-5': () => {
          /* export json owned by a sibling story */
        },
      }) satisfies Partial<
        Record<import('./screens').ShortEditorCompactOnePageTaskChipUtilityActionId, () => void>
      >,
    [shell],
  );

  return (
    <div
      data-setfarm-root="compact-one-page-task-chip-utility"
      data-testid="setfarm-app-root"
      className="relative flex min-h-screen w-full overflow-hidden bg-background text-on-background"
    >
      {activeSurface === 'SURF_SHORT_EDITOR' ? (
        <ShortEditorCompactOnePageTaskChipUtility actions={editorActions} />
      ) : activeSurface === 'SURF_SHORT_OPERATIONS' ? (
        <ShortOperationsCompactOnePageTaskChipUtility actions={operationsActions} />
      ) : (
        renderSurface(activeSurface)
      )}
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <AppStoreProvider>
      <AppShell />
    </AppStoreProvider>
  );
}
