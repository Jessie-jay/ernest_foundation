import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LegalDocument, type LegalDoc } from '@/components/legal/LegalDocument';

export const metadata = {
  title: 'Terms & Conditions | Ernest Chianumba Foundation',
  description:
    'The terms and conditions governing use of the Ernest Chianumba Foundation website.',
};

const termsDoc: LegalDoc = {
  eyebrow: 'Legal',
  title: 'Terms & Conditions',
  effectiveDate: 'Effective Date: May 2026',
  intro: (
    <>
      <p>
        Welcome to the website of Ernest Chianumba Foundation (&ldquo;ECF,&rdquo;
        &ldquo;the Foundation,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;).
      </p>
      <p>
        By accessing or using this website, you agree to these Terms &amp;
        Conditions. If you do not agree with these terms, please discontinue use
        of the website.
      </p>
    </>
  ),
  sections: [
    {
      id: 'about',
      heading: '1. About the Foundation',
      body: (
        <>
          <p>
            Ernest Chianumba Foundation is a charitable organization established
            in Nigeria to advance initiatives including education, care,
            humanitarian support and opportunities for individuals and communities
            in need.
          </p>
          <p>
            Information on this website is intended to explain the Foundation&rsquo;s
            mission, programs, activities and the ways members of the public may
            engage with or support our work.
          </p>
        </>
      ),
    },
    {
      id: 'website-information',
      heading: '2. Website Information',
      body: (
        <p>
          We aim to keep information on this website accurate and current. However,
          programs, activities, eligibility requirements, partnerships, financial
          information and other content may change over time. Website content is
          provided for general informational purposes and should not be
          interpreted as professional, legal, financial, medical or other
          specialized advice.
        </p>
      ),
    },
    {
      id: 'charitable-assistance',
      heading: '3. Charitable Assistance',
      body: (
        <>
          <p>
            Information about ECF programs does not create an entitlement to
            financial assistance, sponsorship or participation in any Foundation
            program. Applications, referrals or requests for assistance may be
            subject to assessment, verification, available resources, program
            criteria, safeguarding requirements and approval procedures.
          </p>
          <p>
            ECF reserves the right to determine the nature, amount, duration and
            recipients of charitable assistance consistent with its mission,
            governance processes and available resources.
          </p>
        </>
      ),
    },
    {
      id: 'donations-payment',
      heading: '4. Donations and Payment Processing',
      body: (
        <>
          <p>
            Donations to ECF are voluntary. Online donations made through this
            website are processed by Paystack, our third-party payment service
            provider, and may be subject to Paystack&rsquo;s applicable terms and
            privacy practices. ECF does not intend to directly collect or store
            complete payment-card information entered through Paystack&rsquo;s
            interface.
          </p>
          <p>
            Unless the Foundation expressly accepts a donation for a particular
            restricted purpose, donations may be applied where reasonably needed to
            advance ECF&rsquo;s charitable mission. A donation does not create
            ownership, control or decision-making rights over Foundation
            activities, programs or beneficiaries.
          </p>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      heading: '5. Intellectual Property',
      body: (
        <>
          <p>
            Unless otherwise stated, the ECF name, logo, branding, website design,
            graphics, written content, reports, photographs, videos and other
            original materials belong to Ernest Chianumba Foundation or are used
            with appropriate permission.
          </p>
          <p>
            They may not be copied, reproduced, modified, distributed, sold or used
            for commercial purposes without prior authorization, except where
            permitted by law. Sharing links to publicly available ECF website pages
            or social-media content is permitted.
          </p>
        </>
      ),
    },
    {
      id: 'photographs-stories',
      heading: '6. Photographs and Stories',
      body: (
        <p>
          Photographs, videos and stories on this website may depict Foundation
          activities, beneficiaries, volunteers, partners or illustrative
          material. They may not be extracted or reused in a manner that
          misrepresents, exploits, stigmatizes or compromises the dignity or
          privacy of any person depicted.
        </p>
      ),
    },
    {
      id: 'acceptable-use',
      heading: '7. Acceptable Use',
      body: (
        <>
          <p>You agree not to use this website:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>for unlawful, fraudulent or malicious purposes;</li>
            <li>to impersonate ECF or another person;</li>
            <li>to interfere with the operation or security of the website;</li>
            <li>to attempt unauthorized access to website systems or information;</li>
            <li>to transmit harmful software or code;</li>
            <li>to collect personal information from the website improperly; or</li>
            <li>in any way that could damage the Foundation, its beneficiaries, partners or reputation.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'third-party',
      heading: '8. Third-Party Services and Links',
      body: (
        <p>
          Our website may contain or integrate third-party websites and services,
          including Paystack, social-media platforms and other external resources.
          Use of those services may be governed by the respective provider&rsquo;s
          own terms and privacy policies. A link or integration does not
          necessarily constitute an endorsement, and ECF does not control or accept
          responsibility for independent third-party content, availability,
          security or privacy practices.
        </p>
      ),
    },
    {
      id: 'liability',
      heading: '9. Limitation of Liability',
      body: (
        <p>
          To the extent permitted by applicable law, ECF will not be liable for
          indirect, incidental or consequential loss arising solely from the use
          of, inability to use, or reliance upon this website or third-party
          websites linked from it. Nothing in these Terms excludes liability that
          cannot lawfully be excluded.
        </p>
      ),
    },
    {
      id: 'privacy',
      heading: '10. Privacy',
      body: (
        <p>
          Use of personal information collected through this website is governed by
          our{' '}
          <a href="/privacy-policy" className="text-[#0876C9] hover:underline">
            Privacy Policy
          </a>
          . Payment-related information submitted to Paystack is additionally
          subject to Paystack&rsquo;s applicable privacy practices.
        </p>
      ),
    },
    {
      id: 'changes',
      heading: '11. Changes to the Website or Terms',
      body: (
        <p>
          ECF may modify, suspend or discontinue portions of the website and may
          update these Terms &amp; Conditions when necessary. Updated terms will be
          published on this page. Continued use of the website following an update
          constitutes acceptance of the revised terms to the extent permitted by
          law.
        </p>
      ),
    },
    {
      id: 'governing-law',
      heading: '12. Governing Law',
      body: (
        <p>
          These Terms &amp; Conditions are governed by the applicable laws of the
          Federal Republic of Nigeria. Any dispute relating to the website or these
          Terms will be handled in accordance with applicable Nigerian law and
          through the appropriate courts or dispute-resolution mechanisms.
        </p>
      ),
    },
    {
      id: 'contact',
      heading: '13. Contact',
      body: (
        <>
          <p>Questions concerning these Terms &amp; Conditions may be directed to:</p>
          <p>
            Ernest Chianumba Foundation<br />
            47 Gbemisola Adenubi Street, Lagos, Nigeria<br />
            Email:{' '}
            <a href="mailto:info@ernestchianumbafoundation.org" className="text-[#0876C9] hover:underline break-words">
              info@ernestchianumbafoundation.org
            </a>
            <br />
            Website: ernestchianumbafoundation.org
          </p>
        </>
      ),
    },
  ],
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LegalDocument doc={termsDoc} />
      </main>
      <Footer />
    </div>
  );
}
