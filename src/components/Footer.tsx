import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/decker-logo.png" alt="Decker Healthcare Group" className="h-10 brightness-0 invert mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Corporate finance advisory firm specializing in healthcare mergers, acquisitions, and capital markets transactions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Track Record", href: "/track-record" },
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

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#ma-advisory" className="text-sm text-muted-foreground hover:text-primary transition-colors">M&A Advisory</Link></li>
              <li><Link to="/services#capital-markets" className="text-sm text-muted-foreground hover:text-primary transition-colors">Capital Markets</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">info@helioshca.com</p>
            <Link to="/contact" className="inline-block mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Helios Healthcare Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
