import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Showcase } from "@/components/Showcase";
import { LinksSection } from "@/components/LinksSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Augusto Tomás Mancuso",
    jobTitle: "DevOps / Cloud / Backend Engineer",
    url: "https://augustomancuso.dev",
    sameAs: [
      "https://www.linkedin.com/in/augustotomasmancuso/",
      "https://github.com/Augustelli",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mendoza",
      addressCountry: "Argentina",
    },
    knowsAbout: [
      "Kubernetes",
      "Docker",
      "CI/CD",
      "DevOps",
      "Cloud Computing",
      "AWS",
      "Azure",
      "Terraform",
      "Observability",
      "Grafana",
      "Prometheus",
    ],
  };

  return (
    <>
      <Helmet>
        <title>Augusto Tomás Mancuso | DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="DevOps, Cloud & Backend Engineer specializing in Kubernetes, CI/CD, and observability. Based in Mendoza, Argentina. Open to opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://augustomancuso.dev" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Augusto Tomás Mancuso | DevOps & Cloud Engineer" />
        <meta
          property="og:description"
          content="DevOps, Cloud & Backend Engineer specializing in Kubernetes, CI/CD, and observability. Based in Mendoza, Argentina."
        />
        <meta property="og:url" content="https://augustomancuso.dev" />
        <meta property="og:site_name" content="Augusto Tomás Mancuso" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Augusto Tomás Mancuso | DevOps & Cloud Engineer" />
        <meta
          name="twitter:description"
          content="DevOps, Cloud & Backend Engineer specializing in Kubernetes, CI/CD, and observability."
        />
        
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* 
        TODO: Add analytics script here
        Example with Plausible:
        <script defer data-domain="augustomancuso.dev" src="https://plausible.io/js/script.js"></script>
      */}

      <div className="min-h-screen bg-background">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Showcase />
          <LinksSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
