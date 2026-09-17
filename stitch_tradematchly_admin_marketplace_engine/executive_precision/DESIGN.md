---
name: Executive Precision
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
  secondary-container: '#645efb'
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
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  gutter: 20px
---

## Brand & Style
The design system is engineered for high-stakes enterprise environments, specifically tailored for trade administration and financial oversight. The aesthetic is **Corporate Modern**, prioritizing clarity, density, and institutional trust. 

The brand personality is authoritative yet frictionless. It utilizes a refined palette and rigorous alignment to project stability. The UI stays out of the user's way, using white space not just for aesthetics, but as a functional tool to separate complex data streams. Visual interest is generated through precise typography and purposeful hits of vibrant indigo, ensuring that "action" is never ambiguous.

## Colors
The color strategy employs a "High-Floor, Low-Ceiling" approach to contrast. The primary **Deep Navy (#0f172a)** is used for structural elements like sidebars and primary headers to anchor the experience. **Vibrant Indigo (#4f46e5)** is reserved strictly for interactive elements and focus states.

Neutral scales are weighted toward cool grays to maintain a "tech-forward" professional feel. Surfaces should almost always be white containers on a light-gray background to create a clear "object-on-ground" relationship. Semantic colors use the 500-600 weight range of their respective hues to ensure WCAG AA accessibility against white backgrounds.

## Typography
This design system utilizes **Inter** for its neutral, highly legible characteristic in dense UI. For specialized financial data or trade IDs, **JetBrains Mono** is introduced to ensure character distinction (e.g., distinguishing '0' from 'O').

Hierarchy is strictly enforced. **Labels** are often uppercase with slight tracking to differentiate them from interactive body text. Large displays are only used for dashboard overviews; the majority of the admin experience lives in `body-md` and `body-sm` to maximize information density without sacrificing readability.

## Layout & Spacing
The system follows a **4px soft-grid** philosophy. Layouts are primarily **fixed-width containers** (1440px) centered on the screen for desktop to prevent line lengths from becoming unreadable on ultra-wide monitors.

**Standardized Densities:**
- **Compact:** Used for data tables and sidebars (8px cell padding).
- **Default:** Used for forms and standard pages (16px spacing between elements).
- **Relaxed:** Used for landing dashboards and empty states (24px+ spacing).

On mobile, the 12-column grid collapses to a single column with 16px side margins. Tablets utilize a 6-column grid.

## Elevation & Depth
Elevation is achieved through **Tonal Layering** supplemented by **Ambient Shadows**. Instead of heavy shadows, the system uses 1px borders in a soft gray (`#e2e8f0`) to define boundaries.

- **Level 0 (Flat):** Main background.
- **Level 1 (Raised):** Cards and white containers. Uses a subtle 1px border and a 2px blur shadow with 4% opacity.
- **Level 2 (Overlay):** Dropdowns, tooltips, and popovers. Increased shadow spread (12px blur) and 8% opacity.
- **Level 3 (Modal):** Highest priority. Uses a background backdrop blur (4px) to recede the UI and a deep, soft shadow.

## Shapes
The shape language is professional and "squircle" influenced. A base radius of **8px (rounded-md)** is applied to standard components like buttons and input fields. Larger containers like cards use **12px (rounded-lg)** to provide a softer, more premium frame for data. 

Status badges and tags utilize a **full pill radius** to visually distinguish them from interactive buttons.

## Components
### Data Tables
The core of the admin experience. Tables must support high density. Row heights are set to 48px. Use alternating row stripes or subtle borders. Header cells use `label-md` with a background tint of `#f1f5f9`.

### Trust Score Indicators
A custom component featuring a segmented progress bar or radial gauge. Uses semantic coloring (Red to Emerald) to provide an instant visual heuristic of trade safety.

### KPI Cards
White surfaces with `rounded-lg` corners. Large `headline-md` for the primary metric, with a small trend indicator (e.g., +12%) positioned in the top right.

### Buttons
- **Primary:** Solid Deep Navy or Indigo with white text. 
- **Secondary:** White fill with 1px gray border.
- **Ghost:** No fill or border, used for secondary actions in tables.

### Status Badges
Subtle background tints (e.g., Success is 10% opacity Emerald) with high-contrast text. Weight should be bold and size `body-sm`.

### Input Fields
1px border using `#cbd5e1`. On focus, the border transitions to Indigo with a 2px soft outer glow (halo) of the same color at 20% opacity.