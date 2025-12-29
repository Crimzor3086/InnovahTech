import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Globe, TrendingUp, Cpu, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: Shield,
    name: "SafeNest",
    tagline: "Inclusive DeFi Infrastructure",
    description:
      "A decentralized financial platform designed for accessibility, security, and seamless cross-border transactions.",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Globe,
    name: "Nexora",
    tagline: "Unified Digital Ecosystem",
    description:
      "An integrated platform connecting businesses, services, and users through a single intelligent interface.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: TrendingUp,
    name: "NovaCrypt",
    tagline: "AI Trading Intelligence",
    description:
      "Advanced algorithmic trading system powered by machine learning for optimal market performance.",
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    icon: Cpu,
    name: "AetherNode",
    tagline: "On-Chain AI Oracle",
    description:
      "Bridging real-world data with blockchain networks through secure, decentralized AI-powered oracles.",
    color: "from-amber-500/20 to-amber-500/5",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Innovation Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-6">
            Products & <span className="text-gradient">Platforms</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Proprietary solutions born from deep technical expertise and a
            commitment to solving real-world challenges.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card group"
            >
              {/* Gradient Top */}
              <div
                className={`h-2 bg-gradient-to-r ${product.color}`}
              />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold">
                        {product.name}
                      </h3>
                      <p className="text-sm text-primary">{product.tagline}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-primary/20">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Status Badge */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Active Development
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
