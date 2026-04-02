import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const scrollRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Contact Us"
        subtitle="We welcome the opportunity to discuss how Decker Healthcare Group can help you achieve your strategic objectives."
        backgroundImage={heroContact}
      />

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div className="animate-on-scroll">
              <div className="accent-line mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Get in Touch</p>
              <h2 className="heading-lg text-foreground mb-10">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-0 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-0 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-12 px-0 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-sm font-semibold uppercase tracking-wider rounded-none h-12 mt-4"
                >
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-on-scroll lg:pt-20">
              <div className="border border-border/30 p-10 md:p-12 space-y-10">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-6">
                    Office
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground font-medium">Decker Healthcare Group</p>
                        <p className="text-sm text-muted-foreground">Chicago, IL</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <a
                        href="mailto:info@deckerhealthcare.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@deckerhealthcare.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">(312) 555-0100</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-4">
                    Business Inquiries
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For confidential business inquiries, please contact us directly via email or phone. All communications are treated with the utmost discretion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;