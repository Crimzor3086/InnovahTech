import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "Cybersecurity", href: "/services" },
    { label: "Data & AI", href: "/services" },
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
    <footer
      className="relative mt-auto overflow-hidden border-t border-border py-2 sm:py-3"
      style={{ backgroundImage: "url('/footer.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(222_47%_8%_/_0.88),hsl(222_47%_8%_/_0.92))]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-1 flex items-center gap-1.5">
              <img src="/logo.png" alt="VAHNOVA logo" className="h-5 w-5 rounded object-cover sm:h-6 sm:w-6" />
              <span className="font-heading text-sm font-bold text-white drop-shadow-[0_1px_4px_hsl(222_47%_8%_/_0.95)] sm:text-base">VAHNOVA</span>
            </div>
            <p className="max-w-[16rem] text-xs leading-snug text-white drop-shadow-[0_1px_3px_hsl(222_47%_8%_/_0.9)] sm:text-sm">
              Engineering intelligent digital systems for the modern enterprise.
              Scalable platforms, automation, and advanced infrastructure.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-1 font-heading text-xs font-bold uppercase tracking-wide text-white drop-shadow-[0_1px_3px_hsl(222_47%_8%_/_0.9)] sm:text-sm">
                {category}
              </h4>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a href={link.href} className="text-xs text-white transition-colors hover:text-white/80 sm:text-sm">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} className="text-xs text-white transition-colors hover:text-white/80 sm:text-sm">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-2 border-t border-border pt-1.5">
          <p className="text-center text-[11px] text-white sm:text-xs">
            © {new Date().getFullYear()} VAHNOVA Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
