import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-4' >
      <h1>Hello world</h1>
      <p>

      <Link href="/users" className="bg-blue-300 p-2 rounded-lg">
       users
      </Link>
      </p>
    </main>
  );
}
