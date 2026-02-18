import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Network, Code, Blocks, Headphones } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const capabilities = [
  // 🌐 Web Development
  {
    icon: Code,
    title: "🌐 Starter Website (Personal / Small Business)",
    description: "Web Development",
    features: ["1–3 pages", "Mobile responsive", "Contact form"],
    priceUSD: "$80 – $120",
    priceKES: "12,000 – 18,000",
    comingSoon: false,
  },
  {
    icon: Code,
    title: "🌐 Business Website",
    description: "Web Development",
    features: ["5–7 pages", "Admin panel", "SEO basics"],
    priceUSD: "$180 – $300",
    priceKES: "27,000 – 45,000",
    comingSoon: false,
  },
  {
    icon: Code,
    title: "🌐 Custom Web Systems",
    description: "Portals, dashboards, SaaS",
    features: ["Custom portals", "Dashboards", "SaaS"],
    priceUSD: "$500 – $1,200",
    priceKES: "75,000 – 180,000",
    comingSoon: false,
  },

  // 📱 Mobile App Development
  {
    icon: Blocks,
    title: "📱 Basic Mobile App",
    description: "Android or iOS with core features",
    features: ["Android or iOS", "Core features"],
    priceUSD: "$600 – $1,000",
    priceKES: "90,000 – 150,000",
    comingSoon: false,
  },
  {
    icon: Blocks,
    title: "📱 Advanced Mobile App",
    description: "Payments, authentication, admin dashboard",
    features: ["Payments", "Authentication", "Admin dashboard"],
    priceUSD: "$1,500 – $3,000",
    priceKES: "225,000 – 450,000",
    comingSoon: false,
  },

  // 🔐 Cybersecurity
  {
    icon: Network,
    title: "🔐 Basic Security Check",
    description: "Cybersecurity",
    features: ["Malware scan", "Configuration review"],
    priceUSD: "$80 – $150",
    priceKES: "12,000 – 22,500",
    comingSoon: false,
  },
  {
    icon: Network,
    title: "🔐 Security Hardening & Pentest",
    description: "Cybersecurity",
    features: ["Vulnerability testing"],
    priceUSD: "$300 – $800",
    priceKES: "45,000 – 120,000",
    comingSoon: false,
  },

  // 📊 Data & AI Solutions
  {
    icon: Headphones,
    title: "📊 Data Dashboard Setup",
    description: "Reports & analytics",
    features: ["Reports", "Analytics"],
    priceUSD: "$200 – $400",
    priceKES: "30,000 – 60,000",
    comingSoon: false,
  },
  {
    icon: Headphones,
    title: "📊 AI Automation (Chatbots, Tools)",
    description: "Customer support bots and internal tools",
    features: ["Chatbots", "Automation tools"],
    priceUSD: "$400 – $1,000",
    priceKES: "60,000 – 150,000",
    comingSoon: false,
  },
];

const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  return (
    <section id="services" className="section-padding relative overflow-hidden scroll-mt-24">
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
        className="absolute inset-0 grid-pattern opacity-15 hidden sm:block"
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
        {[...Array(isMobile ? 4 : 6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${isMobile ? 70 + Math.random() * 90 : 80 + Math.random() * 150}px`,
              height: `${isMobile ? 70 + Math.random() * 90 : 80 + Math.random() * 150}px`,
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
      {!isMobile && (
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
      )}

      {/* Interactive Cursor Glow Effect */}
      {!isMobile && (
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
      )}

      {/* Animated Connection Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
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
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Core Capabilities
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Comprehensive Technology <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            From infrastructure to intelligent systems, we deliver end-to-end
            technology solutions that drive business transformation.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors ${capability.comingSoon ? 'opacity-60' : ''}`}>
                <capability.icon className={`w-6 h-6 sm:w-7 sm:h-7 text-primary ${capability.comingSoon ? 'opacity-60' : ''}`} />
              </div>

              {/* Title */}
              <h3 className={`font-heading text-xl sm:text-2xl font-bold mb-2 sm:mb-3 leading-tight break-words group-hover:text-primary transition-colors ${capability.comingSoon ? 'opacity-75' : ''}`}>
                {capability.title}
              </h3>

              {/* Description */}
              <p className={`text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed ${capability.comingSoon ? 'opacity-70' : ''}`}>
                {capability.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {capability.features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-3 py-1 text-xs sm:text-sm rounded-full bg-secondary/80 text-secondary-foreground border border-border/50 ${capability.comingSoon ? 'opacity-60' : ''}`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              {('priceUSD' in capability || 'priceKES' in capability) && (
                <div className={`mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-border/50 ${capability.comingSoon ? 'opacity-60' : ''}`}>
                  {('priceUSD' in capability) && (
                    <p className="text-sm font-medium">
                      USD: <span className="text-primary">{(capability as any).priceUSD}</span>
                    </p>
                  )}
                  {('priceKES' in capability) && (
                    <p className="text-sm font-medium">
                      KES: <span className="text-primary">{(capability as any).priceKES}</span>
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
