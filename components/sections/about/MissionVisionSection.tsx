import React from 'react';

type Card = {
  title: string;
  description: string;
  source: string;
  titleClass: string;
  accentClass: string;
  badgeClass: string;
  iconClass: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: 'Mission',
    description:
      'The mission of the Ernest Chianumba Foundation is to extend God\u2019s love to people who have been overlooked, underserved, or forgotten, by providing practical care, education, and support that restore dignity and build hope. Rooted in compassion and responsibility, the Foundation exists to meet real needs in real communities, starting in Nigeria.',
    source: 'Our Purpose in Action',
    titleClass: 'text-[#0876C9]',
    accentClass: 'bg-[#0876C9]',
    badgeClass: 'bg-[#E7F1FB]',
    iconClass: 'text-[#0876C9]',
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 13c2 0 3-1 5-1 3 0 5 2 8 2 2 0 3-1 5-2" />
        <path d="M3 13v4c2 0 3-1 5-1 3 0 5 2 8 2 2 0 3-1 5-2v-4" />
        <path d="M11 8.5a2 2 0 1 1 2.5-.4A2 2 0 1 1 16 8.5c0 1.5-2.5 3-2.5 3S11 10 11 8.5z" />
      </svg>
    ),
  },
  {
    title: 'Vision',
    description:
      'The Foundation envisions a Nigeria where vulnerable individuals are not abandoned to circumstance, but are supported with care, guided with wisdom, and empowered to live meaningful lives. We seek to build communities where love is expressed through action, and where people are given the opportunity not just to survive, but to grow and thrive.',
    source: 'A Brighter Tomorrow',
    titleClass: 'text-[#2E8B57]',
    accentClass: 'bg-[#2E8B57]',
    badgeClass: 'bg-[#E6F3EA]',
    iconClass: 'text-[#2E8B57]',
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 21v-9" />
        <path d="M12 12C12 8 9 5 4 5c0 5 3 7 8 7z" />
        <path d="M12 11c0-3 2.5-6 7-6 0 4.5-2.5 6-7 6z" />
      </svg>
    ),
  },
];

export function MissionVisionSection() {
  return (
    <section className="pb-20 sm:pb-28 bg-white">
      <div className="site-container">
        {/* Blue panel with offset yellow accents */}
        <div className="relative">
          {/* Yellow accent - top left */}
          <div className="absolute -top-4 -left-4 w-40 h-24 rounded-[12px] bg-[#FFC107]" />
          {/* Yellow accent - bottom right */}
          <div className="absolute -bottom-4 -right-4 w-56 h-28 rounded-[12px] bg-[#FFC107]" />

          {/* Blue panel */}
          <div className="relative overflow-hidden rounded-[20px] bg-[#0876C9] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* Heading */}
            <div className="relative text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white/70 mb-4">
                Who We Are
              </p>
              <h2 className="relative inline-block font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
                Mission &amp; Vision

                {/* Hand-drawn pink arrow: starts at the heading, points down to the cards */}
                <svg
                  className="hidden sm:block absolute left-full top-1/2 w-24 h-24 lg:w-28 lg:h-28 text-[#F2857F] pointer-events-none"
                  viewBox="0 0 120 130"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {/* Shaft: a smooth arc sweeping from the heading down toward the cards */}
                  <path d="M8 10C70 6 104 44 70 112" />
                  {/* Arrowhead: two barbs radiating from the tip (70,112) */}
                  <path d="M50 102L70 114 86 96" />
                </svg>
              </h2>
            </div>

            {/* Cards - side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="bg-white rounded-[16px] p-8 sm:p-10 shadow-[0_12px_40px_rgba(16,24,40,0.16)]"
                >
                  {/* Icon badge */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-7 ${card.badgeClass} ${card.iconClass}`}
                  >
                    {card.icon}
                  </div>

                  <h3
                    className={`font-display font-bold text-2xl sm:text-3xl mb-4 ${card.titleClass}`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475467] leading-relaxed mb-7">
                    {card.description}
                  </p>

                  {/* Accent underline */}
                  <span
                    className={`block w-10 h-1 rounded-full mb-4 ${card.accentClass}`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#98A2B3]">
                    {card.source}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
