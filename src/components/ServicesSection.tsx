import { motion } from "framer-motion";
import { Code2, Link2, BrainCircuit, Cloud } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Engineering",
    items: ["Custom web platforms", "Enterprise systems", "API infrastructure", "SaaS applications"],
  },
  {
    icon: Link2,
    title: "Blockchain & Web3 Systems",
    items: ["Smart contract infrastructure", "Decentralized identity systems", "Secure digital ledgers", "Blockchain integration"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Systems",
    items: ["Predictive analytics", "Automation algorithms", "Business intelligence platforms", "Data-driven decision tools"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    items: ["Cloud architecture", "DevOps pipelines", "Secure infrastructure deployment", "Scalable system environments"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Core Services
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            End-to-end digital engineering services designed for scale, performance, and long-term value.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/5 p-3">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
