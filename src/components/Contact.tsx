import { useState, useRef, FormEvent } from "react";
import { useInView } from "@/hooks/useInView";
import { Send, Check, Loader2, AlertCircle } from "lucide-react";

/**
 * Contact Form with Anti-Spam Protection
 * 
 * Anti-spam measures:
 * 1. Honeypot field (hidden from users, filled by bots)
 * 2. Timestamp check (form must be open > 3 seconds)
 * 
 * TODO: Wire up a real form endpoint:
 * - Formspree: https://formspree.io/f/YOUR_FORM_ID
 * - EmailJS: https://www.emailjs.com/
 */

type FormStatus = "idle" | "submitting" | "success" | "error";

export const Contact = () => {
  const { ref, isVisible } = useInView();
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formLoadTime = useRef(Date.now());

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Anti-spam: Check honeypot field
    const honeypot = formData.get("website");
    if (honeypot) {
      console.warn("Spam detected: honeypot field filled");
      // Fake success to not alert bot
      setFormStatus("success");
      return;
    }

    // Anti-spam: Check timestamp (must be > 3 seconds)
    const timeDiff = Date.now() - formLoadTime.current;
    if (timeDiff < 3000) {
      console.warn("Spam detected: form submitted too quickly");
      setFormStatus("success");
      return;
    }

    setFormStatus("submitting");
    setErrorMessage("");

    try {
      // TODO: Replace with actual form endpoint
      // Example with Formspree:
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   body: formData,
      //   headers: { 'Accept': 'application/json' }
      // });
      // if (!response.ok) throw new Error('Failed to send');

      // Log payload for debugging (remove in production)
      console.log("Form submission:", {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
        timestamp: new Date().toISOString(),
      });

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus("success");
      form.reset();
      formLoadTime.current = Date.now();

      // Reset to idle after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setErrorMessage("Something went wrong. Please try again or email me directly.");
    }
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
          noValidate
        >
          {/* ARIA Live Region for form status announcements */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            {formStatus === "submitting" && "Sending your message..."}
            {formStatus === "success" && "Message sent successfully! I'll get back to you soon."}
            {formStatus === "error" && `Error: ${errorMessage}`}
          </div>

          <div className="space-y-5">
            {/* Honeypot field - hidden from users, bots will fill it */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">
                Website (leave blank)
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name <span className="text-destructive" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                maxLength={100}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                placeholder="Your name"
                aria-describedby="name-hint"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email <span className="text-destructive" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                maxLength={255}
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
                autoComplete="organization"
                maxLength={100}
                className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-destructive" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                maxLength={2000}
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
                className="mt-1 w-4 h-4 rounded border-input text-primary focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                I consent to having this website store my submitted information so they can respond to my inquiry.
                <span className="sr-only">(required)</span>
              </label>
            </div>

            {/* Error message display */}
            {formStatus === "error" && (
              <div 
                role="alert"
                className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                {errorMessage}
              </div>
            )}

            {/* Success message display */}
            {formStatus === "success" && (
              <div 
                role="status"
                className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-sm"
              >
                <Check className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                Message sent! I'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === "submitting" || formStatus === "success"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
              aria-describedby={formStatus === "error" ? "form-error" : undefined}
            >
              {formStatus === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : formStatus === "success" ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" aria-hidden="true" />
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
