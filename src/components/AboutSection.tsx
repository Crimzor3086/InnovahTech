import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Cpu } from "lucide-react";

const highlights = [
  { icon: Target, label: "Vision-Driven", desc: "Strategic approach to every project" },
  { icon: Lightbulb, label: "Innovation-First", desc: "Cutting-edge technology adoption" },
  { icon: Shield, label: "Secure by Design", desc: "Enterprise-grade security standards" },
  { icon: Cpu, label: "Scalable Systems", desc: "Built to grow with your business" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              About VAHNOVA Technologies
            </h2>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">
              VAHNOVA Technologies is a modern digital engineering company
              focused on delivering intelligent, scalable, and high-impact
              technology systems. We specialize in custom software development,
              enterprise digital platforms, data intelligence systems, and
              emerging technologies such as blockchain infrastructure.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our goal is to transform complex ideas into practical, secure, and
              scalable digital solutions that drive real business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-sm)] transition-all hover:shadow-[var(--shadow-md)]"
              >
                <item.icon className="mb-3 text-accent" size={28} />
                <p className="font-heading text-sm font-bold text-foreground">{item.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
