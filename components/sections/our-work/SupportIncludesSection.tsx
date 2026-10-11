import React from 'react';
import Image from 'next/image';
import { DonateButton } from '@/components/donation/DonateButton';

type SupportItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const items: SupportItem[] = [
  {
    title: 'Tuition Assistance',
    description:
      'Helping families meet approved school costs so children can continue their education.',
    image: '/Images/image_21.png',
    alt: 'A child celebrating that their school fees have been paid',
  },
  {
    title: 'School Supplies',
    description:
      'Providing essential items children need for school, including learning materials and other required supplies.',
    image: '/Images/image_22.png',
    alt: 'School essentials such as uniforms and learning materials',
  },
  {
    title: 'Progress Monitoring',
    description:
      'Checking in on students over time to understand their progress and determine whether further assistance is needed.',
    image: '/Images/image_23.png',
    alt: 'Mentors tracking a student\u2019s progress and wellbeing',
  },
];

export function SupportIncludesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBF7F0]">
      <div className="site-container">
        {/* Heading - centered */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#071A2B] leading-tight mb-5">
            What the{' '}
            <span className="relative inline-block">
              Programme
              {/* Two hand-drawn blue underlines that intersect at the left end */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#0876C9] pointer-events-none"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 14C60 6 140 6 196 11" />
                <path d="M4 14C64 15 142 16 196 7" />
              </svg>
            </span>{' '}
            Includes
          </h2>
          <p className="text-base sm:text-lg text-[#344054] leading-relaxed max-w-md mx-auto">
            The programme provides targeted assistance to help address the
            practical barriers that can affect their education.
          </p>
        </div>

        {/* Alternating rows - images meet diagonally at their corners */}
        <div className="flex flex-col gap-16 lg:gap-0">
          {items.map((item, index) => {
            const imageFirst = index % 2 === 1;
            return (
              <div
                key={item.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index > 0 ? 'lg:-mt-20' : ''
                }`}
              >
                {/* Text */}
                <div className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#071A2B] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#344054] leading-relaxed max-w-[22rem] mb-6">
                    {item.description}
                  </p>
                  <DonateButton variant="outline" size="md" />
                </div>

                {/* Image */}
                <div
                  className={`relative h-[420px] sm:h-[560px] rounded-[12px] overflow-hidden ${
                    imageFirst ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
