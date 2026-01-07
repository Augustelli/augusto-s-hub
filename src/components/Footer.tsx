import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto text-center">
        <SocialLinks className="justify-center mb-6" />
        
        <p className="text-muted-foreground text-sm">
          Made by Augusto · Mendoza, Argentina
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
