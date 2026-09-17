---
name: Executive Precision Mobile
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
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
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
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
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  verified-emerald: '#059669'
  risk-red: '#dc2626'
  risk-amber: '#d97706'
  in-progress-blue: '#2563eb'
  surface-border: '#e2e8f0'
typography:
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
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
  data-mono:
    fontFamily: JetBrains Mono
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
  margin-mobile: 1rem
  gutter-mobile: 0.75rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 1.5rem
  touch-target: 2.75rem
---

## Brand & Style

The design system is a high-performance adaptation of the corporate aesthetic, reimagined for the mobility of executive decision-makers. It adopts a **Corporate Modern** style with a focus on "glanceability" and high-stakes clarity. The brand personality is authoritative, precise, and premium, evoking a sense of calm control in complex B2B environments.

The visual language emphasizes a "Mobile-First Professionalism"—utilizing the deep navy and slate palette to ground the interface, while leveraging generous touch targets and refined geometry to ensure the application feels modern and fluid. The interface prioritizes essential data, stripping away secondary noise to facilitate rapid risk assessment and status verification on the move.

## Colors

The palette is anchored by **Deep Navy (#0f172a)** for structural integrity, used in headers and primary navigation to project stability. **Vibrant Indigo (#4b41e1)** serves as the interactive signal, reserved for primary actions.

For status communication, this design system employs a strict semantic protocol:
- **Verified (Emerald):** Denotes safety and completion.
- **Risk (Amber/Red):** Amber for caution/moderate risk, Red for critical alerts.
- **In Progress (Blue):** Distinguishes active workflows from final states.

Neutral backgrounds utilize cool-toned slates to maintain a clean, tech-forward environment that reduces eye strain during prolonged data review.

## Typography

Typography is optimized for mobile legibility, utilizing **Inter** for its excellent x-height and neutral profile. Headline sizes are scaled down from desktop defaults to prevent awkward text wrapping on narrow screens. 

**JetBrains Mono** is utilized specifically for alphanumeric identifiers, financial figures, and status codes to ensure high character differentiation (e.g., 0 vs O). 

Hierarchical distinction is achieved through weight and capitalization: **Labels** are rendered in bold, uppercase styling with increased tracking to differentiate them clearly from interactive body copy. All body text maintains a minimum size of 14px for accessibility, with 12px reserved only for secondary metadata.

## Layout & Spacing

This design system uses a **Fluid Grid** model optimized for touch. The layout relies on a 4-column structure for mobile devices with a standard **16px (1rem) side margin**. 

The spacing rhythm follows an 8px incremental scale, but prioritizes "Touch Safety." All interactive elements must adhere to a minimum touch target of **44px (2.75rem)**. Content is organized into vertical stacks with 16px gaps for standard groups and 24px gaps to denote a change in section or context. Cards use internal padding of 16px to ensure data density remains high without feeling cramped.

## Elevation & Depth

Visual hierarchy is conveyed through **Tonal Layers** and **Low-Contrast Outlines**. In the mobile environment, heavy shadows are avoided to maintain a clean look.

- **Base Layer:** The application background uses a very light slate (#f8fafc).
- **Surface Layer:** Interactive cards and containers use a pure white fill with a subtle 1px border (#e2e8f0).
- **Active Layer:** Elements currently being interacted with (e.g., a pressed card) use a soft, ambient shadow (4px blur, 4% opacity) to provide tactile feedback.
- **Overlay Layer:** Modals and bottom sheets use a 20% opacity backdrop overlay to focus the user’s attention, with no additional elevation shadows needed due to the high contrast against the backdrop.

## Shapes

The shape language is refined and approachable, utilizing a **Rounded (Level 2)** philosophy. 

- **Standard Components:** Buttons, inputs, and small chips use a **0.5rem (8px)** radius.
- **Containers:** Dashboard cards and bottom sheets use a **1rem (16px)** radius to frame content elegantly.
- **Status Pills:** Use a full pill-shape (max radius) to distinguish them from functional buttons.

This consistent rounding creates a "premium-tactile" feel that is softer than traditional enterprise software but retains professional discipline.

## Components

### Buttons
Primary buttons are solid Deep Navy with white text. For mobile, they are typically full-width to maximize the touch area. Secondary buttons use a white fill with a 1px slate border.

### Status Badges (Verified/Risk/In-Progress)
Badges use a "soft-tint" approach: a 10% opacity background of the semantic color (e.g., Emerald) paired with a high-contrast text version of the same color. 

### Data Lists
In place of dense tables, mobile data is presented in **Summary Cards**. Each card features a `label-md` header, a `data-mono` identifier, and a prominent status badge. Row height for list items is a minimum of 56px to ensure easy scrolling and selection.

### Input Fields
Inputs feature a 1px border. Upon focus, the border transitions to Indigo with a subtle, non-intrusive 2px halo. The label remains visible above the field (floating label style) to maintain context during entry.

### Bottom Sheets
Used for filtering, sorting, and secondary actions. They feature a 16px top-rounded corner and a visible handle to indicate draggability.

### KPI Progress Gauges
For risk and progress metrics, use segmented horizontal bars with semantic coloring, providing a quick visual "temperature check" of the data point.