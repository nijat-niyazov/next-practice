import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4">
      <h1>Hello world</h1>
      <p>
        <div className="flex px-10 gap-3">
          <Link href="/users" className="bg-blue-600 p-2 rounded-lg">
            users
          </Link>
          <Link href="/posts" className="bg-green-600 p-2 rounded-lg">
            posts
          </Link>
          <Link href="/feedback" className="bg-red-600 p-2 rounded-lg">
            feedback
          </Link>
          <Link href="/search-users" className="bg-amber-600 p-2 rounded-lg">
            Search
          </Link>
        </div>
      </p>
    </main>
  );
}
