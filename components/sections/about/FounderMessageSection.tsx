import React from 'react';
import Image from 'next/image';

export function FounderMessageSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F9FAFB]">
      <div className="site-container">
        {/* Heading with yellow accent line */}
        <div className="mb-12 sm:mb-16">
          <span className="block w-16 h-1 rounded-full bg-[#FFC107] mb-5" aria-hidden="true" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#071A2B] leading-tight">
            A Message from Our Founder
          </h2>
        </div>

        {/* Two-column layout: portrait beside the message */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">
          {/* Portrait */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-[16px] bg-[#F2F4F7] border border-[#E4E7EC] shadow-[0_12px_40px_rgba(16,24,40,0.12)]">
              <Image
                src="/Images/trustees/ernest_chianumba.jpeg"
                alt="Ernest Divine Chianumba, Founder & Chairman of the Ernest Chianumba Foundation"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Message */}
          <div className="max-w-2xl">
            <div className="space-y-5 text-base sm:text-lg text-[#475467] leading-relaxed">
              <p>
                I believe that one of the greatest gifts we can give another person is hope, not
                just through words, but through love expressed in action.
              </p>
              <p>
                Every day, there are children with dreams but limited opportunities, families
                struggling to make ends meet, and people whose circumstances have made them feel
                forgotten. Sometimes, all it takes to change someone&rsquo;s story is for someone
                else to care.
              </p>
              <p>That belief inspired the Ernest Chianumba Foundation.</p>
              <p>
                I founded this organization with a simple conviction: we may not be able to help
                everyone, but we can all do something to help someone. No act of kindness is too
                small, and no life is too insignificant to deserve love, dignity, and opportunity.
              </p>
              <p>
                Guided by my faith and the principle of generosity in Proverbs 11:24, my vision is
                to build a Foundation that restores hope, empowers lives, and creates lasting
                opportunities, particularly for children, vulnerable families, and underserved
                communities.
              </p>
              <p>
                This journey is bigger than me. It is about what we can accomplish together when
                compassion becomes action.
              </p>
              <p>
                I invite you to be part of this mission, in whatever way you can. Together, we can
                make a meaningful difference, one life at a time.
              </p>
            </div>

            {/* Tagline */}
            <p className="mt-8 font-display font-semibold text-lg sm:text-xl text-[#0876C9] italic">
              Guided by love. Built through knowledge. Sustained by hope.
            </p>

            {/* Signature block */}
            <div className="mt-8 border-t border-[#EAECF0] pt-6">
              <p className="text-base text-[#475467] mb-2">With gratitude,</p>
              <p className="font-display font-bold text-xl text-[#071A2B]">
                Ernest Divine Chianumba
              </p>
              <p className="text-sm text-[#475467] mt-1">Founder &amp; Chairman</p>
              <p className="text-sm text-[#475467]">Ernest Chianumba Foundation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
