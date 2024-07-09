import './globals.css';
import type { Metadata } from 'next';
import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import { redirect } from 'next/navigation';
import type { Routes, RoutesCelestial } from '@/app/routes';
import Background from '@/app/components/Background';

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

let path: string;
// eslint-disable-next-line @typescript-eslint/require-await
async function handleSubmit(FormData: FormData) {
  'use server';
  path = FormData.get('path') as Routes;
  redirect(path);
}

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
        <Background path={path as Routes | RoutesCelestial} />
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form action={handleSubmit}>
          <Navbar path={path as Routes | RoutesCelestial} />
          <div className="absolute top-0 size-full pt-[136px]">
            <div className="mx-auto flex size-full max-w-[1440px] items-center justify-center overflow-hidden">
              {children}
            </div>
          </div>
        </form>
      </body>
    </html>
  );
}
