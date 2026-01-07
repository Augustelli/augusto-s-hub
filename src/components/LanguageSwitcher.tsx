import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.split('-')[0] || 'en';

  const setLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded ${current === 'en' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLang('es')}
        className={`px-3 py-1 rounded ${current === 'es' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;

