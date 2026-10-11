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
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* motion lines */}
        <path d="M3 18h5M1 24h7M4 30h4" stroke="#0876C9" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
        {/* envelope */}
        <rect x="14" y="12" width="30" height="24" rx="4" fill="#0876C9" />
        <path d="M18 19l11 8 11-8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
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
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* ringing waves radiating from the handset's earpiece (top-right) */}
        <path d="M30 20a9 9 0 0 0-9-9" stroke="#0876C9" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
        <path d="M36 20a15 15 0 0 0-15-15" stroke="#0876C9" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
        <path d="M42 20A21 21 0 0 0 21 -1" stroke="#0876C9" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
        {/* tilted handset */}
        <path d="M11.3 23.1c5.6 7.9 11.7 14 19.6 19.6 1.3.9 3 .7 4.1-.4l2.8-2.8c1.3-1.3 1.1-3.4-.4-4.5l-4.1-3a3 3 0 0 0-3.4-.1l-1.9 1.2a40 40 0 0 1-8.2-8.2l1.2-1.9a3 3 0 0 0-.1-3.4l-3-4.1c-1.1-1.5-3.2-1.7-4.5-.4L10.6 15c-1.1 1.1-1.3 2.8-.4 4.1 0.4.6.8 1.2 1.1 1.7z" fill="#0876C9" />
      </svg>
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
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* speech bubble with tail at bottom-left */}
        <path d="M24 7c-10 0-18 6.7-18 15 0 4.3 2.2 8.1 5.7 10.8L9 42l9.6-4.4c1.7.4 3.5.6 5.4.6 10 0 18-6.7 18-15S34 7 24 7z" fill="#0876C9" />
        {/* three dots */}
        <circle cx="16" cy="22" r="2.3" fill="#fff" />
        <circle cx="24" cy="22" r="2.3" fill="#fff" />
        <circle cx="32" cy="22" r="2.3" fill="#fff" />
      </svg>
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
                {channel.icon}
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
