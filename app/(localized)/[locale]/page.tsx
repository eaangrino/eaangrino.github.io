import {getTranslations, setRequestLocale} from 'next-intl/server';
import PortfolioShell from '@/components/PortfolioShell';
import {createPortfolioJsonLd} from '@/data/seo';
import type {AppLocale} from '@/i18n/routing';

export default async function HomePage({params}: {params: Promise<{locale: AppLocale}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'seo'});
  const jsonLd = createPortfolioJsonLd(locale, t('title'));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')}}
      />
      <PortfolioShell />
    </>
  );
}
