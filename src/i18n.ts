import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './language/en';
import es from './language/es';

const pathLanguage = window.location.pathname.split('/').filter(Boolean)[0];
const initialLanguage = pathLanguage === 'en' ? 'en' : 'es';

i18n.use(initReactI18next).init({
	resources: {
		en,
		es,
	},
	lng: initialLanguage,
	fallbackLng: 'es',
	debug: false,
	supportedLngs: ['en', 'es'],

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
