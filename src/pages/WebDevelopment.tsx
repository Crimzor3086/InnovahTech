import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const packages = [
  {
    name: "Starter Website",
    price: 500,
    desc: "Perfect for small businesses just getting started online.",
    features: ["1–3 pages", "Mobile responsive", "Contact form", "Basic SEO", "1 revision round"],
  },
  {
    name: "Business Website",
    price: 1500,
    popular: true,
    desc: "Ideal for growing businesses needing more functionality.",
    features: ["5–7 pages", "Admin panel", "SEO basics", "Blog integration", "3 revision rounds", "Analytics setup"],
  },
  {
    name: "Custom Web Systems",
    price: 5000,
    desc: "Enterprise-grade custom portals, dashboards, and SaaS solutions.",
    features: ["Custom portals & dashboards", "SaaS solutions", "API integrations", "Advanced security", "Unlimited revisions", "Ongoing support"],
  },
];

const WebDevelopment = () => {
  const { formatPrice } = useCurrency();
  const section = useScrollAnimation();

  return (
    <div>
      {/* Header */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 opacity-0 animate-fade-up">
            Web Development Services
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto opacity-0 animate-fade-up-delay-1">
            From landing pages to complex web applications — we build it all.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section
        ref={section.ref}
        className={`py-24 bg-background transition-all duration-700 ${section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-xl border p-8 card-hover ${pkg.popular ? "border-primary shadow-lg" : "border-border"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading font-bold text-xl mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.desc}</p>
                <div className="text-3xl font-heading font-bold mb-1">{formatPrice(pkg.price)}</div>
                <p className="text-muted-foreground text-xs mb-6">Starting from</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? "cta" : "ctaOutline"} className="w-full" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
