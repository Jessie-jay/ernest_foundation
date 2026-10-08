'use client';

import React, { useEffect, useState } from 'react';

export type LegalSection = {
  id: string;
  heading: string;
  body: React.ReactNode;
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro: React.ReactNode;
  sections: LegalSection[];
};

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const [activeId, setActiveId] = useState(doc.sections[0]?.id);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -70% 0px', threshold: 0 }
    );
    doc.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [doc.sections]);

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white">
      <div className="site-container">
        {/* Title block */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#0876C9] mb-4">
            {doc.eyebrow}
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#071A2B] leading-tight">
            {doc.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
          {/* Left - section nav */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#98A2B3] mb-4">
              On this page
            </p>
            <nav className="flex flex-col gap-1">
              {doc.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-sm leading-snug py-1.5 transition-colors ${
                    activeId === s.id
                      ? 'text-[#0876C9] font-medium'
                      : 'text-[#475467] hover:text-[#071A2B]'
                  }`}
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right - content */}
          <div className="max-w-2xl">
            <p className="text-sm text-[#98A2B3] mb-6">{doc.effectiveDate}</p>
            <div className="text-base text-[#344054] leading-relaxed mb-12 space-y-4">
              {doc.intro}
            </div>

            <div className="space-y-12">
              {doc.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#071A2B] mb-4">
                    {s.heading}
                  </h2>
                  <div className="text-base text-[#344054] leading-relaxed space-y-4">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
