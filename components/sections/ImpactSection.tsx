'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function ImpactSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-[300px]">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="font-display text-4xl sm:text-5xl text-[#071A2B]">
              Care with purpose. Stewardship with integrity.
            </h2>
            <p className="text-lg text-[#344054] leading-relaxed">
              We believe meaningful work requires responsible stewardship. We are committed to using resources carefully, working with trusted partners and remaining accountable to the people we serve and those who support the Foundation.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-transparent border-2 border-[#0876C9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#0876C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-medium text-xl text-[#071A2B] mb-1">Responsible stewardship</h3>
                  <p className="text-[#344054]">We use resources carefully and purposefully.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-transparent border-2 border-[#0876C9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#0876C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-medium text-xl text-[#071A2B] mb-1">Accountable practice</h3>
                  <p className="text-[#344054]">We keep proper records and report transparently.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-transparent border-2 border-[#0876C9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#0876C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-medium text-xl text-[#071A2B] mb-1">Meaningful partnerships</h3>
                  <p className="text-[#344054]">We work with trusted institutions to extend our reach.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-[520px] rounded-[10px] overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="/Images/image_12.png"
              alt="Child with caregiver"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover scale-[1.18]"
            />
          </div>
        </div>
        
        {/* Call to Action Banner */}
        <div className="bg-[#F9E0C5] rounded-[10px] pt-20 pb-10 px-10 sm:pt-24 sm:pb-14 sm:px-14 text-[#071A2B] relative overflow-hidden">
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
                <Button variant="primary" size="lg">
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
