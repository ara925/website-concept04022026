import { useState } from "react";
import { X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroTrackRecord from "@/assets/hero-track-record.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";
import billJanis1 from "@/assets/bill-janis-1.jpg";
import billJanis2 from "@/assets/bill-janis-2.jpg";
import cullenNguyen from "@/assets/cullen-nguyen.jpg";
import jeffRhodes from "@/assets/jeff-rhodes.jpg";

const teamMembers = [
  {
    name: "Bill Janis",
    title: "Managing Director",
    email: "bill@deckerhealthcare.com",
    image: billJanis2,
    bio: "Bill Janis is the Managing Director of Decker Healthcare Group, where he leads the firm's seniors housing brokerage practice. He has spent his entire professional career in the seniors housing industry, beginning at the age of 19, and brings a firsthand understanding of how these communities are built, operated, and ultimately transitioned.\n\nThroughout his career, Bill has been involved in the sale and financing of over $400 million in seniors housing transactions. His approach is built on direct relationships with owner-operators, including the families, partnerships, and local organizations that built and run senior care communities. He understands their operations, their challenges, and the weight behind the decision to sell. That perspective, combined with deep underwriting expertise and hands-on deal management, drives outcomes for his clients.\n\nIn addition to his brokerage work, Bill is a licensed Assisted Living Administrator, reflecting a continued commitment to understanding the day-to-day operational realities of the communities he represents. This experience shapes how he underwrites facilities, advises clients, and communicates with buyers.\n\nBill is also the chief editor of Decker's quarterly Market Trends Report, which provides analysis on operational trends across the seniors housing sector. The report is based on direct market engagement with stakeholders of all types and offers real-time insight that owners, operators, and investors have benefited from.\n\nHe has advised on transactions with particular expertise in family-run communities, as well as assets affiliated with nonprofit organizations, faith-based systems, government entities, and critical access hospitals transitioning out of senior care operations.",
  },
  {
    name: "Justin Valle",
    title: "Senior Associate",
    email: "justin@deckerhealthcare.com",
    image: null,
    bio: "Justin Valle is a Senior Associate at Decker Healthcare Group, where he leads origination and client advisory for the firm's eastern U.S. coverage. Justin specializes in identifying and engaging seniors housing owners and operators who may benefit from a transaction, building relationships through direct outreach and industry networking.\n\nWith four years of experience in seniors housing brokerage, Justin has developed deep expertise in prospecting, market research, and deal origination. He plays a central role in the firm's coverage of critical access hospitals divesting senior care communities in the eastern United States.\n\nJustin manages buyer and seller communications throughout the deal process and contributes to the firm's market intelligence and reporting efforts.\n\nHe is based in Chicago, Illinois.",
  },
  {
    name: "Jeffrey Rhodes",
    title: "Managing Director",
    email: "jeff@deckerhealthcare.com",
    phone: "(662) 404-1668",
    image: null,
    bio: "Jeff Rhodes is a Managing Director at Decker Healthcare Group, where he advises owners, operators, and investors across the seniors housing and long-term care industry, helping them evaluate the sale, lease, or financing of their communities.\n\nJeff's career in the senior care space began in 2004. He later became a partner at The Rhoman Group, Inc., where he serves as President and has been directly involved in the acquisition, development, and structuring of long-term care assets across multiple states. His experience includes navigating certificate of need processes, bed licensing, and complex regulatory approvals tied to highly regulated healthcare environments.\n\nThroughout his career, Jeff has been involved in over $800 million in seniors housing and healthcare transactions. A core focus of his work has been within the certified Medicaid bed market, where he has helped source new bed allocations and facilitate the transfer of existing beds. His group has played a role in bringing thousands of beds to market over the past two decades, with particular depth in Texas, Mississippi, and Arkansas.\n\nJeff is also actively involved in Valiant Healthcare Management, a leading provider of senior care throughout northern Louisiana. His operational involvement provides real-time insight into staffing, care delivery, and financial performance, shaping how he evaluates opportunities and advises clients.",
  },
  {
    name: "Cullen Nguyen",
    title: "Managing Director",
    image: null,
    bio: "Bio coming soon.",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const scrollRef = useScrollAnimation();

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
                className="animate-on-scroll text-left relative overflow-hidden group aspect-[3/4]"
              >
                {/* Photo or fallback */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.4] group-hover:brightness-[0.85] transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-secondary brightness-[0.4] group-hover:brightness-[0.85] transition-all duration-700 flex items-center justify-center">
                    <span className="text-6xl font-black text-primary/30">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary/80">{member.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facility image break */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={facilityInterior} alt="Senior living facility interior" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-black uppercase tracking-wider text-foreground text-center px-6">
            Trusted Advisors in Seniors Housing
          </p>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          />
          <div className="relative bg-card border border-border/30 max-w-2xl w-full p-10 animate-scale-in shadow-2xl shadow-primary/10 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            {selectedMember.image ? (
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-20 h-20 rounded-full object-cover object-top mb-5"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-5">
                <span className="text-xl font-black text-primary">
                  {selectedMember.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
            )}
            <div className="accent-line mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-1">{selectedMember.name}</h3>
            <p className="text-sm text-primary font-semibold mb-5">{selectedMember.title}</p>
            <div className="text-muted-foreground leading-relaxed text-sm space-y-4">
              {selectedMember.bio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {(selectedMember.email || selectedMember.phone) && (
              <div className="mt-6 pt-4 border-t border-border/30 space-y-2">
                {selectedMember.email && (
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Email:</span>{" "}
                    <a href={`mailto:${selectedMember.email}`} className="text-primary hover:text-primary/80 transition-colors">
                      {selectedMember.email}
                    </a>
                  </p>
                )}
                {selectedMember.phone && (
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Phone:</span>{" "}
                    <a href={`tel:${selectedMember.phone}`} className="text-primary hover:text-primary/80 transition-colors">
                      {selectedMember.phone}
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
