import { NextResponse } from 'next/server';

// Currencies offered for donation (both use a x100 subunit)
const SUPPORTED_CURRENCIES = ['NGN', 'USD'] as const;
type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

type InitializeBody = {
  amount?: unknown;
  currency?: unknown;
};

// Paystack requires an email to initialize a transaction. Since we no longer
// collect one from the donor, fall back to the Foundation's address.
const FALLBACK_EMAIL =
  process.env.DONATION_FALLBACK_EMAIL ?? 'donations@ernestchianumbafoundation.org';

export async function POST(request: Request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: 'Payment is not configured. Please try again later.' },
      { status: 500 }
    );
  }

  let body: InitializeBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = FALLBACK_EMAIL;
  const amount = Number(body.amount);
  const currency = (
    typeof body.currency === 'string' ? body.currency : 'NGN'
  ).toUpperCase() as SupportedCurrency;

  // Validate
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json(
      { error: 'A valid donation amount is required.' },
      { status: 400 }
    );
  }
  if (!SUPPORTED_CURRENCIES.includes(currency)) {
    return NextResponse.json(
      { error: 'Unsupported currency selected.' },
      { status: 400 }
    );
  }

  // Paystack expects the amount in the currency's subunit (kobo/pesewas/cents)
  const amountInSubunit = Math.round(amount * 100);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
  const reference = `ECF-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)
    .toUpperCase()}`;

  try {
    const paystackRes = await fetch(
      'https://api.paystack.co/transaction/initialize',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount: amountInSubunit,
          currency,
          reference,
          callback_url: `${siteUrl}/donate/callback`,
          metadata: {
            purpose: 'Donation',
            custom_fields: [
              {
                display_name: 'Donation',
                variable_name: 'donation',
                value: `${currency} ${amount}`,
              },
            ],
          },
        }),
      }
    );

    const data = await paystackRes.json();

    if (!paystackRes.ok || !data?.status || !data?.data?.authorization_url) {
      return NextResponse.json(
        { error: data?.message || 'Could not initialize the payment.' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      authorization_url: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch {
    return NextResponse.json(
      { error: 'Could not reach the payment provider. Please try again.' },
      { status: 502 }
    );
  }
}
