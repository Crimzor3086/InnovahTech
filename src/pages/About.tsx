import { Eye, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: Eye, title: "Vision-Driven", desc: "Strategic approach to every project" },
  { icon: Lightbulb, title: "Innovation-First", desc: "Cutting-edge technology adoption" },
  { icon: ShieldCheck, title: "Secure by Design", desc: "Enterprise-grade security standards" },
  { icon: TrendingUp, title: "Scalable Systems", desc: "Built to grow with your business" },
];

const About = () => {
  const section = useScrollAnimation();

  return (
    <div>
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 opacity-0 animate-fade-up">
            About Us
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto opacity-0 animate-fade-up-delay-1">
            Transforming ideas into scalable digital solutions
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-6">About VAHNOVA Technologies</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            VAHNOVA Technologies is a modern digital engineering company focused on delivering intelligent, scalable, and high-impact technology systems. We specialize in custom software development, enterprise digital platforms, data intelligence systems, and emerging technologies such as blockchain infrastructure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our goal is to transform complex ideas into practical, secure, and scalable digital solutions that drive real business outcomes.
          </p>
        </div>
      </section>

      <section
        ref={section.ref}
        className={`py-24 bg-muted transition-all duration-700 ${section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl border border-border p-8 card-hover group text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary transition-colors duration-300">
                  <v.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
