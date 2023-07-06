import { NextResponse } from 'next/server';

interface FeedBack {
  name?: string;
  message?: string;
  email?: string;
}

export async function POST(request: Request) {
  const { name, email, message }: FeedBack = await request.json();
  // it's used to get data body

  console.log({ name, email, message });

  return NextResponse.json({ message: 'You registered' });
}
