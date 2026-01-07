import { useInView } from "@/hooks/useInView";
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { ref, isVisible } = useInView();
  const { t } = useTranslation();
  const skills: string[] = t('skills.list', { returnObjects: true }) as string[];

  return (
    <section id="skills" className="py-20">
      <div 
        ref={ref}
        className={`container mx-auto section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
          {t('skills.heading')}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <span 
              key={skill} 
              className="chip"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
