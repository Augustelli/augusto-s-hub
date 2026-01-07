import { Linkedin, Github, Mail, FileText } from "lucide-react";

/**
 * Social Links Component
 * 
 * TODO: Replace CV URL with actual link:
 * Current placeholder: https://example.com/CV-Augusto-Mancuso.pdf
 */

const links = [
  {
    href: "https://www.linkedin.com/in/augustotomasmancuso/",
    icon: Linkedin,
    label: "LinkedIn",
    ariaLabel: "Visit LinkedIn profile (opens in new tab)",
  },
  {
    href: "https://github.com/Augustelli",
    icon: Github,
    label: "GitHub",
    ariaLabel: "Visit GitHub profile (opens in new tab)",
  },
  {
    href: "mailto:augustomancuso.dev@gmail.com",
    icon: Mail,
    label: "Email",
    ariaLabel: "Send email to Augusto",
    isExternal: false,
  },
  {
    // TODO: Replace with actual CV URL
    href: "https://example.com/CV-Augusto-Mancuso.pdf",
    icon: FileText,
    label: "CV (PDF)",
    ariaLabel: "Download CV as PDF (opens in new tab)",
  },
];

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  return (
    <nav aria-label="Social links" className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => {
        const isExternal = link.isExternal !== false && !link.href.startsWith("mailto:");
        
        return (
          <a
            key={link.label}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            aria-label={link.ariaLabel}
          >
            <link.icon className="w-5 h-5" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
};
