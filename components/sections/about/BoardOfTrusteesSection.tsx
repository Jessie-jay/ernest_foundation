import React from 'react';
import Image from 'next/image';

type Trustee = {
  name: string;
  role: string;
  image: string;
};

const trustees: Trustee[] = [
  {
    name: 'Ernest Chianumba',
    role: 'Chairman & Trustee',
    image: '/Images/trustees/ernest_chianumba.jpeg',
  },
  {
    name: 'Sandra Ezejiugo',
    role: 'Secretary & Trustee',
    image: '/Images/trustees/sandra_ezejiugo.jpeg',
  },
  {
    name: 'Cyril Akpan',
    role: 'Trustee',
    image: '/Images/trustees/cyril_akpan.jpeg',
  },
  {
    name: 'Ebuka Okafor',
    role: 'Trustee',
    image: '/Images/trustees/ebuka_okafor.jpeg',
  },
];

export function BoardOfTrusteesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="site-container">
        {/* Heading with yellow accent line */}
        <div className="mb-12 sm:mb-16">
          <span className="block w-16 h-1 rounded-full bg-[#FFC107] mb-5" aria-hidden="true" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#071A2B] leading-tight">
            Board of Trustees
          </h2>
        </div>

        {/* Grid of trustees - 4 across, spanning the full width */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {trustees.map((trustee) => (
            <div key={trustee.name}>
              {/* Portrait with dark border */}
              <div className="relative aspect-square rounded-[6px] overflow-hidden bg-[#F2F4F7] mb-4 border border-[#E4E7EC]">
                <Image
                  src={trustee.image}
                  alt={`${trustee.name}, ${trustee.role}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Name + role */}
              <div className="border-t border-[#EAECF0] pt-4">
                <h3 className="font-display font-bold text-base text-[#071A2B] mb-1">
                  {trustee.name}
                </h3>
                <p className="text-sm text-[#475467] leading-snug">
                  {trustee.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
