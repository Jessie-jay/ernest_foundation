import React from 'react';
import Image from 'next/image';

type Channel = {
  title: string;
  icon: React.ReactNode;
  body: React.ReactNode;
};

const channels: Channel[] = [
  {
    title: 'Email Us',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    body: (
      <>
        Send an email to
        <a
          href="mailto:info@ernestchianumbafoundation.org"
          className="block mt-1 text-[#0876C9] hover:underline break-words"
        >
          info@ernestchianumbafoundation.org
        </a>
        and we&rsquo;ll be in touch.
      </>
    ),
  },
  {
    title: 'Call Us',
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    body: (
      <>
        Dial and get through with{' '}
        <a href="tel:+2347032973392" className="text-[#0876C9] hover:underline whitespace-nowrap">
          +234 703 297 3392
        </a>{' '}
        to speak with us.
      </>
    ),
  },
  {
    title: 'Chat Us',
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
    body: (
      <>
        Chat on Whatsapp with{' '}
        <a
          href="https://wa.me/2347032973392"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0876C9] hover:underline whitespace-nowrap"
        >
          +234 703 297 3392
        </a>{' '}
        and get real-time responses.
      </>
    ),
  },
];

export function ContactIntroSection() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-white">
      <div className="site-container">
        {/* Top - intro + photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-20">
          {/* Left - heading */}
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-[#0876C9] mb-5">
              Contact Us
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#071A2B] leading-tight mb-6">
              Let&rsquo;s Stay in Touch
            </h2>
            <p className="text-base sm:text-lg text-[#344054] leading-relaxed max-w-md">
              Have a question, want to partner with us, or simply want to learn
              more about our work? We&rsquo;d love to hear from you.
            </p>
          </div>

          {/* Right - two offset photos */}
          <div className="relative flex justify-center lg:justify-end items-start gap-4 sm:gap-6">
            <div className="relative w-44 h-56 sm:w-56 sm:h-64 rounded-[14px] overflow-hidden mt-6">
              <Image
                src="/Images/image_30.png"
                alt="A member of the team ready to help"
                fill
                sizes="(max-width: 1024px) 40vw, 220px"
                className="object-cover"
              />
            </div>
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-[14px] overflow-hidden">
              <Image
                src="/Images/image_31.png"
                alt="Reaching out by phone"
                fill
                sizes="(max-width: 1024px) 36vw, 190px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom - channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bg-[#F6F5F3] rounded-[14px] p-8"
            >
              <span className="inline-flex text-[#0876C9] mb-6">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {channel.icon}
                </svg>
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#071A2B] mb-3">
                {channel.title}
              </h3>
              <p className="text-base text-[#475467] leading-relaxed">
                {channel.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
