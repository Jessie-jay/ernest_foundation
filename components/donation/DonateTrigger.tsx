'use client';

import React from 'react';
import { useDonate } from './DonateContext';

type DonateTriggerProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * A bare trigger that opens the donation modal, rendered as a styled <button>.
 * Use when you need full control over styling (pass your own className).
 */
export function DonateTrigger({ className, children }: DonateTriggerProps) {
  const { openDonate } = useDonate();
  return (
    <button type="button" onClick={openDonate} className={className}>
      {children}
    </button>
  );
}
