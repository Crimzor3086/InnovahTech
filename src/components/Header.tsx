import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Web Development", path: "/services/web-development" },
      { label: "Mobile Apps", path: "/services/mobile-apps" },
      { label: "Cybersecurity", path: "/services/cybersecurity" },
      { label: "Data & AI", path: "/services/data-ai" },
    ],
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { currency, toggleCurrency } = useCurrency();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Vahnova Tech logo"
              className="w-9 h-9 object-cover"
              loading="lazy"
            />
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Vahnova<span className="text-primary"> Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"}`}>
                  {link.label} <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-card rounded-lg shadow-xl border border-border py-2 animate-fade-up">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleCurrency}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            {currency === "USD" ? "USD 🇺🇸" : "KES 🇰🇪"}
          </button>
          <Button variant="cta" size="sm" className="hidden md:inline-flex" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-in-bottom">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground"
                  >
                    {link.label} <ChevronDown size={14} className={servicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button variant="cta" className="mt-2" asChild>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
