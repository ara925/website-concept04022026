import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    id: "ma-advisory",
    label: "M&A Advisory",
    title: "Mergers & Acquisitions Advisory",
    description:
      "We provide comprehensive M&A advisory services to healthcare companies across the full transaction lifecycle — from strategic assessment and buyer/seller identification to negotiation support and closing.",
    items: [
      {
        title: "Asset Acquisition & Divestiture Strategies",
        description:
          "Strategic guidance on acquiring or divesting healthcare assets to optimize portfolio composition and maximize shareholder value.",
      },
      {
        title: "Distressed Assets & Restructurings",
        description:
          "Specialized advisory for healthcare organizations navigating financial distress, including out-of-court restructurings and Section 363 asset sales.",
      },
      {
        title: "Management Buyouts",
        description:
          "Advisory and capital sourcing support for management teams seeking to acquire the businesses they operate.",
      },
      {
        title: "Strategic Alternatives Assessment",
        description:
          "Comprehensive evaluation of available options including sale, recapitalization, joint venture, or continued organic growth.",
      },
    ],
  },
  {
    id: "capital-markets",
    label: "Capital Markets Advisory",
    title: "Capital Markets Advisory",
    description:
      "We assist healthcare companies in accessing the capital markets to fund growth, acquisitions, recapitalizations, and other strategic initiatives. Our deep relationships with lenders and investors enable us to secure optimal terms.",
    items: [
      {
        title: "Debt Placement",
        description:
          "Sourcing and structuring senior, mezzanine, and subordinated debt facilities from banks, credit funds, and other institutional lenders.",
      },
      {
        title: "Recapitalizations",
        description:
          "Restructuring balance sheets to optimize capital structure, reduce cost of capital, and enhance financial flexibility.",
      },
      {
        title: "Equity Capital Raises",
        description:
          "Facilitating equity investments from private equity firms, family offices, and other institutional investors.",
      },
      {
        title: "Financial Restructuring",
        description:
          "Advising on comprehensive financial restructuring strategies for healthcare organizations facing liquidity or covenant challenges.",
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
        subtitle="Delivering specialized healthcare investment banking services with deep sector expertise and a commitment to client success."
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
    </div>
  );
};

export default Services;