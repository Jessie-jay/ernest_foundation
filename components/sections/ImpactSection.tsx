'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const slides = [
  { src: '/Images/image_02.png', alt: 'A young person looking toward the horizon' },
  { src: '/Images/image_03.png', alt: 'Children supported by the Foundation' },
  { src: '/Images/image_04.png', alt: 'A caregiver with a child' },
  { src: '/Images/image_07.png', alt: 'Children in a classroom' },
];

export function ImpactSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#27C83E]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold tracking-[0.12em] text-[#667085]">
                  LOVE IN ACTION
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#071A2B] leading-tight max-w-md">
                Care becomes real when we show up.
              </h2>
            </div>
            <p className="text-lg text-[#344054] leading-relaxed max-w-md">
              Through outreach, guidance and practical support, we meet people where they are, respond to immediate needs and help create a stronger path forward for individuals and communities.
            </p>
            <div className="flex">
              <Button variant="outline" size="lg" href="/about">
                See Our Work
              </Button>
            </div>
          </div>

          {/* Image carousel */}
          <div className="order-1 lg:order-2">
            {/* Large image */}
            <div className="relative h-[460px] sm:h-[520px] rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(16,24,40,0.15)]">
              {slides.map((slide, i) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-700"
                  style={{ opacity: i === active ? 1 : 0 }}
                  priority={i === 0}
                />
              ))}
            </div>

            {/* Carousel controls: progress bars + link */}
            <div className="flex items-center justify-between mt-6">
              {/* Segmented progress indicators */}
              <div className="flex items-center gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    onClick={() => setActive(i)}
                    aria-label={`Show slide ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? '2.5rem' : '1.75rem',
                      backgroundColor: i === active ? '#0876C9' : '#E4E7EC',
                    }}
                  />
                ))}
              </div>

              {/* Learn more link */}
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-[#0876C9] font-medium hover:gap-3 transition-all"
              >
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
