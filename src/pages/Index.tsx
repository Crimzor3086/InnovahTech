import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})`, backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground mb-6 opacity-0 animate-fade-up">
            Build, Secure, and Automate<br />Your Business
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up-delay-1">
            Web, Mobile, Cybersecurity, and AI Solutions — crafted by Vahnova Technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up-delay-2">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button variant="ctaOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Get a Free Quote Today
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10">
            Let's discuss how we can help transform your business with cutting-edge technology.
          </p>
          <Button variant="ctaOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
