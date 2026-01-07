/**
 * ============================================================================
 * ACCEPTANCE CHECKLIST (for development/QA reference)
 * ============================================================================
 * ✅ Sticky nav + scroll-spy + working skip link
 * ✅ Light/dark toggle persists; contrast OK in both themes
 * ✅ Form validates, shows ARIA toast, includes honeypot anti-spam
 * ✅ JSON-LD Person schema present with email & sameAs links
 * ✅ OG/Twitter meta tags for social previews
 * ✅ Mobile-responsive with hamburger menu
 * ✅ Proper heading hierarchy (single H1)
 * ✅ Keyboard-navigable with visible focus states
 * ✅ Respects prefers-reduced-motion
 * 
 * PERFORMANCE TARGETS:
 * - Mobile LCP < 2.5s
 * - Desktop LCP < 1s
 * - Lighthouse: Perf ≥95, A11y ≥95, Best Practices ≥95, SEO ≥95
 * 
 * TODO ITEMS (search for "TODO:" in codebase):
 * 1. Replace CV URL: https://example.com/CV-Augusto-Mancuso.pdf
 * 2. Wire contact form to Formspree/EmailJS
 * 3. Add analytics (Plausible placeholder below)
 * ============================================================================
 */

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
  // JSON-LD Person schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Augusto Tomás Mancuso",
    jobTitle: "DevOps / Cloud / Backend Engineer",
    email: "augustomancuso.dev@gmail.com",
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
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad (Argentina)",
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
      "Java",
      "Spring Boot",
      "Python",
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Augusto Tomás Mancuso | DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="DevOps, Cloud & Backend Engineer specializing in Kubernetes, CI/CD, and observability. Based in Mendoza, Argentina. Open to opportunities."
        />
        <meta name="author" content="Augusto Tomás Mancuso" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://augustomancuso.dev" />
        
        {/* Theme color for browser chrome */}
        <meta name="theme-color" content="#0f1219" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Augusto Tomás Mancuso | DevOps & Cloud Engineer" />
        <meta
          property="og:description"
          content="DevOps, Cloud & Backend Engineer specializing in Kubernetes, CI/CD, and observability. Based in Mendoza, Argentina."
        />
        <meta property="og:url" content="https://augustomancuso.dev" />
        <meta property="og:site_name" content="Augusto Tomás Mancuso" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Augusto Tomás Mancuso | DevOps & Cloud Engineer" />
        <meta
          name="twitter:description"
          content="DevOps, Cloud & Backend Engineer specializing in Kubernetes, CI/CD, and observability."
        />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

        {/* Security: Basic CSP meta tag (uncomment and adjust for production)
        <meta 
          http-equiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://formspree.io;"
        />
        */}
      </Helmet>

      {/* 
        ========================================================================
        TODO: Analytics - Uncomment and configure for production
        ========================================================================
        
        Plausible (privacy-friendly):
        <script defer data-domain="augustomancuso.dev" src="https://plausible.io/js/script.js"></script>
        
        Simple Analytics:
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        
        Fathom:
        <script src="https://cdn.usefathom.com/script.js" data-site="YOUR_SITE_ID" defer></script>
        ========================================================================
      */}

      <div className="min-h-screen bg-background">
        <Navbar />
        <main id="main-content" role="main">
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
