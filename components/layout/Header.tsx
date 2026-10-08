'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { DonateButton } from '@/components/donation/DonateButton';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/about', label: 'About us', match: '/about' },
    { href: '/our-work', label: 'Our Work', match: '/our-work' },
    { href: '/contact', label: 'Contact', match: '/contact' },
  ];

  const isActive = (match: string) => {
    if (match.startsWith('/#')) {
      return pathname === '/';
    }
    return pathname === match || pathname.startsWith(`${match}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="site-container-wide">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/Logo/no_bg.png"
              alt="Ernest Chianumba Foundation"
              width={200}
              height={43}
              className="h-10 w-auto"
              priority
            />
          </a>
          
          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${isActive(link.match) ? ' active' : ''}`}
                aria-current={isActive(link.match) ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center gap-4">
            {/* Donate - desktop only; on mobile it lives in the hamburger menu */}
            <div className="hidden md:block">
              <DonateButton variant="primary" size="md" />
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-[#071A2B]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link py-2${isActive(link.match) ? ' active' : ''}`}
                  aria-current={isActive(link.match) ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Donate button inside the mobile menu */}
              <DonateButton
                variant="primary"
                size="md"
                className="mt-2 w-full"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
