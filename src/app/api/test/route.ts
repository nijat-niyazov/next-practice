import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const params = Object.fromEntries(searchParams.entries());
  // * This is used for dynamic key value params

  return NextResponse.json(params);
}
