import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LegalDocument, type LegalDoc } from '@/components/legal/LegalDocument';

export const metadata = {
  title: 'Privacy Policy | Ernest Chianumba Foundation',
  description:
    'How the Ernest Chianumba Foundation collects, uses, stores, shares and protects personal information.',
};

const privacyDoc: LegalDoc = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  effectiveDate: 'Effective Date: May 2026',
  intro: (
    <>
      <p>
        Ernest Chianumba Foundation (&ldquo;ECF,&rdquo; &ldquo;the
        Foundation,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects the privacy of the individuals and
        communities we serve and the people who support our work.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, store, share and
        protect personal information when you visit our website, contact us, make
        a donation, participate in our programs, volunteer, partner with us, or
        otherwise interact with the Foundation. We are committed to handling
        personal information responsibly, transparently and in accordance with
        applicable data protection laws, including the Nigeria Data Protection
        Act 2023.
      </p>
    </>
  ),
  sections: [
    {
      id: 'information-we-collect',
      heading: '1. Information We May Collect',
      body: (
        <>
          <p>Depending on how you interact with ECF, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>your name, email address, telephone number and contact information;</li>
            <li>information submitted through contact, volunteer, partnership or other website forms;</li>
            <li>donation and transaction information;</li>
            <li>communications you send to us;</li>
            <li>information provided in connection with Foundation programs, applications or assessments;</li>
            <li>photographs, videos or testimonials where appropriate consent has been obtained;</li>
            <li>technical information such as browser type, device information, IP address and website usage data; and</li>
            <li>any other information you voluntarily provide to us.</li>
          </ul>
          <p>
            <strong className="font-semibold text-[#071A2B]">Payment information.</strong>{' '}
            Online donations are processed by Paystack, a third-party payment
            provider. Payment-method details are provided to and processed by
            Paystack and its financial partners. ECF does not intend to directly
            collect or store your complete payment-card details, though we may
            receive transaction information (such as name, email, amount, date,
            status and reference) needed to administer and account for your
            donation. See the{' '}
            <a href="https://paystack.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0876C9] hover:underline">
              Paystack Privacy Policy
            </a>.
          </p>
        </>
      ),
    },
    {
      id: 'children-beneficiary',
      heading: '2. Children and Beneficiary Information',
      body: (
        <>
          <p>
            Because some of ECF&rsquo;s programs support children and families, we
            recognize that information relating to children requires particular
            care. We seek to collect only information reasonably necessary to
            assess, administer, monitor or document that support.
          </p>
          <p>
            Where appropriate, information about a child may be obtained from or
            with the knowledge and consent of a parent, guardian, school or other
            authorized person. We do not intend to publicly disclose sensitive
            assessment information, family financial circumstances, home
            addresses, private educational records or similar confidential
            beneficiary information. Photographs, videos, names or stories that
            identify children are used publicly only where appropriate and the
            required consent or authorization has been obtained.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-use',
      heading: '3. How We Use Information',
      body: (
        <>
          <p>We may use personal information to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>respond to enquiries and communications;</li>
            <li>administer charitable and educational programs;</li>
            <li>assess and verify requests for support;</li>
            <li>communicate with beneficiaries, parents, guardians, schools, donors, volunteers and partners;</li>
            <li>process, record and acknowledge donations;</li>
            <li>maintain financial and organizational records;</li>
            <li>provide updates about ECF&rsquo;s programs and activities where appropriate;</li>
            <li>coordinate volunteers, partnerships and events;</li>
            <li>monitor and improve our website and protect the security of our systems; and</li>
            <li>meet legal, regulatory, governance and reporting obligations.</li>
          </ul>
          <p>
            We will not use personal information in a manner incompatible with the
            purpose for which it was collected unless permitted by law or
            appropriate consent has been obtained.
          </p>
        </>
      ),
    },
    {
      id: 'lawful-basis',
      heading: '4. Lawful Basis for Processing',
      body: (
        <p>
          Depending on the circumstances, ECF may process personal information
          based on consent, contractual necessity, compliance with legal
          obligations, legitimate interests, protection of vital interests, public
          interest, or another lawful basis recognized under applicable law. Where
          processing depends on consent, you may withdraw that consent subject to
          applicable legal and operational requirements.
        </p>
      ),
    },
    {
      id: 'donations-paystack',
      heading: '5. Donations, Paystack and Financial Information',
      body: (
        <>
          <p>
            Online donations are processed by Paystack, which may collect and
            process payment and transaction information required to authorize
            payments, prevent fraud, process refunds, manage disputes and perform
            other payment-related services.
          </p>
          <p>
            ECF may receive information about completed or attempted donations for
            donor acknowledgment, accounting, financial reporting, fraud
            prevention, refunds and recordkeeping, and maintains appropriate
            records of donations and expenditures for financial stewardship,
            governance and compliance purposes. Use of Paystack&rsquo;s services is
            also subject to Paystack&rsquo;s applicable terms and privacy practices.
          </p>
        </>
      ),
    },
    {
      id: 'sharing',
      heading: '6. When We May Share Information',
      body: (
        <>
          <p>ECF does not sell personal information. We may share information where reasonably necessary with:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Paystack and other service providers supporting payments, our website, communications or technology;</li>
            <li>banks, payment networks and financial institutions;</li>
            <li>schools or program partners where necessary to administer support;</li>
            <li>professional advisers, auditors or consultants;</li>
            <li>government, regulatory or law-enforcement authorities where legally required; or</li>
            <li>other parties where you have authorized the disclosure.</li>
          </ul>
          <p>We seek to limit disclosures to information reasonably necessary for the relevant purpose.</p>
        </>
      ),
    },
    {
      id: 'cookies',
      heading: '7. Cookies and Website Analytics',
      body: (
        <p>
          Our website may use cookies and similar technologies to provide
          essential functionality, facilitate secure payments, understand how
          visitors use the site, remember preferences and improve the experience.
          Paystack and other integrated third-party services may also use cookies
          for security, fraud prevention and payment processing. Where required,
          visitors are provided with appropriate choices regarding non-essential
          cookies.
        </p>
      ),
    },
    {
      id: 'data-security',
      heading: '8. Data Security',
      body: (
        <p>
          ECF takes reasonable measures to protect personal information against
          loss, misuse and unauthorized access. No method of transmission or
          storage is completely secure, but we work to safeguard the information
          entrusted to us.
        </p>
      ),
    },
    {
      id: 'data-retention',
      heading: '9. Data Retention',
      body: (
        <p>
          We retain personal information only for as long as reasonably necessary
          for the purpose for which it was collected, including program
          administration, safeguarding, financial recordkeeping, legal
          obligations, dispute resolution and accountability. Information no longer
          reasonably required is securely deleted, anonymized or otherwise handled
          in accordance with applicable requirements. Paystack may separately
          retain information in accordance with its own requirements.
        </p>
      ),
    },
    {
      id: 'your-rights',
      heading: '10. Your Privacy Rights',
      body: (
        <>
          <p>Subject to applicable law, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>request information about how your personal data is processed;</li>
            <li>request access to personal information held about you;</li>
            <li>request correction of inaccurate or incomplete information;</li>
            <li>request deletion in appropriate circumstances;</li>
            <li>object to or request restriction of certain processing;</li>
            <li>withdraw consent where processing is based on consent;</li>
            <li>request data portability where applicable; and</li>
            <li>lodge a complaint with the relevant data protection authority.</li>
          </ul>
          <p>Requests may be sent to the Foundation using the contact information below.</p>
        </>
      ),
    },
    {
      id: 'third-party',
      heading: '11. Third-Party Websites and Services',
      body: (
        <p>
          Our website may contain or integrate services operated by third parties,
          including Paystack. ECF is not responsible for the independent privacy
          practices, security or content of third-party websites and services.
          Please review the applicable policies when providing personal
          information directly to those services.
        </p>
      ),
    },
    {
      id: 'changes',
      heading: '12. Changes to This Policy',
      body: (
        <p>
          We may update this Privacy Policy periodically to reflect changes in our
          activities, website, payment systems, legal obligations or
          data-processing practices. The current version will be published on this
          website with an updated effective date.
        </p>
      ),
    },
    {
      id: 'contact',
      heading: '13. Contact Us',
      body: (
        <>
          <p>
            For questions, requests or concerns regarding this Privacy Policy or
            the way ECF handles personal information, please contact:
          </p>
          <p className="not-italic">
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LegalDocument doc={privacyDoc} />
      </main>
      <Footer />
    </div>
  );
}
