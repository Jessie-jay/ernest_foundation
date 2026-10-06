import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function AbbaSection() {
  return (
    <section
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
      style={{ ['--abba-pad' as string]: '8rem' }}
    >
      {/* Two vertical lines continuing down from the Values section,
          running the full height and ending at the bottom of this section.
          Boxes mark where they intersect the banner's top and bottom edges. */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-[22%] w-px bg-[rgba(16,24,40,0.1)]"></div>
        <div className="absolute top-0 bottom-0 left-[76%] w-px bg-[rgba(16,24,40,0.1)]"></div>

        {/* Boxes at the top edge of the banner (banner starts at the section's
            top padding) and the bottom edge */}
        {['22%', '76%'].map((x) => (
          <React.Fragment key={x}>
            <div
              className="hidden lg:block absolute w-2.5 h-2.5 border border-[rgba(16,24,40,0.25)] bg-white"
              style={{ left: x, top: 'var(--abba-pad)', transform: 'translate(-50%, -50%)' }}
            ></div>
            <div
              className="hidden lg:block absolute w-2.5 h-2.5 border border-[rgba(16,24,40,0.25)] bg-white"
              style={{ left: x, bottom: 'var(--abba-pad)', transform: 'translate(-50%, 50%)' }}
            ></div>
          </React.Fragment>
        ))}
      </div>

      <div className="site-container relative">
        {/* Call to Action Banner */}
        <div className="bg-[#F9E0C5] rounded-[10px] pt-20 pb-10 px-10 sm:pt-24 sm:pb-14 sm:px-14 text-[#071A2B] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image on the left */}
            <div className="relative h-64 sm:h-80 lg:h-96 order-1">
              <Image
                src="/Images/image_14.png"
                alt="Abba's Haven - a place of care and grace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center lg:object-left"
              />
            </div>

            {/* Text on the right */}
            <div className="relative z-10 order-2">
              <h2 className="font-display text-2xl sm:text-3xl mb-4 max-w-xs">
                A place of care, guidance and grace.
              </h2>
              <p className="text-base text-[#5C4A33] mb-8 leading-relaxed max-w-sm">
                Abba&rsquo;s Haven is our vision for holistic care, where people are supported with compassion, guided with wisdom and given room to grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" href="/about">
                  Support the Vision
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
