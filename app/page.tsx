import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MissionSection } from '@/components/sections/MissionSection';
import { NewSection } from '@/components/sections/NewSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { AbbaSection } from '@/components/sections/AbbaSection';
import { TransparencySection } from '@/components/sections/TransparencySection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <NewSection />
        <ImpactSection />
        <ValuesSection />
        <AbbaSection />
        <TransparencySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
