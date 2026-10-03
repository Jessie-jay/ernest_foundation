'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';

export function ProgrammesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F9FAFB]">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-[#071A2B] mb-6 leading-tight">
            Three ways we show love.
          </h2>
          <p className="text-lg text-[#344054] leading-relaxed">
            We focus on practical, people-centred support in three key areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          <Card
            title="Education & Development"
            image="/Images/02_hero_inset_school_child.jpg"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
            href="#education"
          />
          
          <Card
            title="Care & Support"
            image="/Images/06_how_we_work_hands.jpg"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
            href="#care"
          />
          
          <Card
            title="Love in Action"
            image="/Images/05_abba_haven_family.jpg"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
            href="#community"
          />
        </div>
        
        <div className="text-center">
          <a
            href="#programmes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: '0 var(--space-8)',
              height: 'var(--button-height-lg)',
              backgroundColor: 'var(--color-primary-500)',
              color: 'var(--color-white)',
              borderRadius: 'var(--button-radius)',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              textDecoration: 'none',
              boxShadow: 'var(--shadow-lg)',
              transition: 'all var(--duration-fast) var(--ease-standard)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-600)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-500)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Explore our work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
