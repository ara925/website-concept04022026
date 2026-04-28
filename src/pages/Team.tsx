import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Mail, Phone, X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroTrackRecord from "@/assets/hero-track-record.jpg";
import deckerGroupPhoto from "@/assets/decker-group-photo.jpg";
import billJanis from "@/assets/bill-janis-common-area.jpg";
import billJanisIndustrial from "@/assets/bill-janis-industrial.jpg";
import billJanisSecondary from "@/assets/bill-janis-secondary.jpg";
import cullenNguyen from "@/assets/cullen-nguyen-common-area.jpg";
import cullenNguyenIndustrial from "@/assets/cullen-nguyen-industrial.jpg";
import jeffRhodes from "@/assets/jeff-rhodes-common-area.jpg";
import jeffRhodesIndustrial from "@/assets/jeff-rhodes-industrial.png";
import justinValle from "@/assets/justin-valle-common-area.jpg";
import justinValleIndustrial from "@/assets/justin-valle-industrial.jpg";

type TeamGalleryImage = {
  src: string;
  alt: string;
  label: string;
};

type TeamMember = {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  image: string;
  bio: string;
  gallery: TeamGalleryImage[];
};

const teamMembers: TeamMember[] = [
  {
    name: "Bill Janis",
    title: "Managing Director",
    email: "bill@deckerhealthcare.com",
    image: billJanis,
    gallery: [
      { src: billJanis, alt: "Bill Janis portrait in common area", label: "Common Area Portrait" },
      { src: billJanisIndustrial, alt: "Bill Janis portrait with industrial background", label: "Industrial Background" },
      { src: billJanisSecondary, alt: "Bill Janis secondary portrait", label: "Alternate Portrait" },
    ],
    bio: "Bill Janis is the Managing Director of Decker Healthcare Group, where he leads the firm's seniors housing brokerage practice. He has spent his entire professional career in the seniors housing industry, beginning at the age of 19, and brings a firsthand understanding of how these communities are built, operated, and ultimately transitioned.\n\nThroughout his career, Bill has been involved in the sale and financing of over $400 million in seniors housing transactions. His approach is built on direct relationships with owner-operators, including the families, partnerships, and local organizations that built and run senior care communities. He understands their operations, their challenges, and the weight behind the decision to sell. That perspective, combined with deep underwriting expertise and hands-on deal management, drives outcomes for his clients.\n\nIn addition to his brokerage work, Bill is a licensed Assisted Living Administrator, reflecting a continued commitment to understanding the day-to-day operational realities of the communities he represents. This experience shapes how he underwrites facilities, advises clients, and communicates with buyers.\n\nBill is also the chief editor of Decker's quarterly Market Trends Report, which provides analysis on operational trends across the seniors housing sector. The report is based on direct market engagement with stakeholders of all types and offers real-time insight that owners, operators, and investors have benefited from.\n\nHe has advised on transactions with particular expertise in family-run communities, as well as assets affiliated with nonprofit organizations, faith-based systems, government entities, and critical access hospitals transitioning out of senior care operations.",
  },
  {
    name: "Justin Valle",
    title: "Senior Associate",
    email: "justin@deckerhealthcare.com",
    image: justinValle,
    gallery: [
      { src: justinValle, alt: "Justin Valle portrait in common area", label: "Common Area Portrait" },
      { src: justinValleIndustrial, alt: "Justin Valle portrait with industrial background", label: "Industrial Background" },
    ],
    bio: "Justin Valle is a Senior Associate at Decker Healthcare Group, where he leads origination and client advisory for the firm's eastern U.S. coverage. Justin specializes in identifying and engaging seniors housing owners and operators who may benefit from a transaction, building relationships through direct outreach and industry networking.\n\nWith four years of experience in seniors housing brokerage, Justin has developed deep expertise in prospecting, market research, and deal origination. He plays a central role in the firm's coverage of critical access hospitals divesting senior care communities in the eastern United States.\n\nJustin manages buyer and seller communications throughout the deal process and contributes to the firm's market intelligence and reporting efforts.\n\nHe is based in Chicago, Illinois.",
  },
  {
    name: "Jeffrey Rhodes",
    title: "Managing Director",
    email: "jeff@deckerhealthcare.com",
    phone: "(662) 404-1668",
    image: jeffRhodes,
    gallery: [
      { src: jeffRhodes, alt: "Jeffrey Rhodes portrait in common area", label: "Common Area Portrait" },
      { src: jeffRhodesIndustrial, alt: "Jeffrey Rhodes portrait with industrial background", label: "Industrial Background" },
    ],
    bio: "Jeff Rhodes is a Managing Director at Decker Healthcare Group, where he advises owners, operators, and investors across the seniors housing and long-term care industry, helping them evaluate the sale, lease, or financing of their communities.\n\nJeff's career in the senior care space began in 2004. He later became a partner at The Rhoman Group, Inc., where he serves as President and has been directly involved in the acquisition, development, and structuring of long-term care assets across multiple states. His experience includes navigating certificate of need processes, bed licensing, and complex regulatory approvals tied to highly regulated healthcare environments.\n\nThroughout his career, Jeff has been involved in over $800 million in seniors housing and healthcare transactions. A core focus of his work has been within the certified Medicaid bed market, where he has helped source new bed allocations and facilitate the transfer of existing beds. His group has played a role in bringing thousands of beds to market over the past two decades, with particular depth in Texas, Mississippi, and Arkansas.\n\nJeff is also actively involved in Valiant Healthcare Management, a leading provider of senior care throughout northern Louisiana. His operational involvement provides real-time insight into staffing, care delivery, and financial performance, shaping how he evaluates opportunities and advises clients.",
  },
  {
    name: "Cullen Nguyen",
    title: "Managing Director",
    image: cullenNguyen,
    gallery: [
      { src: cullenNguyen, alt: "Cullen Nguyen portrait in common area", label: "Common Area Portrait" },
      { src: cullenNguyenIndustrial, alt: "Cullen Nguyen portrait with industrial background", label: "Industrial Background" },
    ],
    bio: "Bio coming soon.",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const scrollRef = useScrollAnimation();
  const activePhoto = selectedMember?.gallery[activePhotoIndex];

  useEffect(() => {
    if (!selectedMember) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setActivePhotoIndex((current) => {
          const total = selectedMember.gallery.length;
          return (current + 1) % total;
        });
      }

      if (event.key === "ArrowLeft") {
        setActivePhotoIndex((current) => {
          const total = selectedMember.gallery.length;
          return (current - 1 + total) % total;
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [selectedMember]);

  const showPreviousPhoto = () => {
    if (!selectedMember) {
      return;
    }

    setActivePhotoIndex((current) => (current - 1 + selectedMember.gallery.length) % selectedMember.gallery.length);
  };

  const showNextPhoto = () => {
    if (!selectedMember) {
      return;
    }

    setActivePhotoIndex((current) => (current + 1) % selectedMember.gallery.length);
  };

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Our Team"
        subtitle="A focused team of seniors housing professionals with direct transactional experience, deep market relationships, and a commitment to getting deals done right."
        backgroundImage={heroTrackRecord}
      />

      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="animate-on-scroll mb-16">
            <div className="accent-line mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Leadership</p>
            <h2 className="heading-lg text-foreground">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 stagger-children">
            {teamMembers.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="animate-on-scroll text-left relative overflow-hidden group aspect-[3/4] border border-border/20 bg-card/20 transition-transform duration-500 hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover object-top brightness-[0.4] saturate-[0.9] group-hover:scale-[1.03] group-hover:brightness-[0.82] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-background/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary backdrop-blur-sm">
                  View Profile
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary/80">{member.title}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    <span>{member.gallery.length} Photos</span>
                    <span className="text-primary">Open Window</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facility image break */}
      <section className="relative h-[48vh] min-h-[360px] overflow-hidden">
        <img src={deckerGroupPhoto} alt="Decker Healthcare Group team photo" className="w-full h-full object-cover object-center" loading="lazy" width={4072} height={2579} />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-4">Decker Healthcare Group</p>
            <p className="text-2xl md:text-4xl font-black uppercase tracking-wider text-foreground">
              Trusted Advisors in Seniors Housing
            </p>
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background/86 px-4 py-6 backdrop-blur-md animate-fade-in md:px-6 md:py-10">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedMember(null)}
          />
          <div className="relative mx-auto flex max-w-6xl animate-scale-in flex-col overflow-hidden border border-white/10 bg-[#091221]/95 shadow-[0_30px_120px_rgba(6,14,28,0.8)] lg:min-h-[80vh] lg:flex-row">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-background/70 p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`Close ${selectedMember.name} profile`}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex min-h-[380px] flex-col border-b border-white/10 bg-[#050b15] lg:min-h-0 lg:w-[52%] lg:border-b-0 lg:border-r">
              {activePhoto && (
                <div className="relative flex-1">
                  <img
                    key={activePhoto.src}
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    className="h-full min-h-[380px] w-full object-cover object-top transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06101d] via-[#06101d]/25 to-[#06101d]/5" />
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#06101d]/75 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">{activePhoto.label}</p>
                      <p className="text-sm text-white/70">
                        Photo {activePhotoIndex + 1} of {selectedMember.gallery.length}
                      </p>
                    </div>
                    {selectedMember.gallery.length > 1 && (
                      <div className="flex gap-2">
                        <button
                          onClick={showPreviousPhoto}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-background/75 text-foreground transition-colors hover:border-primary hover:text-primary"
                          aria-label="Show previous photo"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={showNextPhoto}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-background/75 text-foreground transition-colors hover:border-primary hover:text-primary"
                          aria-label="Show next photo"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedMember.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto border-t border-white/10 bg-[#06101d] px-6 py-6">
                  {selectedMember.gallery.map((photo, index) => (
                    <button
                      key={photo.src}
                      onClick={() => setActivePhotoIndex(index)}
                      className={`relative h-20 w-16 shrink-0 overflow-hidden border transition-all duration-300 ${
                        index === activePhotoIndex
                          ? "border-primary shadow-[0_0_0_1px_rgba(59,130,246,0.4)]"
                          : "border-white/10 opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Show ${selectedMember.name} photo ${index + 1}`}
                    >
                      <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex-1 p-7 md:p-10 lg:p-12">
              <div className="mb-8 flex flex-wrap items-start justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <div className="accent-line mb-4" />
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Leadership Profile</p>
                  <h3 className="text-3xl font-black uppercase tracking-[0.04em] text-foreground md:text-4xl">{selectedMember.name}</h3>
                  <p className="mt-3 text-base font-medium text-primary/90">{selectedMember.title}</p>
                </div>
                <div className="grid min-w-[200px] gap-3 text-sm text-muted-foreground">
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{selectedMember.email}</span>
                    </a>
                  )}
                  {selectedMember.phone && (
                    <a
                      href={`tel:${selectedMember.phone}`}
                      className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{selectedMember.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Gallery</p>
                  <p className="mt-3 text-2xl font-bold text-foreground">{selectedMember.gallery.length}</p>
                  <p className="mt-2 text-sm text-muted-foreground">Additional portraits and profile imagery for this team member.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:col-span-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Profile Window</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    This panel keeps the main team page clean while exposing deeper profile context and alternate photos on demand.
                  </p>
                </div>
              </div>

              <div className="max-h-[42vh] space-y-5 overflow-y-auto pr-2 text-sm leading-7 text-muted-foreground lg:max-h-[46vh]">
                {selectedMember.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
