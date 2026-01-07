import { SocialLinks } from "./SocialLinks";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border" role="contentinfo">
      <div className="container mx-auto text-center px-4">
        <SocialLinks className="justify-center mb-6" />
        
        <p className="text-muted-foreground text-sm">
          {t('footer.made_by')}
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
