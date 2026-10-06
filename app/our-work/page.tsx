import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OurWorkHero } from '@/components/sections/our-work/OurWorkHero';
import { SupportIncludesSection } from '@/components/sections/our-work/SupportIncludesSection';
import { HowItWorksSection } from '@/components/sections/our-work/HowItWorksSection';
import { WhyItMattersSection } from '@/components/sections/our-work/WhyItMattersSection';
import { UseCasesSection } from '@/components/sections/our-work/UseCasesSection';

export const metadata = {
  title: 'Our Work | Ernest Chianumba Foundation',
  description:
    'The Education Support Programme provides educational assistance to children who need support to remain in school.',
};

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <OurWorkHero />
        <SupportIncludesSection />
        <HowItWorksSection />
        <WhyItMattersSection />
        <UseCasesSection />
      </main>
      <Footer />
    </div>
  );
}
