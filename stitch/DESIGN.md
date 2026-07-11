---
name: Precision Task Utility
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
  headline-sm-mobile:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  gutter: 12px
  margin: 16px
---

## Brand & Style
The design system is engineered for high-performance productivity and task management. It prioritizes information density and clarity over decorative elements, targeting professional users who manage complex workflows. 

The aesthetic is a hybrid of **Minimalism** and **Corporate Modern**, characterized by a "Task Chip" philosophy where every piece of data is encapsulated in a discrete, identifiable container. The emotional response is one of calm control and systematic efficiency. The UI stays out of the way, using white space purposefully to separate dense data clusters rather than just filling air.

## Colors
The palette is anchored in a Slate/Zinc grayscale to provide a neutral, professional foundation. 
- **Primary:** Deep Slate (#0f172a) for high-contrast text and primary actions.
- **Functional Accents:** Blue (#3b82f6) signifies movement and activity; Emerald (#10b981) confirms completion; Amber (#f59e0b) indicates stasis or archiving.
- **Surface Strategy:** Use white (#ffffff) for primary cards and task chips, set against a light slate (#f8fafc) background to create subtle layered depth without heavy shadows.

## Typography
This design system utilizes **Inter** for its exceptional legibility at small sizes and its neutral, systematic tone. 
- **Hierarchy:** We rely on font weight and letter spacing rather than large size differentials to maintain density. 
- **Labels:** Small labels (`label-xs`) use uppercase with slight tracking to differentiate metadata from body content.
- **Optimization:** Headlines are kept compact to ensure they do not break across multiple lines in narrow task columns.

## Layout & Spacing
The layout operates on a strict **4px/8px grid** to facilitate a data-dense environment. 
- **Sidebar:** Fixed width at 240px for desktop, collapsing to an icon-only rail at 64px.
- **Grid:** A 12-column fluid grid for the main stage, though most task views will utilize 3 or 4 fixed-width columns (Kanban style) or a single-column list view.
- **Density:** Internal padding for chips and rows is kept at `sm` (8px) or `xs` (4px) to maximize the number of visible items on a single screen.

## Elevation & Depth
This system uses **Low-contrast outlines** and **Tonal layers** rather than heavy shadows to maintain a "flat but tactile" feel.
- **Level 0:** Base background (#f8fafc).
- **Level 1:** White surfaces with a 1px border (#e2e8f0). Used for task chips and sidebar items.
- **Level 2:** Active/Hover states. Use a very soft, ambient shadow (4px blur, 2% opacity) to suggest interactivity.
- **Separation:** Vertical lines (1px) are used to separate sidebar and main content areas instead of shadows.

## Shapes
The shape language follows a **Soft (0.25rem)** approach. 
- **Task Chips:** Use a standard `rounded` (4px) radius to keep them looking modern but structured.
- **Action Buttons:** Use `rounded-lg` (8px) to provide a slightly softer, more "clickable" affordance compared to the data elements.
- **Checkboxes:** 4px radius to match the task chips, ensuring visual harmony in the interface's most frequent interaction point.

## Components
- **Task Chips:** The core unit. Features a 1px border, 8px internal padding, and a left-aligned status bar (2px width) colored by priority or status.
- **Buttons:**
  - *Primary:* Solid Slate (#0f172a), white text.
  - *Secondary:* White background, Slate border, Slate text.
  - *Ghost:* No background or border, Slate text, light gray background on hover.
- **Input Fields:** 1px border (#e2e8f0), 8px padding. On focus, the border changes to Blue (#3b82f6) with a subtle 2px outer glow. Validation errors use Red (#ef4444).
- **Metric Cards:** Compact cards with `label-xs` titles and `headline-sm` values. No padding-top to keep the visual weight high.
- **Sidebar Navigation:** High-density list. Active states use a soft blue background tint (#eff6ff) and a bold blue left-border (3px).
- **Status Indicators:** Small 8px circles or subtle background tints behind `label-xs` text for "Done," "Active," and "Archived" states.