import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroServices from "@/assets/hero-services.jpg";
import facilityCampusClean from "@/assets/facility-campus-clean.jpg";

const services = [
  {
    id: "seniors-housing",
    label: "Brokerage",
    title: "Seniors Housing Brokerage",
    description:
      "Seniors housing is more than real estate. When you're selling a senior living community, you're selling a building where people live and receive care every day. That changes everything about how a transaction should be managed.\n\nThese are living, breathing businesses that serve the most vulnerable population in this country. Every transaction requires state regulatory approval, operational continuity, and a buyer who truly understands what they're taking on. Our role is to ensure a seamless transition where residents, families, and employees never feel a disruption, all while maximizing value for our client.",
    items: [
      {
        title: "Assisted Living, Memory Care, & Independent Living",
        description:
          "Execution-focused brokerage for assisted living and memory care communities, centered on accurate valuation and real buyer feedback from the market. We position assets to highlight operational strengths and growth potential, navigate licensing dynamics, and drive competitive processes that maximize value for our clients.",
      },
      {
        title: "Skilled Nursing Facilities",
        description:
          "Targeted representation for skilled nursing transactions, with a focus on reimbursement durability, survey history, and operator capability. We guide buyers and sellers through the complexities of Medicaid/Medicare exposure, regulatory approvals, and change-of-ownership processes that directly impact value and timing.",
      },
      {
        title: "Non-Profit & Hospital-Owned Assets",
        description:
          "Advisory for nonprofit organizations and hospital-owned senior housing assets, including standalone nonprofits, faith-based groups, and health systems where transactions require alignment well beyond price alone. We understand board governance, community obligations, and the need to preserve continuity of care, while structuring processes that satisfy fiduciary responsibilities and deliver the right buyer at the right terms.",
      },
      {
        title: "Distressed & Turnaround Assets",
        description:
          "Hands-on advisory for underperforming or distressed communities, where value is driven by execution, not optics. We work alongside lenders, owners, and operators to create realistic sale pathways, including short sales, note resolutions, and repositioning strategies, while connecting with buyers capable of stabilizing operations.",
      },
    ],
  },
  {
    id: "capital-markets",
    label: "Capital Markets",
    title: "Capital Markets Advisory",
    description:
      "Debt placement, recapitalizations, and acquisition financing for seniors housing owners and operators. We have a deep network of banks, credit funds, private debt lenders, and family office funds that lend in the Seniors Housing asset class.",
    items: [
      {
        title: "Recapitalizations",
        description:
          "Advisory on refinancing existing debt to better align with current operations and market conditions. We work with owners and operators to evaluate alternatives, negotiate with existing lenders, and create solutions that provide the best possible terms in the market.",
      },
      {
        title: "Acquisition Financing",
        description:
          "Strategic guidance for buyers securing financing in competitive acquisition environments. We help align capital sources with business plans, navigate lender expectations, and position transactions to close with certainty and speed.",
      },
      {
        title: "Financial Restructuring",
        description:
          "Hands-on advisory for organizations facing liquidity constraints, covenant pressure, or operational underperformance. We work through complex capital situations, coordinating with lenders and stakeholders to stabilize assets and preserve value.",
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
                <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
                  {service.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
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
        <img src={facilityCampusClean} alt="Senior living community" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
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
