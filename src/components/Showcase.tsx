import { useInView } from "@/hooks/useInView";
import { useTranslation } from 'react-i18next';

type ShowcaseItem = {
  title: string;
  description: string;
};

export const Showcase = () => {
  const { ref, isVisible } = useInView();
  const { t } = useTranslation();
  const items = t('showcase.items', { returnObjects: true }) as ShowcaseItem[];

  return (
    <section className="py-20">
      <div 
        ref={ref}
        className={`container mx-auto section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          {t('showcase.heading')}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          {t('showcase.description')}
        </p>
        
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <div className="w-6 h-6 text-primary" aria-hidden="true">{/* icon placeholder */}</div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
