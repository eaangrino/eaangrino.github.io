import type {Metadata, Viewport} from 'next';
import type {ReactNode} from 'react';
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
  robots: {index: true, follow: true},
  icons: {
    icon: [{url: '/skull.svg', type: 'image/svg+xml'}],
  },
};

export const viewport: Viewport = {
  themeColor: '#0f1115',
};

export default function RootLandingLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
