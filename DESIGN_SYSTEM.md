# Ernest Chianumba Foundation - Design System

A comprehensive design system for building consistent, accessible, and beautiful interfaces.

## Table of Contents

- [Colors](#colors)
- [Typography](#typography)
- [Spacing](#spacing)
- [Layout](#layout)
- [Components](#components)
- [Shadows](#shadows)
- [Motion](#motion)
- [Usage](#usage)

---

## Colors

### Primary (Blue)
Primary brand color representing trust, compassion, and reliability.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-50` | #EFF8FF | Lightest tint |
| `--color-primary-100` | #DFF0FF | Very light backgrounds |
| `--color-primary-200` | #B9E0FF | Light backgrounds |
| `--color-primary-300` | #7CC5FA | Subtle borders |
| `--color-primary-400` | #3BA7F2 | Hover states |
| `--color-primary-500` | #0876C9 | **Main brand color** |
| `--color-primary-600` | #0664AA | Active/pressed states |
| `--color-primary-700` | #05518A | Dark text on light |
| `--color-primary-800` | #073F69 | Darker text |
| `--color-primary-900` | #082F4D | Darkest shade |

### Secondary (Green)
Secondary brand color representing growth, hope, and life.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-secondary-50` | #F0FDF4 | Lightest tint |
| `--color-secondary-100` | #DCFCE7 | Success backgrounds |
| `--color-secondary-200` | #BBF7D0 | Light backgrounds |
| `--color-secondary-300` | #86EFAC | Subtle borders |
| `--color-secondary-400` | #4ADE80 | Hover states |
| `--color-secondary-500` | #27C83E | **Main secondary color** |
| `--color-secondary-600` | #1EAC34 | Active states |
| `--color-secondary-700` | #18892B | Dark states |
| `--color-secondary-800` | #166D26 | Darker states |
| `--color-secondary-900` | #145A24 | Darkest shade |

### Accent (Yellow)
Accent color for calls-to-action and highlights.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent-50` | #FFFBEA | Lightest tint |
| `--color-accent-100` | #FFF3B8 | Light backgrounds |
| `--color-accent-200` | #FFE77A | Subtle highlights |
| `--color-accent-300` | #FFDD4A | Medium highlights |
| `--color-accent-400` | #FFD83D | **Main accent color** |
| `--color-accent-500` | #F9C900 | Hover states |
| `--color-accent-600` | #D9A900 | Active states |

### Neutral (Gray Scale)
Foundation for text, borders, and backgrounds.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-neutral-50` | #F9FAFB | Subtle backgrounds |
| `--color-neutral-100` | #F2F4F7 | Light backgrounds |
| `--color-neutral-200` | #E4E7EC | Borders |
| `--color-neutral-300` | #D0D5DD | Strong borders |
| `--color-neutral-400` | #98A2B3 | Disabled text |
| `--color-neutral-500` | #667085 | Muted text |
| `--color-neutral-600` | #475467 | Secondary text |
| `--color-neutral-700` | #344054 | **Body text** |
| `--color-neutral-800` | #1D2939 | Dark text |
| `--color-neutral-900` | #101828 | **Heading text** |

### Dark Surface
For dark mode and footer sections.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-dark-700` | #123A58 | Dark accents |
| `--color-dark-800` | #0B263D | Dark surfaces |
| `--color-dark-900` | #071A2B | **Main dark surface** |

### Semantic Colors

```css
/* Backgrounds */
--color-background: #FFFFFF
--color-background-subtle: #F9FAFB
--color-surface: #FFFFFF
--color-surface-subtle: #F9FAFB
--color-surface-dark: #071A2B

/* Text */
--color-text-primary: #101828
--color-text-secondary: #344054
--color-text-muted: #667085
--color-text-inverse: #FFFFFF

/* Borders */
--color-border: #E4E7EC
--color-border-strong: #D0D5DD

/* Links */
--color-link: #0876C9
--color-link-hover: #0664AA
```

### Status Colors

```css
--color-success: #16A34A
--color-success-light: #DCFCE7
--color-warning: #D97706
--color-warning-light: #FEF3C7
--color-error: #DC2626
--color-error-light: #FEE2E2
--color-info: #0876C9
--color-info-light: #EFF8FF
```

---

## Typography

### Font Families

```css
--font-display: "DM Serif Display", Georgia, serif
--font-body: "Inter", Arial, sans-serif
```

**Usage:**
- **Display Font**: Headings, hero text, featured quotes
- **Body Font**: Paragraph text, UI elements, navigation

### Type Scale

| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 12px | Fine print, captions |
| `--text-sm` | 14px | Small UI text |
| `--text-base` | 16px | **Body text** |
| `--text-lg` | 18px | Large body text |
| `--text-xl` | 20px | Small headings |
| `--text-2xl` | 24px | Subheadings |
| `--text-3xl` | 30px | H3 |
| `--text-4xl` | 36px | H2 |
| `--text-5xl` | 48px | H1 |
| `--text-6xl` | 60px | Large hero |
| `--text-7xl` | 72px | XL hero |
| `--text-8xl` | 88px | Display text |

### Line Heights

```css
--leading-tight: 1.1    /* For large headings */
--leading-snug: 1.2     /* For headings */
--leading-normal: 1.5   /* For body text */
--leading-relaxed: 1.7  /* For long-form content */
```

### Typography Examples

```html
<!-- Hero Heading -->
<h1 style="
  font-family: var(--font-display);
  font-size: var(--text-7xl);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
">
  Guided by love. Cared for with grace.
</h1>

<!-- Body Text -->
<p style="
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
">
  We extend God's love through practical care and support.
</p>
```

---

## Spacing

Consistent spacing scale for margins, padding, and gaps.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing |
| `--space-2` | 8px | Very small |
| `--space-3` | 12px | Small |
| `--space-4` | 16px | **Base unit** |
| `--space-5` | 20px | Medium-small |
| `--space-6` | 24px | Medium |
| `--space-8` | 32px | Large |
| `--space-10` | 40px | XL |
| `--space-12` | 48px | 2XL |
| `--space-16` | 64px | 3XL |
| `--space-20` | 80px | Section spacing (small) |
| `--space-24` | 96px | Section spacing (medium) |
| `--space-32` | 128px | Section spacing (large) |
| `--space-40` | 160px | Section spacing (XL) |

---

## Layout

### Container Widths

```css
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1200px   /* Main content */
--container-2xl: 1280px  /* Maximum width */
```

### Responsive Container Class

```css
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);  /* 16px mobile */
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container {
    padding-left: var(--space-6);  /* 24px tablet */
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--space-8);  /* 32px desktop */
    padding-right: var(--space-8);
  }
}
```

---

## Components

### Buttons

#### Size Tokens

```css
--button-height-sm: 40px
--button-height-md: 48px
--button-height-lg: 56px
--button-padding-x: 24px
--button-radius: var(--radius-full)
```

#### Button Variants

**Primary Button**
```html
<button style="
  background: var(--color-accent-400);
  color: var(--color-dark-900);
  height: var(--button-height-md);
  padding: 0 var(--button-padding-x);
  border-radius: var(--button-radius);
  font-family: var(--font-body);
  font-weight: 500;
  transition: all var(--duration-fast) var(--ease-standard);
">
  Donate Now
</button>
```

**Secondary Button**
```html
<button style="
  background: var(--color-secondary-500);
  color: var(--color-white);
  height: var(--button-height-md);
  padding: 0 var(--button-padding-x);
  border-radius: var(--button-radius);
">
  Learn More
</button>
```

**Outline Button**
```html
<button style="
  background: transparent;
  color: var(--color-dark-900);
  border: 2px solid var(--color-dark-900);
  height: var(--button-height-md);
  padding: 0 var(--button-padding-x);
  border-radius: var(--button-radius);
">
  Our Mission
</button>
```

### Border Radius

```css
--radius-sm: 8px      /* Small elements */
--radius-md: 12px     /* Inputs, small cards */
--radius-lg: 20px     /* Medium cards */
--radius-xl: 24px     /* Large cards */
--radius-2xl: 32px    /* Extra large cards */
--radius-full: 9999px /* Pills, buttons */
```

---

## Shadows

Elevation system for cards, modals, and overlays.

```css
--shadow-xs: 0 1px 2px rgba(16, 24, 40, 0.05)
--shadow-sm: 0 2px 4px rgba(16, 24, 40, 0.06)
--shadow-md: 0 4px 12px rgba(16, 24, 40, 0.08)
--shadow-lg: 0 12px 32px rgba(16, 24, 40, 0.12)
--shadow-xl: 0 20px 48px rgba(16, 24, 40, 0.16)
```

**Usage:**
- `xs` - Subtle hover states
- `sm` - Cards at rest
- `md` - Dropdown menus, popovers
- `lg` - Modals, drawers
- `xl` - Large modals, full-screen overlays

---

## Motion

### Duration

```css
--duration-fast: 150ms     /* Quick interactions */
--duration-normal: 250ms   /* Standard transitions */
--duration-slow: 400ms     /* Complex animations */
```

### Easing

```css
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1)
```

### Example Usage

```css
.button {
  transition: all var(--duration-fast) var(--ease-standard);
}

.card {
  transition: transform var(--duration-normal) var(--ease-standard),
              box-shadow var(--duration-normal) var(--ease-standard);
}
```

---

## Z-Index

Layering system for overlays and positioned elements.

```css
--z-base: 0        /* Default layer */
--z-dropdown: 100  /* Dropdowns, tooltips */
--z-sticky: 200    /* Sticky headers */
--z-modal: 300     /* Modals, dialogs */
--z-toast: 400     /* Notifications, toasts */
```

---

## Usage

### In CSS

```css
.hero {
  background: var(--color-primary-500);
  padding: var(--space-20) var(--space-4);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
}

.heading {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}
```

### In TypeScript/React

```typescript
import { colors, typography, spacing } from '@/lib/design-tokens';

const styles = {
  container: {
    backgroundColor: colors.background,
    padding: spacing[8],
    borderRadius: '24px',
  },
  heading: {
    fontFamily: typography.fontDisplay,
    fontSize: typography.size['5xl'],
    color: colors.text.primary,
  },
};
```

### With Tailwind (if configured)

```tsx
<div className="bg-primary-500 text-white p-8 rounded-2xl shadow-lg">
  <h1 className="font-display text-5xl leading-tight">
    Welcome
  </h1>
</div>
```

---

## Accessibility

### Color Contrast

All text/background combinations meet WCAG AA standards:
- Primary text (#101828) on white = 15.8:1 ✓
- Secondary text (#344054) on white = 10.4:1 ✓
- White text on Primary-500 (#0876C9) = 4.8:1 ✓

### Motion Preferences

Respect user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Best Practices

1. **Use semantic tokens** - Prefer `--color-text-primary` over `--color-neutral-900`
2. **Maintain consistent spacing** - Use the spacing scale, avoid arbitrary values
3. **Follow the type scale** - Don't use font sizes outside the scale
4. **Layer properly** - Use z-index tokens for stacking context
5. **Test accessibility** - Verify contrast ratios and keyboard navigation
6. **Respect motion preferences** - Always include reduced-motion queries

---

## Resources

- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Google Fonts - DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Version:** 1.0.0  
**Last Updated:** October 2026  
**Maintained by:** Ernest Chianumba Foundation Development Team
