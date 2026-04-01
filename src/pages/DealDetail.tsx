import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

const dealDetails: Record<string, { title: string; type: string; description: string[] }> = {
  "1": {
    title: "Regional Behavioral Health Platform",
    type: "M&A Advisory",
    description: [
      "Helios served as exclusive financial advisor to a regional behavioral health platform in connection with its sale to a national strategic acquirer.",
      "The company operated multiple outpatient behavioral health clinics across several states, providing a comprehensive suite of mental health and substance abuse treatment services.",
      "Helios conducted a targeted marketing process, identifying and engaging with a select group of strategic and financial buyers. The resulting transaction represented a significant premium to management's initial expectations and provided an optimal outcome for all stakeholders.",
    ],
  },
  "2": {
    title: "Post-Acute Care Portfolio Divestiture",
    type: "M&A Advisory",
    description: [
      "Helios represented a private equity-backed post-acute care company in the divestiture of a portfolio of skilled nursing facilities across three states.",
      "The engagement required careful positioning of assets with varying quality metrics and census levels, as well as navigation of complex regulatory transfer requirements in multiple jurisdictions.",
      "Helios successfully structured and executed a transaction that maximized aggregate value while accommodating the buyer's preferred deal structure.",
    ],
  },
  "3": {
    title: "Home Health & Hospice Recapitalization",
    type: "Capital Markets",
    description: [
      "Helios structured and placed a comprehensive recapitalization for a leading home health and hospice provider, enabling a management buyout and growth capital infusion.",
      "The capital structure included senior secured credit facilities and a mezzanine tranche, sourced from a combination of regional banks and specialty healthcare lenders.",
      "The transaction provided the management team with majority ownership while positioning the company for continued organic and acquisitive growth.",
    ],
  },
  "4": {
    title: "Pharmacy Services Acquisition Financing",
    type: "Capital Markets",
    description: [
      "Helios arranged acquisition financing for a pharmacy services company executing a buy-and-build growth strategy across the Southeastern United States.",
      "The engagement included structuring a senior credit facility with an accordion feature to support future add-on acquisitions, as well as a delayed-draw term loan for identified pipeline opportunities.",
    ],
  },
  "5": {
    title: "Physician Practice Management Sale",
    type: "M&A Advisory",
    description: [
      "Helios advised a physician-owned practice management company on its sale to a private equity-backed consolidator.",
      "The transaction required careful structuring to accommodate the sellers' objectives around continued clinical autonomy, earn-out mechanisms, and equity rollover participation.",
      "Helios managed a competitive process that resulted in favorable terms and a partnership structure aligned with the physicians' long-term goals.",
    ],
  },
  "6": {
    title: "Acute Care Hospital System Restructuring",
    type: "Capital Markets",
    description: [
      "Helios provided financial restructuring advisory to a community hospital system facing significant liquidity challenges and covenant compliance issues.",
      "The engagement included negotiating covenant relief and amendments with the existing lender group, sourcing new capital to bridge near-term liquidity needs, and developing a long-term operational and financial turnaround plan.",
      "The result was a successful out-of-court recapitalization that preserved the hospital system's operations and community healthcare access.",
    ],
  },
};

const DealDetail = () => {
  const { id } = useParams();
  const deal = id ? dealDetails[id] : null;

  if (!deal) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="heading-md text-foreground mb-4">Deal Not Found</h2>
          <Button asChild variant="outline">
            <Link to="/track-record">Back to Track Record</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeroSection title={deal.title} subtitle={deal.type} />

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/track-record"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Track Record
          </Link>

          <div className="space-y-6">
            {deal.description.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Interested in learning more about our capabilities?</p>
            <Button asChild className="text-sm font-semibold uppercase tracking-wider">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealDetail;
