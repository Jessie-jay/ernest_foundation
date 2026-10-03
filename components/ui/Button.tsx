import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  href,
  className = '',
  style,
  ...props 
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
    transition: 'all var(--duration-fast) var(--ease-standard)',
    textDecoration: 'none',
  };
  
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-primary-500)', // Blue
      color: 'var(--color-white)',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      backgroundColor: 'var(--color-secondary-500)', // Green
      color: 'var(--color-white)',
      boxShadow: 'var(--shadow-sm)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-500)', // Blue
      border: '2px solid var(--color-primary-500)',
    },
    dark: {
      backgroundColor: 'var(--color-dark-900)',
      color: 'var(--color-white)',
    },
    light: {
      backgroundColor: 'var(--color-white)',
      color: 'var(--color-dark-900)',
      boxShadow: 'var(--shadow-sm)',
    },
  };
  
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      height: 'var(--button-height-sm)',
      padding: '0 var(--button-padding-x)',
      fontSize: 'var(--text-sm)',
      borderRadius: 'var(--button-radius)',
    },
    md: {
      height: 'var(--button-height-md)',
      padding: '0 var(--button-padding-x)',
      fontSize: 'var(--text-base)',
      borderRadius: 'var(--button-radius)',
    },
    lg: {
      height: 'var(--button-height-lg)',
      padding: '0 var(--button-padding-x)',
      fontSize: 'var(--text-lg)',
      borderRadius: 'var(--button-radius)',
    },
  };
  
  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };
  
  if (href) {
    return (
      <a href={href} style={combinedStyles} className={className}>
        {children}
        {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      </a>
    );
  }
  
  return (
    <button style={combinedStyles} className={className} {...props}>
      {children}
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
    </button>
  );
}
