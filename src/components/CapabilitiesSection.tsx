import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Network, Code, Blocks, Headphones } from "lucide-react";

const capabilities = [
  {
    icon: Code,
    title: "Software & SaaS Engineering",
    description:
      "Custom web and mobile applications, SaaS platforms, admin dashboards, and seamless API integrations.",
    features: ["Custom Apps", "SaaS Platforms", "API Development"],
    comingSoon: false,
  },
  {
    icon: Blocks,
    title: "Blockchain, Web3 & AI",
    description:
      "DeFi protocols, smart contracts, AI trading engines, and decentralized governance systems.",
    features: ["DeFi Platforms", "Smart Contracts", "AI Systems"],
    comingSoon: false,
  },
  {
    icon: Headphones,
    title: "Consulting & Managed IT",
    description:
      "Digital transformation strategy, cloud consulting, and comprehensive managed IT support.",
    features: ["IT Strategy", "Cloud Solutions", "24/7 Support"],
    comingSoon: false,
  },
  {
    icon: Network,
    title: "Internet & Networking",
    description:
      "Enterprise-grade fiber, wireless networks, LAN/WAN design, and secure ISP solutions with 24/7 monitoring.",
    features: ["Fiber Deployment", "Campus Networks", "ISP Solutions"],
    comingSoon: true,
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.15),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--primary)/0.12),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 grid-pattern opacity-15"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Floating Orbs/Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${80 + Math.random() * 150}px`,
              height: `${80 + Math.random() * 150}px`,
              background: `radial-gradient(circle, hsl(var(--primary)/${0.08 + Math.random() * 0.15}), transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 150 - 75],
              y: [0, Math.random() * 150 - 75],
              scale: [1, 1.15 + Math.random() * 0.25, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${1.5 + Math.random() * 3}px`,
              height: `${1.5 + Math.random() * 3}px`,
              background: `hsl(var(--primary)/${0.25 + Math.random() * 0.35})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80 - Math.random() * 150],
              x: [0, Math.random() * 80 - 40],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Interactive Cursor Glow Effect */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)/0.3), transparent 70%)",
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Animated Connection Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-8">
          <defs>
            <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={`${15 + (i % 4) * 25}%`}
              cy={`${20 + Math.floor(i / 4) * 30}%`}
              r="2"
              fill="url(#dotGradient)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      </div>

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
              className={`capability-card group relative ${capability.comingSoon ? 'opacity-75' : ''}`}
            >
              {/* Coming Soon Badge */}
              {capability.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ${capability.comingSoon ? 'opacity-60' : ''}`}>
                <capability.icon className={`w-7 h-7 text-primary ${capability.comingSoon ? 'opacity-60' : ''}`} />
              </div>

              {/* Title */}
              <h3 className={`font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors ${capability.comingSoon ? 'opacity-75' : ''}`}>
                {capability.title}
              </h3>

              {/* Description */}
              <p className={`text-muted-foreground mb-6 leading-relaxed ${capability.comingSoon ? 'opacity-70' : ''}`}>
                {capability.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {capability.features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-3 py-1 text-sm rounded-full bg-secondary/80 text-secondary-foreground border border-border/50 ${capability.comingSoon ? 'opacity-60' : ''}`}
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
