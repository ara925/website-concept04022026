import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "M&A Advisory", href: "/services#ma-advisory" },
      { label: "Capital Markets Advisory", href: "/services#capital-markets" },
    ],
  },
  { label: "Track Record", href: "/track-record" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src="/decker-logo.png" alt="Decker Healthcare Group" className="h-10 brightness-0 invert" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(link.label)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                to={link.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider transition-colors flex items-center gap-1",
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.children && dropdownOpen === link.label && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-md py-2 min-w-[220px] shadow-lg">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block text-sm font-semibold uppercase tracking-wider py-2",
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-4 py-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
