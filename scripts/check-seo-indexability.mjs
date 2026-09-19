import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';

const siteUrl = 'https://eaangrino.github.io/';
const spanishUrl = `${siteUrl}es/`;
const englishUrl = `${siteUrl}en/`;

const pages = [
  {
    path: 'out/index.html',
    canonical: siteUrl,
    alternates: {es: spanishUrl, en: englishUrl, 'x-default': siteUrl},
    themeColor: '#0f1115',
    languageSelector: true,
    structuredData: false,
    author: false,
  },
  {
    path: 'out/es/index.html',
    canonical: spanishUrl,
    alternates: {es: spanishUrl, en: englishUrl, 'x-default': siteUrl},
    themeColor: '#0f172a',
    structuredData: true,
    author: true,
  },
  {
    path: 'out/en/index.html',
    canonical: englishUrl,
    alternates: {es: spanishUrl, en: englishUrl, 'x-default': siteUrl},
    themeColor: '#0f172a',
    structuredData: true,
    author: true,
  },
];

const errors = [];

function getAttribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'))?.[1] ?? null;
}

function hasRel(tag, expectedRel) {
  return (getAttribute(tag, 'rel') ?? '').toLowerCase().split(/\s+/).includes(expectedRel);
}

for (const page of pages) {
  const html = readFileSync(resolve(page.path), 'utf8');
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
  const robotsTag = metaTags.find((tag) => getAttribute(tag, 'name')?.toLowerCase() === 'robots');
  const robotsContent = robotsTag ? getAttribute(robotsTag, 'content') ?? '' : '';

  if (!robotsTag || /noindex|nofollow|none/i.test(robotsContent)) {
    errors.push(`${page.path}: robots must allow index and follow`);
  } else if (!/index/i.test(robotsContent) || !/follow/i.test(robotsContent)) {
    errors.push(`${page.path}: robots must explicitly contain index and follow`);
  }

  const canonicalTags = linkTags.filter((tag) => hasRel(tag, 'canonical'));
  if (canonicalTags.length !== 1 || getAttribute(canonicalTags[0], 'href') !== page.canonical) {
    errors.push(`${page.path}: canonical must be ${page.canonical}`);
  }

  for (const [hreflang, expectedHref] of Object.entries(page.alternates)) {
    const alternate = linkTags.find(
      (tag) => hasRel(tag, 'alternate') && getAttribute(tag, 'hreflang')?.toLowerCase() === hreflang,
    );
    if (!alternate || getAttribute(alternate, 'href') !== expectedHref) {
      errors.push(`${page.path}: invalid hreflang=${hreflang}`);
    }
  }

  const theme = metaTags.find((tag) => getAttribute(tag, 'name')?.toLowerCase() === 'theme-color');
  if (!theme || getAttribute(theme, 'content') !== page.themeColor) {
    errors.push(`${page.path}: theme-color must be ${page.themeColor}`);
  }

  const author = metaTags.find((tag) => getAttribute(tag, 'name')?.toLowerCase() === 'author');
  if (page.author && getAttribute(author ?? '', 'content') !== 'Edgar Andres Angrino Lafaux') {
    errors.push(`${page.path}: author metadata is missing or incorrect`);
  }

  if (page.structuredData) {
    if (!/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html)) {
      errors.push(`${page.path}: JSON-LD structured data is missing`);
    }
    const twitterCard = metaTags.find((tag) => getAttribute(tag, 'name')?.toLowerCase() === 'twitter:card');
    if (!twitterCard || getAttribute(twitterCard, 'content') !== 'summary') {
      errors.push(`${page.path}: twitter:card must be summary`);
    }
  }

  if (
    page.languageSelector &&
    (/<meta\b[^>]*http-equiv=["']refresh["']/i.test(html) ||
      /(?:window\.)?location\.(?:replace|assign)\s*\(/i.test(html) ||
      /(?:window\.)?location\.href\s*=/i.test(html))
  ) {
    errors.push(`${page.path}: language selector must not automatically redirect visitors`);
  }
}

const robotsTxt = readFileSync(resolve('out/robots.txt'), 'utf8');
if (/^\s*Disallow:\s*\/\s*$/im.test(robotsTxt)) {
  errors.push('out/robots.txt: site-wide Disallow: / found');
}
if (!/^\s*Sitemap:\s*https:\/\/eaangrino\.github\.io\/sitemap\.xml\s*$/im.test(robotsTxt)) {
  errors.push('out/robots.txt: expected sitemap declaration is missing');
}

const sitemap = readFileSync(resolve('out/sitemap.xml'), 'utf8');
const sitemapBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/gi)].map((match) => match[1]);
const expectedCanonicals = new Set(pages.map((page) => page.canonical));

if (sitemapBlocks.length !== expectedCanonicals.size) {
  errors.push(`out/sitemap.xml: expected ${expectedCanonicals.size} URLs, found ${sitemapBlocks.length}`);
}

for (const page of pages) {
  const block = sitemapBlocks.find(
    (candidate) => candidate.match(/<loc>([^<]+)<\/loc>/i)?.[1] === page.canonical,
  );
  if (!block) {
    errors.push(`out/sitemap.xml: missing URL entry for ${page.canonical}`);
    continue;
  }

  const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/i)?.[1] ?? '';
  if (lastmod !== '2026-09-17') {
    errors.push(`out/sitemap.xml: ${page.canonical} lastmod must be 2026-09-17`);
  }

  const alternateTags = block.match(/<xhtml:link\b[^>]*>/gi) ?? [];
  for (const [hreflang, expectedHref] of Object.entries(page.alternates)) {
    const alternate = alternateTags.find(
      (tag) => getAttribute(tag, 'hreflang')?.toLowerCase() === hreflang,
    );
    if (!alternate || getAttribute(alternate, 'href') !== expectedHref) {
      errors.push(`out/sitemap.xml: ${page.canonical} has invalid hreflang=${hreflang}`);
    }
  }
}

if (/amazon-web-services/i.test(sitemap)) {
  errors.push('out/sitemap.xml: obsolete amazon-web-services URL found');
}

if (errors.length > 0) {
  console.error('SEO indexability check failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('SEO indexability check passed.');
