import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const htmlFiles = [
	'dist/index.html',
	'dist/es/index.html',
	'dist/en/index.html',
	'dist/es/amazon-web-services/index.html',
	'dist/en/amazon-web-services/index.html',
];

const errors = [];

for (const relativePath of htmlFiles) {
	const filePath = resolve(relativePath);
	const html = readFileSync(filePath, 'utf8');
	const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
	const robotsTag = metaTags.find((tag) => /\bname=["']robots["']/i.test(tag));
	const content = robotsTag?.match(/\bcontent=["']([^"']*)["']/i)?.[1] ?? '';
	const directives = content
		.toLowerCase()
		.split(',')
		.map((directive) => directive.trim())
		.filter(Boolean);

	if (!robotsTag) {
		errors.push(`${relativePath}: missing robots meta tag`);
		continue;
	}

	if (directives.some((directive) => ['noindex', 'nofollow', 'none'].includes(directive))) {
		errors.push(`${relativePath}: blocking robots directive found (${content})`);
	}

	if (!directives.includes('index') || !directives.includes('follow')) {
		errors.push(`${relativePath}: robots meta must explicitly contain "index, follow"`);
	}
}

const robotsTxt = readFileSync(resolve('dist/robots.txt'), 'utf8');
if (/^\s*Disallow:\s*\/\s*$/im.test(robotsTxt)) {
	errors.push('dist/robots.txt: site-wide Disallow: / found');
}

if (errors.length > 0) {
	console.error('SEO indexability check failed:');
	for (const error of errors) {
		console.error(`- ${error}`);
	}
	process.exit(1);
}

console.log('SEO indexability check passed.');
