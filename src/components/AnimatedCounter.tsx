import { useCounterAnimation } from "@/hooks/use-counter-animation";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
  duration?: number;
  formatNumber?: boolean;
}

const AnimatedCounter = ({ end, prefix = "", suffix = "", decimals = 0, label, sublabel, duration = 2000, formatNumber = false }: AnimatedCounterProps) => {
  const { ref, display } = useCounterAnimation(end, duration, prefix, suffix, decimals, formatNumber);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 tabular-nums">
        {display}
      </p>
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
      {sublabel && (
        <p className="text-[10px] uppercase tracking-[0.1em] text-primary/70 mt-1">{sublabel}</p>
      )}
    </div>
  );
};

export default AnimatedCounter;
