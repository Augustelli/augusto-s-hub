import { useInView } from "@/hooks/useInView";
import { SocialLinks } from "./SocialLinks";
import { useTranslation } from 'react-i18next';

export const LinksSection = () => {
  const { ref, isVisible } = useInView();
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div 
        ref={ref}
        className={`container mx-auto text-center section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          {t('links.heading')}
        </h2>
        <SocialLinks className="justify-center" />
      </div>
    </section>
  );
};

export default LinksSection;
