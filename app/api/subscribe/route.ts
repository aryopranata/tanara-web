import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  console.log('Received subscription:', email);
  return NextResponse.json({ success: true });
}
