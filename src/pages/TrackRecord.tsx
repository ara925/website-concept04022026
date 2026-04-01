import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const deals = [
  {
    id: "1",
    title: "Regional Behavioral Health Platform",
    summary: "Advised on the sale of a multi-state behavioral health platform to a national strategic acquirer. The transaction represented a significant premium to management's expectations.",
    type: "M&A Advisory",
  },
  {
    id: "2",
    title: "Post-Acute Care Portfolio Divestiture",
    summary: "Represented a private equity-backed post-acute care company in the divestiture of a portfolio of skilled nursing facilities across three states.",
    type: "M&A Advisory",
  },
  {
    id: "3",
    title: "Home Health & Hospice Recapitalization",
    summary: "Structured and placed a comprehensive recapitalization for a leading home health and hospice provider, enabling a management buyout and growth capital infusion.",
    type: "Capital Markets",
  },
  {
    id: "4",
    title: "Pharmacy Services Acquisition Financing",
    summary: "Arranged acquisition financing for a pharmacy services company executing a buy-and-build growth strategy across the Southeastern United States.",
    type: "Capital Markets",
  },
  {
    id: "5",
    title: "Physician Practice Management Sale",
    summary: "Advised a physician-owned practice management company on its sale to a private equity-backed consolidator, achieving favorable terms and partnership structure.",
    type: "M&A Advisory",
  },
  {
    id: "6",
    title: "Acute Care Hospital System Restructuring",
    summary: "Provided financial restructuring advisory to a community hospital system, resulting in a successful out-of-court recapitalization and operational turnaround.",
    type: "Capital Markets",
  },
];

const TrackRecord = () => {
  return (
    <div>
      <HeroSection
        title="Track Record"
        subtitle="A proven history of successful transactions across the healthcare spectrum. Select engagements are highlighted below."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <Link
                key={deal.id}
                to={`/track-record/${deal.id}`}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-[var(--card-hover-shadow)] transition-all duration-300 flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{deal.type}</span>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{deal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{deal.summary}</p>
                <span className="mt-6 text-primary font-semibold text-sm uppercase tracking-wider inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight className="h-4 w-4" />
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
