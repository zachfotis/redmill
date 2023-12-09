import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'The Red Mill',
  description: 'The Red Mill is a coffee shop in Kavala, Greece.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-grayLight">{children}</body>
    </html>
  )
}
