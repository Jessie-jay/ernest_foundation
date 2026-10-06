'use client';

import React, { useEffect, useState } from 'react';

const rotatingPhrases = [
  'Every gift has a purpose.',
  'Careful with every resource',
  'Built on trust',
  'Stewardship in action.',
];

export function TransparencySection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: 'Fully registered with CAC',
      color: 'bg-[#0876C9]',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Transparent use of funds.',
      color: 'bg-[#27C83E]',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'Committed to transparent reporting',
      color: 'bg-[#FFD83D]',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: 'Experienced Board of Trustees',
      color: 'bg-[#0876C9]',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F9FAFB]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F9EC] border border-[#C5EFCF] rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#27C83E] opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27C83E]"></span>
            </span>
            {rotatingPhrases[phraseIndex]}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#071A2B] mb-6 leading-tight">
            We manage every gift with integrity.
          </h2>
          <p className="text-lg text-[#344054] leading-relaxed">
            Resources are applied to our charitable work, with proper records, independent audits and transparent financial reporting.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] p-8 text-center border border-gray-100"
            >
              <div className={`w-16 h-16 ${feature.color} ${feature.color === 'bg-[#FFD83D]' ? 'text-[#071A2B]' : 'text-white'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-display text-xl text-[#071A2B]">
                {feature.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
