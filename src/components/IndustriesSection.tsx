import { motion } from "framer-motion";
import { Building2, Landmark, Leaf, Briefcase, Globe } from "lucide-react";

const industries = [
  { icon: Building2, title: "Real Estate Technology", description: "Digital platforms for property management, smart buildings, and real estate marketplace solutions." },
  { icon: Landmark, title: "Financial Technology", description: "Secure payment systems, digital banking infrastructure, and regulatory compliance platforms." },
  { icon: Leaf, title: "Agriculture Technology", description: "Precision farming systems, supply chain tracking, and data-driven agricultural analytics." },
  { icon: Briefcase, title: "Enterprise Systems", description: "Comprehensive business management platforms, ERP integrations, and workflow automation." },
  { icon: Globe, title: "Government Infrastructure", description: "Citizen-facing digital services, secure data management, and public sector digital transformation." },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 md:py-32" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Industries</p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">Industries We Serve</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-3 inline-flex rounded-lg bg-primary/5 p-2.5">
                <ind.icon className="text-primary" size={22} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{ind.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{ind.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
