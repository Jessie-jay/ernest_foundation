import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: 'Payment is not configured.' },
      { status: 500 }
    );
  }

  const reference = new URL(request.url).searchParams.get('reference');
  if (!reference) {
    return NextResponse.json(
      { error: 'Missing transaction reference.' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: { Authorization: `Bearer ${secretKey}` },
        cache: 'no-store',
      }
    );
    const data = await res.json();

    if (!res.ok || !data?.status) {
      return NextResponse.json(
        { error: data?.message || 'Could not verify the transaction.' },
        { status: 502 }
      );
    }

    const tx = data.data;
    return NextResponse.json({
      status: tx?.status, // 'success' | 'failed' | 'abandoned'
      amount: typeof tx?.amount === 'number' ? tx.amount / 100 : null,
      currency: tx?.currency ?? null,
      reference: tx?.reference ?? reference,
    });
  } catch {
    return NextResponse.json(
      { error: 'Could not reach the payment provider.' },
      { status: 502 }
    );
  }
}
