import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      {/* Dark hero background */}
      <div className="bg-dark-section">
        <div className="container mx-auto px-6 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Digital Engineering for the Modern Enterprise
            </div>

            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl md:text-7xl">
              Engineering Intelligent{" "}
              <span className="text-accent">Digital Systems</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
              VAHNOVA Technologies builds scalable software platforms, automation
              systems, and advanced digital infrastructure that enable
              organizations to innovate, automate operations, and compete in the
              modern digital economy.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-[var(--shadow-lg)]"
              >
                Start a Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group flex items-center gap-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Explore Solutions
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
