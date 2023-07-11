import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// head codes for better SEO
export const metadata: Metadata = {
  title: 'First Next App',
  description: 'Testing new features',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/">Go To Home Page</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
