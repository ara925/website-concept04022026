import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import deckerGroupPhoto from "@/assets/decker-group-photo.jpg";
import heroTrackRecord from "@/assets/hero-track-record.jpg";
import { teamMembers } from "@/data/teamMembers";

const Team = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Our Team"
        subtitle="A focused team of seniors housing professionals with direct transactional experience, deep market relationships, and a commitment to getting deals done right."
        backgroundImage={heroTrackRecord}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px]">
          <div className="animate-on-scroll mb-16">
            <div className="accent-line mb-6" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leadership</p>
            <h2 className="heading-lg text-foreground">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                to={`/${member.slug}`}
                className="animate-on-scroll group relative aspect-[3/4] overflow-hidden border border-border/20 bg-card/20 text-left transition-transform duration-500 hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover object-top brightness-[0.4] saturate-[0.9] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-[0.82]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-background/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary backdrop-blur-sm">
                  View Profile
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-1 text-base font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary/80">{member.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[48vh] min-h-[360px] overflow-hidden">
        <img
          src={deckerGroupPhoto}
          alt="Decker Healthcare Group team photo"
          className="h-full w-full object-cover object-center"
          loading="lazy"
          width={4072}
          height={2579}
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Decker Healthcare Group</p>
            <p className="text-2xl font-black uppercase tracking-wider text-foreground md:text-4xl">
              Trusted Advisors in Seniors Housing
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
