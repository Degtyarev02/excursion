import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './utils/locales/en.json';
import frTranslations from './utils/locales/fr.json';
import ruTranslations from './utils/locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      fr: {
        translation: frTranslations
      },
      ru: {
        translation: ruTranslations
      }
    },
    fallbackLng: 'ru',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;