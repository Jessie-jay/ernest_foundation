'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

type GalleryItem = {
  src: string;
  caption: string;
};

const items: GalleryItem[] = [
  {
    src: '/Images/media/school-visits/school_visit_01.png',
    caption: 'Sharing a joyful moment with students',
  },
  {
    src: '/Images/media/school-visits/school_visit_02.png',
    caption: 'Encouraging young learners to dream big.',
  },
  {
    src: '/Images/media/school-visits/school_visit_03.png',
    caption: 'Connecting with pupils and their teachers.',
  },
  {
    src: '/Images/media/school-visits/school_visit_04.png',
    caption: 'Celebrating education and community together.',
  },
];

const GALLERY_TITLE = 'School Visits';
const GALLERY_DESCRIPTION =
  'At Ernest Chianumba Foundation, we do more than provide assistance; we follow up, monitor progress, and ensure that every child we support is making meaningful academic progress.\n\nWe believe that true impact goes beyond giving. It is about ensuring that our beneficiaries are learning, growing, and building a strong foundation for a brighter future.';

export function MediaGallery() {
  const [active, setActive] = useState(0);
  const total = items.length;

  const goPrev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total]
  );
  const goNext = useCallback(() => setActive((i) => (i + 1) % total), [total]);

  // Arrow-key navigation, matching the reference layout's "browse with keys"
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  const current = items[active];

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] min-h-[calc(100vh-5rem)]">
        {/* Left panel */}
        <div className="bg-[#1E4620] text-white px-6 py-12 sm:px-10 lg:px-12 lg:py-16 flex flex-col">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70 mb-auto">
            Gallery
          </p>

          <div className="mt-12 lg:mt-auto">
            <h1 className="font-display font-extrabold text-xl sm:text-2xl mb-4 leading-tight text-white">
              {GALLERY_TITLE}
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md mb-8 whitespace-pre-line">
              {GALLERY_DESCRIPTION}
            </p>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-3 gap-3 max-w-xs">
              {items.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View photo ${i + 1}: ${item.caption}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative aspect-[3/4] overflow-hidden rounded-[6px] transition-all ${
                      isActive
                        ? 'ring-2 ring-[#FFC107] opacity-100'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right panel - main image */}
        <div className="bg-[#1A1410] px-6 py-12 sm:px-10 lg:px-14 lg:py-16 flex flex-col justify-center">
          {/* Fixed-size frame: stays static while each photo fits inside it */}
          <div className="relative w-full max-w-[460px] mx-auto aspect-[3/4] rounded-[8px] overflow-hidden bg-black/30">
            <Image
              src={current.src}
              alt={current.caption}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption + navigation */}
          <div className="w-full max-w-[460px] mx-auto flex items-center justify-between gap-4 mt-6">
            <p className="text-sm sm:text-base font-medium text-[#8FBF5A]">
              {current.caption}
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm text-white/70 tabular-nums">
                {String(active + 1).padStart(2, '0')}/
                {String(total).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous photo"
                  className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next photo"
                  className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
