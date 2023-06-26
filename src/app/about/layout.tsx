import { Metadata } from 'next';
import { ReactNode } from 'react';

// head codes for better SEO
export const metadata: Metadata = {
  title: 'About Section',
  description: 'learning metada',
};

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav>About Navbar</nav>
      <main>{children}</main>
    </>
  );
};

export default AboutLayout;
