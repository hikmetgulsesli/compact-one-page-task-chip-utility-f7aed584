// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - Compact One Page Task Chip Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, CheckCircle2, CircleHelp, ListFilter, Plus, RefreshCw, Save, Trash2 } from "lucide-react";


export type SettingsAndPreferencesCompactOnePageTaskChipUtilityActionId = "back-1" | "help-2" | "reload-3" | "save-preferences-4" | "add-5" | "delete-6" | "delete-7" | "delete-8" | "reset-to-defaults-9" | "clear-cache-1" | "export-json-2";

export interface SettingsAndPreferencesCompactOnePageTaskChipUtilityProps {
  actions?: Partial<Record<SettingsAndPreferencesCompactOnePageTaskChipUtilityActionId, () => void>>;

}

export function SettingsAndPreferencesCompactOnePageTaskChipUtility({ actions }: SettingsAndPreferencesCompactOnePageTaskChipUtilityProps) {
  return (
    <>
      {/* JSON: SideNavBar (Strict implementation based on Intent Filter: Settings is a dead-end/transactional intent relative to core app flow, so global nav is suppressed to prioritize content canvas. *HOWEVER*, the prompt implies a top-level settings page within a utility context, but standard rule applies. Wait, the prompt says "Generate the settings screen...". Let's suppress SideNav and TopAppBar as it's a focus screen, OR render it if it's considered a main view. Given the prompt specifically asks for SURF_SETTINGS_AND_PREFERENCES, it's a destination, but typical "Settings" suppresses nav. Let's include TopAppBar for "Back" navigation and a localized layout). Wait, the rule says "Suppress navigation if the page intent is: Linear/Transactional...". Settings isn't explicitly listed there, but usually it implies a departure. Let's build a focused layout without the global nav shell to strictly follow the "Canvas Priority" mandate, providing a back button in a localized header. Actually, looking at the JSON, TopAppBar has settings/help. I will include TopAppBar and Footer, but suppress SideNav. */}
      {/* Top Navigation Bar */}
      <header className="bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 w-full z-50 flex justify-between items-center h-14 px-md">
      <div className="flex items-center gap-md">
      <button className="p-sm text-on-surface-variant hover:bg-surface-container rounded-DEFAULT transition-colors duration-200" title="Back" type="button" data-action-id="back-1" onClick={actions?.["back-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-inverse-primary">TaskChip Settings</h1>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-sm text-on-surface-variant hover:bg-surface-container rounded-DEFAULT transition-colors duration-200" type="button" aria-label="Help" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden ml-sm">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A close-up, corporate headshot portrait of a professional individual in a minimalist, well-lit studio environment. Clean, sharp lighting, light mode aesthetic, crisp colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoB1D-RmP3-bhBesQAUbpuRuuJME-vwVfmS2N0MVIkIWOZ3HIU82zglsAihupeRolU7WmRHGSoP28LaPHH4gBZR0Lpen9k0E0qG9PDDKRMvn3OsnLbh1pk1L2friksXsPfdHkAz3MIXDKndi0twCCmNvVmSEAP71ELp7r4ZBY2DOVg26Tk7tMoeMqhcF9YzFAdMRLKSYnAOF1EvP0psUbZKFG1KnlLpRPV5GicWbnayLK_JBWv4VjeoBnovhF-rihOTNvZdB3cRVw" />
      </div>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="w-full pt-[70px] pb-24 px-md md:px-xl max-w-4xl mx-auto flex flex-col gap-lg">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-outline-variant pb-md">
      <div>
      <h2 className="font-headline-sm text-headline-sm text-primary">Preferences</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Manage application behavior and customize your workflow.</p>
      </div>
      <div className="flex gap-sm">
      <button className="px-md py-sm border border-outline text-on-surface font-label-md text-label-md rounded-DEFAULT hover:bg-surface-container transition-colors flex items-center gap-xs" type="button" data-action-id="reload-3" onClick={actions?.["reload-3"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                          Reload
                      </button>
      <button className="px-md py-sm bg-primary text-on-primary font-label-md text-label-md rounded-DEFAULT hover:bg-primary-container transition-colors flex items-center gap-xs shadow-sm" type="button" data-action-id="save-preferences-4" onClick={actions?.["save-preferences-4"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                          Save Preferences
                      </button>
      </div>
      </div>
      {/* Settings Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
      {/* Application Behavior Panel */}
      <section className="col-span-1 md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col gap-md">
      <h3 className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest border-b border-surface-variant pb-xs">Application Behavior</h3>
      {/* Default View */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm p-sm hover:bg-surface-container-low transition-colors rounded-DEFAULT">
      <div>
      <label className="font-body-md text-body-md text-primary font-semibold block" htmlFor="default-view">Default Landing View</label>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Select which tab opens upon startup.</span>
      </div>
      <select className="bg-surface-container-lowest border border-outline-variant text-on-surface text-body-sm rounded-DEFAULT focus:ring-secondary focus:border-secondary block w-full sm:w-48 p-sm" id="default-view">
      <option value="active">Active Tasks</option>
      <option value="done">Done Tasks</option>
      <option value="archive">Archive</option>
      </select>
      </div>
      {/* Display Density */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm p-sm hover:bg-surface-container-low transition-colors rounded-DEFAULT">
      <div>
      <h4 className="font-body-md text-body-md text-primary font-semibold">Display Density</h4>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Toggle compact mode to maximize visible items.</span>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" id="density-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="density-toggle"></label>
      </div>
      </div>
      </section>
      {/* Saved Filters Panel */}
      <section className="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col h-full">
      <div className="p-md border-b border-outline-variant flex justify-between items-center">
      <h3 className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest">Saved Filters</h3>
      <button className="text-secondary hover:bg-secondary-container/10 p-xs rounded-DEFAULT transition-colors" type="button" aria-label="Add" data-action-id="add-5" onClick={actions?.["add-5"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <ul className="flex-1 overflow-y-auto p-xs flex flex-col gap-xs">
      <li className="flex items-center justify-between p-sm border border-transparent hover:border-outline-variant hover:bg-surface-container-low rounded-DEFAULT group cursor-pointer transition-colors">
      <div className="flex items-center gap-sm">
      <ListFilter className="text-secondary text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">High Priority Active</span>
      </div>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-error transition-colors p-xs" type="button" aria-label="Delete" data-action-id="delete-6" onClick={actions?.["delete-6"]}>
      <Trash2 className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </li>
      <li className="flex items-center justify-between p-sm border border-transparent hover:border-outline-variant hover:bg-surface-container-low rounded-DEFAULT group cursor-pointer transition-colors">
      <div className="flex items-center gap-sm">
      <ListFilter className="text-secondary text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">Due This Week</span>
      </div>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-error transition-colors p-xs" type="button" aria-label="Delete" data-action-id="delete-7" onClick={actions?.["delete-7"]}>
      <Trash2 className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </li>
      <li className="flex items-center justify-between p-sm border border-transparent hover:border-outline-variant hover:bg-surface-container-low rounded-DEFAULT group cursor-pointer transition-colors">
      <div className="flex items-center gap-sm">
      <ListFilter className="text-secondary text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">Blocked Tasks</span>
      </div>
      <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-error transition-colors p-xs" type="button" aria-label="Delete" data-action-id="delete-8" onClick={actions?.["delete-8"]}>
      <Trash2 className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </li>
      </ul>
      </section>
      {/* Danger Zone */}
      <section className="col-span-1 md:col-span-12 bg-[#fff5f5] border border-[#fecaca] rounded-lg p-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-error">Danger Zone</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Reset all settings and filters to their factory defaults. This action cannot be undone.</p>
      </div>
      <button className="px-md py-sm border border-error text-error font-label-md text-label-md rounded-DEFAULT hover:bg-error hover:text-on-error transition-colors whitespace-nowrap" type="button" data-action-id="reset-to-defaults-9" onClick={actions?.["reset-to-defaults-9"]}>
                          Reset to Defaults
                      </button>
      </section>
      </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline fixed bottom-0 left-0 h-10 flex items-center justify-between px-lg w-full z-40">
      <span className="font-label-xs text-label-xs uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant">TaskChip Utility © 2024</span>
      <div className="flex gap-md">
      <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline cursor-pointer transition-colors" href="#" data-action-id="clear-cache-1" onClick={(event) => { event.preventDefault(); actions?.["clear-cache-1"]?.(); }}>Clear Cache</a>
      <a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline cursor-pointer transition-colors" href="#" data-action-id="export-json-2" onClick={(event) => { event.preventDefault(); actions?.["export-json-2"]?.(); }}>Export JSON</a>
      </div>
      </footer>
      {/* Toast Notification */}
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-lg py-sm rounded-lg shadow-lg flex items-center gap-sm opacity-0 pointer-events-none z-50" id="toast">
      <CheckCircle2 className="text-[18px] text-tertiary-fixed-dim" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Preferences saved successfully.</span>
      </div>
      
    </>
  );
}
