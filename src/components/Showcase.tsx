import { useInView } from "@/hooks/useInView";
import { Rocket, Activity, Shield } from "lucide-react";

const showcaseItems = [
  {
    icon: Rocket,
    title: "On-prem → K8s/EKS Migration",
    description: "Automated rollouts & rollback; weekly releases.",
  },
  {
    icon: Activity,
    title: "Observability Stack",
    description: "P95 latency tracking, actionable alerts, tracing with OTel.",
  },
  {
    icon: Shield,
    title: "CI/CD Hardening",
    description: "Reproducible builds, artifact registry, and gated deployments.",
  },
];

export const Showcase = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-20">
      <div 
        ref={ref}
        className={`container mx-auto section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Outcomes
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Real results from production systems
        </p>
        
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {showcaseItems.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <item.icon className="w-6 h-6 text-primary" />
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
