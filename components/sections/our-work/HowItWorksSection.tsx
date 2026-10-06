import React from 'react';
import Image from 'next/image';

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Identification',
    description:
      'Children needing support are identified through referrals and community outreach.',
  },
  {
    number: '02',
    title: 'Assessment',
    description:
      'Each child is assessed to understand their needs, circumstances and eligibility.',
  },
  {
    number: '03',
    title: 'Support',
    description:
      'Approved children receive assistance based on their assessed needs.',
  },
  {
    number: '04',
    title: 'Monitoring',
    description:
      'We follow up with students to track progress and assess further needs.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="site-container-wide">
        <div className="max-w-6xl mx-auto rounded-[16px] bg-[#0876C9] p-6 sm:p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
            {/* Image */}
            <div className="relative h-[320px] sm:h-[440px] lg:h-auto lg:w-[380px] lg:flex-none lg:self-stretch rounded-[12px] overflow-hidden">
              <Image
                src="/Images/image_20.png"
                alt="A child supported through the Education Support Programme"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>

            {/* Steps */}
            <div className="lg:flex-1">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-10 lg:whitespace-nowrap">
                How support reaches each child
              </h2>

              <div className="flex flex-col gap-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <span className="font-display text-xl sm:text-2xl text-white/70 leading-none pt-1">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
