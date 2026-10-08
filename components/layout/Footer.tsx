import React from 'react';
import Image from 'next/image';
import { DonateButton } from '@/components/donation/DonateButton';
import { foundationInfo } from '@/data/foundation-info';

export function Footer() {
  return (
    <footer className="bg-[#0A1A2F] text-white">
      <div className="site-container-wide">
        {/* Top - Support the Mission */}
        <div className="text-center py-16 sm:py-20">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
            Support the Mission
          </h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs mx-auto mb-8">
            Guided by love, cared for with grace, building lives across Nigeria.
          </p>
          <DonateButton variant="primary" size="md" />
        </div>

        {/* Middle - brand / contact / follow */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Image
                src="/Logo/no_bg.png"
                alt="Ernest Chianumba Foundation"
                width={200}
                height={43}
                className="h-10 w-auto"
              />
            </a>

            {/* Contact + Follow */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-center sm:text-left">
                <span className="text-white/60">Contact us</span>
                <a
                  href="https://www.instagram.com/ernest_chianumbafoundation?stkn=MTB3Zm9wbG5wbzZ6Zw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3BA7F2] hover:underline break-all"
                >
                  {foundationInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-white/60">Follow Us</span>
                <a
                  href="https://www.instagram.com/ernest_chianumbafoundation?stkn=MTB3Zm9wbG5wbzZ6Zw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-[#0876C9] hover:bg-[#0664AA] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - legal */}
        <div className="border-t border-[#101928] py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-8">
              <a href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
            <p className="text-white/50">
              © 2026 Ernest Chianumba Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
