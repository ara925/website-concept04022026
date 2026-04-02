import { cn } from "@/lib/utils";
import ParticleField from "./ParticleField";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "large";
  align?: "center" | "left";
  showParticles?: boolean;
  backgroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  children,
  className,
  size = "default",
  align = "left",
  showParticles = false,
  backgroundImage,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        size === "large" ? "min-h-[90vh]" : "min-h-[55vh]",
        className
      )}
      style={{ background: backgroundImage ? undefined : "var(--hero-gradient)" }}
    >
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(var(--background)) 0%, transparent 50%, hsl(var(--background)/0.8) 100%)" }} />
        </div>
      )}

      {/* Particle effect or subtle grid */}
      {showParticles ? (
        <ParticleField />
      ) : !backgroundImage ? (
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      ) : null}

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div
        className={cn(
          "relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12",
          size === "large" ? "pb-24 md:pb-32" : "pb-16 md:pb-20",
          align === "center" && "text-center"
        )}
      >
        <div className="accent-line mb-8" />
        <h1 className="heading-xl text-foreground mb-6 max-w-4xl">{title}</h1>
        {subtitle && (
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground leading-relaxed",
              align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
            )}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
