'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import { DonateModal } from './DonateModal';

type DonateContextValue = {
  openDonate: () => void;
  closeDonate: () => void;
  isOpen: boolean;
};

const DonateContext = createContext<DonateContextValue | null>(null);

export function DonateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDonate = useCallback(() => setIsOpen(true), []);
  const closeDonate = useCallback(() => setIsOpen(false), []);

  return (
    <DonateContext.Provider value={{ openDonate, closeDonate, isOpen }}>
      {children}
      <DonateModal isOpen={isOpen} onClose={closeDonate} />
    </DonateContext.Provider>
  );
}

export function useDonate() {
  const ctx = useContext(DonateContext);
  if (!ctx) {
    throw new Error('useDonate must be used within a DonateProvider');
  }
  return ctx;
}
