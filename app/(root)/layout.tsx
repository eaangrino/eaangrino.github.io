import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Edgar Andres Angrino Lafaux | Portfolio language selector',
  description:
    "Choose English or Spanish to view Edgar Andres Angrino Lafaux's software engineering portfolio. Selecciona inglés o español para ver el portafolio.",
  alternates: {
    canonical: 'https://eaangrino.github.io/',
    languages: {
      es: 'https://eaangrino.github.io/es/',
      en: 'https://eaangrino.github.io/en/',
      'x-default': 'https://eaangrino.github.io/',
    },
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      // {url: '/skull.svg', type: 'image/svg+xml'}
      { url: '/skull_48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/skull_64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/skull_96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/skull_128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/skull_192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#0f1115',
};

export default function RootLandingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
