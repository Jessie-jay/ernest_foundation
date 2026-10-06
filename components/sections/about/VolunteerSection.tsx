'use client';

import React, { useState } from 'react';

const fieldClass =
  'w-full h-14 pl-12 pr-4 rounded-[10px] border border-[#E4E7EC] bg-[#F9FAFB] text-[#071A2B] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#0876C9]/30 focus:border-[#0876C9] transition';

const labelClass = 'block text-sm font-medium text-[#344054] mb-2';

export function VolunteerSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pb-20 sm:pb-28 bg-white">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[18px] shadow-[0_12px_40px_rgba(16,24,40,0.08)] grid grid-cols-1 lg:grid-cols-2">
          {/* Left - tinted intro panel */}
          <div className="relative bg-[#E7F1FB] px-8 py-12 sm:px-12 sm:py-16 flex flex-col justify-center overflow-hidden">
            {/* Heart watermarks */}
            <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 text-[#0876C9]/10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21.23l-1.06-1.06C5.4 14.67 2 11.6 2 7.95 2 5.1 4.24 2.9 7 2.9c1.74 0 3.41.81 4.5 2.09h1C13.59 3.71 15.26 2.9 17 2.9c2.76 0 5 2.2 5 5.05 0 3.65-3.4 6.72-8.94 12.22L12 21.23z" />
            </svg>

            <div className="relative max-w-sm">
              {/* Gradient accent line */}
              <span className="block w-16 h-1.5 rounded-full mb-6 bg-gradient-to-r from-[#0876C9] to-[#2E8B57]" aria-hidden="true" />
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#071A2B] leading-[1.05] mb-5">
                Become a<br />Volunteer
              </h2>
              <p className="text-base sm:text-lg text-[#475467] leading-relaxed">
                There is always a way to contribute. Whether through your time,
                skills or experience, volunteers can help the Foundation serve
                communities and strengthen its work.
              </p>
            </div>
          </div>

          {/* Right - form panel */}
          <div className="bg-white px-8 py-12 sm:px-12 sm:py-16 flex flex-col justify-center">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-6">
                <span className="w-14 h-14 rounded-full bg-[#E6F3EA] text-[#2E8B57] flex items-center justify-center mb-5">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="font-display font-bold text-xl text-[#071A2B] mb-2">Thank you</h3>
                <p className="text-sm text-[#475467] max-w-xs">
                  We&rsquo;ve received your details and will be in touch about volunteering.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="vol-fullName" className={labelClass}>Full Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input id="vol-fullName" type="text" name="fullName" required placeholder="Full Name" className={fieldClass} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="vol-email" className={labelClass}>Email Address</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <input id="vol-email" type="email" name="email" required placeholder="Email Address" className={fieldClass} />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="vol-phone" className={labelClass}>Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <input id="vol-phone" type="tel" name="phone" placeholder="Phone Number" className={fieldClass} />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-14 rounded-[10px] bg-[#0876C9] text-white font-semibold transition-colors hover:bg-[#0664AA]"
                >
                  Become a Volunteer
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
