import React from 'react';
import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Title + description */}
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#0876C9] mb-5">
              About Us
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#071A2B] leading-tight mb-6">
              Built on Faith and Purpose
            </h1>
            <p className="text-lg text-[#344054] leading-relaxed max-w-xl">
              The Ernest Chianumba Foundation believes every person has inherent
              worth and potential, and that circumstances should not define their
              future.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative">
            {/* Photo */}
            <div className="relative h-[360px] sm:h-[460px] rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(16,24,40,0.15)]">
              <Image
                src="/Images/image_01.png"
                alt="Members and supporters of the Foundation gathered together"
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
