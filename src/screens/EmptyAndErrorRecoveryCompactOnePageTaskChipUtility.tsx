// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - Compact One Page Task Chip Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeCheck, BadgeHelp, CheckCircle2, CircleHelp, ClipboardList, Filter, Plus, RefreshCw, Search, Settings, TriangleAlert, X } from "lucide-react";


export type EmptyAndErrorRecoveryCompactOnePageTaskChipUtilityActionId = "settings-1" | "help-2" | "new-task-3" | "create-your-first-chip-4" | "clear-filters-5" | "retry-connection-6" | "create-new-7" | "active-1" | "done-2" | "archive-3" | "clear-cache-4" | "export-json-5";

export interface EmptyAndErrorRecoveryCompactOnePageTaskChipUtilityProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryCompactOnePageTaskChipUtilityActionId, () => void>>;

}

export function EmptyAndErrorRecoveryCompactOnePageTaskChipUtility({ actions }: EmptyAndErrorRecoveryCompactOnePageTaskChipUtilityProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface-container-lowest dark:bg-inverse-surface fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline flex justify-between items-center h-14 px-md">
      <div className="flex items-center gap-sm">
      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant">
      <BadgeCheck className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <span className="text-headline-sm font-headline-sm font-bold text-primary dark:text-inverse-primary">TaskChip</span>
      </div>
      <div className="hidden md:flex items-center gap-lg">
      {/* Active is mapped to none since this is an error state, but let's assume we arrived from 'Active' context for nav structural completeness if needed, or suppress. The JSON specifies a TopNavBar with search on left, trailing icon actions. Let's fulfill JSON structure without enforcing an active tab if it's not a tab bar. The TopNavBar JSON didn't define tabs, SideNavBar did. */}
      <div className="relative">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-outline" aria-hidden={true} focusable="false" />
      <input className="pl-xl pr-sm py-xs bg-surface-container-low border border-outline-variant rounded-full text-body-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none w-64 transition-colors" placeholder="Search chips..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-colors duration-200" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-colors duration-200" type="button" aria-label="Help" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full ml-sm border border-outline-variant overflow-hidden cursor-pointer">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A small circular avatar showing a generic, minimalist, modern user profile placeholder icon in light gray on a white background, suitable for a professional corporate application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD63UXvk0AgkHJRgcUeDDXokZThjypeu07bhkg6WIGDr_45jCV45AUARHPCsMvSo3c5oztvOynlmojLdUO1dseL5fWpqHWs0BdoxCOxLX-QNSU23RnUESlmaA3OZlB9rZdnl5wgDRU-Fx9h13u0_TmWd3lBitXucTvyqBpRJzqgg5cBWlxVEraNIR2Yi8bLosMWRMF0Sr8gegijBOnrYq_CKUvPGOVqHYS5zo8VNN8nbfvXELuvlJ3l0MJ28ANB8gHAwGoFn1lhaOs" />
      </div>
      </div>
      </nav>
      {/* Main Layout */}
      <div className="flex pt-14 h-screen w-full">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col py-md px-sm bg-surface-container-low dark:bg-surface-container-lowest fixed left-0 top-14 h-[calc(100vh-14px)] w-[240px] border-r border-outline-variant dark:border-outline">
      <div className="mb-lg px-sm">
      {/* Header info from JSON */}
      <div className="text-label-xs font-label-xs text-on-surface-variant uppercase tracking-widest mb-xs">Workflow v1.0</div>
      <div className="text-headline-sm font-headline-sm font-black text-primary">Task Manager</div>
      </div>
      <button className="mb-xl mx-sm py-sm px-md bg-primary text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-xs hover:bg-on-background transition-colors" type="button" data-action-id="new-task-3" onClick={actions?.["new-task-3"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      New Task
                  </button>
      <nav className="flex flex-col gap-xs flex-1">
      <a className="flex items-center gap-md py-sm px-md rounded-md text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="active-1" onClick={(event) => { event.preventDefault(); actions?.["active-1"]?.(); }}>
      <ClipboardList aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Active</span>
      </a>
      <a className="flex items-center gap-md py-sm px-md rounded-md text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="done-2" onClick={(event) => { event.preventDefault(); actions?.["done-2"]?.(); }}>
      <CheckCircle2 aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Done</span>
      </a>
      <a className="flex items-center gap-md py-sm px-md rounded-md text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest transition-colors duration-150" href="#" data-action-id="archive-3" onClick={(event) => { event.preventDefault(); actions?.["archive-3"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Archive</span>
      </a>
      </nav>
      </aside>
      {/* Canvas Area */}
      <main className="flex-1 md:ml-[240px] p-lg md:p-xl overflow-y-auto bg-surface flex flex-col gap-xl">
      <header className="mb-md">
      <h1 className="font-headline-sm text-headline-sm text-primary">System Status &amp; Recovery</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Diagnostics and recovery paths for empty states and application errors.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg">
      {/* State 1: Empty */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden h-[320px]">
      <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-md border border-outline-variant border-dashed">
      <BadgeHelp className="text-outline text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">No Task Chips found</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl max-w-[200px]">Your workspace is currently empty. Begin by creating a new data encapsulated chip.</p>
      <button className="py-sm px-md bg-surface-container text-on-background border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors flex items-center gap-xs" type="button" data-action-id="create-your-first-chip-4" onClick={actions?.["create-your-first-chip-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                              Create your first chip
                          </button>
      {/* decorative bg element */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-surface-container-low rounded-full opacity-50 blur-2xl pointer-events-none"></div>
      </div>
      {/* State 2: Filtered Empty */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden h-[320px]">
      <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-md relative">
      <Filter className="text-outline text-[28px]" aria-hidden={true} focusable="false" />
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-surface-container border border-outline-variant rounded-full flex items-center justify-center">
      <X className="text-[12px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">No results for your search</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-xl max-w-[220px]">We couldn't find any Task Chips matching your current filter criteria or search query.</p>
      <button className="py-sm px-md bg-transparent text-secondary border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-xs" type="button" data-action-id="clear-filters-5" onClick={actions?.["clear-filters-5"]}>
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
                              Clear filters
                          </button>
      </div>
      {/* State 3: Error Recovery (Spans 2 cols on lg, 1 on xl) */}
      <div className="bg-error-container/20 border border-error/30 rounded-xl p-xl flex flex-col shadow-sm relative overflow-hidden lg:col-span-2 xl:col-span-1 h-[320px]">
      <div className="flex items-start gap-md mb-md">
      <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center flex-shrink-0 border border-error/20">
      <TriangleAlert className="text-on-error-container" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-error-container">Connection failed or localStorage corrupt</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">The system encountered an error while attempting to retrieve your Task Chips.</p>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-sm mb-auto font-mono text-[10px] text-on-surface-variant overflow-x-auto whitespace-pre">
      [QA_DIAGNOSTICS]
      Error: QuotaExceededError
      Code: DOM_EXCEPTION_22
      Stack: at Storage.setItem (&lt;anonymous&gt;)
      Context: App.Module.StorageSync
                          &lt;/anonymous&gt;</div>
      <div className="flex flex-row gap-sm mt-md pt-md border-t border-error/20">
      <button className="flex-1 py-sm px-md bg-primary text-on-primary border border-primary rounded-lg font-label-md text-label-md hover:bg-on-background transition-colors flex justify-center items-center gap-xs" type="button" data-action-id="retry-connection-6" onClick={actions?.["retry-connection-6"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Retry Connection
                              </button>
      <button className="py-sm px-md bg-surface-container-lowest text-on-background border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors flex justify-center items-center" type="button" data-action-id="create-new-7" onClick={actions?.["create-new-7"]}>
                                  Create New
                              </button>
      </div>
      </div>
      </div>
      {/* Additional contextual UI to make it feel like a real page */}
      <section className="mt-lg border border-outline-variant rounded-xl bg-surface-container-lowest p-md">
      <div className="flex items-center justify-between mb-sm border-b border-outline-variant pb-sm">
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">System Health Logs</h3>
      <span className="font-label-xs text-label-xs text-outline">Last check: Just now</span>
      </div>
      <div className="flex flex-col gap-xs">
      <div className="flex items-center gap-sm py-xs">
      <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
      <span className="font-body-sm text-body-sm text-on-surface">API Gateway connected</span>
      </div>
      <div className="flex items-center gap-sm py-xs">
      <div className="w-2 h-2 rounded-full bg-error"></div>
      <span className="font-body-sm text-body-sm text-on-surface">Local cache synchronization failed</span>
      </div>
      <div className="flex items-center gap-sm py-xs">
      <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
      <span className="font-body-sm text-body-sm text-on-surface">Authentication token valid</span>
      </div>
      </div>
      </section>
      </main>
      </div>
      {/* Footer */}
      <footer className="fixed bottom-0 right-0 left-0 md:left-[240px] h-10 bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline flex items-center justify-between px-lg z-40">
      <div className="font-label-xs text-label-xs uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">TaskChip Utility © 2024</div>
      <div className="flex items-center gap-md">
      <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline cursor-pointer transition-colors" href="#" data-action-id="clear-cache-4" onClick={(event) => { event.preventDefault(); actions?.["clear-cache-4"]?.(); }}>Clear Cache</a>
      <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline cursor-pointer transition-colors" href="#" data-action-id="export-json-5" onClick={(event) => { event.preventDefault(); actions?.["export-json-5"]?.(); }}>Export JSON</a>
      </div>
      </footer>
    </>
  );
}
