---
name: Executive Precision Desktop
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#655dfb'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3322cc'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
  surface-border: '#e2e8f0'
  verified-emerald: '#059669'
  risk-red: '#dc2626'
  risk-amber: '#d97706'
  in-progress-blue: '#2563eb'
  data-text: '#1e293b'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  data-mono:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  container-padding: 24px
  gutter: 16px
  sidebar-width: 260px
  section-gap: 32px
  table-cell-padding: 12px
---

## Brand & Style

The design system is an enterprise-grade evolution of the mobile framework, engineered for the high-density, data-intensive requirements of an international B2B Supplier Portal. It adopts a **Corporate Modern** style that prioritizes utility, speed of comprehension, and trust. The aesthetic is defined by "Intelligence through Clarity"—reducing visual friction to allow suppliers to manage complex global logistics and financial data with ease.

The visual narrative is built on "Professional Rigor," using deep structural tones and crisp geometry to create a sense of institutional stability. While the mobile counterpart focuses on glanceability, this system leverages the desktop canvas to provide comprehensive "Command and Control" views, maintaining a premium feel through sophisticated whitespace management rather than decorative elements.

## Colors

The palette is anchored by **Professional Navy (#0f172a)**, providing a high-contrast foundation for navigation and structural elements. **Professional Blue (#4b41e1)** serves as the primary action color, offering a vibrant, modern counterpoint to the deep navy.

The system utilizes a "Surface-Tiers" approach to manage information density:
- **Primary:** Professional Navy for top-level navigation and headers.
- **Secondary:** Professional Blue for primary calls-to-action and active states.
- **Surface:** Cool-neutral slates (#f8fafc) for the background to reduce glare, with pure white (#ffffff) reserved for content containers.
- **Semantic:** A strict four-color status system (Emerald, Red, Amber, Blue) is used to flag risk and progress without ambiguity.

## Typography

This design system utilizes **Inter** as its workhorse typeface, chosen for its exceptional legibility in dense UI environments. The hierarchy is designed for "Scan-First" reading, with clear weight distinctions between data labels and values.

**JetBrains Mono** is introduced specifically for tabular data, financial figures, and ID strings where character-level precision is critical. In the desktop environment, typography scales to accommodate wide-screen dashboards while maintaining a rigorous 4px baseline grid. Headlines use a tighter letter-spacing to maintain a sophisticated, editorial feel in large formats.

## Layout & Spacing

The layout follows a **Fixed Grid** system for content, centered within a fluid shell. It employs a 12-column grid with a **1152px** or **1440px** container width depending on the target display.

- **Navigation:** A persistent left-hand sidebar (260px) provides the primary hierarchy, utilizing the Professional Navy background to visually separate navigation from the workspace.
- **Density:** To accommodate "expert" users, the system uses a tighter spacing scale than the mobile version. Vertical rhythm is based on an 8px scale, while data tables use a compact 12px cell padding.
- **Breakpoints:**
  - **Desktop:** 1280px+ (12 columns, 24px margins)
  - **Compact:** 1024px - 1279px (12 columns, 16px margins, sidebar collapses to icons)

## Elevation & Depth

Visual hierarchy on desktop is achieved through **Tonal Layers** supplemented by **Ambient Shadows**. This creates a physical sense of "stacking" without the visual clutter of heavy shadows.

- **Canvas (Level 0):** The primary application background (#f8fafc).
- **Cards & Sheets (Level 1):** Pure white surfaces with a 1px soft border (#e2e8f0). These containers use a very subtle shadow (Y: 1px, Blur: 3px, Opacity: 5%) to lift them off the canvas.
- **Overlays & Modals (Level 2):** Higher elevation with more pronounced shadows (Y: 10px, Blur: 15px, Opacity: 10%) and a semi-transparent backdrop blur (8px) to maintain context while focusing the user.
- **In-Canvas Dividers:** Used within white cards to separate data groups, using the `outline-variant` color at 0.5px or 1px thickness.

## Shapes

The design system uses a **Rounded (Level 2)** shape language to soften the industrial nature of enterprise data.

- **Standard Components:** Buttons, form inputs, and dropdowns use an **8px (0.5rem)** radius for a "Professional MD" look.
- **Data Containers:** Dashboard modules and cards also use an **8px** radius to maintain a consistent interior and exterior rhythm.
- **Badges:** Status indicators use a 4px radius or a full pill shape depending on their prominence, ensuring they are instantly distinguishable from interactive buttons.

## Components

### Buttons
Primary buttons are solid Professional Navy with white text. On desktop, they have a fixed height of 40px for standard actions and 32px for toolbar actions. Hover states involve a slight lightness shift or a 1px Professional Blue bottom border.

### Data Tables
The core of the supplier portal. Tables feature fixed headers, zebra-striping on hover, and inline actions. Use `body-sm` for standard rows and `data-mono` for all numeric/ID columns to ensure alignment.

### Input Fields
Inputs use a "Structured Box" style: 1px border (#e2e8f0) with a 40px height. The active state is signaled by a 1px Professional Blue border and a soft 2px blue glow (ring). Labels are positioned above the field in `label-md`.

### Status Badges
Consistent with the mobile system, badges use a soft-tint approach: 10% opacity background of the semantic color with high-contrast text. In the desktop environment, these are often paired with a 6px "status dot" for even faster scanning.

### Side Navigation
The sidebar uses Professional Navy (#0f172a). Active items are indicated by a Professional Blue vertical bar on the left and a subtle white opacity (8%) background highlight.

### Dashboard Cards
Cards act as the primary container for data visualizations. They must include a clear header row with `headline-sm` typography and optional top-right "action menu" (three dots).