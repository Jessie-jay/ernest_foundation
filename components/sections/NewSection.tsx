'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function NewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    let frame = 0;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // progress: 0 when section enters bottom of viewport, 1 when it leaves top
      const progress =
        (viewportH - rect.top) / (viewportH + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);
      // map 0..1 to -60..60 px of travel
      setOffset((clamped - 0.5) * 120);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 pb-36 sm:pt-24 sm:pb-44 bg-[#0876C9] overflow-hidden"
    >
      {/* Bottom-left corner photo */}
      <div
        className="hidden md:block absolute bottom-10 left-0 w-56 lg:w-72 h-40 lg:h-48 overflow-hidden rounded-[10px] shadow-2xl will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/Images/image_09.png"
          alt="Children in a classroom"
          fill
          sizes="288px"
          className="object-cover"
        />
      </div>

      {/* Top-right corner photo */}
      <div
        className="hidden md:block absolute top-10 right-0 w-56 lg:w-72 h-40 lg:h-48 overflow-hidden rounded-[10px] shadow-2xl will-change-transform"
        style={{ transform: `translateY(${-offset}px)` }}
      >
        <Image
          src="/Images/image_10.png"
          alt="A caregiver with a child"
          fill
          sizes="288px"
          className="object-cover"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 site-container text-center">
        <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white leading-tight whitespace-nowrap mx-auto mb-8">
          Showing up{' '}
          <span className="relative inline-block">
            when it matters
            <svg
              className="absolute left-0 -bottom-3 w-full h-4 pointer-events-none overflow-visible"
              viewBox="0 0 300 24"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Two hand-drawn strokes that cross at the right end */}
              <path
                d="M4 8 C 80 4, 200 6, 296 10"
                stroke="#FFD83D"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M8 16 C 90 18, 210 15, 294 6"
                stroke="#FFD83D"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </h2>

        <p className="text-lg text-white/90 max-w-[420px] mx-auto mb-12">
          We provide practical care, guidance and support to people facing difficult circumstances, helping restore dignity, build hope and create opportunities for a more meaningful future.
        </p>

        <div className="flex justify-center">
          <Button variant="light" size="lg" style={{ color: 'var(--color-primary-500)' }}>
            About us
          </Button>
        </div>
      </div>
    </section>
  );
}
