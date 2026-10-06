'use client';

import React, { useState } from 'react';
import { foundationInfo } from '@/data/foundation-info';

const inputClass =
  'w-full h-14 pl-12 pr-4 rounded-[10px] border border-[#E4E7EC] bg-[#F9FAFB] text-[#071A2B] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#0876C9]/30 focus:border-[#0876C9] transition';

// icon wrapper placed at the left of a field
const iconWrapClass =
  'absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3] pointer-events-none';

const labelClass = 'block text-sm font-medium text-[#344054] mb-2';

// Phone dialing codes (multiple countries supported)
const dialCodes = [
  { code: '+234', label: 'NG +234' },
  { code: '+1', label: 'US +1' },
  { code: '+44', label: 'UK +44' },
  { code: '+233', label: 'GH +233' },
  { code: '+27', label: 'ZA +27' },
  { code: '+254', label: 'KE +254' },
  { code: '+971', label: 'AE +971' },
  { code: '+91', label: 'IN +91' },
];

// Country list for the "Country" field
const countries = [
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'United States',
  'United Kingdom',
  'Canada',
  'United Arab Emirates',
  'India',
  'Other',
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white">
      {/* Soft blue wash at the top of the section */}
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">
          {/* Left - Intro + email block */}
          <div className="flex flex-col">
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#071A2B] leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-[#344054] leading-relaxed max-w-xs mb-14">
              Tell us how we can help. Reach out with questions, partnership
              ideas, or to learn more about the Foundation&rsquo;s work.
            </p>

            {/* Email block (styled like the reference help block) */}
            <div className="max-w-sm mt-auto">
              <span className="w-12 h-12 rounded-full bg-[#0876C9] text-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#071A2B] mb-3">
                Email us
              </h3>
              <p className="text-base text-[#475467] leading-relaxed mb-5 max-w-[16rem]">
                Send us a message directly and our team will get back to you.
              </p>
              <a
                href={`mailto:${foundationInfo.contact.email}`}
                className="inline-flex items-center gap-1.5 text-[#0876C9] font-medium hover:underline break-all"
              >
                {foundationInfo.contact.email}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Form card */}
          <div className="rounded-[16px] border border-[#EAECF0] bg-[#F9FAFB] p-6 sm:p-8 shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <span className="w-14 h-14 rounded-full bg-[#E6F3EA] text-[#2E8B57] flex items-center justify-center mb-5">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="font-display font-bold text-xl text-[#071A2B] mb-2">Thank you</h3>
                <p className="text-sm text-[#475467] max-w-xs">
                  Your message has been received. We&rsquo;ll get back to you as soon as we can.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>Full Name</label>
                  <div className="relative">
                    <span className={iconWrapClass}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input id="fullName" name="fullName" type="text" required placeholder="Full Name" className={inputClass} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <div className="relative">
                    <span className={iconWrapClass}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <input id="email" name="email" type="email" required placeholder="Email Address" className={inputClass} />
                  </div>
                </div>

                {/* Phone with country dialing code */}
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number</label>
                  <div className="flex gap-3">
                    <select
                      id="dialCode"
                      name="dialCode"
                      defaultValue="+234"
                      aria-label="Country dialing code"
                      className="h-14 w-28 shrink-0 px-3 rounded-[10px] border border-[#E4E7EC] bg-[#F9FAFB] text-[#071A2B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#0876C9]/30 focus:border-[#0876C9] transition"
                    >
                      {dialCodes.map((d) => (
                        <option key={d.code} value={d.code}>{d.label}</option>
                      ))}
                    </select>
                    <div className="relative flex-1">
                      <span className={iconWrapClass}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <input id="phone" name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className={labelClass}>Country</label>
                  <div className="relative">
                    <span className={iconWrapClass}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
                      </svg>
                    </span>
                    <select id="country" name="country" defaultValue="" className={`${inputClass} appearance-none`}>
                      <option value="" disabled>Country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className={labelClass}>Subject</label>
                  <div className="relative">
                    <span className={iconWrapClass}>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16v12H5.17L4 17.17z" />
                      </svg>
                    </span>
                    <select id="subject" name="subject" defaultValue="" className={`${inputClass} appearance-none`}>
                      <option value="" disabled>Subject</option>
                      <option value="general">General enquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="donation">Donations &amp; giving</option>
                      <option value="support">Request support</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                {/* Share your thoughts */}
                <div>
                  <label htmlFor="message" className={labelClass}>Share your thoughts</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-[10px] border border-[#E4E7EC] bg-[#F9FAFB] text-[#071A2B] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#0876C9]/30 focus:border-[#0876C9] transition resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-[10px] bg-[#0876C9] text-white font-semibold transition-colors hover:bg-[#0664AA]"
                >
                  Send Message
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
