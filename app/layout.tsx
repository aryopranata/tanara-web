import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'Tanara',
  description: 'Handcrafted goods from the desert.',
  openGraph: {
    title: 'Tanara',
    description: 'Handcrafted goods from the desert.',
    url: 'https://tanara.example.com',
    siteName: 'Tanara',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[var(--tanara-sand)] text-[var(--tanara-brown)] min-h-screen">
        <header className="flex items-center justify-between p-4">
          <Link href="/" className="text-xl font-semibold">Tanara</Link>
          <Link href="/cart" className="relative" aria-label="Cart">
            <span>Cart</span>
            <span className="absolute -top-2 -right-3 rounded-full bg-[var(--tanara-brown)] text-[var(--tanara-sand)] text-xs px-2 py-0.5" aria-label="Items in cart">0</span>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
