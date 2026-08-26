import { useEffect } from 'react';
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

export default function Seo() {
	const { t, i18n } = useTranslation('seo');

	const siteUrl = 'https://eaangrino.github.io/';
	useEffect(() => {
		const languageCode = i18n.language?.toLowerCase().startsWith('en')
			? 'en'
			: 'es';
		const language = languageCode === 'en' ? 'en' : 'es-CO';
		const localizedUrl = `${siteUrl}${languageCode}/`;

		const title = t('title');
		const description = t('description');

		document.documentElement.lang = language;
		document.title = title;

		setMeta('description', description);
		setMeta('twitter:title', title);
		setMeta('twitter:description', description);

		setProperty('og:title', title);
		setProperty('og:description', description);
		setProperty('og:url', localizedUrl);
		setProperty('og:site_name', 'Edgar Angrino');
		setProperty('og:locale', languageCode === 'en' ? 'en_US' : 'es_CO');
		setProperty(
			'og:locale:alternate',
			languageCode === 'en' ? 'es_CO' : 'en_US',
		);
	}, [t, i18n.language]);

	return null;
}
