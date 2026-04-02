import { useState } from "react";
import { X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroAbout from "@/assets/hero-about.jpg";

const teamMembers = [
  {
    name: "Michael Patton",
    title: "Managing Director",
    bio: "Michael Patton founded Decker Healthcare Group to provide specialized investment banking services to healthcare companies. He has over 20 years of healthcare M&A and capital markets experience, having completed over $5 billion in transactions.",
  },
  {
    name: "Ryan O'Sullivan",
    title: "Managing Director",
    bio: "Ryan O'Sullivan has over 15 years of investment banking experience focused exclusively on the healthcare industry. He has advised on numerous mergers, acquisitions, divestitures, and capital raising transactions.",
  },
  {
    name: "Chris Heckman",
    title: "Director",
    bio: "Chris Heckman has extensive experience in healthcare investment banking, with a focus on M&A advisory and capital markets. He has been involved in transactions across multiple healthcare sub-sectors.",
  },
  {
    name: "Kevin McShane",
    title: "Vice President",
    bio: "Kevin McShane brings significant experience in financial analysis and transaction execution for healthcare companies. He plays a key role in supporting deal teams across all phases of the engagement process.",
  },
  {
    name: "Matt Anderson",
    title: "Vice President",
    bio: "Matt Anderson has healthcare investment banking experience spanning M&A advisory and capital raising. He works closely with clients to develop and execute strategic alternatives.",
  },
  {
    name: "Dan Crofton",
    title: "Associate",
    bio: "Dan Crofton supports the firm's M&A advisory and capital markets engagements, contributing to financial modeling, due diligence, and transaction execution.",
  },
  {
    name: "Alex Rivera",
    title: "Analyst",
    bio: "Alex Rivera contributes to financial analysis, market research, and deal execution support across the firm's healthcare advisory engagements.",
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Guiding Strategic Decision Making"
        subtitle="A dedicated healthcare advisory team with deep sector expertise and a commitment to delivering exceptional results for our clients."
      />

      {/* Why Us */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="animate-on-scroll">
              <div className="accent-line mb-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Our Philosophy</p>
              <h2 className="heading-lg text-foreground mb-8">Why Decker</h2>
            </div>
            <div className="animate-on-scroll space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Decker Healthcare Group was founded on the belief that healthcare companies deserve a dedicated advisory partner with deep industry expertise. Our team brings decades of combined experience in healthcare M&A and capital markets transactions.
              </p>
              <p>
                We are committed to providing our clients with unbiased, conflict-free advice. Our independence allows us to focus solely on achieving the best outcomes for our clients, whether they are exploring a sale, acquisition, recapitalization, or other strategic alternatives.
              </p>
              <p>
                Our approach is relationship-driven. We invest the time to understand each client's business, culture, and strategic objectives before recommending a course of action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="max-w-[1400px] mx-auto">
          <div className="animate-on-scroll mb-16">
            <div className="accent-line mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Leadership</p>
            <h2 className="heading-lg text-foreground">Our Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 stagger-children">
            {teamMembers.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="animate-on-scroll text-left bg-background border border-border/30 p-8 hover:border-primary/40 hover:shadow-[var(--card-hover-shadow)] transition-all duration-500 group"
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

      {/* Team Member Modal */}
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
            <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;