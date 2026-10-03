import React from 'react';
import { Button } from '@/components/ui/Button';

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="container mx-auto px-4 py-20">
        <header className="mb-16 border-b border-[var(--color-border)] pb-8">
          <h1 className="font-[var(--font-display)] text-[var(--text-7xl)] text-[var(--color-text-primary)] mb-4">
            Design System
          </h1>
          <p className="text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-3xl">
            A comprehensive design system for the Ernest Chianumba Foundation.
          </p>
        </header>

        {/* Colors Section */}
        <section className="mb-20">
          <h2 className="font-[var(--font-display)] text-[var(--text-4xl)] text-[var(--color-text-primary)] mb-8">
            Colors
          </h2>
          
          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="font-[var(--font-body)] text-[var(--text-xl)] font-semibold text-[var(--color-text-primary)] mb-4">
              Primary (Blue)
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="text-center">
                  <div
                    className="h-20 rounded-lg mb-2 border border-[var(--color-border)]"
                    style={{ backgroundColor: `var(--color-primary-${shade})` }}
                  />
                  <div className="text-xs text-[var(--color-text-muted)]">{shade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="mb-12">
            <h3 className="font-[var(--font-body)] text-[var(--text-xl)] font-semibold text-[var(--color-text-primary)] mb-4">
              Secondary (Green)
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="text-center">
                  <div
                    className="h-20 rounded-lg mb-2 border border-[var(--color-border)]"
                    style={{ backgroundColor: `var(--color-secondary-${shade})` }}
                  />
                  <div className="text-xs text-[var(--color-text-muted)]">{shade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-12">
            <h3 className="font-[var(--font-body)] text-[var(--text-xl)] font-semibold text-[var(--color-text-primary)] mb-4">
              Accent (Yellow)
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-7 gap-4">
              {[50, 100, 200, 300, 400, 500, 600].map((shade) => (
                <div key={shade} className="text-center">
                  <div
                    className="h-20 rounded-lg mb-2 border border-[var(--color-border)]"
                    style={{ backgroundColor: `var(--color-accent-${shade})` }}
                  />
                  <div className="text-xs text-[var(--color-text-muted)]">{shade}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-20">
          <h2 className="font-[var(--font-display)] text-[var(--text-4xl)] text-[var(--color-text-primary)] mb-8">
            Typography
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Display Font - DM Serif Display</p>
              <h1 className="font-[var(--font-display)] text-[var(--text-8xl)]" style={{ lineHeight: 'var(--leading-tight)' }}>
                Display 88px
              </h1>
            </div>
            
            <div>
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Heading 1 - 48px</p>
              <h1 className="font-[var(--font-display)] text-[var(--text-5xl)]" style={{ lineHeight: 'var(--leading-snug)' }}>
                The quick brown fox jumps over the lazy dog
              </h1>
            </div>
            
            <div>
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Heading 2 - 36px</p>
              <h2 className="font-[var(--font-display)] text-[var(--text-4xl)]" style={{ lineHeight: 'var(--leading-snug)' }}>
                The quick brown fox jumps over the lazy dog
              </h2>
            </div>
            
            <div>
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Body Large - 18px</p>
              <p className="font-[var(--font-body)] text-[var(--text-lg)]" style={{ lineHeight: 'var(--leading-normal)' }}>
                The quick brown fox jumps over the lazy dog. We extend God&apos;s love through practical care, education, and support to people who are overlooked, underserved, or forgotten in Nigeria and beyond.
              </p>
            </div>
            
            <div>
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Body - 16px</p>
              <p className="font-[var(--font-body)] text-[var(--text-base)]" style={{ lineHeight: 'var(--leading-normal)' }}>
                The quick brown fox jumps over the lazy dog. We extend God&apos;s love through practical care, education, and support to people who are overlooked, underserved, or forgotten in Nigeria and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-20">
          <h2 className="font-[var(--font-display)] text-[var(--text-4xl)] text-[var(--color-text-primary)] mb-8">
            Buttons
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-[var(--font-body)] text-[var(--text-xl)] font-semibold text-[var(--color-text-primary)] mb-4">
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Small Button</Button>
                <Button variant="primary" size="md">Medium Button</Button>
                <Button variant="primary" size="lg">Large Button</Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-[var(--font-body)] text-[var(--text-xl)] font-semibold text-[var(--color-text-primary)] mb-4">
                Variants
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="dark">Dark</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-20">
          <h2 className="font-[var(--font-display)] text-[var(--text-4xl)] text-[var(--color-text-primary)] mb-8">
            Spacing Scale
          </h2>
          
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((space) => (
              <div key={space} className="flex items-center gap-4">
                <div className="w-24 text-sm text-[var(--color-text-muted)]">
                  --space-{space}
                </div>
                <div
                  className="bg-[var(--color-primary-500)] rounded"
                  style={{ width: `var(--space-${space})`, height: '24px' }}
                />
                <div className="text-sm text-[var(--color-text-muted)]">
                  {space === 1 && '4px'}
                  {space === 2 && '8px'}
                  {space === 3 && '12px'}
                  {space === 4 && '16px'}
                  {space === 5 && '20px'}
                  {space === 6 && '24px'}
                  {space === 8 && '32px'}
                  {space === 10 && '40px'}
                  {space === 12 && '48px'}
                  {space === 16 && '64px'}
                  {space === 20 && '80px'}
                  {space === 24 && '96px'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-20">
          <h2 className="font-[var(--font-display)] text-[var(--text-4xl)] text-[var(--color-text-primary)] mb-8">
            Border Radius
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['sm', 'md', 'lg', 'xl', '2xl', 'full'].map((size) => (
              <div key={size} className="text-center">
                <div
                  className="w-full h-24 bg-[var(--color-primary-500)] mb-2"
                  style={{ borderRadius: `var(--radius-${size})` }}
                />
                <div className="text-sm text-[var(--color-text-muted)]">
                  {size === 'sm' && '8px'}
                  {size === 'md' && '12px'}
                  {size === 'lg' && '20px'}
                  {size === 'xl' && '24px'}
                  {size === '2xl' && '32px'}
                  {size === 'full' && '9999px'}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">--radius-{size}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows Section */}
        <section className="mb-20">
          <h2 className="font-[var(--font-display)] text-[var(--text-4xl)] text-[var(--color-text-primary)] mb-8">
            Shadows
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
              <div key={size} className="text-center">
                <div
                  className="w-full h-32 bg-white rounded-lg mb-2 flex items-center justify-center"
                  style={{ boxShadow: `var(--shadow-${size})` }}
                >
                  <span className="text-[var(--color-text-muted)]">--shadow-{size}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
