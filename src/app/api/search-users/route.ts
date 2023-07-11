import { NextResponse } from 'next/server';
import users from '../../users.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  const filteredUsers = users.filter(user => user.first_name === name);

  return NextResponse.json(filteredUsers);
}
