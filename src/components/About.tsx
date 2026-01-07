import { useInView } from "@/hooks/useInView";
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { ref, isVisible } = useInView();
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div 
        ref={ref}
        className={`container mx-auto section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
          {t('about.heading')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {t('about.paragraph')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
