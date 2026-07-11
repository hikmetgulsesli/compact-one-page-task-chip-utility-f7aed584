// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Short Editor - Compact One Page Task Chip Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeCheck, BadgeHelp, CheckCircle2, CircleAlert, CircleHelp, ClipboardList, Clock, Info, Plus, Save, Search, Settings, X } from "lucide-react";


export type ShortEditorCompactOnePageTaskChipUtilityActionId = "settings-1" | "help-2" | "new-task-3" | "close-4" | "cancel-5" | "save-chip-6" | "active-1" | "done-2" | "archive-3" | "clear-cache-4" | "export-json-5";

export interface ShortEditorCompactOnePageTaskChipUtilityProps {
  actions?: Partial<Record<ShortEditorCompactOnePageTaskChipUtilityActionId, () => void>>;

}

export function ShortEditorCompactOnePageTaskChipUtility({ actions }: ShortEditorCompactOnePageTaskChipUtilityProps) {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-surface-container-lowest dark:bg-inverse-surface text-primary dark:text-inverse-primary font-headline-sm text-headline-sm fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline flat no shadows transition-colors duration-200 flex justify-between items-center h-14 px-md w-full">
      <div className="flex items-center gap-sm">
      <BadgeCheck className="text-headline-sm" aria-hidden={true} focusable="false" />
      <span className="text-headline-sm font-headline-sm font-bold text-primary dark:text-inverse-primary">TaskChip</span>
      </div>
      <div className="flex items-center bg-surface-container rounded-DEFAULT px-sm py-xs border border-outline-variant focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary-fixed/50 transition-colors w-64 max-w-sm hidden md:flex">
      <Search className="text-on-surface-variant mr-xs" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none outline-none text-body-sm w-full placeholder-on-surface-variant p-0 focus:ring-0" placeholder="Search tasks..." type="text" />
      </div>
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant hover:bg-surface-container dark:hover:bg-on-surface-variant/10 rounded-DEFAULT p-xs transition-colors" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container dark:hover:bg-on-surface-variant/10 rounded-DEFAULT p-xs transition-colors" type="button" aria-label="Help" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-xs" data-alt="A small circular user profile picture showing a professional headshot of a person with a slight smile against a neutral gray background. The lighting is soft and corporate, matching a sleek modern task management application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzEOQhOKOTEErFFQSnpjkyWfak0hLvrxaKNPDFUT_FkCy2mUS_d-mRJX3l-DAtp75ja5uD_xs3hkyIW48j2wEr4Lu5FHA-snz8KkRMGK3Dorut1DamE72wOVct0AuRCywfaCL9xGCWBfCO2vBXVuPBqZg1uR0GbULLGr09HbLkaX45cM_Dp_QE7s4MBv2vw6XGuu9212EVHt9JHTQrUN_aDBST3AIruaGaQxQEb_SQMChJy-GUQpfGPGJdHof0zqT9SU3CW0GSSfA" />
      </div>
      </nav>
      <div className="flex flex-1 pt-[56px]">
      {/* Side Navigation Bar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-lowest text-secondary dark:text-secondary-fixed font-body-md text-body-md fixed left-0 top-14 h-[calc(100vh-14px)] w-[240px] border-r border-outline-variant dark:border-outline flat no shadows transition-colors duration-150 flex flex-col py-md px-sm hidden md:flex z-40">
      <div className="mb-lg px-sm">
      <div className="flex items-center gap-sm mb-xs">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold">TC</div>
      <div>
      <div className="font-headline-sm text-headline-sm font-black">Task Manager</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Workflow v1.0</div>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary font-label-md py-sm rounded-DEFAULT hover:bg-surface-tint transition-colors mt-sm flex items-center justify-center gap-xs" type="button" data-action-id="new-task-3" onClick={actions?.["new-task-3"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                          New Task
                      </button>
      </div>
      <nav className="flex-1 space-y-xs">
      <a className="bg-secondary-container/10 text-secondary dark:text-secondary-fixed font-bold border-l-[3px] border-secondary flex items-center gap-sm px-sm py-xs transition-colors duration-150" href="#" data-action-id="active-1" onClick={(event) => { event.preventDefault(); actions?.["active-1"]?.(); }}>
      <ClipboardList data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Active
                      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest hover:bg-surface-container-high dark:hover:bg-surface-variant flex items-center gap-sm px-sm py-xs transition-colors duration-150 border-l-[3px] border-transparent" href="#" data-action-id="done-2" onClick={(event) => { event.preventDefault(); actions?.["done-2"]?.(); }}>
      <CheckCircle2 aria-hidden={true} focusable="false" />
                          Done
                      </a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-highest hover:bg-surface-container-high dark:hover:bg-surface-variant flex items-center gap-sm px-sm py-xs transition-colors duration-150 border-l-[3px] border-transparent" href="#" data-action-id="archive-3" onClick={(event) => { event.preventDefault(); actions?.["archive-3"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
                          Archive
                      </a>
      </nav>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-[240px] p-lg relative h-[calc(100vh-56px)] overflow-hidden bg-background">
      {/* Simulated Background Content (Kanban Board) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md h-full opacity-30 pointer-events-none transition-opacity duration-300 filter blur-[2px]">
      {/* Column 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex flex-col gap-sm">
      <div className="font-label-md text-on-surface-variant flex justify-between">
      <span>TO DO</span>
      <span className="bg-surface-container px-2 rounded-full">3</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm shadow-sm flex flex-col gap-xs">
      <div className="w-1/2 h-4 bg-outline-variant/30 rounded"></div>
      <div className="w-full h-3 bg-outline-variant/20 rounded"></div>
      <div className="w-3/4 h-3 bg-outline-variant/20 rounded"></div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm shadow-sm flex flex-col gap-xs border-l-2 border-l-error">
      <div className="w-2/3 h-4 bg-outline-variant/30 rounded"></div>
      <div className="w-full h-3 bg-outline-variant/20 rounded"></div>
      </div>
      </div>
      {/* Column 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex flex-col gap-sm">
      <div className="font-label-md text-on-surface-variant flex justify-between">
      <span>IN PROGRESS</span>
      <span className="bg-surface-container px-2 rounded-full">1</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm shadow-sm flex flex-col gap-xs border-l-2 border-l-secondary">
      <div className="w-3/4 h-4 bg-outline-variant/30 rounded"></div>
      <div className="w-5/6 h-3 bg-outline-variant/20 rounded"></div>
      </div>
      </div>
      </div>
      {/* Editor Overlay / Side Panel */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[400px] bg-surface-container-lowest shadow-[-4px_0_24px_rgba(0,0,0,0.05)] border-l border-outline-variant flex flex-col z-10 transition-transform transform translate-x-0">
      {/* Editor Header */}
      <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Edit Task Chip</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Update task details and status.</p>
      </div>
      <button className="text-on-surface-variant hover:bg-surface-container p-xs rounded-DEFAULT transition-colors" type="button" aria-label="Close" data-action-id="close-4" onClick={actions?.["close-4"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Unsaved Banner */}
      <div className="bg-secondary-container/10 border-b border-secondary-container/20 px-lg py-sm flex items-center gap-sm text-on-surface-variant font-label-md text-label-md">
      <Info className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
                          You have unsaved changes.
                      </div>
      {/* Editor Form */}
      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-lg">
      {/* Form Field: Chip Name */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface flex items-center gap-xs" htmlFor="chip-name">
                                  Chip Name <span aria-hidden={true} className="text-error">*</span>
      </label>
      {/* Demonstrating Error State */}
      <div className="relative">
      <input className="w-full bg-surface-container-lowest border-error focus:border-error focus:ring-2 focus:ring-error/20 rounded-DEFAULT px-sm py-sm font-body-md text-on-surface transition-colors" id="chip-name" placeholder="e.g., Q3 Marketing Review" type="text" defaultValue="" />
      <CircleAlert className="absolute right-sm top-1/2 -translate-y-1/2 text-error text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-sm text-body-sm text-error flex items-center gap-xs">
                                  Name is required
                              </span>
      </div>
      {/* Form Field: Description */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="chip-description">Description</label>
      <textarea className="w-full bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-DEFAULT px-sm py-sm font-body-md text-on-surface transition-colors resize-none" id="chip-description" placeholder="Briefly describe the task objectives..." rows={4}>Review all Q3 marketing assets and prepare a summary report for the stakeholders meeting.</textarea>
      </div>
      {/* Form Field: Status Selection */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-md text-label-md text-on-surface">Status Selection</label>
      <div className="grid grid-cols-3 gap-sm">
      {/* Active Status (Selected) */}
      <label className="relative flex flex-col items-center justify-center p-sm border-2 border-secondary bg-secondary-container/5 rounded-lg cursor-pointer transition-colors hover:bg-secondary-container/10">
      <input defaultChecked={true} className="sr-only" name="chip-status" type="radio" defaultValue="active" />
      <span className="w-3 h-3 rounded-full bg-secondary mb-xs"></span>
      <span className="font-label-md text-label-md text-on-surface">Active</span>
      </label>
      {/* Done Status */}
      <label className="relative flex flex-col items-center justify-center p-sm border border-outline-variant bg-surface-container-lowest rounded-lg cursor-pointer transition-colors hover:border-outline hover:bg-surface-container-highest">
      <input className="sr-only" name="chip-status" type="radio" defaultValue="done" />
      <span className="w-3 h-3 rounded-full bg-tertiary-container mb-xs opacity-50"></span>
      <span className="font-label-md text-label-md text-on-surface-variant">Done</span>
      </label>
      {/* Archive Status */}
      <label className="relative flex flex-col items-center justify-center p-sm border border-outline-variant bg-surface-container-lowest rounded-lg cursor-pointer transition-colors hover:border-outline hover:bg-surface-container-highest">
      <input className="sr-only" name="chip-status" type="radio" defaultValue="archive" />
      <span className="w-3 h-3 rounded-full bg-outline mb-xs opacity-50"></span>
      <span className="font-label-md text-label-md text-on-surface-variant">Archive</span>
      </label>
      </div>
      </div>
      {/* Metadata / Extra Info */}
      <div className="bg-surface-container rounded-DEFAULT p-sm flex items-start gap-sm mt-auto border border-outline-variant/50">
      <Clock className="text-[18px] text-on-surface-variant mt-[2px]" aria-hidden={true} focusable="false" />
      <div className="flex flex-col">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest">Last Modified</span>
      <span className="font-body-sm text-body-sm text-on-surface">Today at 10:42 AM</span>
      </div>
      </div>
      </div>
      {/* Editor Actions */}
      <div className="px-lg py-md border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-sm">
      <button className="px-md py-sm border border-outline-variant text-on-surface hover:bg-surface-container-highest font-label-md text-label-md rounded-DEFAULT transition-colors" type="button" data-action-id="cancel-5" onClick={actions?.["cancel-5"]}>
                              Cancel
                          </button>
      <button className="px-md py-sm bg-primary text-on-primary hover:bg-surface-tint font-label-md text-label-md rounded-DEFAULT transition-colors flex items-center gap-xs shadow-[0_2px_4px_rgba(0,0,0,0.1)]" type="button" data-action-id="save-chip-6" onClick={actions?.["save-chip-6"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                              Save Chip
                          </button>
      </div>
      </div>
      </main>
      </div>
      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-inverse-surface text-on-surface-variant dark:text-on-surface-variant font-label-md text-label-md fixed bottom-0 right-0 left-0 md:left-[240px] h-10 border-t border-outline-variant dark:border-outline flat no shadows flex items-center justify-between px-lg z-30 transition-colors duration-150">
      <span className="font-label-xs text-label-xs uppercase tracking-widest text-on-surface-variant/70">TaskChip Utility © 2024</span>
      <div className="flex gap-md">
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline cursor-pointer transition-colors" href="#" data-action-id="clear-cache-4" onClick={(event) => { event.preventDefault(); actions?.["clear-cache-4"]?.(); }}>Clear Cache</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline cursor-pointer transition-colors" href="#" data-action-id="export-json-5" onClick={(event) => { event.preventDefault(); actions?.["export-json-5"]?.(); }}>Export JSON</a>
      </div>
      </footer>
    </>
  );
}
