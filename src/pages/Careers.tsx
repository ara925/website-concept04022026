import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div>
      <HeroSection
        title="Careers"
        subtitle="Join a team of dedicated professionals committed to excellence in healthcare advisory."
      />

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Culture</p>
          <h2 className="heading-lg text-foreground mb-8">Why Decker</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              At Helios, we foster an environment that values intellectual curiosity, collaboration, and professional growth. Our team members work directly with senior leadership on complex healthcare transactions, gaining unparalleled experience and mentorship.
            </p>
            <p>
              We believe in a culture of meritocracy where talented professionals are given significant responsibility early in their careers. Our flat organizational structure ensures that every team member has a meaningful impact on our clients' outcomes.
            </p>
            <p>
              We are always looking for exceptional individuals who share our passion for healthcare and commitment to excellence. If you are interested in joining our team, we'd love to hear from you.
            </p>
          </div>

          <div className="mt-12 bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Interested in Joining Us?</h3>
            <p className="text-muted-foreground mb-6">We're always looking for talented individuals. Reach out to learn about current opportunities.</p>
            <Button asChild size="lg" className="text-sm font-semibold uppercase tracking-wider">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
