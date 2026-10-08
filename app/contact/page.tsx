import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactIntroSection } from '@/components/sections/contact/ContactIntroSection';

export const metadata = {
  title: 'Contact | Ernest Chianumba Foundation',
  description:
    'Get in touch with the Ernest Chianumba Foundation. Reach out with questions, partnership ideas, or to learn more about our work.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactIntroSection />
      </main>
      <Footer />
    </div>
  );
}
