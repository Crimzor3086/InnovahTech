import { motion } from "framer-motion";
import { Rocket, Scaling, ShieldCheck, Wrench } from "lucide-react";

const pillars = [
  { icon: Rocket, title: "Innovation-Driven Engineering", description: "We leverage cutting-edge technologies and methodologies to build solutions that push boundaries." },
  { icon: Scaling, title: "Scalable Architecture", description: "Every system we design is built to handle growth — from startup to enterprise scale." },
  { icon: ShieldCheck, title: "Secure System Design", description: "Security is embedded into every layer of our engineering process, not bolted on as an afterthought." },
  { icon: Wrench, title: "Practical Solutions", description: "We focus on real-world applicability, delivering systems that solve actual business problems." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Why Us</p>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">Why Choose VAHNOVA</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/5 p-4">
                <p.icon className="text-primary" size={28} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
