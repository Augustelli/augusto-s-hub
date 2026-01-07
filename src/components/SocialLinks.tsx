import { Linkedin, Github, Mail, FileText } from "lucide-react";
import { useTranslation } from 'react-i18next';

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
    key: 'social.linkedin',
    ariaKey: 'social.linkedin_aria'
  },
  {
    href: "https://github.com/Augustelli",
    icon: Github,
    key: 'social.github',
    ariaKey: 'social.github_aria'
  },
  {
    href: "mailto:augustomancuso.dev@gmail.com",
    icon: Mail,
    key: 'social.email',
    ariaKey: 'social.email_aria',
    isExternal: false,
  },
  {
    // TODO: Replace with actual CV URL
    href: "https://example.com/CV-Augusto-Mancuso.pdf",
    icon: FileText,
    key: 'social.cv',
    ariaKey: 'social.cv_aria'
  },
];

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  const { t } = useTranslation();

  return (
    <nav aria-label={t('social.nav_label')} className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => {
        const isExternal = link.isExternal !== false && !link.href.startsWith("mailto:");
        
        return (
          <a
            key={link.href}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            aria-label={t(link.ariaKey)}
          >
            <link.icon className="w-5 h-5" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
};

export default SocialLinks;
