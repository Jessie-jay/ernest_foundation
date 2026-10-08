'use client';

import React, { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

function CallbackContent() {
  const params = useSearchParams();
  const router = useRouter();
  const reference = params.get('reference') ?? params.get('trxref');

  useEffect(() => {
    if (!reference) {
      router.replace('/donate/failed');
      return;
    }
    let active = true;
    fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        if (data.error) {
          router.replace('/donate/failed');
          return;
        }
        if (data.status === 'success') {
          const q = new URLSearchParams();
          if (data.amount != null) q.set('amount', String(data.amount));
          if (data.currency) q.set('currency', String(data.currency));
          const query = q.toString();
          router.replace(`/donate/success${query ? `?${query}` : ''}`);
        } else if (data.status === 'pending' || data.status === 'ongoing') {
          router.replace('/donate/pending');
        } else {
          router.replace('/donate/failed');
        }
      })
      .catch(() => {
        if (active) router.replace('/donate/failed');
      });
    return () => {
      active = false;
    };
  }, [reference, router]);

  return (
    <section className="pt-40 pb-28 bg-white min-h-[70vh]">
      <div className="site-container max-w-xl text-center">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full border-4 border-[#E7F1FB] border-t-[#0876C9] animate-spin" />
        <h1 className="font-display font-bold text-2xl text-[#071A2B] mb-2">
          Confirming your donation&hellip;
        </h1>
        <p className="text-[#475467]">Please wait a moment.</p>
      </div>
    </section>
  );
}

export default function DonateCallbackPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Suspense fallback={null}>
          <CallbackContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
