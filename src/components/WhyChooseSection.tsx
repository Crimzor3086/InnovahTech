import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Puzzle, ShieldCheck, Wrench, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Puzzle,
    title: "Custom-Built Solutions",
    description:
      "No templates, no shortcuts. Every solution is architected specifically for your unique business needs.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Security isn't an afterthought—it's built into every layer of our systems from day one.",
  },
  {
    icon: Wrench,
    title: "Deep Technical Ownership",
    description:
      "We own the entire stack. From infrastructure to application, we maintain full technical control.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't just deliver and disappear. We grow with you, supporting your evolution over time.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Why InnoVah Tech
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-6">
              Built for{" "}
              <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're not just another tech company. We're a team of engineers,
              strategists, and innovators committed to building technology that
              truly matters—systems that scale, adapt, and endure.
            </p>

            {/* Founder Info */}
            <div className="glass-card p-6 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary text-xl">
                    DB
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold">David Barasa</h4>
                  <p className="text-sm text-muted-foreground">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
