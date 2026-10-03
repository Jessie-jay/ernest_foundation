# Design Tokens Quick Reference

Quick reference for developers working with the Ernest Chianumba Foundation design system.

## 🎨 Most Common Colors

```css
/* Backgrounds */
--color-background              /* #FFFFFF - Main background */
--color-background-subtle       /* #F9FAFB - Subtle background */
--color-surface-dark            /* #071A2B - Dark surfaces/footer */

/* Text */
--color-text-primary            /* #101828 - Headings, primary text */
--color-text-secondary          /* #344054 - Body text */
--color-text-muted              /* #667085 - Muted/helper text */

/* Brand */
--color-primary-500             /* #0876C9 - Primary blue */
--color-secondary-500           /* #27C83E - Secondary green */
--color-accent-400              /* #FFD83D - Accent yellow */

/* Actions */
--color-action-primary          /* For main CTAs */
--color-action-secondary        /* For secondary buttons */
--color-action-accent           /* For accent buttons */
```

## 📝 Typography

```css
/* Fonts */
--font-display                  /* DM Serif Display - for headings */
--font-body                     /* Inter - for body text */

/* Common Sizes */
--text-base                     /* 16px - Body text */
--text-lg                       /* 18px - Large body */
--text-2xl                      /* 24px - Small heading */
--text-4xl                      /* 36px - Medium heading */
--text-5xl                      /* 48px - Large heading */
--text-7xl                      /* 72px - Hero text */

/* Line Heights */
--leading-tight                 /* 1.1 - Large headings */
--leading-snug                  /* 1.2 - Headings */
--leading-normal                /* 1.5 - Body text */
```

## 📐 Spacing

```css
/* Most Used */
--space-4                       /* 16px - Base unit */
--space-6                       /* 24px - Medium spacing */
--space-8                       /* 32px - Large spacing */
--space-12                      /* 48px - Section spacing */
--space-20                      /* 80px - Large section */
```

## 🔘 Buttons

```css
--button-height-sm              /* 40px */
--button-height-md              /* 48px */
--button-height-lg              /* 56px */
--button-padding-x              /* 24px */
--button-radius                 /* 9999px - Full rounded */
```

## 📦 Border Radius

```css
--radius-md                     /* 12px - Small cards */
--radius-lg                     /* 20px - Medium cards */
--radius-xl                     /* 24px - Large cards */
--radius-full                   /* 9999px - Pills/buttons */
```

## 🌊 Shadows

```css
--shadow-sm                     /* Cards at rest */
--shadow-md                     /* Dropdowns */
--shadow-lg                     /* Modals */
```

## ⚡ Motion

```css
--duration-fast                 /* 150ms - Quick interactions */
--duration-normal               /* 250ms - Standard transitions */
--ease-standard                 /* cubic-bezier(0.2, 0.8, 0.2, 1) */
```

## 💡 Usage Examples

### Heading with Display Font
```jsx
<h1 style={{
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-5xl)',
  lineHeight: 'var(--leading-tight)',
  color: 'var(--color-text-primary)',
}}>
  Your Heading
</h1>
```

### Body Text
```jsx
<p style={{
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-lg)',
  lineHeight: 'var(--leading-normal)',
  color: 'var(--color-text-secondary)',
}}>
  Your paragraph text
</p>
```

### Card with Shadow
```jsx
<div style={{
  backgroundColor: 'var(--color-surface)',
  padding: 'var(--space-8)',
  borderRadius: 'var(--radius-xl)',
  boxShadow: 'var(--shadow-md)',
}}>
  Card content
</div>
```

### Button with Transition
```jsx
<button style={{
  backgroundColor: 'var(--color-accent-400)',
  color: 'var(--color-dark-900)',
  height: 'var(--button-height-md)',
  padding: '0 var(--button-padding-x)',
  borderRadius: 'var(--button-radius)',
  transition: 'all var(--duration-fast) var(--ease-standard)',
}}>
  Donate Now
</button>
```

## 🎯 Component Patterns

### Section Spacing
```css
.section {
  padding-top: var(--space-20);    /* 80px */
  padding-bottom: var(--space-20);
}
```

### Container
```css
.container {
  max-width: var(--container-xl);  /* 1200px */
  margin: 0 auto;
  padding: 0 var(--space-4);       /* 16px on mobile */
}
```

### Card Hover Effect
```css
.card {
  transition: transform var(--duration-normal) var(--ease-standard),
              box-shadow var(--duration-normal) var(--ease-standard);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

## 🚨 Common Mistakes to Avoid

❌ **Don't use arbitrary colors**
```css
/* Bad */
color: #123456;

/* Good */
color: var(--color-text-primary);
```

❌ **Don't use arbitrary spacing**
```css
/* Bad */
margin-bottom: 17px;

/* Good */
margin-bottom: var(--space-4);
```

❌ **Don't use custom font sizes**
```css
/* Bad */
font-size: 19px;

/* Good */
font-size: var(--text-lg);
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 640px) {  /* sm */
  /* Tablet styles */
}

@media (min-width: 768px) {  /* md */
  /* Small desktop styles */
}

@media (min-width: 1024px) { /* lg */
  /* Desktop styles */
}

@media (min-width: 1280px) { /* xl */
  /* Large desktop styles */
}
```

## 🔗 Resources

- Full Design System: `/DESIGN_SYSTEM.md`
- Style Guide Page: http://localhost:3001/style-guide
- Design Tokens: `/lib/design-tokens.ts`
- Global Styles: `/app/globals.css`

## 🎨 Color Palette at a Glance

| Color | Use Case | Variable |
|-------|----------|----------|
| 🔵 Blue | Primary actions, links | `--color-primary-500` |
| 🟢 Green | Success, growth | `--color-secondary-500` |
| 🟡 Yellow | CTAs, highlights | `--color-accent-400` |
| ⚫ Dark | Footer, dark sections | `--color-dark-900` |
| ⚪ Neutral | Text, borders, backgrounds | `--color-neutral-*` |

---

**Quick Tip:** Use the style guide page (`/style-guide`) to visually browse all tokens and copy examples!
