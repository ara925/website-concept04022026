import { ArrowUpRight, Download, FileText } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroTrackRecord from "@/assets/hero-track-record.jpg";
import deckerLogo from "@/assets/decker-logo.png";
import {
  featuredMarketTrendReport,
  marketTrendArchiveByYear,
  marketTrendReports,
  type MarketTrendReport,
} from "@/data/marketTrends";

const archiveYears = Object.keys(marketTrendArchiveByYear).sort((a, b) => Number(b) - Number(a));

const ReportVisual = ({ report, featured = false }: { report: MarketTrendReport; featured?: boolean }) => (
  <div
    className={`relative overflow-hidden bg-[#060d19] ${featured ? "min-h-[100%]" : ""}`}
    style={{
      backgroundImage:
        "radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 34%), linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
    }}
  >
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: featured ? "88px 88px" : "72px 72px",
      }}
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,25,0.2),rgba(6,13,25,0.78))]" />

    <div className="relative flex aspect-[8.5/11] h-full flex-col justify-between p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={deckerLogo} alt="" className="h-10 w-auto brightness-0 invert" />
        </div>
        <div className="text-right">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">{report.category}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">{report.issueLabel}</p>
        </div>
      </div>

      <div className="pt-10">
        <div className="accent-line mb-6" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/90">Seniors Housing and Long-Term Care</p>
        <h3 className={`mt-5 font-black uppercase tracking-[-0.05em] text-white ${featured ? "text-6xl leading-[0.92]" : "text-4xl leading-[0.96]"}`}>
          Market
          <br />
          Trends
        </h3>
        <p className={`mt-4 font-semibold uppercase tracking-[0.18em] text-white/82 ${featured ? "text-lg" : "text-sm"}`}>{report.issueLabel}</p>
      </div>

      <div className="space-y-3 border-t border-white/10 pt-6">
        {report.highlights.slice(0, 3).map((highlight, index) => (
          <div key={highlight} className="grid grid-cols-[26px_minmax(0,1fr)] gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-6 text-white/72">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReportActions = ({ report }: { report: MarketTrendReport }) => (
  <div className="mt-8 flex flex-wrap gap-3">
    <a
      href={report.pdfPath}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
    >
      <ArrowUpRight className="h-4 w-4" />
      Open PDF
    </a>
    <a
      href={report.pdfPath}
      download
      className="inline-flex items-center gap-2 border border-border/40 bg-card/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
    >
      <Download className="h-4 w-4" />
      Download PDF
    </a>
  </div>
);

const ReportCard = ({ report }: { report: MarketTrendReport }) => (
  <article className="animate-on-scroll overflow-hidden border border-border/30 bg-card/40 shadow-[0_22px_70px_rgba(5,11,21,0.22)] transition-transform duration-500 hover:-translate-y-1">
    <a href={report.pdfPath} target="_blank" rel="noreferrer" className="block">
      <div className="border-b border-border/30">
        <ReportVisual report={report} />
      </div>
    </a>

    <div className="p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
          {report.category}
        </span>
        <span className="inline-flex border border-border/30 bg-secondary/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {report.pageCount} {report.pageCount === 1 ? "Page" : "Pages"}
        </span>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">{report.issueLabel}</p>
      <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.03em] text-foreground">{report.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{report.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {report.highlights.map((highlight) => (
          <span
            key={highlight}
            className="inline-flex border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground"
          >
            {highlight}
          </span>
        ))}
      </div>

      <ReportActions report={report} />
    </div>
  </article>
);

const MarketTrends = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Market Trends"
        subtitle="A running archive of Decker Healthcare Group market briefs covering seniors housing and long-term care. Every issue is presented in the same format and available as a downloadable PDF."
        backgroundImage={heroTrackRecord}
        size="large"
      />

      <section className="section-padding border-b border-border/20">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:grid-cols-3 md:px-12">
          <div className="animate-on-scroll border border-border/30 bg-card/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Archive Size</p>
            <p className="mt-3 text-4xl font-black text-foreground">{marketTrendReports.length}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Issues currently published across updates and full quarterly reports.</p>
          </div>
          <div className="animate-on-scroll border border-border/30 bg-card/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Coverage Window</p>
            <p className="mt-3 text-4xl font-black text-foreground">2023-2026</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">A consistent archive spanning legacy Helios briefs through the Decker Healthcare Group brand transition.</p>
          </div>
          <div className="animate-on-scroll border border-border/30 bg-card/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Format</p>
            <p className="mt-3 text-4xl font-black text-foreground">PDF</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Every brief can be opened in-browser and downloaded directly without leaving the site flow.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="animate-on-scroll mb-12">
            <div className="accent-line mb-6" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Featured Brief</p>
            <h2 className="heading-lg text-foreground">Latest Issue</h2>
          </div>

          <article className="grid overflow-hidden border border-border/30 bg-card/30 lg:grid-cols-[minmax(360px,0.78fr)_minmax(0,1fr)]">
            <div className="border-b border-border/30 lg:border-b-0 lg:border-r">
              <ReportVisual report={featuredMarketTrendReport} featured />
            </div>
            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                    {featuredMarketTrendReport.category}
                  </span>
                  <span className="inline-flex border border-border/30 bg-secondary/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {featuredMarketTrendReport.pageCount} Pages
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  {featuredMarketTrendReport.issueLabel}
                </p>
                <h3 className="mt-4 text-4xl font-black uppercase tracking-[0.03em] text-foreground md:text-5xl">
                  {featuredMarketTrendReport.title}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                  {featuredMarketTrendReport.summary}
                </p>
                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {featuredMarketTrendReport.highlights.map((highlight) => (
                    <div key={highlight} className="border border-white/10 bg-white/[0.03] px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Key Theme</p>
                      <p className="mt-2 text-sm text-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <ReportActions report={featuredMarketTrendReport} />
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-card/20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="animate-on-scroll mb-12">
            <div className="accent-line mb-6" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Archive</p>
            <h2 className="heading-lg text-foreground">All Published Briefs</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              Every issue follows the same presentation and access pattern, regardless of when it was originally published.
            </p>
          </div>

          <div className="space-y-20">
            {archiveYears.map((year) => (
              <div key={year}>
                <div className="mb-8 flex items-center gap-4">
                  <div className="accent-line !mb-0" />
                  <h3 className="text-3xl font-black uppercase tracking-[0.04em] text-foreground">{year}</h3>
                </div>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {marketTrendArchiveByYear[year].map((report) => (
                    <ReportCard key={report.slug} report={report} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border/20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-12">
          <div className="animate-on-scroll">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Research Archive</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.04em] text-foreground md:text-4xl">
              Need a specific issue quickly?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Every published brief on this page can be opened instantly or downloaded as a PDF for offline review and internal distribution.
            </p>
          </div>
          <a
            href={featuredMarketTrendReport.pdfPath}
            download
            className="animate-on-scroll inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <FileText className="h-4 w-4" />
            Download Latest Brief
          </a>
        </div>
      </section>
    </div>
  );
};

export default MarketTrends;
