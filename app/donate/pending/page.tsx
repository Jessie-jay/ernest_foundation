import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Donation Pending | Ernest Chianumba Foundation',
};

export default function DonatePendingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-40 pb-28 bg-white min-h-[70vh]">
          <div className="site-container max-w-xl text-center">
            <span className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FBF3DF] text-[#C99A08] flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <h1 className="font-display font-bold text-3xl text-[#071A2B] mb-3">
              Your donation is pending
            </h1>
            <p className="text-[#475467] mb-8">
              Your payment is still being processed. This can take a little while.
              We&rsquo;ll confirm it as soon as it clears, so there&rsquo;s no need
              to pay again.
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
