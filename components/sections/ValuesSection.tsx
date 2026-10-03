import React from 'react';

export function ValuesSection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative ash lines. Nothing extends below the cards. */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal line passing above the cards, below the heading/subtitle */}
        <div className="absolute left-0 right-0 top-[38%] h-px bg-[rgba(16,24,40,0.1)]"></div>

        {/* Left vertical line: from the top of the section down to the horizontal line */}
        <div className="absolute top-0 left-[22%] h-[38%] w-px bg-[rgba(16,24,40,0.1)]"></div>

        {/* Right vertical line (near the 3rd card), nudged slightly right:
            from the top down to the horizontal line */}
        <div className="absolute top-0 left-[76%] h-[38%] w-px bg-[rgba(16,24,40,0.1)]"></div>

        {/* Short vertical line on the 2nd card: from the horizontal line down
            to the top of the 2nd card */}
        <div className="absolute top-[38%] left-1/2 h-[14%] w-px bg-[rgba(16,24,40,0.1)]"></div>

        {/* Line from the frame's left edge running inward to end under the 1st card */}
        <div className="absolute top-[82%] left-0 w-[18%] h-px bg-[rgba(16,24,40,0.1)]"></div>

        {/* Line from the frame's right edge running inward to end under the 3rd card */}
        <div className="absolute top-[82%] right-0 w-[18%] h-px bg-[rgba(16,24,40,0.1)]"></div>

        {/* Small box markers where lines meet the horizontal line */}
        {[
          { left: '22%', top: '38%' },
          { left: '50%', top: '38%' },
          { left: '76%', top: '38%' },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-2.5 h-2.5 border border-[rgba(16,24,40,0.25)] bg-white"
            style={{
              left: pos.left,
              top: pos.top,
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        ))}
      </div>

      <div className="site-container relative">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-[#071A2B] mb-6 leading-tight">
            A future where people can thrive.
          </h2>
          <p className="text-xl text-[#344054] leading-relaxed max-w-md mx-auto">
            A Nigeria where vulnerable people are supported with care, guided with wisdom and empowered to live meaningful lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Education */}
          <div className="bg-white rounded-[10px] p-10 border border-[#E4E7EC] shadow-[0_12px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_48px_rgba(16,24,40,0.12)] transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#0876C9]/10 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-[#0876C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-[#071A2B] mb-4">Supported</h3>
            <p className="text-[#344054] leading-relaxed">
              Vulnerable people can access the care and support they need with dignity and compassion.
            </p>
          </div>

          {/* Care */}
          <div className="bg-white rounded-[10px] p-10 border border-[#E4E7EC] shadow-[0_12px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_48px_rgba(16,24,40,0.12)] transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#27C83E]/10 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-[#27C83E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-[#071A2B] mb-4">Guided</h3>
            <p className="text-[#344054] leading-relaxed">
              People can find the guidance they need to navigate difficult circumstances and make meaningful choices.
            </p>
          </div>

          {/* Opportunity */}
          <div className="bg-white rounded-[10px] p-10 border border-[#E4E7EC] shadow-[0_12px_40px_rgba(16,24,40,0.08)] hover:shadow-[0_16px_48px_rgba(16,24,40,0.12)] transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#FFD83D]/20 rounded-2xl flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-[#071A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-[#071A2B] mb-4">Empowered</h3>
            <p className="text-[#344054] leading-relaxed">
              People have opportunities to develop their potential, build independence and live meaningful lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
