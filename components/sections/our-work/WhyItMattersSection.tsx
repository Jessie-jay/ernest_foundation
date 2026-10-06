import React from 'react';
import Image from 'next/image';

type Benefit = {
  title: string;
  description: string;
  cardClass: string;
  icon: string;
};

const benefits: Benefit[] = [
  {
    title: 'Medical Care',
    description:
      'Support toward essential healthcare, helping individuals access appropriate treatment and care when difficult circumstances arise.',
    cardClass: 'bg-[#FDEEE3]',
    icon: '/Images/image_24.png',
  },
  {
    title: 'Guidance',
    description:
      'Helping individuals navigate difficult circumstances with understanding, direction and practical guidance when they need it most.',
    cardClass: 'bg-[#E7F1FB]',
    icon: '/Images/image_25.png',
  },
  {
    title: 'Assistance',
    description:
      'Responding to appropriate needs with practical help, dignity and compassion when circumstances become difficult for individuals.',
    cardClass: 'bg-[#E6F3EA]',
    icon: '/Images/image_26.png',
  },
];

export function WhyItMattersSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="site-container">
        {/* Heading - left aligned */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#0876C9] mb-4">
            Care &amp; Support
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#071A2B] leading-tight mb-5">
            Needs beyond the classroom
          </h2>
          <p className="text-base sm:text-lg text-[#344054] leading-relaxed max-w-md">
            The Foundation also works toward helping individuals access
            appropriate care and assistance when circumstances become difficult.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`${benefit.cardClass} rounded-[16px] p-10 sm:p-12 lg:min-h-[420px] flex flex-col`}
            >
              <div className="relative w-20 h-20 mb-8">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#071A2B] leading-snug mb-5">
                {benefit.title}
              </h3>
              <p className="text-base sm:text-lg text-[#475467] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
