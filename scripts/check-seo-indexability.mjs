import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const siteUrl = 'https://eaangrino.github.io/';
const spanishUrl = `${siteUrl}es/`;
const englishUrl = `${siteUrl}en/`;
const spanishAwsUrl = `${spanishUrl}amazon-web-services/`;
const englishAwsUrl = `${englishUrl}amazon-web-services/`;

const pageExpectations = [
	{
		path: 'dist/index.html',
		canonical: siteUrl,
		alternates: { es: spanishUrl, en: englishUrl, 'x-default': siteUrl },
		languageSelector: true,
	},
	{
		path: 'dist/es/index.html',
		canonical: spanishUrl,
		alternates: { es: spanishUrl, en: englishUrl, 'x-default': siteUrl },
	},
	{
		path: 'dist/en/index.html',
		canonical: englishUrl,
		alternates: { es: spanishUrl, en: englishUrl, 'x-default': siteUrl },
	},
	{
		path: 'dist/es/amazon-web-services/index.html',
		canonical: spanishAwsUrl,
		alternates: {
			es: spanishAwsUrl,
			en: englishAwsUrl,
			'x-default': spanishAwsUrl,
		},
	},
	{
		path: 'dist/en/amazon-web-services/index.html',
		canonical: englishAwsUrl,
		alternates: {
			es: spanishAwsUrl,
			en: englishAwsUrl,
			'x-default': spanishAwsUrl,
		},
	},
];

const errors = [];

function getAttribute(tag, name) {
	return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'))?.[1] ?? null;
}

function hasRel(tag, expectedRel) {
	return (getAttribute(tag, 'rel') ?? '')
		.toLowerCase()
		.split(/\s+/)
		.includes(expectedRel);
}

for (const page of pageExpectations) {
	const html = readFileSync(resolve(page.path), 'utf8');
	const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
	const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
	const robotsTag = metaTags.find((tag) => getAttribute(tag, 'name')?.toLowerCase() === 'robots');
	const robotsContent = robotsTag ? getAttribute(robotsTag, 'content') ?? '' : '';
	const directives = robotsContent
		.toLowerCase()
		.split(',')
		.map((directive) => directive.trim())
		.filter(Boolean);

	if (!robotsTag) {
		errors.push(`${page.path}: missing robots meta tag`);
	} else {
		if (directives.some((directive) => ['noindex', 'nofollow', 'none'].includes(directive))) {
			errors.push(`${page.path}: blocking robots directive found (${robotsContent})`);
		}

		if (!directives.includes('index') || !directives.includes('follow')) {
			errors.push(`${page.path}: robots meta must explicitly contain "index, follow"`);
		}
	}

	const canonicalTags = linkTags.filter((tag) => hasRel(tag, 'canonical'));
	if (canonicalTags.length !== 1) {
		errors.push(`${page.path}: expected exactly one canonical link, found ${canonicalTags.length}`);
	} else if (getAttribute(canonicalTags[0], 'href') !== page.canonical) {
		errors.push(
			`${page.path}: canonical must be ${page.canonical} (found ${getAttribute(canonicalTags[0], 'href')})`,
		);
	}

	for (const [hreflang, expectedHref] of Object.entries(page.alternates)) {
		const alternateTag = linkTags.find(
			(tag) =>
				hasRel(tag, 'alternate') &&
				getAttribute(tag, 'hreflang')?.toLowerCase() === hreflang,
		);

		if (!alternateTag) {
			errors.push(`${page.path}: missing hreflang="${hreflang}" alternate`);
		} else if (getAttribute(alternateTag, 'href') !== expectedHref) {
			errors.push(
				`${page.path}: hreflang="${hreflang}" must point to ${expectedHref} (found ${getAttribute(alternateTag, 'href')})`,
			);
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

const robotsTxt = readFileSync(resolve('dist/robots.txt'), 'utf8');
if (/^\s*Disallow:\s*\/\s*$/im.test(robotsTxt)) {
	errors.push('dist/robots.txt: site-wide Disallow: / found');
}
if (!/^\s*Sitemap:\s*https:\/\/eaangrino\.github\.io\/sitemap\.xml\s*$/im.test(robotsTxt)) {
	errors.push('dist/robots.txt: expected sitemap declaration is missing');
}

const sitemap = readFileSync(resolve('dist/sitemap.xml'), 'utf8');
const sitemapBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/gi)].map((match) => match[1]);

for (const page of pageExpectations) {
	const block = sitemapBlocks.find(
		(candidate) => candidate.match(/<loc>([^<]+)<\/loc>/i)?.[1] === page.canonical,
	);

	if (!block) {
		errors.push(`dist/sitemap.xml: missing URL entry for ${page.canonical}`);
		continue;
	}

	const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/i)?.[1] ?? '';
	if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
		errors.push(`dist/sitemap.xml: ${page.canonical} must have a YYYY-MM-DD lastmod`);
	}

	const alternateTags = block.match(/<xhtml:link\b[^>]*>/gi) ?? [];
	for (const [hreflang, expectedHref] of Object.entries(page.alternates)) {
		const alternateTag = alternateTags.find(
			(tag) => getAttribute(tag, 'hreflang')?.toLowerCase() === hreflang,
		);

		if (!alternateTag) {
			errors.push(`dist/sitemap.xml: ${page.canonical} is missing hreflang="${hreflang}"`);
		} else if (getAttribute(alternateTag, 'href') !== expectedHref) {
			errors.push(
				`dist/sitemap.xml: ${page.canonical} hreflang="${hreflang}" must point to ${expectedHref}`,
			);
		}
	}
}

if (errors.length > 0) {
	console.error('SEO indexability check failed:');
	for (const error of errors) {
		console.error(`- ${error}`);
	}
	process.exit(1);
}

console.log('SEO indexability check passed.');
