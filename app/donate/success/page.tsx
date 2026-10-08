'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const CURRENCY_SYMBOLS: Record<string, string> = {
  NGN: '\u20A6',
  USD: '$',
};

function SuccessContent() {
  const params = useSearchParams();
  const amount = params.get('amount');
  const currency = params.get('currency');

  const formattedAmount = (() => {
    if (!amount) return null;
    const n = Number(amount);
    if (!Number.isFinite(n)) return null;
    const symbol = currency ? CURRENCY_SYMBOLS[currency] ?? '' : '';
    const value = n.toLocaleString(undefined, {
      minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
      maximumFractionDigits: 2,
    });
    return `${symbol}${value}${!symbol && currency ? ` ${currency}` : ''}`;
  })();

  return (
    <section className="pt-40 pb-28 bg-white min-h-[70vh]">
      <div className="site-container max-w-xl text-center">
        <span className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#E6F3EA] text-[#2E8B57] flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>

        <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#071A2B] mb-3">
          Thank you for your donation!
        </h1>

        <p className="text-[#475467] text-lg mb-8">
          {formattedAmount ? (
            <>
              Your gift of{' '}
              <span className="font-semibold text-[#071A2B]">{formattedAmount}</span>{' '}
              has been received. Your generosity helps the Foundation serve
              communities, support people in need, and build lives across Nigeria.
            </>
          ) : (
            <>
              Your donation has been received. Your generosity helps the Foundation
              serve communities, support people in need, and build lives across
              Nigeria.
            </>
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-7 rounded-[10px] bg-[#0876C9] text-white font-medium hover:bg-[#0664AA] transition-colors"
          >
            Back to Home
          </a>
          <a
            href="/our-work"
            className="inline-flex items-center justify-center h-12 px-7 rounded-[10px] border border-[#D0D5DD] text-[#071A2B] font-medium hover:bg-[#F2F4F7] transition-colors"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default function DonateSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Suspense fallback={null}>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
