import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "large";
}

const HeroSection = ({ title, subtitle, children, className, size = "default" }: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center text-center overflow-hidden",
        size === "large" ? "min-h-[80vh]" : "min-h-[50vh]",
        className
      )}
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="heading-xl text-foreground mb-6">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
