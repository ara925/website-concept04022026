import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroAbout from "@/assets/hero-about.jpg";
import aboutBuilding from "@/assets/about-building.jpg";
import deckerLogo from "@/assets/decker-logo.png";

const About = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Who We Are"
        subtitle="Decker Healthcare Group is a seniors housing brokerage and advisory firm. We represent owners and operators in the sale and financing of assisted living, memory care, skilled nursing, and independent living communities across the United States."
        backgroundImage={heroAbout}
      />

      {/* Why Us */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="animate-on-scroll">
              <div className="accent-line mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Our Philosophy</p>
              <h2 className="heading-lg text-foreground mb-8">Why Decker</h2>
            </div>
            <div className="animate-on-scroll space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Decker Healthcare Group was founded on the belief that seniors housing owners and operators deserve a dedicated advisory partner with deep market expertise. Our team brings decades of combined experience specifically in assisted living, skilled nursing, memory care, and other seniors housing asset types.
              </p>
              <p>
                We understand that seniors housing transactions are uniquely complex — involving both real estate and an operating business, with licensing, regulatory, and resident care considerations that require specialized knowledge. Our independence allows us to focus solely on achieving the best outcomes for our clients.
              </p>
              <p>
                Our approach is relationship-driven. We invest the time to understand each client's business, community, and strategic objectives before recommending a course of action. We've been known to advise clients to walk away when terms aren't in their best interest — because our reputation for integrity is more valuable than any single transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Image Break with brand */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={aboutBuilding} alt="Senior living community campus" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <img src={deckerLogo} alt="Decker Healthcare Group" className="h-12 w-auto brightness-0 invert mx-auto mb-4" />
            <p className="text-2xl md:text-4xl font-black uppercase tracking-wider text-foreground px-6">
              Integrity. Expertise. Results.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section-padding bg-card">
        <div className="max-w-[1400px] mx-auto">
          <div className="animate-on-scroll mb-16">
            <div className="accent-line mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Our Expertise</p>
            <h2 className="heading-lg text-foreground">Sectors We Serve</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 stagger-children">
            {[
              "Assisted Living",
              "Skilled Nursing Facilities",
              "Memory Care",
              "Independent Living",
              "Continuing Care Retirement Communities",
              "Senior Living Campuses",
            ].map((sector) => (
              <div
                key={sector}
                className="animate-on-scroll bg-background border border-border/30 p-8 hover:border-primary/40 transition-all duration-500 group"
              >
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
