import React from 'react';
import { Button } from '@/components/ui/Button';

export default function TestButtons() {
  return (
    <div className="min-h-screen p-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-5xl)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-8)',
        }}>
          Button Test Page
        </h1>
        
        {/* Sizes */}
        <section>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-4)',
          }}>
            Button Sizes
          </h2>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" size="sm">Small Button</Button>
            <Button variant="primary" size="md">Medium Button</Button>
            <Button variant="primary" size="lg">Large Button</Button>
          </div>
        </section>
        
        {/* Variants */}
        <section>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-4)',
          }}>
            Button Variants
          </h2>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Button variant="primary" size="md">Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="outline" size="md">Outline</Button>
            <Button variant="dark" size="md">Dark</Button>
          </div>
        </section>
        
        {/* With Icons */}
        <section>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-4)',
          }}>
            Buttons with Icons
          </h2>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <Button 
              variant="primary" 
              size="md"
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
            >
              Donate Now
            </Button>
            <Button 
              variant="secondary" 
              size="md"
              icon={
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            >
              Learn More
            </Button>
          </div>
        </section>
        
        {/* Header Button Test */}
        <section style={{
          backgroundColor: 'var(--color-surface)',
          padding: 'var(--space-8)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-4)',
          }}>
            Header Button (as used in navigation)
          </h2>
          <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
            <Button variant="primary" size="md">
              Donate Now
            </Button>
            <span style={{ color: 'var(--color-text-muted)' }}>← This button should have proper padding</span>
          </div>
        </section>
        
        {/* Inspect Instructions */}
        <section style={{
          backgroundColor: 'var(--color-primary-50)',
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-primary-200)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-lg)',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-3)',
          }}>
            How to Inspect Button Styles
          </h3>
          <ol style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-normal)',
            paddingLeft: 'var(--space-6)',
          }}>
            <li>Right-click on any button above</li>
            <li>Select "Inspect" or "Inspect Element"</li>
            <li>Look for the computed padding values in DevTools</li>
            <li>Expected padding: <code style={{ 
              backgroundColor: 'var(--color-white)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontFamily: 'monospace',
            }}>0 24px</code> (from <code style={{ 
              backgroundColor: 'var(--color-white)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontFamily: 'monospace',
            }}>--button-padding-x</code>)</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
