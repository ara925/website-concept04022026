import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const deals = [
  {
    id: "1",
    title: "Regional Behavioral Health Platform",
    summary:
      "Advised on the sale of a multi-state behavioral health platform to a national strategic acquirer. The transaction represented a significant premium to management's expectations.",
    type: "M&A Advisory",
  },
  {
    id: "2",
    title: "Post-Acute Care Portfolio Divestiture",
    summary:
      "Represented a private equity-backed post-acute care company in the divestiture of a portfolio of skilled nursing facilities across three states.",
    type: "M&A Advisory",
  },
  {
    id: "3",
    title: "Home Health & Hospice Recapitalization",
    summary:
      "Structured and placed a comprehensive recapitalization for a leading home health and hospice provider, enabling a management buyout and growth capital infusion.",
    type: "Capital Markets",
  },
  {
    id: "4",
    title: "Pharmacy Services Acquisition Financing",
    summary:
      "Arranged acquisition financing for a pharmacy services company executing a buy-and-build growth strategy across the Southeastern United States.",
    type: "Capital Markets",
  },
  {
    id: "5",
    title: "Physician Practice Management Sale",
    summary:
      "Advised a physician-owned practice management company on its sale to a private equity-backed consolidator, achieving favorable terms and partnership structure.",
    type: "M&A Advisory",
  },
  {
    id: "6",
    title: "Acute Care Hospital System Restructuring",
    summary:
      "Provided financial restructuring advisory to a community hospital system, resulting in a successful out-of-court recapitalization and operational turnaround.",
    type: "Capital Markets",
  },
];

const TrackRecord = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Track Record"
        subtitle="A proven history of successful transactions across the healthcare spectrum. Select engagements are highlighted below."
      />

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 stagger-children">
            {deals.map((deal) => (
              <Link
                key={deal.id}
                to={`/track-record/${deal.id}`}
                className="animate-on-scroll group bg-card border border-border/30 p-10 hover:border-primary/40 hover:shadow-[var(--card-hover-shadow)] transition-all duration-500 flex flex-col relative overflow-hidden"
              >
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/0 group-hover:bg-primary transition-colors duration-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  {deal.type}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {deal.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{deal.summary}</p>
                <span className="mt-8 text-primary font-semibold text-xs uppercase tracking-[0.15em] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackRecord;