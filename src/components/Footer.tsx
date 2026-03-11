import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-foreground text-background"
      style={{ backgroundImage: "url(/footer.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-background/10 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Vahnova Tech logo"
                  className="w-9 h-9 object-cover"
                  loading="lazy"
                />
              </div>
              <span className="font-heading font-bold text-lg">VAHNOVA TECHNOLOGIES</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Building secure, scalable, and intelligent solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Portfolio", "Products", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-background/70 hover:text-secondary text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {["Web Development", "Mobile Apps", "Cybersecurity", "Data & AI"].map((s) => (
                <span key={s} className="text-background/70 text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                info@vahnova.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                +254 700 000 000
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-secondary" />
                Nairobi, Kenya
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {["Twitter", "LinkedIn", "GitHub", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-secondary hover:text-secondary-foreground transition-colors text-xs font-bold"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          © {new Date().getFullYear()} Vahnova Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
