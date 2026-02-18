import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Puzzle, ShieldCheck, Handshake } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Founder image from public folder
const founderImage: string = "/founder.jpg";

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
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't just deliver and disappear. We grow with you, supporting your evolution over time.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imageError, setImageError] = useState(false);
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
    <section id="about" className="section-padding relative overflow-hidden scroll-mt-24">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.1),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,hsl(var(--primary)/0.08),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,hsl(var(--primary)/0.18),transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,hsl(var(--primary)/0.12),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
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
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Floating Orbs/Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 4 : 7)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${isMobile ? 80 + Math.random() * 100 : 90 + Math.random() * 160}px`,
              height: `${isMobile ? 80 + Math.random() * 100 : 90 + Math.random() * 160}px`,
              background: `radial-gradient(circle, hsl(var(--primary)/${0.1 + Math.random() * 0.18}), transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 140 - 70],
              y: [0, Math.random() * 140 - 70],
              scale: [1, 1.2 + Math.random() * 0.3, 1],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 11 + Math.random() * 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 9 : 18)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3.5}px`,
              height: `${2 + Math.random() * 3.5}px`,
              background: `hsl(var(--primary)/${0.3 + Math.random() * 0.4})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -90 - Math.random() * 160],
              x: [0, Math.random() * 90 - 45],
              opacity: [0, 0.9, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 11 + Math.random() * 13,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.35,
            }}
          />
        ))}
      </div>

      {/* Interactive Cursor Glow Effect */}
      {!isMobile && (
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-12"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)/0.35), transparent 70%)",
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-6">
          <defs>
            <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <motion.polygon
              key={`shape-${i}`}
              points={`${20 + (i % 3) * 30},${30 + Math.floor(i / 3) * 40} ${25 + (i % 3) * 30},${35 + Math.floor(i / 3) * 40} ${15 + (i % 3) * 30},${35 + Math.floor(i / 3) * 40}`}
              fill="url(#shapeGradient)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1.3, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Why InnoVah Tech
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Built for{" "}
              <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              We're not just another tech company. We're a team of engineers,
              strategists, and innovators committed to building technology that
              truly matters—systems that scale, adapt, and endure.
            </p>

            {/* Founder Info */}
            <div className="glass-card p-5 sm:p-6 inline-block w-full sm:w-auto">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {founderImage && !imageError ? (
                    <img
                      src={founderImage}
                      alt="David Barasa"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <span className="font-heading font-bold text-primary text-xl">
                      DB
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base">David Barasa</h4>
                  <p className="text-sm text-muted-foreground">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-5 sm:p-6 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg mb-2">
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
