import { useInView } from "@/hooks/useInView";

export const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div 
        ref={ref}
        className={`container mx-auto section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
          About
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            I'm a DevOps/Cloud & Backend engineer focused on Kubernetes (on-prem & EKS), 
            CI/CD, and observability with Grafana, Prometheus, Loki, and OpenTelemetry. 
            I build and operate Java/Spring Boot and Python microservices, automate delivery 
            with Jenkins/GitHub Actions, and define infrastructure with Terraform. I've 
            migrated workloads from on-premise to cloud, and I also manage virtualization 
            stacks with Proxmox and VMware ESXi. Final-year Computer Engineering student, 
            based in Mendoza.
          </p>
        </div>
      </div>
    </section>
  );
};
