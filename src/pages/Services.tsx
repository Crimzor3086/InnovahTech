import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Shield, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const serviceCards = [
  { icon: Globe, title: "Web Development", desc: "Custom websites, portals, and SaaS platforms built for performance.", link: "/services/web-development" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS & Android.", link: "/services/mobile-apps" },
  { icon: Shield, title: "Cybersecurity", desc: "Protect your business with advanced security solutions and audits.", link: "/services/cybersecurity" },
  { icon: Brain, title: "Data & AI", desc: "Harness the power of data analytics and artificial intelligence.", link: "/services/data-ai" },
];

const Services = () => {
  const section = useScrollAnimation();

  return (
    <div>
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 opacity-0 animate-fade-up">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto opacity-0 animate-fade-up-delay-1">
            End-to-end technology solutions tailored for your business needs.
          </p>
        </div>
      </section>

      <section
        ref={section.ref}
        className={`py-24 bg-background transition-all duration-700 ${section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="group bg-card rounded-xl p-8 border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <card.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">Not sure what you need?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10">Let us help you find the perfect solution for your business.</p>
          <Button variant="ctaOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
