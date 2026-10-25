import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MediaGallery } from '@/components/sections/media/MediaGallery';

export const metadata = {
  title: 'Media | Ernest Chianumba Foundation',
  description:
    'A gallery of moments from the Ernest Chianumba Foundation, including school visits and community outreach.',
};

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Offset for the fixed header */}
      <main className="pt-20">
        <MediaGallery />
      </main>
      <Footer />
    </div>
  );
}
