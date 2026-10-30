import React from 'react';
import Image from 'next/image';

type Officer = {
  name: string;
  role: string;
  image: string;
  /** CSS object-position for the portrait (default: 'center top'). */
  position?: string;
  /** Extra zoom applied to the portrait (default: 1). */
  scale?: number;
  /** CSS transform-origin for the zoom (default: 'center'). */
  transformOrigin?: string;
};

const officers: Officer[] = [
  {
    name: 'Esther Chianumba',
    role: 'Officer',
    // Zoomed-out version: same photo with the wall extended around it, so the
    // circle shows more of her (CSS alone can't zoom out past the photo's edges).
    image: '/Images/officers/esther_chianumba_wide.jpg',
    position: 'center 32%',
  },
  {
    name: 'Amarachi Opara',
    role: 'Officer',
    image: '/Images/officers/amarachi_opara.png',
    // Push the picture slightly up
    position: 'center 20%',
  },
  {
    name: 'Anthony Chukwuemeka',
    role: 'Officer',
    image: '/Images/officers/anthony_chukwuemeka.png',
    // Push the picture slightly up
    position: 'center 20%',
  },
  {
    name: 'Emeka Dim',
    role: 'Officer',
    image: '/Images/officers/emeka_dim.png',
    // Zoomed in further and anchored to the top so the picture pushes up
    position: 'center top',
    scale: 1.7,
    transformOrigin: 'top',
  },
  {
    name: 'Clara Umeh',
    role: 'Officer',
    image: '/Images/officers/clara_umeh.jpg',
    // Face sits in the upper third, so the default top-centered framing fits
    position: 'center top',
  },
];

export function OfficersSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="site-container">
        {/* Heading with yellow accent line */}
        <div className="mb-12 sm:mb-16">
          <span className="block w-16 h-1 rounded-full bg-[#FFC107] mb-5" aria-hidden="true" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#071A2B] leading-tight">
            Officers
          </h2>
        </div>

        {/* Grid of officers - 2 per row on mobile, all on one line on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10">
          {officers.map((officer) => (
            <div key={officer.name} className="flex flex-col items-center text-center">
              {/* Circular portrait - face centered at the top of the frame */}
              <div className="relative aspect-square w-full max-w-[12rem] rounded-full overflow-hidden bg-[#F2F4F7] mb-5 ring-1 ring-[#E4E7EC] shadow-[0_8px_24px_rgba(16,24,40,0.10)]">
                <Image
                  src={officer.image}
                  alt={`${officer.name}, ${officer.role}`}
                  fill
                  sizes="(max-width: 640px) 25vw, 192px"
                  className="object-cover"
                  style={{
                    objectPosition: officer.position ?? 'center top',
                    transform: officer.scale ? `scale(${officer.scale})` : undefined,
                    transformOrigin: officer.transformOrigin ?? 'center',
                  }}
                />
              </div>

              {/* Name + role */}
              <h3 className="font-display font-bold text-sm sm:text-base text-[#071A2B] mb-1">
                {officer.name}
              </h3>
              <p className="text-[10px] sm:text-xs font-medium tracking-[0.12em] uppercase text-[#475467] leading-snug">
                {officer.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
