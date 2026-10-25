import React from 'react';
import Image from 'next/image';

type Trustee = {
  name: string;
  role: string;
  image: string;
  /** CSS object-position for the portrait (default: 'center top'). */
  position?: string;
  /** Extra zoom applied to the portrait (default: 1). */
  scale?: number;
};

const trustees: Trustee[] = [
  {
    name: 'Ernest Chianumba',
    role: 'Chairman & Trustee',
    image: '/Images/trustees/ernest_chianumba.jpeg',
    // Push the picture slightly up
    position: 'center 20%',
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
  {
    name: 'Emmanuel Udoh',
    role: 'Trustee',
    image: '/Images/trustees/emmanuel_udoh.jpg',
    // Push the picture slightly down
    position: 'center 35%',
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

        {/* Grid of trustees - 2 per row on mobile, 4 per row on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
          {trustees.map((trustee) => (
            <div key={trustee.name} className="flex flex-col items-center text-center">
              {/* Circular portrait - face centered at the top of the frame */}
              <div className="relative aspect-square w-full max-w-[12rem] rounded-full overflow-hidden bg-[#F2F4F7] mb-5 ring-1 ring-[#E4E7EC] shadow-[0_8px_24px_rgba(16,24,40,0.10)]">
                <Image
                  src={trustee.image}
                  alt={`${trustee.name}, ${trustee.role}`}
                  fill
                  sizes="(max-width: 640px) 20vw, 192px"
                  className="object-cover"
                  style={{
                    objectPosition: trustee.position ?? 'center top',
                    transform: trustee.scale ? `scale(${trustee.scale})` : undefined,
                  }}
                />
              </div>

              {/* Name + role */}
              <h3 className="font-display font-bold text-sm sm:text-base text-[#071A2B] mb-1">
                {trustee.name}
              </h3>
              <p className="text-[10px] sm:text-xs font-medium tracking-[0.12em] uppercase text-[#475467] leading-snug">
                {trustee.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
