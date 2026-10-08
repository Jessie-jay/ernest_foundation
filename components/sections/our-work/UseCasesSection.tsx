'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type UseCase = {
  title: string;
  description: string;
  image: string;
  cardClass: string;
};

const useCases: UseCase[] = [
  {
    title: 'Community Outreach',
    description:
      'Connecting with communities and responding to needs with compassion and dignity.',
    image: '/Images/image_09.png',
    cardClass: 'bg-[#E5E7EB]',
  },
  {
    title: 'Emergency Assistance',
    description:
      'Providing timely help when unexpected circumstances create urgent needs.',
    image: '/Images/image_27.png',
    cardClass: 'bg-[#E5E7EB]',
  },
  {
    title: 'Guidance & Counselling',
    description:
      'Offering compassionate guidance to help people navigate difficult circumstances.',
    image: '/Images/image_10.png',
    cardClass: 'bg-[#E5E7EB]',
  },
];

export function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = useCases.length - 1;

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(lastIndex, i + 1));

  return (
    <section className="py-20 sm:py-28 bg-[#F6F5F3] overflow-hidden">
      {/* Heading - left aligned, constrained to container */}
      <div className="site-container">
        <div className="max-w-xl mb-14 sm:mb-16">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#0876C9] mb-4">
            Love in Action
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#071A2B] leading-tight mb-5">
            Extending our Reach
          </h2>
          <p className="text-base sm:text-lg text-[#344054] leading-relaxed max-w-md">
            Extending the Foundation&rsquo;s work into communities, and responding
            with compassion where it is needed most.
          </p>
        </div>
      </div>

      {/* Carousel - aligned left to container, overflows to the right page edge */}
      <div className="site-container">
        <div className="relative">
          <div
            className="flex gap-6 lg:gap-8 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(${-activeIndex} * (clamp(360px, 86vw, 560px) + 1.5rem)))`,
            }}
          >
            {useCases.map((useCase) => (
              <article
                key={useCase.title}
                className={`${useCase.cardClass} shrink-0 w-[clamp(360px,86vw,560px)] rounded-[16px] overflow-hidden flex flex-col sm:flex-row sm:items-center gap-5 p-5`}
              >
                {/* Embedded image - full width on mobile, side on larger screens */}
                <div className="relative w-full sm:w-[42%] shrink-0 aspect-[4/3] rounded-[10px] overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    sizes="(max-width: 640px) 86vw, 220px"
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#071A2B] leading-snug mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-[#475467] leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {useCases.map((useCase, index) => (
                <button
                  key={useCase.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to card ${index + 1}`}
                  aria-current={index === activeIndex}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-7 bg-[#0876C9]'
                      : 'w-2.5 bg-[#CBD2D9] hover:bg-[#98A2B3]'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-label="Previous card"
                className="w-12 h-12 rounded-full border border-[#D0D5DD] flex items-center justify-center text-[#0876C9] transition-colors hover:bg-[#0876C9] hover:text-white hover:border-[#0876C9] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#0876C9] disabled:hover:border-[#D0D5DD]"
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
                aria-label="Next card"
                className="w-12 h-12 rounded-full bg-[#0876C9] flex items-center justify-center text-white transition-colors hover:bg-[#0664AA] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#0876C9]"
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
        </div>
      </div>
    </section>
  );
}
