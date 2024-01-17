import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import EU from '@/components/EU';
import GoToTop from '@/components/GoToTop';

export const metadata: Metadata = {
  title: 'The Red Mill',
  description: 'The Red Mill is a coffee shop in Peramos, Kavala, Greece. We produce and serve the best coffee in town.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="el">
    <body className="relative bg-grayLight">
    <main id="maincontent">
      { children }
    </main>
    <EU />
    <GoToTop />
    </body>
    </html>
  );
}
