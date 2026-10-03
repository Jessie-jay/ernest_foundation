# Component Templates

Ready-to-use component patterns using the design system.

## Button Component

```tsx
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: variant === 'primary' ? 'var(--color-accent-400)' : 
                        variant === 'secondary' ? 'var(--color-secondary-500)' : 'transparent',
        color: variant === 'primary' ? 'var(--color-dark-900)' : 'var(--color-white)',
        height: `var(--button-height-${size})`,
        padding: '0 var(--button-padding-x)',
        borderRadius: 'var(--button-radius)',
        border: variant === 'outline' ? '2px solid var(--color-dark-900)' : 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        fontWeight: 500,
        transition: 'all var(--duration-fast) var(--ease-standard)',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
```

## Card Component

```tsx
interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function Card({ title, description, children }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        padding: 'var(--space-8)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--color-border)',
        transition: 'all var(--duration-normal) var(--ease-standard)',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-2xl)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-3)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--leading-normal)',
        }}
      >
        {description}
      </p>
      {children}
    </div>
  );
}
```

## Section Container

```tsx
interface SectionProps {
  background?: 'default' | 'subtle' | 'dark';
  children: React.ReactNode;
}

export function Section({ background = 'default', children }: SectionProps) {
  const bgColor = 
    background === 'default' ? 'var(--color-background)' :
    background === 'subtle' ? 'var(--color-background-subtle)' :
    'var(--color-surface-dark)';
    
  return (
    <section
      style={{
        backgroundColor: bgColor,
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
      }}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
}
```

## Hero Section Pattern

```tsx
export function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        background: 'linear-gradient(to bottom right, var(--color-neutral-50), var(--color-white))',
      }}
    >
      <div className="container">
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-7xl)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-6)',
          }}
        >
          Your Hero Title
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xl)',
            lineHeight: 'var(--leading-normal)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            marginBottom: 'var(--space-8)',
          }}
        >
          Your compelling description goes here.
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}
```

## Badge Component

```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'neutral' | 'success';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const colors = {
    primary: { bg: 'var(--color-primary-50)', text: 'var(--color-primary-700)' },
    secondary: { bg: 'var(--color-secondary-50)', text: 'var(--color-secondary-700)' },
    neutral: { bg: 'var(--color-neutral-100)', text: 'var(--color-neutral-700)' },
    success: { bg: 'var(--color-success-light)', text: 'var(--color-success)' },
  };

  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: colors[variant].bg,
        color: colors[variant].text,
        padding: 'var(--space-1) var(--space-3)',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}
```

## Grid Layout Pattern

```tsx
export function FeatureGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-8)',
      }}
    >
      {/* Grid items */}
    </div>
  );
}
```

## Typography Styles

```tsx
// Display Heading
export const displayHeading = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-7xl)',
  lineHeight: 'var(--leading-tight)',
  color: 'var(--color-text-primary)',
};

// H1
export const h1 = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-5xl)',
  lineHeight: 'var(--leading-snug)',
  color: 'var(--color-text-primary)',
};

// H2
export const h2 = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-4xl)',
  lineHeight: 'var(--leading-snug)',
  color: 'var(--color-text-primary)',
};

// Body Large
export const bodyLarge = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-lg)',
  lineHeight: 'var(--leading-normal)',
  color: 'var(--color-text-secondary)',
};

// Body
export const body = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  lineHeight: 'var(--leading-normal)',
  color: 'var(--color-text-secondary)',
};

// Small
export const small = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)',
  lineHeight: 'var(--leading-normal)',
  color: 'var(--color-text-muted)',
};
```

## Modal Pattern

```tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        zIndex: 'var(--z-modal)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'var(--space-8)',
          maxWidth: '600px',
          width: '100%',
          boxShadow: 'var(--shadow-xl)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-6)',
          }}
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
```

## Alert Component

```tsx
interface AlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  children: React.ReactNode;
}

export function Alert({ type, title, children }: AlertProps) {
  const styles = {
    success: { bg: 'var(--color-success-light)', border: 'var(--color-success)' },
    warning: { bg: 'var(--color-warning-light)', border: 'var(--color-warning)' },
    error: { bg: 'var(--color-error-light)', border: 'var(--color-error)' },
    info: { bg: 'var(--color-info-light)', border: 'var(--color-info)' },
  };

  return (
    <div
      style={{
        backgroundColor: styles[type].bg,
        border: `1px solid ${styles[type].border}`,
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-4)',
      }}
    >
      {title && (
        <h4
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            fontWeight: 600,
            marginBottom: 'var(--space-2)',
          }}
        >
          {title}
        </h4>
      )}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          lineHeight: 'var(--leading-normal)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
```

## Input Field Pattern

```tsx
interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

export function Input({ label, type = 'text', placeholder }: InputProps) {
  return (
    <div style={{ marginBottom: 'var(--space-4)' }}>
      <label
        style={{
          display: 'block',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-2)',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          height: 'var(--button-height-md)',
          padding: '0 var(--space-4)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-primary)',
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          transition: 'all var(--duration-fast) var(--ease-standard)',
        }}
      />
    </div>
  );
}
```

## Loading Spinner

```tsx
export function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: '20px',
    md: '40px',
    lg: '60px',
  };

  return (
    <div
      style={{
        width: sizes[size],
        height: sizes[size],
        border: '3px solid var(--color-neutral-200)',
        borderTopColor: 'var(--color-primary-500)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}
    />
  );
}

// Add this to your CSS
/*
@keyframes spin {
  to { transform: rotate(360deg); }
}
*/
```

---

## Usage Tips

1. **Always use design tokens** instead of hardcoded values
2. **Keep components flexible** with props for variants
3. **Use semantic HTML** for accessibility
4. **Add transitions** for better UX
5. **Test responsively** across different screen sizes
6. **Follow naming conventions** from the design system

## Testing Your Components

Visit `/style-guide` to see all design tokens in action and test your components against the design system.
