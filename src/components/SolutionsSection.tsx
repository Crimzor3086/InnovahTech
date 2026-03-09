import { motion } from "framer-motion";
import { Layers, Bot, BarChart3, Fingerprint } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Digital Platforms",
    description: "Full-stack web and mobile platforms engineered for performance, scalability, and exceptional user experience.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    icon: Bot,
    title: "Enterprise Automation",
    description: "Intelligent workflow automation systems that streamline operations and eliminate manual bottlenecks.",
    stack: ["Python", "TensorFlow", "Kubernetes", "REST APIs"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics Tools",
    description: "Advanced analytics and business intelligence dashboards that transform raw data into actionable insights.",
    stack: ["Python", "Apache Spark", "D3.js", "Cloud SQL"],
  },
  {
    icon: Fingerprint,
    title: "Blockchain Identity",
    description: "Decentralized identity and verification infrastructure built on secure blockchain protocols.",
    stack: ["Solidity", "Rust", "IPFS", "Zero-Knowledge Proofs"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Solutions</p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Technology Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Purpose-built systems designed to solve real-world challenges at enterprise scale.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/5 p-3">
                <sol.icon className="text-primary" size={24} />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-foreground">{sol.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{sol.description}</p>
              <div className="flex flex-wrap gap-2">
                {sol.stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
