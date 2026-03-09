import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "Software Engineering", href: "/services" },
    { label: "Blockchain & Web3", href: "/services" },
    { label: "AI & Data Systems", href: "/services" },
    { label: "Cloud & Infrastructure", href: "/services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/insights" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading text-sm font-black text-primary-foreground">V</span>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">VAHNOVA</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Engineering intelligent digital systems for the modern enterprise.
              Scalable platforms, automation, and advanced infrastructure.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-foreground">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} VAHNOVA Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
