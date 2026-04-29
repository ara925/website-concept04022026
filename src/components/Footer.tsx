import { Link } from "react-router-dom";
import deckerLogo from "@/assets/decker-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="glow-line" />

      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <img
              src={deckerLogo}
              alt="Decker Healthcare Group"
              className="h-10 w-auto brightness-0 invert mb-6"
              style={{ minWidth: '180px' }}
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seniors housing brokerage and capital markets advisory. Assisted living, skilled nursing, memory care, and independent living communities. Nationwide.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Market Trends", href: "/market-trends" },
                { label: "Team", href: "/team" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#seniors-housing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Seniors Housing Brokerage
                </Link>
              </li>
              <li>
                <Link to="/services#capital-markets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Capital Markets
                </Link>
              </li>
              <li>
                <Link to="/buyer-intake" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Buyer Registration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-6">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">info@deckerhealthcare.com</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
            >
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Logo watermark */}
        <div className="mt-12 flex justify-center opacity-10">
          <img src={deckerLogo} alt="" className="h-20 w-auto brightness-0 invert" />
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © 2026 Decker Healthcare Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
