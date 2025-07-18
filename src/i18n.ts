import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './language/en';
import es from './language/es';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(LanguageDetector)
	.use(Backend)
	.use(initReactI18next)
	.init({
		resources: {
			en,
			es,
		},
		lng: 'en',
		fallbackLng: 'en',
		debug: true,
		supportedLngs: [ 'en', 'es' ],
		detection: {
			order: [ 'localStorage', 'navigator' ],
			caches: [ 'localStorage' ],
		},

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
