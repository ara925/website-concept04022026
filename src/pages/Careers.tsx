import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import deckerLogo from "@/assets/decker-logo.png";

const Careers = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Careers"
        subtitle="Join a team of dedicated professionals committed to excellence in healthcare advisory."
      >
        <div className="mt-8 flex items-center gap-4">
          <img src={deckerLogo} alt="Decker Healthcare Group" className="h-10 w-auto brightness-0 invert opacity-60" />
          <p className="text-lg text-muted-foreground italic">Build your career in seniors housing.</p>
        </div>
      </HeroSection>

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="animate-on-scroll">
              <div className="accent-line mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Culture</p>
              <h2 className="heading-lg text-foreground">Why Decker</h2>
            </div>
            <div className="space-y-6 stagger-children">
              <p className="animate-on-scroll text-muted-foreground leading-relaxed">
                At Decker, we foster an environment that values intellectual curiosity, collaboration, and professional growth. Our team members work directly with senior leadership on complex healthcare transactions, gaining unparalleled experience and mentorship.
              </p>
              <p className="animate-on-scroll text-muted-foreground leading-relaxed">
                We believe in a culture of meritocracy where talented professionals are given significant responsibility early in their careers. Our flat organizational structure ensures that every team member has a meaningful impact on our clients' outcomes.
              </p>
              <p className="animate-on-scroll text-muted-foreground leading-relaxed">
                We are always looking for exceptional individuals who share our passion for healthcare and commitment to excellence. If you are interested in joining our team, we'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-[1400px] mx-auto">
          <div className="animate-on-scroll border border-border/30 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/30" />
            <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Interested in Joining Us?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We're always looking for talented individuals. Reach out to learn about current opportunities.
            </p>
            <Button asChild size="lg" className="text-sm font-semibold uppercase tracking-wider rounded-none px-10 h-12">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;