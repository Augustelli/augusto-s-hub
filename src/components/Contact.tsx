import { useState, FormEvent } from "react";
import { useInView } from "@/hooks/useInView";
import { Send, Check, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const { ref, isVisible } = useInView();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Wire up a real form endpoint here (Formspree, EmailJS, etc.)
    // Example with Formspree:
    // const formData = new FormData(e.currentTarget);
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   body: formData,
    //   headers: { 'Accept': 'application/json' }
    // });

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    // Reset form after animation
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div 
        ref={ref}
        className={`container mx-auto section-fade-in ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Contact
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Tell me about your project or opportunity.
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-card rounded-xl p-6 sm:p-8 border border-border shadow-card"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mt-1 w-4 h-4 rounded border-input text-primary focus:ring-ring"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                I consent to having this website store my submitted information so they can respond to my inquiry.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
