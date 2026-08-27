import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function setMeta(name: string, content: string) {
	let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

	if (!element) {
		element = document.createElement('meta');
		element.setAttribute('name', name);
		document.head.appendChild(element);
	}

	element.setAttribute('content', content);
}

function setProperty(property: string, content: string) {
	let element = document.querySelector<HTMLMetaElement>(
		`meta[property="${property}"]`,
	);

	if (!element) {
		element = document.createElement('meta');
		element.setAttribute('property', property);
		document.head.appendChild(element);
	}

	element.setAttribute('content', content);
}

function setCanonical(href: string) {
	let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

	if (!element) {
		element = document.createElement('link');
		element.setAttribute('rel', 'canonical');
		document.head.appendChild(element);
	}

	element.setAttribute('href', href);
}

function setAlternate(hreflang: string, href: string) {
	let element = document.querySelector<HTMLLinkElement>(
		`link[rel="alternate"][hreflang="${hreflang}"]`,
	);

	if (!element) {
		element = document.createElement('link');
		element.setAttribute('rel', 'alternate');
		element.setAttribute('hreflang', hreflang);
		document.head.appendChild(element);
	}

	element.setAttribute('href', href);
}

export default function Seo() {
	const { t, i18n } = useTranslation('seo');
	const [pathname, setPathname] = useState(() => window.location.pathname);

	const siteUrl = 'https://eaangrino.github.io/';

	useEffect(() => {
		const handleNavigation = () => setPathname(window.location.pathname);

		window.addEventListener('popstate', handleNavigation);
		window.addEventListener('portfolio:navigation', handleNavigation);

		return () => {
			window.removeEventListener('popstate', handleNavigation);
			window.removeEventListener('portfolio:navigation', handleNavigation);
		};
	}, []);

	useEffect(() => {
		const languageCode = i18n.language?.toLowerCase().startsWith('en')
			? 'en'
			: 'es';
		const language = languageCode === 'en' ? 'en' : 'es-CO';
		const normalizedPath = pathname.replace(/\/+$/, '');
		const isAmazonWebServices =
			normalizedPath === `/${languageCode}/amazon-web-services`;
		const detailPath = isAmazonWebServices ? 'amazon-web-services/' : '';
		const localizedUrl = `${siteUrl}${languageCode}/${detailPath}`;

		const title = isAmazonWebServices
			? t('amazonWebServices.title')
			: t('title');
		const description = isAmazonWebServices
			? t('amazonWebServices.description')
			: t('description');

		document.documentElement.lang = language;
		document.title = title;

		setMeta('description', description);
		setMeta('twitter:title', title);
		setMeta('twitter:description', description);

		setProperty('og:title', title);
		setProperty('og:description', description);
		setProperty('og:url', localizedUrl);
		setProperty('og:site_name', 'Edgar Andres Angrino Lafaux');
		setProperty('og:locale', languageCode === 'en' ? 'en_US' : 'es_CO');
		setProperty(
			'og:locale:alternate',
			languageCode === 'en' ? 'es_CO' : 'en_US',
		);

		setCanonical(localizedUrl);
		setAlternate('es', `${siteUrl}es/${detailPath}`);
		setAlternate('en', `${siteUrl}en/${detailPath}`);
		setAlternate('x-default', `${siteUrl}es/${detailPath}`);
	}, [t, i18n.language, pathname]);

	return null;
}
