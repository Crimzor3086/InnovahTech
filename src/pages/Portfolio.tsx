import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  { name: "Project Alpha", desc: "Enterprise resource platform", category: "Web Development" },
  { name: "Project Beta", desc: "E-commerce mobile app", category: "Mobile Apps" },
  { name: "Project Gamma", desc: "AI-powered analytics dashboard", category: "Data & AI" },
  { name: "Project Delta", desc: "Security audit & infrastructure", category: "Cybersecurity" },
  { name: "Project Epsilon", desc: "Custom CRM platform", category: "Web Development" },
  { name: "Project Zeta", desc: "IoT monitoring system", category: "Data & AI" },
];

const Portfolio = () => {
  const section = useScrollAnimation();

  return (
    <div>
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 opacity-0 animate-fade-up">
            Our Portfolio
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto opacity-0 animate-fade-up-delay-1">
            A showcase of our latest projects and innovations.
          </p>
        </div>
      </section>

      <section
        ref={section.ref}
        className={`py-24 bg-background transition-all duration-700 ${section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative rounded-xl overflow-hidden bg-card border border-border aspect-[4/3] card-hover cursor-pointer"
              >
                <div className="absolute inset-0 gradient-primary opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-6">
                  <span className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-2">{project.category}</span>
                  <h3 className="font-heading font-bold text-xl mb-2">{project.name}</h3>
                  <p className="text-primary-foreground/80 text-sm">{project.desc}</p>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Have a project in mind?</h2>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
