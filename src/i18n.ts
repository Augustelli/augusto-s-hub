// typescript
// File: src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'en',
    lng: localStorage.getItem('i18nextLng') || navigator.language?.slice(0,2) || 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;


