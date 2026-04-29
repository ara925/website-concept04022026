const pdfBase =
  "https://cdn.jsdelivr.net/gh/ara925/website-concept04022026@main/public/market-trends/pdfs";

export const marketTrendsHeroImage =
  "https://cdn.jsdelivr.net/gh/ara925/website-concept04022026@main/src/assets/hero-track-record.jpg";

export const marketTrendReports = [
  {
    slug: "market-trends-report-april-2026",
    title: "Market Trends Report",
    issueLabel: "April 2026",
    category: "Quarterly Report",
    isoDate: "2026-04-01",
    pageCount: 2,
    summary:
      "A 12-signal quarterly brief covering operator hiring pressure, referral-channel expansion, rent-increase positioning, and how investors are reading operational credibility in the current seniors housing market.",
    highlights: ["12 market signals", "Rent narrative pressure", "Operator hiring shifts"],
    pdfUrl: `${pdfBase}/market-trends-report-april-2026.pdf`,
  },
  {
    slug: "market-trends-report-february-2026",
    title: "Market Trends Report",
    issueLabel: "February 2026",
    category: "Quarterly Report",
    isoDate: "2026-02-01",
    pageCount: 2,
    summary:
      "Focuses on the gap between AI-heavy demos and actual operating impact, the shift toward higher-acuity models, and how current demand patterns are reshaping unit mix and resident economics.",
    highlights: ["AI adoption reality", "Higher-acuity models", "Independent living softness"],
    pdfUrl: `${pdfBase}/market-trends-report-february-2026.pdf`,
  },
  {
    slug: "market-trends-report-august-2025",
    title: "Market Trends Report",
    issueLabel: "August 2025",
    category: "Quarterly Report",
    isoDate: "2025-08-01",
    pageCount: 2,
    summary:
      "Tracks where amenity-rich development is underdelivering, how affluent-market marketing tactics are escalating, and why reimbursement dynamics are shifting in assisted living.",
    highlights: ["Amenity underuse", "Luxury tour competition", "Reimbursement normalization"],
    pdfUrl: `${pdfBase}/market-trends-report-august-2025.pdf`,
  },
  {
    slug: "market-trends-report-may-2025",
    title: "Market Trends Report",
    issueLabel: "May 2025",
    category: "Quarterly Report",
    isoDate: "2025-05-01",
    pageCount: 2,
    summary:
      "Highlights respite-care leasing strategies, debt allocation around specialty state contracts, and the branding shifts operators are using to reposition community dining and care experiences.",
    highlights: ["Respite-stay feeders", "Specialty contract leverage", "Culinary repositioning"],
    pdfUrl: `${pdfBase}/market-trends-report-may-2025.pdf`,
  },
  {
    slug: "market-trends-report-february-2025",
    title: "Market Trends Report",
    issueLabel: "February 2025",
    category: "Quarterly Report",
    isoDate: "2025-02-01",
    pageCount: 2,
    summary:
      "Covers guest-meal policies as a referral tactic, rural hospital acquisitions of senior communities, and how smaller operators are restructuring leadership and development economics.",
    highlights: ["Guest-meal strategy", "Hospital acquisitions", "Grant-backed development"],
    pdfUrl: `${pdfBase}/market-trends-report-february-2025.pdf`,
  },
  {
    slug: "market-trends-update-november-2024",
    title: "Market Trends Update",
    issueLabel: "November 2024",
    category: "Market Update",
    isoDate: "2024-11-01",
    pageCount: 1,
    summary:
      "A fast-turn market update on fee-simple independent living strategies, hospice acquisitions by assisted living providers, and the capital responses being used to support lease-up and working capital.",
    highlights: ["Fee-simple IL models", "Hospice acquisitions", "Lease-up liquidity"],
    pdfUrl: `${pdfBase}/market-trends-update-november-2024.pdf`,
  },
  {
    slug: "market-trends-update-july-2024",
    title: "Market Trends Update",
    issueLabel: "July 2024",
    category: "Market Update",
    isoDate: "2024-07-01",
    pageCount: 1,
    summary:
      "Reviews lender caution around healthcare foreclosures, the labor incentives communities are using to stabilize staffing, and how banks are extending runway instead of forcing distressed outcomes.",
    highlights: ["Foreclosure risk", "Attendance bonuses", "Lender cooperation"],
    pdfUrl: `${pdfBase}/market-trends-update-july-2024.pdf`,
  },
  {
    slug: "market-trends-update-april-2024",
    title: "Market Trends Update",
    issueLabel: "April 2024",
    category: "Market Update",
    isoDate: "2024-04-01",
    pageCount: 1,
    summary:
      "Examines ancillary healthcare buyers entering the space, pressure created by underoccupied new development, and the tactical shifts emerging in smaller-asset transactions.",
    highlights: ["Ancillary buyers", "Lease-up pressure", "Sub-$5M activity"],
    pdfUrl: `${pdfBase}/market-trends-update-april-2024.pdf`,
  },
  {
    slug: "market-trends-update-january-2024",
    title: "Market Trends Update",
    issueLabel: "January 2024",
    category: "Market Update",
    isoDate: "2024-01-01",
    pageCount: 1,
    summary:
      "A market read on extreme construction costs, longer development hold periods, evolving nursing-home economics, and the management churn showing up across operator portfolios.",
    highlights: ["Construction inflation", "Longer hold periods", "Management turnover"],
    pdfUrl: `${pdfBase}/market-trends-update-january-2024.pdf`,
  },
  {
    slug: "market-trends-october-2023",
    title: "Market Trends",
    issueLabel: "October 2023",
    category: "Market Update",
    isoDate: "2023-10-01",
    pageCount: 1,
    summary:
      "Captures buyer preference for stronger markets despite negative cash flow, the survey-agency staffing gap affecting skilled nursing, and shifting post-acute reimbursement mix.",
    highlights: ["Stronger-market bias", "Surveyor shortage", "Managed-care mix"],
    pdfUrl: `${pdfBase}/market-trends-october-2023.pdf`,
  },
  {
    slug: "market-trends-august-2023",
    title: "Market Trends",
    issueLabel: "August 2023",
    category: "Market Update",
    isoDate: "2023-08-01",
    pageCount: 1,
    summary:
      "Documents how seller carryback became a dominant structuring tool, especially where debt markets were constrained and owners prioritized operational exit over immediate pricing purity.",
    highlights: ["Seller carryback", "Debt market pressure", "Distressed exits"],
    pdfUrl: `${pdfBase}/market-trends-august-2023.pdf`,
  },
].sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));
