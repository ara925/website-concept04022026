import { Link } from "react-router-dom";
import { ArrowRight, Building2, Shield, Users, Briefcase, BarChart3, Database } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ClientQuotes from "@/components/ClientQuotes";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroHome from "@/assets/hero-home.jpg";
import facilityAssistedLiving from "@/assets/facility-assisted-living.jpg";
import facilityCampusClean from "@/assets/facility-campus-clean.jpg";
import deckerLogo from "@/assets/decker-logo.png";

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <HeroSection
        title="Seniors Housing Brokerage. Built on Relationships."
        subtitle="We represent owners and operators of assisted living, memory care, skilled nursing, and independent living communities in the sale and financing of their properties."
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
            <Link to="/buyer-intake">Register as a Buyer</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Animated Metrics */}
      <section className="stats-bar">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCounter end={103478346} prefix="$" label="Total Transaction Volume" duration={2500} formatNumber />
            <AnimatedCounter end={11269} label="Buyers in Database" sublabel="+ 37 added in last 30 days" duration={2500} formatNumber />
            <AnimatedCounter end={87.2} suffix="%" decimals={1} label="Avg. % of Asking Price" duration={2500} />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="animate-on-scroll mb-16">
            <div className="accent-line mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">What We Do</p>
            <h2 className="heading-lg text-foreground">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 stagger-children">
            {/* Seniors Housing Brokerage Card */}
            <Link to="/services#seniors-housing" className="group animate-on-scroll">
              <div className="relative bg-card border border-border/30 p-10 md:p-14 transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--card-hover-shadow)] h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Brokerage</span>
                </div>
                <h3 className="heading-md text-foreground mb-5 group-hover:text-primary transition-colors">
                  Seniors Housing Brokerage
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  Seniors housing is more than real estate. When you're selling a senior living community, you're selling a building where people live and receive care every day. That changes everything about how a transaction should be managed. These are living, breathing businesses that serve the most vulnerable population in this country. Every transaction requires state regulatory approval, operational continuity, and a buyer who truly understands what they're taking on. Our role is to ensure a seamless transition where residents, families, and employees never feel a disruption, all while maximizing value for our client.
                </p>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
              </div>
            </Link>

            {/* Capital Markets Card */}
            <Link to="/services#capital-markets" className="group animate-on-scroll">
              <div className="relative bg-card border border-border/30 p-10 md:p-14 transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--card-hover-shadow)] h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Capital Markets</span>
                </div>
                <h3 className="heading-md text-foreground mb-5 group-hover:text-primary transition-colors">
                  Capital Markets Advisory
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  Debt placement, recapitalizations, and acquisition financing for seniors housing owners and operators. We have a deep network of banks, credit funds, private debt lenders, and family office funds that lend in the Seniors Housing asset class.
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

      {/* Photo Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={facilityCampusClean} alt="Senior living community campus" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <img src={deckerLogo} alt="Decker Healthcare Group" className="h-12 w-auto brightness-0 invert mx-auto mb-4" />
            <p className="text-2xl md:text-4xl font-black uppercase tracking-wider text-foreground px-6">
              Your Community. Our Commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Client Quotes */}
      <ClientQuotes />

      {/* The Decker Difference */}
      <section className="section-padding relative overflow-hidden">
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
                title: "Deep Market Knowledge",
                description:
                  "We built proprietary systems to track every licensed facility in our coverage states, monitor ownership changes in real time, and underwrite operations at a level that most brokers never reach. Our team members also have extensive experience on the operational side of the business, having been involved in senior community ownership and maintaining administrator's licenses.",
              },
              {
                icon: Shield,
                title: "Integrity First",
                description:
                  "Our approach is direct. We invest the time to understand each client's business, community, and objectives before recommending a course of action. Every owner's situation is different, and the playbook should reflect that. We give honest guidance on valuation, deal structure, and timing, because our clients deserve a clear picture of their options, not just the answer they want to hear. Our reputation is built on that transparency, and it's why clients trust us with the most important financial decision of their career.",
              },
              {
                icon: Database,
                title: "Proprietary Buyer Database",
                description:
                  "Our actively managed database of qualified buyers allows us to quickly and confidentially match opportunities with the right acquirers. We maintain real-time insight into buyer criteria, capital availability, and geographic focus, enabling targeted outreach that drives competitive tension and maximizes value for our clients.",
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

      {/* Bottom CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <img src={facilityAssistedLiving} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="animate-on-scroll max-w-2xl">
            <div className="accent-line mb-6" />
            <h2 className="heading-lg text-foreground mb-6">Looking to Buy or Sell a Seniors Housing Community?</h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Whether you are a private owner exploring a sale, an organization evaluating strategic alternatives for a senior care asset, or a buyer seeking acquisition opportunities, we would welcome the chance to have a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-sm font-semibold uppercase tracking-wider px-10 h-12 rounded-none"
              >
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-sm font-semibold uppercase tracking-wider px-10 h-12 rounded-none border-foreground/20 hover:bg-foreground/5"
              >
                <Link to="/buyer-intake">
                  Register as a Buyer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
