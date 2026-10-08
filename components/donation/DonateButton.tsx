'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { useDonate } from './DonateContext';

type DonateButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
};

/**
 * A Donate button that opens the global donation modal.
 * Use this anywhere a "Donate Now" action is needed.
 */
export function DonateButton({
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  children = 'Donate Now',
  onClick,
}: DonateButtonProps) {
  const { openDonate } = useDonate();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      icon={icon}
      onClick={() => {
        onClick?.();
        openDonate();
      }}
    >
      {children}
    </Button>
  );
}
