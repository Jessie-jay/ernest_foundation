'use client';

import React, { useEffect, useState } from 'react';

type Currency = {
  code: string;
  label: string;
  symbol: string;
};

// Currencies offered for donation
const CURRENCIES: Currency[] = [
  { code: 'NGN', label: 'Nigerian Naira (NGN)', symbol: '\u20A6' },
  { code: 'USD', label: 'US Dollar (USD)', symbol: '$' },
];

const fieldClass =
  'w-full h-12 px-4 rounded-[10px] border border-[#E4E7EC] bg-[#F9FAFB] text-[#071A2B] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#0876C9]/30 focus:border-[#0876C9] transition';

const labelClass = 'block text-sm font-medium text-[#344054] mb-2';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function DonateModal({ isOpen, onClose }: Props) {
  const [currency, setCurrency] = useState('NGN');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close on Escape and lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  // Reset transient state when the modal closes
  useEffect(() => {
    if (!isOpen) {
      setError(null);
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const selected = CURRENCIES.find((c) => c.code === currency) ?? CURRENCIES[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const numericAmount = Number(amount);
    if (!numericAmount || numericAmount <= 0) {
      setError('Please enter a valid donation amount.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/paystack/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: numericAmount, currency }),
      });
      const data = await res.json();

      if (!res.ok || !data.authorization_url) {
        setError(data.error || 'Could not start the payment. Please try again.');
        setLoading(false);
        return;
      }

      // Redirect to the Paystack payment gateway
      window.location.href = data.authorization_url;
    } catch {
      setError('Something went wrong. Please check your connection and try again.');
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#071A2B]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm rounded-[16px] bg-white shadow-[0_24px_60px_rgba(16,24,40,0.25)] p-6 sm:p-8">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 w-9 h-9 rounded-full flex items-center justify-center text-[#475467] hover:bg-[#F2F4F7] transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 id="donate-modal-title" className="font-display font-bold text-2xl text-[#071A2B] mb-2">
          Make a Donation
        </h2>
        <p className="text-sm text-[#475467] mb-6">
          How much would you like to donate?
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Currency */}
          <div>
            <label htmlFor="donate-currency" className={labelClass}>Currency</label>
            <div className="relative">
              <select
                id="donate-currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className={`${fieldClass} appearance-none pr-10`}
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
              {/* Dropdown chevron icon */}
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#475467]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>

          {/* Donation Amount */}
          <div>
            <label htmlFor="donate-amount" className={labelClass}>Donation Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3] text-sm pointer-events-none">
                {selected.symbol}
              </span>
              <input
                id="donate-amount"
                type="number"
                min="1"
                step="any"
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                required
                className={`${fieldClass} pl-10`}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-[#D8463C]" role="alert">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-[10px] bg-[#0876C9] text-white font-semibold transition-colors hover:bg-[#0664AA] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Redirecting\u2026' : 'Continue to Payment'}
            {!loading && (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>

          <p className="text-xs text-[#98A2B3] text-center">
            Payments are securely processed by Paystack.
          </p>
        </form>
      </div>
    </div>
  );
}
