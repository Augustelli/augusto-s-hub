import { useInView } from "@/hooks/useInView";

const skills = [
  "Kubernetes (EKS & on-prem)",
  "Docker",
  "CI/CD (Jenkins, GitHub Actions)",
  "Observability (Grafana, Prometheus, Loki, OTel)",
  "Java + Spring Boot",
  "Python",
  "AWS (EC2, VPC, RDS)",
  "Azure (AKS, APIM basics)",
  "Terraform (IaC)",
  "Git (branching, code reviews)",
  "API design (REST, idempotency, rate-limit)",
  "Proxmox",
  "VMware ESXi",
];

export const Skills = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="skills" className="py-20">
      <div 
        ref={ref}
        className={`container mx-auto section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
          Core Skills
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
