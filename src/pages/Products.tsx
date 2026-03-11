import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardList, MessageSquareLock, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    icon: ClipboardList,
    name: "TaskMaster Pro",
    desc: "A powerful project management tool designed for teams of all sizes. Track tasks, deadlines, and progress effortlessly.",
  },
  {
    icon: MessageSquareLock,
    name: "SecureChat",
    desc: "End-to-end encrypted messaging application for businesses that prioritize privacy and data security.",
  },
  {
    icon: BarChart3,
    name: "AnalyticsHub",
    desc: "AI-powered analytics platform that transforms your raw data into actionable business insights.",
  },
];

const Products = () => {
  const section = useScrollAnimation();

  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 opacity-0 animate-fade-up">
            Our Products
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 opacity-0 animate-fade-up-delay-1">
            Innovative Solutions for Your Business
          </p>
          <div className="opacity-0 animate-fade-up-delay-2">
            <Button variant="ctaOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="#products">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section
        id="products"
        ref={section.ref}
        className={`py-24 bg-background transition-all duration-700 ${section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-xl border border-border p-8 card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors duration-300">
                  <product.icon size={28} className="text-primary group-hover:text-secondary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.desc}</p>
                <Button variant="ctaOutline" size="sm" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-secondary-foreground/80 max-w-xl mx-auto mb-10">
            We build bespoke products tailored to your unique business requirements.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
