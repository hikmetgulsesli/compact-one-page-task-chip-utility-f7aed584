// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Short Operations - Compact One Page Task Chip Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, CheckCircle2, CircleHelp, ClipboardList, Clock, LayoutDashboard, ListFilter, Pencil, Plus, RefreshCw, Search, Settings, X } from "lucide-react";


export type ShortOperationsCompactOnePageTaskChipUtilityActionId = "settings-1" | "help-2" | "new-task-3" | "retry-4" | "filter-5" | "edit-6" | "edit-7" | "edit-8" | "close-9" | "pause-10" | "terminate-11" | "active-1" | "done-2" | "archive-3" | "clear-cache-4" | "export-json-5";

export interface ShortOperationsCompactOnePageTaskChipUtilityProps {
  actions?: Partial<Record<ShortOperationsCompactOnePageTaskChipUtilityActionId, () => void>>;

}

export function ShortOperationsCompactOnePageTaskChipUtility({ actions }: ShortOperationsCompactOnePageTaskChipUtilityProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center h-14 px-md w-full transition-colors duration-200">
      <div className="flex items-center gap-md">
      <span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-inverse-primary">TaskChip</span>
      </div>
      <div className="flex-1 max-w-md mx-xl flex items-center relative">
      <Search className="absolute left-sm text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-low border-outline-variant rounded-DEFAULT focus:border-secondary focus:ring-1 focus:ring-secondary text-body-sm font-body-sm text-on-surface pl-8 py-1 placeholder:text-on-surface-variant" placeholder="Search operations..." type="text" />
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-xs text-on-surface-variant hover:bg-surface-container rounded-DEFAULT transition-colors" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant hover:bg-surface-container rounded-DEFAULT transition-colors" type="button" aria-label="Help" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant ml-sm cursor-pointer">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a person looking forward against a clean, light-mode background. Minimalist styling, bright even lighting, corporate modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-NLsFAx-AU3YoHf7gcXnNuQG_S-0c4bRhtvr5OfdNSNFJj-HkGhNVa1_C9Jg2-PU4kjGemA3hDxLNxQMA3Z5hXqae3VbONyfnChqiG5zmJVf9VL8GrDwp-5YjzcPzhaBs9RqLf3YgmUJoanyt-f_SNUHPotUeeuz8U9VIzzghWJ5j58SCMuB_POBDMgajIiUbtrc5Cqz24stdJIVbl6oJX-ShkwAgrNFFdhENMxtw2OYx5YyYFSvI-SDXrxG-bGy_UAHy6kW3C6M" />
      </div>
      </div>
      </nav>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-14 h-[calc(100vh-14px)] w-[240px] bg-surface-container-low border-r border-outline-variant flex flex-col py-md px-sm transition-colors duration-150 z-40 hidden md:flex">
      <div className="flex items-center gap-sm mb-lg px-xs">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary text-on-primary flex items-center justify-center">
      <LayoutDashboard className="text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-headline-sm-mobile text-headline-sm-mobile font-black text-on-surface">Task Manager</h2>
      <p className="font-label-xs text-label-xs text-on-surface-variant">Workflow v1.0</p>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded-DEFAULT flex items-center justify-center gap-xs mb-lg hover:bg-on-background transition-colors shadow-sm" type="button" data-action-id="new-task-3" onClick={actions?.["new-task-3"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" /> New Task
              </button>
      <nav className="flex-1 space-y-xs">
      <a className="flex items-center gap-sm px-sm py-sm rounded-r-DEFAULT bg-secondary-container/10 text-secondary font-bold border-l-[3px] border-secondary transition-colors duration-150" href="#" data-action-id="active-1" onClick={(event) => { event.preventDefault(); actions?.["active-1"]?.(); }}>
      <ClipboardList className="icon-fill" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Active</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-r-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150 border-l-[3px] border-transparent" href="#" data-action-id="done-2" onClick={(event) => { event.preventDefault(); actions?.["done-2"]?.(); }}>
      <CheckCircle2 aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Done</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-r-DEFAULT text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150 border-l-[3px] border-transparent" href="#" data-action-id="archive-3" onClick={(event) => { event.preventDefault(); actions?.["archive-3"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Archive</span>
      </a>
      </nav>
      </aside>
      {/* Main Content Area */}
      <main className="md:ml-[240px] pt-14 h-screen flex flex-col relative bg-surface-bright">
      {/* Action Bar & Metrics */}
      <header className="flex-none p-lg border-b border-outline-variant bg-surface-container-lowest">
      <div className="flex justify-between items-end mb-md">
      <div>
      <h1 className="font-headline-sm text-headline-sm text-on-surface">Active Operations</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Managing currently running task clusters.</p>
      </div>
      <div className="flex gap-sm">
      <button className="flex items-center gap-xs px-sm py-xs border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md bg-surface-container-lowest" type="button" data-action-id="retry-4" onClick={actions?.["retry-4"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" /> Retry
                          </button>
      <button className="flex items-center gap-xs px-sm py-xs border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md bg-surface-container-lowest" type="button" data-action-id="filter-5" onClick={actions?.["filter-5"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" /> Filter
                          </button>
      </div>
      </div>
      {/* Bento Metrics */}
      <div className="grid grid-cols-4 gap-md">
      <div className="border border-outline-variant p-sm rounded-DEFAULT bg-surface-container-lowest flex flex-col justify-center">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest">Total Tasks</span>
      <span className="font-headline-sm text-headline-sm text-on-surface mt-xs">1,204</span>
      </div>
      <div className="border border-outline-variant p-sm rounded-DEFAULT bg-surface-container-lowest flex flex-col justify-center">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest">Pending</span>
      <div className="flex items-center gap-xs mt-xs">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <span className="font-headline-sm text-headline-sm text-on-surface">342</span>
      </div>
      </div>
      <div className="border border-outline-variant p-sm rounded-DEFAULT bg-surface-container-lowest flex flex-col justify-center">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest">Completed</span>
      <div className="flex items-center gap-xs mt-xs">
      <div className="w-2 h-2 rounded-full bg-on-tertiary-container"></div>
      <span className="font-headline-sm text-headline-sm text-on-surface">850</span>
      </div>
      </div>
      <div className="border border-outline-variant p-sm rounded-DEFAULT bg-surface-container-lowest flex flex-col justify-center">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest">Failure Rate</span>
      <div className="flex items-center gap-xs mt-xs">
      <div className="w-2 h-2 rounded-full bg-error"></div>
      <span className="font-headline-sm text-headline-sm text-on-surface">1.2%</span>
      </div>
      </div>
      </div>
      </header>
      {/* Split View: List and Preview */}
      <div className="flex-1 flex overflow-hidden">
      {/* Task List (Left Pane) */}
      <div className="flex-1 overflow-y-auto border-r border-outline-variant bg-surface p-md space-y-xs">
      {/* Task Chip 1 (Selected) */}
      <div className="group relative flex items-center border border-outline-variant rounded-DEFAULT bg-surface-container-lowest cursor-pointer hover:shadow-sm transition-shadow">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary rounded-l-DEFAULT"></div>
      <div className="flex-1 p-sm flex items-center justify-between ml-xs">
      <div className="flex items-center gap-md">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Data Migration - Node A</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">OP-8921 • Initiated 10:42 AM</span>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <span className="px-xs py-[2px] bg-surface-container-highest text-secondary font-label-xs text-label-xs rounded-DEFAULT">ACTIVE</span>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity p-xs" type="button" aria-label="Edit" data-action-id="edit-6" onClick={actions?.["edit-6"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      {/* Task Chip 2 */}
      <div className="group relative flex items-center border border-outline-variant rounded-DEFAULT bg-surface-container-lowest cursor-pointer hover:shadow-sm transition-shadow">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-outline-variant rounded-l-DEFAULT"></div>
      <div className="flex-1 p-sm flex items-center justify-between ml-xs">
      <div className="flex items-center gap-md">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Cache Invalidation Cluster</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">OP-8920 • Initiated 09:15 AM</span>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <span className="px-xs py-[2px] bg-surface-container-highest text-on-surface-variant font-label-xs text-label-xs rounded-DEFAULT">QUEUED</span>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity p-xs" type="button" aria-label="Edit" data-action-id="edit-7" onClick={actions?.["edit-7"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      {/* Task Chip 3 */}
      <div className="group relative flex items-center border border-outline-variant rounded-DEFAULT bg-surface-container-lowest cursor-pointer hover:shadow-sm transition-shadow">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-on-tertiary-container rounded-l-DEFAULT"></div>
      <div className="flex-1 p-sm flex items-center justify-between ml-xs">
      <div className="flex items-center gap-md">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">User Analytics Sync</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">OP-8919 • Completed 08:30 AM</span>
      </div>
      </div>
      <div className="flex items-center gap-md">
      <span className="px-xs py-[2px] bg-inverse-on-surface text-on-tertiary-container font-label-xs text-label-xs rounded-DEFAULT">DONE</span>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-on-surface transition-opacity p-xs" type="button" aria-label="Edit" data-action-id="edit-8" onClick={actions?.["edit-8"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      {/* Preview Pane (Right Pane) */}
      <aside className="w-[320px] bg-surface-container-lowest overflow-y-auto flex flex-col hidden lg:flex">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
      <span className="font-label-md text-label-md text-on-surface">Operation Details</span>
      <button className="text-on-surface-variant hover:text-on-surface p-xs rounded-DEFAULT hover:bg-outline-variant/20 transition-colors" type="button" aria-label="Close" data-action-id="close-9" onClick={actions?.["close-9"]}>
      <X className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-md space-y-md">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Data Migration - Node A</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">ID: OP-8921</p>
      </div>
      <div className="flex items-center gap-sm">
      <span className="px-sm py-xs bg-surface-container-highest text-secondary font-label-xs text-label-xs rounded-DEFAULT">ACTIVE</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs"><Clock className="text-[14px]" aria-hidden={true} focusable="false" /> Running for 2h 15m</span>
      </div>
      <div className="border border-outline-variant rounded-DEFAULT overflow-hidden">
      <div className="bg-surface-container-low px-sm py-xs border-b border-outline-variant font-label-xs text-label-xs text-on-surface-variant uppercase">Properties</div>
      <div className="p-sm space-y-xs bg-surface-container-lowest">
      <div className="flex justify-between">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Priority</span>
      <span className="font-label-md text-label-md text-on-surface">High</span>
      </div>
      <div className="flex justify-between">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Assigned</span>
      <span className="font-label-md text-label-md text-on-surface">System Auto</span>
      </div>
      <div className="flex justify-between">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Target</span>
      <span className="font-label-md text-label-md text-on-surface font-mono">us-east-cluster-1</span>
      </div>
      </div>
      </div>
      <div className="border border-outline-variant rounded-DEFAULT p-sm bg-surface-container-lowest">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase mb-xs block">Live Log Output</span>
      <div className="font-mono text-[10px] text-on-surface-variant space-y-1 h-32 overflow-y-auto bg-surface p-xs rounded-DEFAULT border border-outline-variant">
      <p>[10:42:01] Initialization started...</p>
      <p>[10:42:05] Connecting to source db...</p>
      <p className="text-secondary">[10:42:10] Connection established. Reading records.</p>
      <p>[10:45:00] Chunk 1/50 processed.</p>
      <p>[10:50:22] Chunk 2/50 processed.</p>
      <p className="animate-pulse">_</p>
      </div>
      </div>
      </div>
      <div className="mt-auto p-md border-t border-outline-variant bg-surface-container-lowest flex gap-sm">
      <button className="flex-1 bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md py-sm rounded-DEFAULT hover:bg-outline-variant/20 transition-colors" type="button" data-action-id="pause-10" onClick={actions?.["pause-10"]}>Pause</button>
      <button className="flex-1 bg-error text-on-error font-label-md text-label-md py-sm rounded-DEFAULT hover:bg-on-error-container transition-colors" type="button" data-action-id="terminate-11" onClick={actions?.["terminate-11"]}>Terminate</button>
      </div>
      </aside>
      </div>
      </main>
      {/* Footer */}
      <footer className="fixed bottom-0 right-0 left-0 md:left-[240px] h-10 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between px-lg z-30 transition-colors">
      <span className="font-label-xs text-label-xs uppercase tracking-widest text-on-surface-variant">TaskChip Utility © 2024</span>
      <div className="flex gap-md">
      <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer hover:underline" href="#" data-action-id="clear-cache-4" onClick={(event) => { event.preventDefault(); actions?.["clear-cache-4"]?.(); }}>Clear Cache</a>
      <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer hover:underline" href="#" data-action-id="export-json-5" onClick={(event) => { event.preventDefault(); actions?.["export-json-5"]?.(); }}>Export JSON</a>
      </div>
      </footer>
    </>
  );
}
