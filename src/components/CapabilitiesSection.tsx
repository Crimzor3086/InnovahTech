import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Code, Blocks, Headphones } from "lucide-react";

const capabilities = [
  {
    icon: Network,
    title: "Internet & Networking",
    description:
      "Enterprise-grade fiber, wireless networks, LAN/WAN design, and secure ISP solutions with 24/7 monitoring.",
    features: ["Fiber Deployment", "Campus Networks", "ISP Solutions"],
  },
  {
    icon: Code,
    title: "Software & SaaS Engineering",
    description:
      "Custom web and mobile applications, SaaS platforms, admin dashboards, and seamless API integrations.",
    features: ["Custom Apps", "SaaS Platforms", "API Development"],
  },
  {
    icon: Blocks,
    title: "Blockchain, Web3 & AI",
    description:
      "DeFi protocols, smart contracts, AI trading engines, and decentralized governance systems.",
    features: ["DeFi Platforms", "Smart Contracts", "AI Systems"],
  },
  {
    icon: Headphones,
    title: "Consulting & Managed IT",
    description:
      "Digital transformation strategy, cloud consulting, and comprehensive managed IT support.",
    features: ["IT Strategy", "Cloud Solutions", "24/7 Support"],
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Core Capabilities
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive Technology <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From infrastructure to intelligent systems, we deliver end-to-end
            technology solutions that drive business transformation.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="capability-card group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {capability.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {capability.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/80 text-secondary-foreground border border-border/50"
                  >
                    {feature}
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

export default CapabilitiesSection;
