'use client';

import React, { useEffect, useState } from 'react';

type Value = {
  title: string;
  description: string;
  tintClass: string;
  iconClass: string;
  icon: React.ReactNode;
};

const values: Value[] = [
  {
    title: 'Love in Action',
    description: 'Love should be expressed through service, not simply words.',
    tintClass: 'bg-[#FDEEE3]',
    iconClass: 'text-[#E07A3F]',
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    title: 'Compassion Without Condescension',
    description:
      'We see people as individuals with stories, strengths and agency, never as projects.',
    tintClass: 'bg-[#E7F1FB]',
    iconClass: 'text-[#0876C9]',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: 'Stewardship & Integrity',
    description:
      'Every resource entrusted to us deserves careful, transparent and responsible management.',
    tintClass: 'bg-[#E6F3EA]',
    iconClass: 'text-[#2E8B57]',
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Faith Rooted, Arms Wide',
    description:
      'Our Christian foundation shapes our motivation, while our doors remain open to everyone who needs help.',
    tintClass: 'bg-[#F3EBFB]',
    iconClass: 'text-[#8A4FC9]',
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M5 9h14" />
      </>
    ),
  },
  {
    title: 'Sustainability Over Spectacle',
    description:
      'We value lasting work, responsible growth and programmes built to endure.',
    tintClass: 'bg-[#FBF3DF]',
    iconClass: 'text-[#C99A08]',
    icon: (
      <>
        <path d="M12 22v-9" />
        <path d="M12 13C12 9 9 6 4 6c0 5 3 7 8 7z" />
        <path d="M12 12c0-3 2.5-6 7-6 0 4.5-2.5 6-7 6z" />
      </>
    ),
  },
];

export function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  // On mobile the track scrolls natively (touch); the arrow-driven transform
  // only applies from the `sm` breakpoint up.
  const [isDesktop, setIsDesktop] = useState(false);
  const lastIndex = values.length - 1;

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(lastIndex, i + 1));

  return (
    <section className="py-20 sm:py-28 bg-[#FBF7F0] overflow-hidden">
      <div className="site-container">
        {/* Header row: heading left, arrows right */}
        <div className="flex items-end justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#071A2B] leading-tight max-w-xl">
            Our values shape how we serve
          </h2>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeIndex === 0}
              aria-label="Previous value"
              className="w-11 h-11 rounded-lg border border-[#D0D5DD] flex items-center justify-center text-[#0876C9] transition-colors hover:bg-[#0876C9] hover:text-white hover:border-[#0876C9] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#0876C9] disabled:hover:border-[#D0D5DD]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === lastIndex}
              aria-label="Next value"
              className="w-11 h-11 rounded-lg border border-[#D0D5DD] flex items-center justify-center text-[#0876C9] transition-colors hover:bg-[#0876C9] hover:text-white hover:border-[#0876C9] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#0876C9] disabled:hover:border-[#D0D5DD]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel track - native scroll on mobile, arrow-driven slide on sm+ */}
        <div className="overflow-x-auto sm:overflow-visible -mx-5 px-5 sm:mx-0 sm:px-0 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory sm:snap-none">
          <div
            className="flex gap-5 lg:gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: isDesktop
                ? `translateX(calc(${-activeIndex} * (clamp(260px, 70vw, 300px) + 1.25rem)))`
                : undefined,
            }}
          >
            {values.map((value) => (
              <article
                key={value.title}
                className="shrink-0 w-[clamp(260px,70vw,300px)] snap-start rounded-[14px] border border-[#ECE7DD] bg-white overflow-hidden flex flex-col"
              >
              {/* Top: title + description */}
              <div className="p-7 flex-1">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#071A2B] leading-snug mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[#475467] leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Bottom: tinted illustration area */}
              <div
                className={`${value.tintClass} h-40 flex items-center justify-center`}
              >
                <svg
                  className={`w-14 h-14 ${value.iconClass}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {value.icon}
                </svg>
              </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
