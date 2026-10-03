# Migration Guide: Moving to Design Tokens

A guide for updating existing components to use the new design system.

## Quick Migration Checklist

- [ ] Replace hardcoded colors with semantic tokens
- [ ] Update spacing values to use spacing scale
- [ ] Replace font sizes with type scale
- [ ] Update border radius values
- [ ] Add transitions using motion tokens
- [ ] Replace z-index values with z-index tokens
- [ ] Test component in different viewports
- [ ] Verify accessibility (contrast, keyboard nav)

---

## Color Migrations

### Before → After

```css
/* ❌ Before: Hardcoded Colors */
.button {
  background: #FFD83D;
  color: #071A2B;
}

.heading {
  color: #101828;
}

.text {
  color: #344054;
}

/* ✅ After: Semantic Tokens */
.button {
  background: var(--color-accent-400);
  color: var(--color-dark-900);
}

.heading {
  color: var(--color-text-primary);
}

.text {
  color: var(--color-text-secondary);
}
```

### Common Color Replacements

| Old Value | New Token | Usage |
|-----------|-----------|-------|
| `#FFFFFF` | `var(--color-white)` | White backgrounds |
| `#F9FAFB` | `var(--color-neutral-50)` | Subtle backgrounds |
| `#101828` | `var(--color-text-primary)` | Headings |
| `#344054` | `var(--color-text-secondary)` | Body text |
| `#667085` | `var(--color-text-muted)` | Helper text |
| `#0876C9` | `var(--color-primary-500)` | Primary actions |
| `#27C83E` | `var(--color-secondary-500)` | Secondary actions |
| `#FFD83D` | `var(--color-accent-400)` | CTAs, highlights |
| `#071A2B` | `var(--color-dark-900)` | Dark sections |
| `#E4E7EC` | `var(--color-border)` | Borders |

---

## Spacing Migrations

### Before → After

```css
/* ❌ Before: Arbitrary Spacing */
.card {
  padding: 32px;
  margin-bottom: 24px;
  gap: 16px;
}

.section {
  padding: 80px 20px;
}

/* ✅ After: Spacing Scale */
.card {
  padding: var(--space-8);
  margin-bottom: var(--space-6);
  gap: var(--space-4);
}

.section {
  padding: var(--space-20) var(--space-4);
}
```

### Spacing Conversion Table

| Old Value | New Token | Use Case |
|-----------|-----------|----------|
| `4px` | `var(--space-1)` | Tight spacing |
| `8px` | `var(--space-2)` | Very small gaps |
| `12px` | `var(--space-3)` | Small spacing |
| `16px` | `var(--space-4)` | **Base unit** |
| `24px` | `var(--space-6)` | Medium spacing |
| `32px` | `var(--space-8)` | Large spacing |
| `48px` | `var(--space-12)` | XL spacing |
| `80px` | `var(--space-20)` | Section padding |

---

## Typography Migrations

### Before → After

```css
/* ❌ Before: Custom Font Sizes */
.hero-title {
  font-family: "DM Serif Display", serif;
  font-size: 72px;
  line-height: 1.1;
}

.body-text {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 1.6;
}

/* ✅ After: Typography Tokens */
.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-7xl);
  line-height: var(--leading-tight);
}

.body-text {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
}
```

### Font Size Conversion

| Old Size | New Token | Usage |
|----------|-----------|-------|
| `12px` | `var(--text-xs)` | Fine print |
| `14px` | `var(--text-sm)` | Small text |
| `16px` | `var(--text-base)` | **Body text** |
| `18px` | `var(--text-lg)` | Large body |
| `20px` | `var(--text-xl)` | Small heading |
| `24px` | `var(--text-2xl)` | Subheading |
| `36px` | `var(--text-4xl)` | H2 |
| `48px` | `var(--text-5xl)` | H1 |
| `72px` | `var(--text-7xl)` | Hero |

---

## Component-Specific Migrations

### Button Component

```tsx
// ❌ Before
<button
  style={{
    background: '#FFD83D',
    color: '#071A2B',
    padding: '12px 24px',
    borderRadius: '9999px',
    fontSize: '16px',
    transition: 'all 0.2s',
  }}
>
  Click Me
</button>

// ✅ After
<button
  style={{
    background: 'var(--color-accent-400)',
    color: 'var(--color-dark-900)',
    height: 'var(--button-height-md)',
    padding: '0 var(--button-padding-x)',
    borderRadius: 'var(--button-radius)',
    fontSize: 'var(--text-base)',
    transition: 'all var(--duration-fast) var(--ease-standard)',
  }}
>
  Click Me
</button>
```

### Card Component

```tsx
// ❌ Before
<div
  style={{
    background: 'white',
    padding: '32px',
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid #E4E7EC',
  }}
>
  Content
</div>

// ✅ After
<div
  style={{
    background: 'var(--color-surface)',
    padding: 'var(--space-8)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    border: '1px solid var(--color-border)',
  }}
>
  Content
</div>
```

### Section Component

