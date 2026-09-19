import type { MetadataRoute } from 'next';

const lastModified = '2026-09-17';
const siteUrl = 'https://eaangrino.github.io/';
const spanishUrl = `${siteUrl}es/`;
const englishUrl = `${siteUrl}en/`;

const alternates = {
  languages: {
    es: spanishUrl,
    en: englishUrl,
    'x-default': siteUrl,
  },
};

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified, alternates },
    { url: spanishUrl, lastModified, alternates },
    { url: englishUrl, lastModified, alternates },
  ];
}
