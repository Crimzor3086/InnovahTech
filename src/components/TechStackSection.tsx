import { motion } from "framer-motion";

const categories = [
  { label: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", techs: ["Node.js", "Python", "Rust", "GraphQL"] },
  { label: "Infrastructure", techs: ["Docker", "Kubernetes", "AWS", "Terraform"] },
  { label: "Blockchain", techs: ["Solidity", "Ethereum", "Web3.js", "IPFS"] },
];

const TechStackSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Technology</p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">Our Technology Stack</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-primary">
                {cat.label}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-sm)]"
                  >
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

export default TechStackSection;
