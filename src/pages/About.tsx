import { useState } from "react";
import { X } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const teamMembers = [
  {
    name: "Michael Patton",
    title: "Managing Director",
    bio: "Michael Patton founded Helios Healthcare Advisory to provide specialized investment banking services to healthcare companies. He has over 20 years of healthcare M&A and capital markets experience, having completed over $5 billion in transactions.",
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

  return (
    <div>
      <HeroSection
        title="Guiding Strategic Decision Making"
        subtitle="A dedicated healthcare advisory team with deep sector expertise and a commitment to delivering exceptional results for our clients."
      />

      {/* Why Us */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Our Philosophy</p>
          <h2 className="heading-lg text-foreground mb-8">Why Decker</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Decker Healthcare Group was founded on the belief that healthcare companies deserve a dedicated advisory partner with deep industry expertise. Our team brings decades of combined experience in healthcare M&A and capital markets transactions.
            </p>
            <p>
              We are committed to providing our clients with unbiased, conflict-free advice. Our independence allows us to focus solely on achieving the best outcomes for our clients, whether they are exploring a sale, acquisition, recapitalization, or other strategic alternatives.
            </p>
            <p>
              Our approach is relationship-driven. We invest the time to understand each client's business, culture, and strategic objectives before recommending a course of action. This deep understanding enables us to identify the most suitable counterparties and structure transactions that maximize value.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Leadership</p>
          <h2 className="heading-lg text-foreground mb-12">Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="text-left bg-background border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-[var(--card-hover-shadow)] transition-all duration-300 group"
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSelectedMember(null)} />
          <div className="relative bg-card border border-border rounded-lg max-w-lg w-full p-8">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-primary">
                {selectedMember.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{selectedMember.name}</h3>
            <p className="text-sm text-primary font-semibold mb-4">{selectedMember.title}</p>
            <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
