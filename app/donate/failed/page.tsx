import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Donation Not Completed | Ernest Chianumba Foundation',
};

export default function DonateFailedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-40 pb-28 bg-white min-h-[70vh]">
          <div className="site-container max-w-xl text-center">
            <span className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FDECEA] text-[#D8463C] flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </span>
            <h1 className="font-display font-bold text-3xl text-[#071A2B] mb-3">
              Payment not completed
            </h1>
            <p className="text-[#475467] mb-8">
              Your donation wasn&rsquo;t completed. No charge was made. You can try
              again whenever you&rsquo;re ready.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-7 rounded-[10px] bg-[#0876C9] text-white font-medium hover:bg-[#0664AA] transition-colors"
            >
              Back to Home
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
