import { Linkedin, Github, Mail, FileText } from "lucide-react";

const links = [
  {
    href: "https://www.linkedin.com/in/augustotomasmancuso/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Augustelli",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:augustomancuso.dev@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    // TODO: Replace with actual CV URL
    href: "https://example.com/CV-Augusto-Mancuso.pdf",
    icon: FileText,
    label: "CV (PDF)",
  },
];

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};
