import { useInView } from "@/hooks/useInView";
import { SocialLinks } from "./SocialLinks";

export const LinksSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-12">
      <div 
        ref={ref}
        className={`container mx-auto text-center section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Connect with me
        </h2>
        <SocialLinks className="justify-center" />
      </div>
    </section>
  );
};
