import { ShortOperationsCompactOnePageTaskChipUtility } from './screens';
import {
  AppStoreProvider,
  useAppState,
} from './features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.store';
import type { SurfaceId } from './features/compact-one-page-task-chip-utility/compact-one-page-task-chip-utility.types';

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
    default:
      return null;
  }
}

function AppShell(): JSX.Element {
  const activeSurface = useAppState((state) => state.activeSurface);
  return (
    <div
      data-setfarm-root="compact-one-page-task-chip-utility"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-background text-on-background"
    >
      {renderSurface(activeSurface)}
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