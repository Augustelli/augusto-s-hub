import { ArrowDown, Download, MapPin, Briefcase } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 hero-gradient">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="chip chip-accent">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              Mendoza
            </span>
            <span className="chip chip-accent">
              <Briefcase className="w-3.5 h-3.5 mr-1.5" />
              Open to opportunities
            </span>
          </div>
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Augusto Tomás Mancuso
        </h1>

        <p 
          className="text-xl sm:text-2xl text-primary font-medium mb-4 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          DevOps / Cloud / Backend — Kubernetes, CI/CD & Observability
        </p>

        <p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up text-balance"
          style={{ animationDelay: "300ms" }}
        >
          Final-year Computer Engineering student (Argentina). I build reliable services in hybrid and cloud environments.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Contact me
            <ArrowDown className="w-4 h-4" />
          </a>
          
          {/* TODO: Replace placeholder URL with actual CV link */}
          <a
            href="https://example.com/CV-Augusto-Mancuso.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-muted border border-border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
