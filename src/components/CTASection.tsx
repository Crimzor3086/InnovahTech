import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="contact" className="relative">
      <div className="bg-dark-section">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Build the Future with{" "}
              <span className="text-accent">VAHNOVA Technologies</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/70">
              Partner with us to design and deploy intelligent digital systems
              that drive innovation and efficiency.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-[var(--shadow-lg)]"
              >
                Start Your Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
