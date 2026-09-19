import type {Metadata, Viewport} from 'next';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {ReactNode} from 'react';
import {routing} from '@/i18n/routing';
import ThemeScript from '@/components/ThemeScript';
import '../../globals.css';

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
};

export async function generateMetadata({params}: Pick<Props, 'params'>): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({locale, namespace: 'seo'});
  const canonical = `https://eaangrino.github.io/${locale}/`;

  return {
    title: t('title'),
    description: t('description'),
    authors: [{name: 'Edgar Andres Angrino Lafaux'}],
    alternates: {
      canonical,
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
    openGraph: {
      type: 'website',
      url: canonical,
      title: t('title'),
      description: t('socialDescription'),
      siteName: 'Edgar Andres Angrino Lafaux',
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_CO'],
    },
    twitter: {
      card: 'summary',
      title: t('title'),
      description: t('socialDescription'),
    },
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale === 'es' ? 'es-CO' : 'en'} suppressHydrationWarning>
      <head><ThemeScript /></head>
      <body className="bg-base-100 text-base-content min-h-screen">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
