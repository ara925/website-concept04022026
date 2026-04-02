import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, Users, Building2, Briefcase, BarChart3 } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroHome from "@/assets/hero-home.jpg";
import sectionHealthcare from "@/assets/section-healthcare.jpg";
import sectionMedical from "@/assets/section-medical.jpg";

const stats = [
  { label: "Transactions Completed", value: "$5B+" },
  { label: "Years of Experience", value: "20+" },
  { label: "Healthcare Sectors", value: "10+" },
  { label: "Team Members", value: "7" },
];

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <HeroSection
        title="Healthcare Advisory. Redefined."
        subtitle="Specialized corporate finance advisory providing M&A and capital markets solutions to healthcare companies nationwide."
        size="large"
        showParticles
        backgroundImage={heroHome}
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="text-sm font-semibold uppercase tracking-wider px-8 h-12 rounded-none"
          >
            <Link to="/services">
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-sm font-semibold uppercase tracking-wider px-8 h-12 rounded-none border-foreground/20 hover:bg-foreground/5"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-primary mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Matthews split layout style */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="animate-on-scroll mb-16">
            <div className="accent-line mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">What We Do</p>
            <h2 className="heading-lg text-foreground">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 stagger-children">
            {/* M&A Card */}
            <Link to="/services#ma-advisory" className="group animate-on-scroll">
              <div className="relative bg-card border border-border/30 p-10 md:p-14 transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--card-hover-shadow)] h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">M&A Advisory</span>
                </div>
                <h3 className="heading-md text-foreground mb-5 group-hover:text-primary transition-colors">
                  Mergers & Acquisitions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Strategic advisory for mergers, acquisitions, divestitures, and restructurings across the healthcare continuum. We guide clients through every phase of the transaction lifecycle.
                </p>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>

                {/* Decorative corner line */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
              </div>
            </Link>

            {/* Capital Markets Card */}
            <Link to="/services#capital-markets" className="group animate-on-scroll">
              <div className="relative bg-card border border-border/30 p-10 md:p-14 transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--card-hover-shadow)] h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Capital Markets</span>
                </div>
                <h3 className="heading-md text-foreground mb-5 group-hover:text-primary transition-colors">
                  Capital Markets Advisory
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Comprehensive capital raising solutions including debt placement, recapitalizations, and financial restructuring for healthcare organizations of all sizes.
                </p>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>

                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={sectionHealthcare} alt="Healthcare professionals" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-black uppercase tracking-wider text-foreground text-center px-6">
            Dedicated to Healthcare. Driven by Results.
          </p>
        </div>
      </section>

      {/* Why Us - with large visual blocks like Matthews */}
      <section className="section-padding bg-card relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="animate-on-scroll mb-16">
            <div className="accent-line mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Why Choose Us</p>
            <h2 className="heading-lg text-foreground">The Decker Difference</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 stagger-children">
            {[
              {
                icon: Users,
                title: "Deep Industry Knowledge",
                description:
                  "Decades of combined experience across the full spectrum of healthcare sectors, from acute care to post-acute, behavioral health to pharmacy services.",
              },
              {
                icon: Shield,
                title: "Long-Term Relationships",
                description:
                  "Lasting partnerships with our clients, acting as trusted advisors who understand their unique challenges and strategic objectives.",
              },
              {
                icon: Briefcase,
                title: "Customized Solutions",
                description:
                  "Every engagement is tailored to the specific needs and goals of our clients. No one-size-fits-all approaches to complex transactions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="animate-on-scroll border border-border/30 p-10 md:p-12 group hover:bg-secondary/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <img src={sectionMedical} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="animate-on-scroll max-w-2xl">
            <div className="accent-line mb-6" />
            <h2 className="heading-lg text-foreground mb-6">Ready to Explore Your Strategic Options?</h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Whether you're considering a sale, acquisition, recapitalization, or other strategic alternative, our team is ready to help you navigate the process.
            </p>
            <Button
              asChild
              size="lg"
              className="text-sm font-semibold uppercase tracking-wider px-10 h-12 rounded-none"
            >
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

export default Index;