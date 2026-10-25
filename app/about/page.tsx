import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { MissionVisionSection } from '@/components/sections/about/MissionVisionSection';
import { FounderMessageSection } from '@/components/sections/about/FounderMessageSection';
import { ValuesSection } from '@/components/sections/about/ValuesSection';
import { BoardOfTrusteesSection } from '@/components/sections/about/BoardOfTrusteesSection';
import { OfficersSection } from '@/components/sections/about/OfficersSection';

export const metadata = {
  title: 'About Us | Ernest Chianumba Foundation',
  description:
    'Built on faith and purpose. We believe every person has inherent worth and potential, and that circumstances should not define their future.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <MissionVisionSection />
        <FounderMessageSection />
        <ValuesSection />
        <BoardOfTrusteesSection />
        <OfficersSection />
      </main>
      <Footer />
    </div>
  );
}
