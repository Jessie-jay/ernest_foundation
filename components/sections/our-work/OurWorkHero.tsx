import React from 'react';
import Image from 'next/image';

export function OurWorkHero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Title + description */}
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#0876C9] mb-5">
              Our Work
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#071A2B] leading-tight mb-6">
              The Education Support Programme
            </h1>
            <p className="text-lg text-[#344054] leading-relaxed max-w-xl">
              The Education Support Programme provides educational assistance to children who need support to remain in school. Children are selected through a structured assessment and verification process based on their needs and circumstances.
            </p>
          </div>

          {/* Right - Framed image with offset yellow accent */}
          <div className="relative">
            {/* Yellow accent frame, offset to the bottom-right */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[10px] bg-[#FFC107]" />
            {/* Photo on top */}
            <div className="relative h-[360px] sm:h-[460px] rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(16,24,40,0.15)]">
              <Image
                src="/Images/image_28.png"
                alt="Children learning in a classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
