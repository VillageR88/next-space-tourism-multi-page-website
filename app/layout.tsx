import './globals.css';
import type { Metadata } from 'next';
import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google';

const bellefair = Bellefair({
  display: 'swap',
  weight: ['400'],
  variable: '--font-bellefair',
  subsets: ['latin', 'latin-ext'],
});

const barlow = Barlow({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  subsets: ['latin', 'latin-ext'],
});

const barlowCondensed = Barlow_Condensed({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-condensed',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Space tourism multi-page website',
  description: 'Space tourism multi-page website',
  applicationName: 'Space tourism multi-page website',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} relative min-h-dvh flex-col overflow-x-clip bg-veryDarkNavy py-6 sm:py-10 md:min-h-screen`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
