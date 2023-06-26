import { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
          <h1>My Navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
