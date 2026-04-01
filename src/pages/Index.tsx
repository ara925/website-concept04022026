import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Corporate Finance Advisory"
        subtitle="Specialized healthcare investment banking providing M&A advisory and capital markets solutions to healthcare companies nationwide."
        size="large"
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-sm font-semibold uppercase tracking-wider">
            <Link to="/services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-sm font-semibold uppercase tracking-wider">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">What We Do</p>
          <h2 className="heading-lg text-foreground mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/services#ma-advisory" className="group">
              <div className="bg-card border border-border rounded-lg p-8 md:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--card-hover-shadow)]">
                <TrendingUp className="h-10 w-10 text-primary mb-6" />
                <h3 className="heading-md text-foreground mb-4">M&A Advisory</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Strategic advisory for mergers, acquisitions, divestitures, and restructurings across the healthcare continuum. We guide clients through every phase of the transaction lifecycle.
                </p>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link to="/services#capital-markets" className="group">
              <div className="bg-card border border-border rounded-lg p-8 md:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--card-hover-shadow)]">
                <Shield className="h-10 w-10 text-primary mb-6" />
                <h3 className="heading-md text-foreground mb-4">Capital Markets Advisory</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive capital raising solutions including debt placement, recapitalizations, and financial restructuring for healthcare organizations of all sizes.
                </p>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Why Choose Us</p>
          <h2 className="heading-lg text-foreground mb-12">The Decker Difference</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Deep Industry Knowledge",
                description: "Our team brings decades of combined experience across the full spectrum of healthcare sectors, from acute care to post-acute, behavioral health to pharmacy services.",
              },
              {
                icon: Shield,
                title: "Long-Term Relationships",
                description: "We build lasting partnerships with our clients, acting as trusted advisors who understand their unique challenges and strategic objectives.",
              },
              {
                icon: TrendingUp,
                title: "Customized Solutions",
                description: "Every engagement is tailored to the specific needs and goals of our clients. We don't believe in one-size-fits-all approaches to complex transactions.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <item.icon className="h-8 w-8 text-primary mb-4 mx-auto md:mx-0" />
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md text-foreground mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-8">Subscribe to receive industry insights and transaction updates.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-11 px-4 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" className="text-sm font-semibold uppercase tracking-wider">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
