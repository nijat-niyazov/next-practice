import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4">
      <h1>Hello world</h1>
      <p>
        <div className="flex px-10 gap-3">
          <Link href="/users" className="bg-blue-300 p-2 rounded-lg">
            users
          </Link>
          <Link href="/posts" className="bg-green-300 p-2 rounded-lg">
            posts
          </Link>
          <Link href="/feedback" className="bg-red-300 p-2 rounded-lg">
            feedback
          </Link>
        </div>
      </p>
    </main>
  );
}
