import { ArrowDown, Download, MapPin, Briefcase } from "lucide-react";
import { useTranslation } from 'react-i18next';

/**
 * Hero Section
 * 
 * TODO: Replace CV URL below with your actual CV link:
 * Current placeholder: https://example.com/CV-Augusto-Mancuso.pdf
 */

export const Hero = () => {
  const { t } = useTranslation();
  // Smooth scroll with reduced motion respect
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const contactSection = document.getElementById("contact");
    
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: prefersReducedMotion ? "auto" : "smooth" 
      });
      // Focus the first input for accessibility
      const firstInput = contactSection.querySelector("input");
      if (firstInput) firstInput.focus();
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 hero-gradient"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto text-center px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="chip chip-accent">
              <MapPin className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              <span>{t('hero.location')}</span>
            </span>
            <span className="chip chip-accent">
              <Briefcase className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              <span>{t('hero.open_to')}</span>
            </span>
          </div>
        </div>

        <h1 
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          {t('hero.name')}
        </h1>

        {/* Using h2 for proper hierarchy - this is the professional title */}
        <h2 
          className="text-xl sm:text-2xl text-primary font-medium mb-4 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          {t('hero.title')}
        </h2>

        <p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up text-balance"
          style={{ animationDelay: "300ms" }}
        >
          {t('hero.brief')}
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#contact"
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            {t('hero.cta_contact')}
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>
          
          {/* TODO: Replace placeholder URL with actual CV link */}
          <a
            href="https://example.com/CV-Augusto-Mancuso.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-muted border border-border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            aria-label={t('hero.cta_cv') + ' (opens in new tab)'}
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            {t('hero.cta_cv')}
          </a>
        </div>
      </div>
    </section>
  );
};
