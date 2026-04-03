import { useState } from "react";
import { X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroTrackRecord from "@/assets/hero-track-record.jpg";
import facilityInterior from "@/assets/facility-interior.jpg";

const teamMembers = [
  {
    name: "Helios Decker",
    title: "Managing Partner & Founder",
    bio: "Helios founded Decker Healthcare Group with a singular focus on seniors housing brokerage and advisory. With over 15 years of experience in the seniors housing and healthcare real estate markets, Helios has developed one of the most comprehensive buyer databases and transaction tracking systems in the industry. His deep market knowledge, persistence, and integrity have earned the trust of owners, operators, and investors across the country. Helios is known for providing no-nonsense market feedback and guiding clients through complex transactions involving both real estate and operating businesses, including licensing and regulatory considerations.",
  },
  {
    name: "Bill Carver",
    title: "Managing Director, Capital Markets",
    bio: "Bill leads the capital markets and financing practice at Decker Healthcare Group, specializing in debt placement, recapitalizations, and acquisition financing for skilled nursing facilities, assisted living communities, and other seniors housing assets. His deep relationships with banks, credit funds, and institutional lenders enable Decker clients to access optimal financing terms and rapid execution. Bill has financed transactions across multiple states and is recognized for his responsiveness, professionalism, and ability to navigate the unique lending requirements of healthcare real estate.",
  },
  {
    name: "Sarah Mitchell",
    title: "Vice President, Acquisitions & Dispositions",
    bio: "Sarah plays a key role in Decker's brokerage engagements, managing deal execution from initial market assessment through closing. She specializes in underwriting and financial analysis for assisted living and skilled nursing transactions, with particular expertise in evaluating both the real estate and operating business components of each deal. Sarah works closely with clients to develop marketing materials, coordinate buyer outreach, and manage the due diligence process. Her attention to detail and client-first approach have been instrumental in several of Decker's most successful transactions.",
  },
  {
    name: "David Park",
    title: "Director, Market Intelligence & Analytics",
    bio: "David oversees Decker's proprietary market intelligence platform, maintaining and expanding the firm's extensive database of seniors housing transactions, buyer profiles, and market analytics. His work provides the data-driven insights that differentiate Decker's advisory services in the marketplace. David tracks market trends across assisted living, skilled nursing, memory care, and independent living sectors, providing clients with detailed competitive analysis and pricing benchmarking. He is also responsible for managing the firm's buyer intake pipeline and CRM systems.",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Our Team"
        subtitle="A seasoned team of seniors housing professionals with deep market knowledge, extensive relationships, and a commitment to client success."
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
                className="animate-on-scroll text-left bg-card border border-border/30 p-8 hover:border-primary/40 hover:shadow-[var(--card-hover-shadow)] transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                  <span className="text-2xl font-black text-primary">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary/80">{member.title}</p>
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
          <div className="relative bg-card border border-border/30 max-w-lg w-full p-10 animate-scale-in shadow-2xl shadow-primary/10">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-5">
              <span className="text-xl font-black text-primary">
                {selectedMember.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div className="accent-line mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-1">{selectedMember.name}</h3>
            <p className="text-sm text-primary font-semibold mb-5">{selectedMember.title}</p>
            <p className="text-muted-foreground leading-relaxed text-sm">{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
