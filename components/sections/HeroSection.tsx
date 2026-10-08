import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { DonateButton } from '@/components/donation/DonateButton';

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[560px] flex items-center justify-center overflow-hidden">
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Images/image_08.png"
          alt="Children smiling together"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 site-container-wide text-center">
        <h1 className="font-display font-semibold text-2xl sm:text-4xl lg:text-5xl text-white leading-[1.2] tracking-tight max-w-5xl mx-auto mb-10 text-balance">
          Guided by Love. Cared for with grace.<br />
          Building lives.
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DonateButton variant="primary" size="lg" className="btn-glass-primary">
            Support the Mission
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </DonateButton>
          <Button variant="light" size="lg" className="btn-glass-light" href="/about">
            Discover Our Story
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
