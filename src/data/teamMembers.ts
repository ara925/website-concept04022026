import billJanis from "@/assets/bill-janis-common-area.jpg";
import billJanisIndustrial from "@/assets/bill-janis-industrial.jpg";
import billJanisSecondary from "@/assets/bill-janis-secondary.jpg";
import cullenNguyen from "@/assets/cullen-nguyen-common-area.jpg";
import cullenNguyenIndustrial from "@/assets/cullen-nguyen-industrial.jpg";
import jeffRhodes from "@/assets/jeff-rhodes-common-area.jpg";
import jeffRhodesIndustrial from "@/assets/jeff-rhodes-industrial.png";
import justinValle from "@/assets/justin-valle-common-area.jpg";
import justinValleIndustrial from "@/assets/justin-valle-industrial.jpg";

export type TeamGalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  email?: string;
  phone?: string;
  image: string;
  heroImage: string;
  summary: string;
  bio: string[];
  gallery: TeamGalleryImage[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "bill-janis",
    name: "Bill Janis",
    title: "Managing Director",
    email: "bill@deckerhealthcare.com",
    phone: "(312) 493-9301",
    image: billJanis,
    heroImage: billJanisIndustrial,
    summary:
      "Bill leads the firm's seniors housing brokerage practice with a background grounded in direct owner relationships, underwriting discipline, and operational experience inside the sector.",
    bio: [
      "Bill Janis is the Managing Director of Decker Healthcare Group, where he leads the firm's seniors housing brokerage practice. He has spent his entire professional career in the seniors housing industry, beginning at the age of 19, and brings a firsthand understanding of how these communities are built, operated, and ultimately transitioned.",
      "Throughout his career, Bill has been involved in the sale and financing of over $400 million in seniors housing transactions. His approach is built on direct relationships with owner-operators, including the families, partnerships, and local organizations that built and run senior care communities. He understands their operations, their challenges, and the weight behind the decision to sell. That perspective, combined with deep underwriting expertise and hands-on deal management, drives outcomes for his clients.",
      "In addition to his brokerage work, Bill is a licensed Assisted Living Administrator, reflecting a continued commitment to understanding the day-to-day operational realities of the communities he represents. This experience shapes how he underwrites facilities, advises clients, and communicates with buyers.",
      "Bill is also the chief editor of Decker's quarterly Market Trends Report, which provides analysis on operational trends across the seniors housing sector. The report is based on direct market engagement with stakeholders of all types and offers real-time insight that owners, operators, and investors have benefited from.",
      "He has advised on transactions with particular expertise in family-run communities, as well as assets affiliated with nonprofit organizations, faith-based systems, government entities, and critical access hospitals transitioning out of senior care operations.",
    ],
    gallery: [
      { src: billJanis, alt: "Bill Janis portrait in common area", label: "Common Area Portrait" },
      { src: billJanisIndustrial, alt: "Bill Janis portrait with industrial background", label: "Industrial Background" },
      { src: billJanisSecondary, alt: "Bill Janis alternate portrait", label: "Alternate Portrait" },
    ],
  },
  {
    slug: "justin-valle",
    name: "Justin Valle",
    title: "Senior Associate",
    email: "justin@deckerhealthcare.com",
    phone: "(847) 987-9266",
    image: justinValle,
    heroImage: justinValleIndustrial,
    summary:
      "Justin focuses on origination, buyer and seller communication, and relationship development across the firm's transaction pipeline.",
    bio: [
      "Justin Valle specializes in identifying and engaging seniors housing owners and operators who may benefit from a transaction, building relationships through direct outreach and industry networking.",
      "With four years of experience in seniors housing brokerage, Justin has developed deep expertise in prospecting, market research, and deal origination. He plays a central role in the firm's coverage of critical access hospitals divesting senior care communities in the eastern United States.",
      "Justin manages buyer and seller communications throughout the deal process and contributes to the firm's market intelligence and reporting efforts.",
      "He is based in Chicago, Illinois.",
    ],
    gallery: [
      { src: justinValle, alt: "Justin Valle portrait in common area", label: "Common Area Portrait" },
      { src: justinValleIndustrial, alt: "Justin Valle portrait with industrial background", label: "Industrial Background" },
    ],
  },
  {
    slug: "jeffrey-rhodes",
    name: "Jeffrey Rhodes",
    title: "Managing Director",
    email: "jeff@deckerhealthcare.com",
    phone: "(662) 404-1668",
    image: jeffRhodes,
    heroImage: jeffRhodesIndustrial,
    summary:
      "Jeff advises owners, operators, and investors with deep experience spanning acquisitions, financing, certificate-of-need work, and Medicaid bed markets.",
    bio: [
      "Jeff Rhodes is a Managing Director at Decker Healthcare Group, where he advises owners, operators, and investors across the seniors housing and long-term care industry, helping them evaluate the sale, lease, or financing of their communities.",
      "Jeff's career in the senior care space began in 2004. He later became a partner at The Rhoman Group, Inc., where he serves as President and has been directly involved in the acquisition, development, and structuring of long-term care assets across multiple states. His experience includes navigating certificate of need processes, bed licensing, and complex regulatory approvals tied to highly regulated healthcare environments.",
      "Throughout his career, Jeff has been involved in over $800 million in seniors housing and healthcare transactions. A core focus of his work has been within the certified Medicaid bed market, where he has helped source new bed allocations and facilitate the transfer of existing beds. His group has played a role in bringing thousands of beds to market over the past two decades, with particular depth in Texas, Mississippi, and Arkansas.",
      "Jeff is also actively involved in Valiant Healthcare Management, a leading provider of senior care throughout northern Louisiana. His operational involvement provides real-time insight into staffing, care delivery, and financial performance, shaping how he evaluates opportunities and advises clients.",
    ],
    gallery: [
      { src: jeffRhodes, alt: "Jeffrey Rhodes portrait in common area", label: "Common Area Portrait" },
      { src: jeffRhodesIndustrial, alt: "Jeffrey Rhodes portrait with industrial background", label: "Industrial Background" },
    ],
  },
  {
    slug: "cullen-nguyen",
    name: "Cullen Nguyen",
    title: "Associate",
    email: "cullen@deckerhealthcare.com",
    phone: "(317) 790-5895",
    image: cullenNguyen,
    heroImage: cullenNguyenIndustrial,
    summary:
      "Cullen supports underwriting analysis, data operations, and active deal execution with a quantitative background in accounting and economics.",
    bio: [
      "Cullen Nguyen is an Associate at Decker Healthcare Group, where he supports the firm's deal production, underwriting analysis, and market research. With a background in accounting and economics, Cullen brings a quantitative perspective to seniors housing transactions, with an understanding of both the macroeconomic trends shaping the industry and the day-to-day operational challenges that senior living professionals face.",
      "Cullen contributes to buyer database management, marketing material coordination, and data operations for active listings.",
    ],
    gallery: [
      { src: cullenNguyen, alt: "Cullen Nguyen portrait in common area", label: "Common Area Portrait" },
      { src: cullenNguyenIndustrial, alt: "Cullen Nguyen portrait with industrial background", label: "Industrial Background" },
    ],
  },
];

export function getTeamMemberBySlug(slug?: string) {
  return teamMembers.find((member) => member.slug === slug) ?? null;
}
