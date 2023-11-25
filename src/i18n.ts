import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { english } from './locales/en';
import { svenska } from './locales/sv';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: english, // English locale file
      },
      sv: {
        translation: svenska, // Swedish locale file
      },
    },
    lng: 'sv', // Default language
    fallbackLng: 'sv', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;