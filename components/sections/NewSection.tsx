'use client';

import React, { useEffect, useRef, useState } from 'react';

type Stat = {
  target: number;
  prefix: string;
  suffix: string;
  displayFinal?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const stats: Stat[] = [
  {
    target: 5,
    prefix: '',
    suffix: '+',
    title: 'Children selected',
    description:
      'For educational support through a structured assessment process.',
    icon: (
      <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    target: 676000,
    prefix: '₦',
    suffix: '+',
    displayFinal: '₦676K +',
    title: 'School fees covered',
    description: 'Helping children continue their education with greater stability.',
    icon: (
      <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
  {
    target: 1000000,
    prefix: '₦',
    suffix: '+',
    displayFinal: '₦1M +',
    title: 'Educational support',
    description: 'Providing assistance based on assessed educational needs.',
    icon: (
      <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4 3h2v11h-2V10zm4-7h2v18h-2V3zm4 10h2v8h-2v-8z" />
      </svg>
    ),
  },
];

function formatValue(n: number) {
  return n.toLocaleString('en-US');
}

function AnimatedStat({
  stat,
  start,
}: {
  stat: (typeof stats)[number];
  start: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Reset to 0 whenever the section leaves view so it re-animates on return
    if (!start) {
      setCurrent(0);
      return;
    }

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setCurrent(stat.target);
      return;
    }

    const duration = 700;
    let startTime = 0;
    let frame = 0;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutQuad - gentle, settles smoothly
      const eased = 1 - (1 - progress) * (1 - progress);
      setCurrent(Math.round(stat.target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, stat.target]);

  const done = current >= stat.target;

  return (
    <div className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-3 pb-5 text-center break-words tabular-nums min-h-[1.2em] flex items-center justify-center">
      {done && stat.displayFinal
        ? stat.displayFinal
        : `${stat.prefix}${formatValue(current)}${stat.suffix}`}
    </div>
  );
}

export function NewSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle on both enter and leave so the count-up repeats
          // every time the section scrolls back into view.
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-[#0876C9] overflow-hidden">
      <div className="site-container">
        {/* Heading - centered */}
        <div className="text-center max-w-md mx-auto mb-16">
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-white leading-tight mb-6">
            Our{' '}
            <span className="relative inline-block">
              first steps
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
            </span>{' '}
            are already underway
          </h2>
          <p className="text-lg text-white/85 leading-relaxed">
            We have begun our Education Support Programme, providing educational assistance to children selected through a structured assessment and verification process.
          </p>
        </div>

        {/* 3 big blue-glass stat cards (original glassmorphic treatment) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center border border-white/20"
            >
              <div className="flex items-center justify-center mb-6" style={{ color: '#FBBC02' }}>
                {stat.icon}
              </div>
              <AnimatedStat stat={stat} start={inView} />
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {stat.title}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
