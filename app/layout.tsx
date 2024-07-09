import './globals.css';
import type { Metadata } from 'next';
import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google';
import DataProvider from '@/app/_providers/DataContext';

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
  title: 'Tic tac toe',
  description: 'Tic tac toe',
  applicationName: 'Tic tac toe',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} mx-auto flex min-h-dvh flex-col justify-center overflow-x-clip bg-veryDarkNavy p-6 sm:py-10 md:min-h-screen`}
      >
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
