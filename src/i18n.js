import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './locales/es.json';
import translationEN from './locales/en.json';


const savedLanguage = localStorage.getItem('language') || navigator.language.split('-')[0] || 'es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN },
    },
    lng: savedLanguage,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });



export default i18n;
