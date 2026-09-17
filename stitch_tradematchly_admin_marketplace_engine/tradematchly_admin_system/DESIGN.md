---
name: TradeMatchly Admin System
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
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
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
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
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
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-mono:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 16px
  row-height-dense: 40px
  row-height-standard: 56px
---

## Brand & Style

The design system is engineered for high-stakes international B2B commerce. It prioritizes **Corporate Modernism**—a style characterized by rigorous grid alignment, functional density, and an unwavering sense of institutional security.

The target audience consists of trade administrators, compliance officers, and logistics coordinators who manage high-volume global transactions. The UI must evoke an emotional response of **composed authority and absolute reliability**. This is achieved through a restrained use of color, generous use of whitespace within data-dense environments, and a focus on systematic clarity over decorative flair.

## Colors

This design system utilizes a hierarchical color architecture to signal authority and facilitate rapid data scanning.

- **Primary (#0F172A):** Reserved for structural navigation (sidebars) and primary headers. It anchors the interface.
- **Secondary (#2563EB):** The primary action color. Used for buttons, active states, and interactive links.
- **Tertiary/Success (#10B981):** Specifically for "Verified" statuses and positive trade growth signals.
- **Neutral (#F8FAFC):** The foundational background color to reduce eye strain during prolonged use.

**Trust & Risk Tokens:**
- **Trust Levels:** Use Emerald (#10B981) for Transaction Verified and Slate (#64748B) for Basic.
- **Risk Signals:** Use a traffic-light system with high-saturation Red (#EF4444) for High Risk, Amber (#F59E0B) for Medium, and subtle Slate for Low Risk.

## Typography

The system relies exclusively on **Inter**, a highly legible sans-serif designed for UI. The focus is on vertical rhythm and tabular alignment.

- **Data Tables:** Use `body-sm` for standard cell content. For numerical values (prices, quantities), enable tabular figures (`tnum`) to ensure columns align perfectly.
- **Headers:** Use `display-lg` only for dashboard overviews. Most administrative pages should lead with `headline-md`.
- **Labels:** `label-bold` is intended for table headers and small status badge text to differentiate them from actionable data.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** with fixed margins. The priority is maximum information density without visual clutter.

- **Desktop (1440px+):** 240px fixed left sidebar for navigation. Content area uses 32px margins.
- **Tablet (1024px):** Sidebar collapses to icons. Margins reduce to 24px.
- **Data Density:** Use a 4px baseline shift. In data-heavy views, use `row-height-dense` (40px) to maximize the number of visible records above the fold. 
- **Filtering Layout:** Global filters occupy a horizontal bar above the table, with secondary filters appearing in a slide-out "Drawer" component to preserve horizontal space for data columns.

## Elevation & Depth

This design system uses **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows to maintain a professional, flat aesthetic.

- **Level 0 (Background):** #F8FAFC.
- **Level 1 (Cards/Tables):** White (#FFFFFF) with a 1px solid border (#E2E8F0). No shadow.
- **Level 2 (Popovers/Dropdowns):** White (#FFFFFF) with a subtle 1px border (#E2E8F0) and a soft, diffused 8px shadow (Opacity: 4%, Color: #0F172A).
- **Interactive States:** On hover, level 1 surfaces transition their border color to #CBD5E1. Do not use elevation to signify hover; use color shift.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a modern touch while maintaining the structural rigidity required for a professional trade platform.

- **Primary Buttons:** 4px (0.25rem) corner radius.
- **Cards & Data Containers:** 8px (0.5rem) corner radius for a slightly softer boundary.
- **Status Badges:** Fully pill-shaped (rounded-full) to distinguish them instantly from buttons or input fields.
- **Input Fields:** 4px (0.25rem) to match buttons for a unified form language.

## Components

### Data Tables
Tables are the core of the experience. They must include:
- **Sticky Headers:** Always visible during scroll.
- **Multi-Stage Filtering:** A combination of a search bar, date-range picker, and multi-select dropdowns for "Trust Level" and "Region."
- **Inline Actions:** Minimalist "more" (ellipsis) menus to keep the UI clean.

### Status Badges
- **Verified:** Emerald background (10% opacity) with Emerald text.
- **Pending:** Slate background (10% opacity) with Slate text.
- **Risk Indicators:** High-contrast backgrounds for High Risk (Red) to ensure it is impossible to miss.

### Trade Milestone Tracker
A horizontal stepper component.
- **Completed:** Blue line, blue icon with checkmark.
- **Active:** Blue pulsing ring around the icon.
- **Upcoming:** Gray dashed line, gray icon.

### Charts & Intelligence
- Use **Area Charts** for trade volume over time, utilizing the Secondary Blue with a 10% vertical gradient fill.
- **Bar Charts** for regional comparisons should use a monochromatic Slate palette to keep focus on the data, not the decoration.

### Input Fields
- Use a persistent 1px border (#E2E8F0).
- On focus, the border shifts to Secondary Blue (#2563EB) with a 2px outer glow (Secondary Blue at 10% opacity).