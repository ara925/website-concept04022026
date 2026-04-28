import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { getTeamMemberBySlug } from "@/data/teamMembers";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import NotFound from "./NotFound";

const TeamMemberPage = () => {
  const { memberSlug } = useParams();
  const member = getTeamMemberBySlug(memberSlug);
  const scrollRef = useScrollAnimation();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  if (!member) {
    return <NotFound />;
  }

  const activePhoto = member.gallery[activePhotoIndex] ?? member.gallery[0];

  return (
    <div ref={scrollRef} className="bg-background">
      <section className="relative overflow-hidden border-b border-border/20 bg-[#050b15]">
        <div className="absolute inset-0">
          <img
            src={member.heroImage}
            alt={member.name}
            className="h-full w-full object-cover object-top opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,11,21,0.95)_12%,rgba(5,11,21,0.72)_52%,rgba(5,11,21,0.94)_100%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[68vh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 lg:px-12">
          <Link
            to="/team"
            className="mb-10 inline-flex w-fit items-center gap-2 border border-white/10 bg-white/[0.04] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Team
          </Link>
          <div className="accent-line mb-6" />
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-primary">Leadership Profile</p>
          <h1 className="max-w-4xl text-5xl font-black uppercase tracking-[-0.04em] text-foreground md:text-7xl">
            {member.name}
          </h1>
          <p className="mt-5 text-lg font-medium text-primary/90">{member.title}</p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">{member.summary}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,0.7fr)] lg:px-12">
          <div className="animate-on-scroll overflow-hidden border border-border/30 bg-[#08111f] shadow-[0_30px_90px_rgba(5,11,21,0.35)]">
            <div className="relative aspect-[4/5] overflow-hidden border-b border-white/10">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="h-full w-full object-cover object-top transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">{activePhoto.label}</p>
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto px-6 py-6">
              {member.gallery.map((photo, index) => (
                <button
                  key={photo.src}
                  onClick={() => setActivePhotoIndex(index)}
                  className={`h-24 w-20 shrink-0 overflow-hidden border transition-all duration-300 ${
                    index === activePhotoIndex
                      ? "border-primary shadow-[0_0_0_1px_rgba(59,130,246,0.35)]"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Show ${member.name} photo ${index + 1}`}
                >
                  <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover object-top" />
                </button>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll flex flex-col gap-6">
            <div className="border border-border/30 bg-card/60 p-7 md:p-8">
              <div className="accent-line mb-5" />
              <h2 className="text-2xl font-black uppercase tracking-[0.04em] text-foreground">Overview</h2>
              <div className="mt-6 space-y-5 text-sm leading-8 text-muted-foreground md:text-[15px]">
                {member.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {(member.email || member.phone) && (
              <div className="border border-border/30 bg-card/60 p-7 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">Contact</p>
                <div className="mt-6 grid gap-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{member.email}</span>
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{member.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMemberPage;
