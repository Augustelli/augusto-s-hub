import { useInView } from "@/hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Backend & Cloud Engineer",
    company: "Freelance / Projects",
    period: "2022–Present",
    description:
      "Microservices in Java/Spring; API integrations; containerization; CI/CD; on-prem → AWS/K8s migrations; production troubleshooting.",
  },
  {
    title: "SRE & Observability Engineer",
    company: "Independent / Projects",
    period: "2024–Present",
    description:
      "Grafana/Prometheus/Loki/OTel on K8s; alerting pipelines; dashboards; Proxmox/ESXi for dev/test environments.",
  },
];

export const Experience = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div 
        ref={ref}
        className={`container mx-auto section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Experience
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <article 
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-soft transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-card rounded-xl p-6 border border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Education
            </h3>
            <p className="text-muted-foreground">
              Computer Engineering (B.S. equivalent) — Final year, near graduation. (Argentina)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
