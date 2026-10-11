import React from 'react';
import Image from 'next/image';
import { DonateTrigger } from '@/components/donation/DonateTrigger';

const trustItems = ['CAC Registered', 'Proper Accounts', 'Independent Audits'];

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-[#0876C9] text-white relative overflow-hidden">
      {/* Subtle soft glow - simplified, non-competing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-14 lg:gap-20 items-center">
          {/* Left column - text */}
          <div>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-tight mb-6 max-w-md text-white">
              Come help build<br />brighter
              <span className="relative inline-block pl-3 pr-3 py-1">
                <svg
                  className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] pointer-events-none overflow-visible z-0"
                  viewBox="0 0 220 90"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M26 24 C 88 8, 168 8, 202 24 C 220 33, 214 60, 176 72 C 122 88, 46 86, 20 70 C 4 60, 8 36, 44 24"
                    stroke="#FFD83D"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="relative z-10">futures</span>
              </span>
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-md">
              Your support helps us provide education, practical care and opportunities for people who need them most.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* Primary - strongest emphasis */}
              <DonateTrigger className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-[10px] bg-white text-[#0876C9] font-medium shadow-lg transition-transform hover:-translate-y-0.5">
                Make a Donation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </DonateTrigger>

              {/* Secondary - lighter */}
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-[10px] border border-white/40 text-white font-medium transition-colors hover:bg-white/10"
              >
                Learn About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Trust row - subtle */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/15">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FFD83D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - image */}
          <div className="lg:-mt-10 lg:pl-10">
            <div className="relative h-[340px] sm:h-[400px] max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-[10px] overflow-hidden shadow-2xl">
              <Image
                src="/Images/Joyful%20Classroom%20Teamwork.png"
                alt="Smiling child looking forward"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