```tsx
// ❌ Before
<section
  style={{
    background: '#F9FAFB',
    paddingTop: '80px',
    paddingBottom: '80px',
  }}
>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
    Content
  </div>
</section>

// ✅ After
<section
  style={{
    background: 'var(--color-background-subtle)',
    paddingTop: 'var(--space-20)',
    paddingBottom: 'var(--space-20)',
  }}
>
  <div className="container">
    Content
  </div>
</section>
```

---

## Shadow Migrations

```css
/* ❌ Before */
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.modal {
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.16);
}

/* ✅ After */
.card {
  box-shadow: var(--shadow-md);
}

.modal {
  box-shadow: var(--shadow-xl);
}
```

---

## Border Radius Migrations

```css
/* ❌ Before */
.input {
  border-radius: 12px;
}

.card {
  border-radius: 20px;
}

.button {
  border-radius: 9999px;
}

/* ✅ After */
.input {
  border-radius: var(--radius-md);
}

.card {
  border-radius: var(--radius-lg);
}

.button {
  border-radius: var(--radius-full);
}
```

---

## Transition Migrations

```css
/* ❌ Before */
.button {
  transition: all 0.2s ease;
}

.card {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ✅ After */
.button {
  transition: all var(--duration-fast) var(--ease-standard);
}

.card {
  transition: transform var(--duration-normal) var(--ease-standard);
}
```

---

## Z-Index Migrations

```css
/* ❌ Before */
.header {
  z-index: 100;
}

.modal {
  z-index: 1000;
}

.tooltip {
  z-index: 9999;
}

/* ✅ After */
.header {
  z-index: var(--z-sticky);
}

.modal {
  z-index: var(--z-modal);
}

.tooltip {
  z-index: var(--z-dropdown);
}
```

---

## React/TypeScript Migration

### Using Design Token Module

```tsx
// ❌ Before
import React from 'react';

const styles = {
  button: {
    backgroundColor: '#FFD83D',
    color: '#071A2B',
    padding: '12px 24px',
  }
};

// ✅ After
import React from 'react';
import { colors, spacing, buttons } from '@/lib/design-tokens';

const styles = {
  button: {
    backgroundColor: colors.accent[400],
    color: colors.dark[900],
    height: buttons.height.md,
    padding: `0 ${spacing[6]}`,
  }
};
```

---

## Gradual Migration Strategy

### Step 1: Start with New Components
- Use tokens for all new components
- Get familiar with the system

### Step 2: Update High-Traffic Pages
- Homepage
- Main navigation
- Footer

### Step 3: Migrate Component by Component
- Start with simple components (buttons, cards)
- Move to complex components (forms, modals)

### Step 4: Cleanup
- Remove old hardcoded values
- Update documentation
- Run accessibility audit

---

## Testing Checklist

After migrating a component:

- [ ] Visual appearance matches original
- [ ] Hover/focus states work correctly
- [ ] Responsive behavior is intact
- [ ] Colors have proper contrast (use browser DevTools)
- [ ] Animations/transitions feel smooth
- [ ] Component works in light/dark contexts
- [ ] No console warnings
- [ ] TypeScript types are correct

---

## Common Pitfalls

### ❌ Mixing Old and New
```css
/* Don't mix tokens with hardcoded values */
.button {
  background: var(--color-primary-500);
  padding: 12px;  /* ❌ Should be var(--space-3) */
}
```

### ❌ Not Using Semantic Tokens
```css
/* Use semantic tokens, not color tokens directly */
.text {
  color: var(--color-neutral-900);  /* ❌ Not semantic */
  color: var(--color-text-primary); /* ✅ Semantic */
}
```

### ❌ Skipping Transitions
```css
/* Don't forget to add motion tokens */
.button {
  background: var(--color-accent-400);
  /* ❌ Missing transition */
}

.button {
  background: var(--color-accent-400);
  transition: all var(--duration-fast) var(--ease-standard); /* ✅ */
}
```

---

## Quick Reference

### Most Common Replacements

```css
/* Colors */
#FFFFFF → var(--color-white)
#F9FAFB → var(--color-background-subtle)
#101828 → var(--color-text-primary)
#344054 → var(--color-text-secondary)
#0876C9 → var(--color-primary-500)
#27C83E → var(--color-secondary-500)
#FFD83D → var(--color-accent-400)

/* Spacing */
16px → var(--space-4)
24px → var(--space-6)
32px → var(--space-8)
48px → var(--space-12)
80px → var(--space-20)

/* Font Sizes */
16px → var(--text-base)
18px → var(--text-lg)
24px → var(--text-2xl)
48px → var(--text-5xl)

/* Border Radius */
12px → var(--radius-md)
20px → var(--radius-lg)
9999px → var(--radius-full)
```

---

## Need Help?

1. Check the [Style Guide](/style-guide)
2. Read the [Quick Reference](./DESIGN_TOKENS_QUICK_REFERENCE.md)
3. Copy from [Component Templates](./COMPONENT_TEMPLATES.md)
4. Review the [Full Design System](../DESIGN_SYSTEM.md)

---

**Last Updated**: October 2026  
**Version**: 1.0.0
