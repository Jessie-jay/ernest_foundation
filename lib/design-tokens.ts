/**
 * Ernest Chianumba Foundation - Design System
 * 
 * Design tokens for consistent styling across the application.
 * All values are derived from CSS custom properties defined in globals.css
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    50: 'var(--color-primary-50)',
    100: 'var(--color-primary-100)',
    200: 'var(--color-primary-200)',
    300: 'var(--color-primary-300)',
    400: 'var(--color-primary-400)',
    500: 'var(--color-primary-500)',
    600: 'var(--color-primary-600)',
    700: 'var(--color-primary-700)',
    800: 'var(--color-primary-800)',
    900: 'var(--color-primary-900)',
  },
  
  // Secondary Brand Colors
  secondary: {
    50: 'var(--color-secondary-50)',
    100: 'var(--color-secondary-100)',
    200: 'var(--color-secondary-200)',
    300: 'var(--color-secondary-300)',
    400: 'var(--color-secondary-400)',
    500: 'var(--color-secondary-500)',
    600: 'var(--color-secondary-600)',
    700: 'var(--color-secondary-700)',
    800: 'var(--color-secondary-800)',
    900: 'var(--color-secondary-900)',
  },
  
  // Accent Colors
  accent: {
    50: 'var(--color-accent-50)',
    100: 'var(--color-accent-100)',
    200: 'var(--color-accent-200)',
    300: 'var(--color-accent-300)',
    400: 'var(--color-accent-400)',
    500: 'var(--color-accent-500)',
    600: 'var(--color-accent-600)',
  },
  
  // Neutral Colors
  neutral: {
    50: 'var(--color-neutral-50)',
    100: 'var(--color-neutral-100)',
    200: 'var(--color-neutral-200)',
    300: 'var(--color-neutral-300)',
    400: 'var(--color-neutral-400)',
    500: 'var(--color-neutral-500)',
    600: 'var(--color-neutral-600)',
    700: 'var(--color-neutral-700)',
    800: 'var(--color-neutral-800)',
    900: 'var(--color-neutral-900)',
  },
  
  // Dark Surface
  dark: {
    700: 'var(--color-dark-700)',
    800: 'var(--color-dark-800)',
    900: 'var(--color-dark-900)',
  },
  
  // Semantic Colors
  background: 'var(--color-background)',
  backgroundSubtle: 'var(--color-background-subtle)',
  surface: 'var(--color-surface)',
  surfaceSubtle: 'var(--color-surface-subtle)',
  surfaceDark: 'var(--color-surface-dark)',
  
  // Text Colors
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    muted: 'var(--color-text-muted)',
    inverse: 'var(--color-text-inverse)',
  },
  
  // Border Colors
  border: 'var(--color-border)',
  borderStrong: 'var(--color-border-strong)',
  
  // Link Colors
  link: 'var(--color-link)',
  linkHover: 'var(--color-link-hover)',
  
  // Action Colors
  action: {
    primary: 'var(--color-action-primary)',
    primaryHover: 'var(--color-action-primary-hover)',
    secondary: 'var(--color-action-secondary)',
    secondaryHover: 'var(--color-action-secondary-hover)',
    accent: 'var(--color-action-accent)',
    accentHover: 'var(--color-action-accent-hover)',
  },
  
  // Status Colors
  status: {
    success: 'var(--color-success)',
    successLight: 'var(--color-success-light)',
    warning: 'var(--color-warning)',
    warningLight: 'var(--color-warning-light)',
    error: 'var(--color-error)',
    errorLight: 'var(--color-error-light)',
    info: 'var(--color-info)',
    infoLight: 'var(--color-info-light)',
  },
  
  // Basic Colors
  white: 'var(--color-white)',
  black: 'var(--color-black)',
} as const;

export const typography = {
  // Font Families
  fontDisplay: 'var(--font-display)',
  fontBody: 'var(--font-body)',
  
  // Font Sizes
  size: {
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    base: 'var(--text-base)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
    '2xl': 'var(--text-2xl)',
    '3xl': 'var(--text-3xl)',
    '4xl': 'var(--text-4xl)',
    '5xl': 'var(--text-5xl)',
    '6xl': 'var(--text-6xl)',
    '7xl': 'var(--text-7xl)',
    '8xl': 'var(--text-8xl)',
  },
  
  // Line Heights
  leading: {
    tight: 'var(--leading-tight)',
    snug: 'var(--leading-snug)',
    normal: 'var(--leading-normal)',
    relaxed: 'var(--leading-relaxed)',
  },
} as const;

export const spacing = {
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  5: 'var(--space-5)',
  6: 'var(--space-6)',
  8: 'var(--space-8)',
  10: 'var(--space-10)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
  20: 'var(--space-20)',
  24: 'var(--space-24)',
  32: 'var(--space-32)',
  40: 'var(--space-40)',
} as const;

export const containers = {
  sm: 'var(--container-sm)',
  md: 'var(--container-md)',
  lg: 'var(--container-lg)',
  xl: 'var(--container-xl)',
  '2xl': 'var(--container-2xl)',
} as const;

export const radius = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
} as const;

export const shadows = {
  xs: 'var(--shadow-xs)',
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
} as const;

export const buttons = {
  height: {
    sm: 'var(--button-height-sm)',
    md: 'var(--button-height-md)',
    lg: 'var(--button-height-lg)',
  },
  paddingX: 'var(--button-padding-x)',
  radius: 'var(--button-radius)',
} as const;

export const motion = {
  duration: {
    fast: 'var(--duration-fast)',
    normal: 'var(--duration-normal)',
    slow: 'var(--duration-slow)',
  },
  ease: {
    standard: 'var(--ease-standard)',
  },
} as const;

export const zIndex = {
  base: 'var(--z-base)',
  dropdown: 'var(--z-dropdown)',
  sticky: 'var(--z-sticky)',
  modal: 'var(--z-modal)',
  toast: 'var(--z-toast)',
} as const;

// Convenience object for easier imports
export const tokens = {
  colors,
  typography,
  spacing,
  containers,
  radius,
  shadows,
  buttons,
  motion,
  zIndex,
} as const;

export default tokens;
