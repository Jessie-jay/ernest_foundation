import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const steps = [
  {
    number: '01',
    title: 'See the person',
    description:
      'We listen, understand individual needs and treat every person with dignity.',
  },
  {
    number: '02',
    title: 'Respond with care',
    description:
      'We provide practical support where it can make a meaningful difference.',
  },
  {
    number: '03',
    title: 'Build toward possibility',
    description:
      'We create opportunities for growth, independence and a hopeful future.',
  },
];

const features = [
  {
    image: '/Images/image_06.png',
    tag: 'EDUCATION & DEVELOPMENT',
    title: 'Opening doors to a brighter future.',
    description:
      'Supporting children and young people through education, mentorship and skills development.',
  },
  {
    image: '/Images/image_05.png',
    tag: 'CARE & SUPPORT',
    title: 'Care when it matters most.',
    description:
      'We provide practical support, including medical care, guidance and assistance for people facing difficult circumstances.',
  },
];

export function MissionSection() {
  return (
    <section className="pt-8 pb-24 sm:pt-10 sm:pb-32 bg-white">
      <div className="site-container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#071A2B] leading-tight mb-6">
            Why we exist
          </h2>
          <p className="text-lg text-[#344054] leading-relaxed">
            We believe that love is most meaningful when it becomes action, creating opportunities for people to receive care, grow with dignity and build better futures.
          </p>
        </div>

        {/* 3 Numbered Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20 sm:mb-24">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              {/* Circular ring badge with partial blue arc */}
              <div className="relative w-16 h-16 mx-auto mb-6">
                <svg className="w-16 h-16" viewBox="0 0 64 64">
                  {/* Ash base ring (fills the whole circle) */}
                  <circle
                    cx="32"
                    cy="32"
                    r="27"
                    fill="none"
                    stroke="#C7CCD4"
                    strokeWidth="5"
                  />
                  {/* Blue segments: two large arcs opposite each other.
                      Circumference ≈ 170. Pattern: 65 blue, 20 gap, 65 blue, 20 gap */}
                  <circle
                    cx="32"
                    cy="32"
                    r="27"
                    fill="none"
                    stroke="#5B6EE8"
                    strokeWidth="5"
                    strokeDasharray="65 20"
                    transform="rotate(-80 32 32)"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-base text-[#071A2B]">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#071A2B] mb-3">
                {step.title}
              </h3>
              <p className="text-[#344054] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2-Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-[200px]">
          {features.map((feature) => (
            <div key={feature.tag} className="group">
              <div className="relative h-[300px] sm:h-[340px] max-w-md overflow-hidden rounded-[10px] shadow-lg mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#27C83E]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold tracking-[0.12em] text-[#667085]">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-display text-2xl text-[#071A2B] mb-3">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-[#344054] leading-relaxed">
                  {feature.description}
                </p>
              )}
              <div className="mt-5">
                <Button variant="outline" size="md" href="/about">
                  See Our Work
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
