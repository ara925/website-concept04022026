import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroServices from "@/assets/hero-services.jpg";
import facilityAssistedLiving from "@/assets/facility-assisted-living.jpg";
import facilitySkilledNursing from "@/assets/facility-skilled-nursing.jpg";

const services = [
  {
    id: "seniors-housing",
    label: "Seniors Housing Brokerage",
    title: "Seniors Housing Brokerage",
    description:
      "We provide specialized brokerage services for seniors housing communities — a uniquely complex asset class where every transaction involves both real estate and an operating business. Unlike conventional commercial real estate, these deals require navigating licensing requirements, regulatory approvals, operational transitions, and the continuity of care for residents. Our team brings the deep sector expertise needed to manage this complexity and maximize value for our clients.",
    items: [
      {
        title: "Assisted Living & Memory Care",
        description:
          "Full-service brokerage for assisted living and memory care communities, including valuation, marketing, buyer outreach, and closing support. We understand the licensing and operational nuances unique to these properties.",
      },
      {
        title: "Skilled Nursing Facilities",
        description:
          "Specialized representation for skilled nursing facility transactions, navigating Medicaid/Medicare reimbursement considerations, certificate of need requirements, and state licensing transfers.",
      },
      {
        title: "Portfolio & Platform Transactions",
        description:
          "Advisory for multi-property portfolio sales and platform-level transactions, structuring deals that optimize value across diverse seniors housing assets.",
      },
      {
        title: "Distressed & Turnaround Assets",
        description:
          "Specialized advisory for underperforming or distressed seniors housing communities, including receivership sales, operational repositioning guidance, and buyer matching for turnaround opportunities.",
      },
    ],
  },
  {
    id: "capital-markets",
    label: "Capital Markets Advisory",
    title: "Capital Markets Advisory",
    description:
      "We assist seniors housing owners and operators in accessing the capital markets to fund acquisitions, recapitalizations, refinancings, and growth initiatives. Our deep relationships with lenders and investors who specialize in healthcare real estate enable us to secure optimal terms.",
    items: [
      {
        title: "Debt Placement",
        description:
          "Sourcing and structuring senior, mezzanine, and bridge financing from banks, credit funds, HUD/FHA, and other institutional lenders with seniors housing expertise.",
      },
      {
        title: "Recapitalizations",
        description:
          "Restructuring balance sheets to optimize capital structure, reduce cost of capital, and enhance financial flexibility for operators and investors.",
      },
      {
        title: "Acquisition Financing",
        description:
          "Arranging acquisition financing for buyers executing single-asset or portfolio acquisitions, including rapid-close solutions for competitive deal processes.",
      },
      {
        title: "Financial Restructuring",
        description:
          "Advising on comprehensive financial restructuring strategies for seniors housing organizations facing liquidity, covenant, or operational challenges.",
      },
    ],
  },
];

const Services = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Our Services"
        subtitle="Delivering specialized seniors housing brokerage and capital markets advisory with deep sector expertise and a commitment to client success."
        backgroundImage={heroServices}
      />

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 1 ? "bg-card" : ""}`}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="animate-on-scroll">
                <div className="accent-line mb-6" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  {service.label}
                </p>
                <h2 className="heading-lg text-foreground mb-6">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              </div>

              <div className="space-y-0 stagger-children">
                {service.items.map((item, i) => (
                  <div
                    key={item.title}
                    className="animate-on-scroll border-l-2 border-border/30 hover:border-primary pl-8 py-6 transition-all duration-500 group"
                  >
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-xs font-mono text-primary/50">0{i + 1}</span>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Facility images section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={facilityAssistedLiving} alt="Assisted living community" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-black uppercase tracking-wider text-foreground text-center px-6">
            Navigating the Complexities of Seniors Housing Transactions
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
