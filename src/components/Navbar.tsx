import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import deckerLogo from "@/assets/decker-logo.png";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Seniors Housing Brokerage", href: "/services#seniors-housing" },
      { label: "Capital Markets Advisory", href: "/services#capital-markets" },
    ],
  },
  { label: "Market Trends", href: "/market-trends" },
  { label: "Team", href: "/team" },
  { label: "Buyer Registration", href: "/buyer-intake" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setDropdownOpen(null);

    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (location.pathname === path) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate(href);
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "nav-glass border-b border-border/30 shadow-lg shadow-background/50"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img
            src={deckerLogo}
            alt="Decker Healthcare Group"
            className="h-10 w-auto brightness-0 invert"
            style={{ minWidth: '180px' }}
          />
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
                  "nav-link-hover text-[13px] font-medium tracking-wider transition-colors flex items-center gap-1.5 py-2",
                  location.pathname === link.href
                    ? "text-foreground active"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3 opacity-50" />}
              </Link>
              {link.children && dropdownOpen === link.label && (
                <div className="absolute top-full left-0 mt-1 bg-card/95 backdrop-blur-xl border border-border/50 rounded-lg py-2 min-w-[280px] shadow-2xl shadow-background/50 animate-fade-in">
                  {link.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handleNavClick(child.href)}
                      className="block w-full text-left px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                    >
                      {child.label}
                    </button>
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
        <div className="md:hidden nav-glass border-t border-border/30 animate-fade-in">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block text-sm font-medium tracking-wider py-3 transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <button
                    key={child.label}
                    onClick={() => handleNavClick(child.href)}
                    className="block w-full text-left pl-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {child.label}
                  </button>
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
