import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-1">
      <div
        className="bg-dark-section relative"
        style={{ backgroundImage: "url('/mainpageb.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[hsl(222_47%_8%_/_0.78)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,hsl(28_96%_58%_/_0.2),transparent_26%),radial-gradient(circle_at_84%_70%,hsl(28_96%_58%_/_0.16),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,hsl(0_0%_100%_/_0.05)_40%,transparent_75%)]" />
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-45" aria-hidden="true">
          <line x1="8%" y1="22%" x2="34%" y2="38%" stroke="hsl(0 0% 100% / 0.25)" strokeWidth="1" />
          <line x1="34%" y1="38%" x2="52%" y2="20%" stroke="hsl(0 0% 100% / 0.2)" strokeWidth="1" />
          <line x1="52%" y1="20%" x2="77%" y2="32%" stroke="hsl(0 0% 100% / 0.23)" strokeWidth="1" />
          <line x1="24%" y1="68%" x2="45%" y2="52%" stroke="hsl(0 0% 100% / 0.22)" strokeWidth="1" />
          <line x1="45%" y1="52%" x2="68%" y2="70%" stroke="hsl(0 0% 100% / 0.18)" strokeWidth="1" />
          <line x1="68%" y1="70%" x2="88%" y2="54%" stroke="hsl(0 0% 100% / 0.2)" strokeWidth="1" />
        </svg>
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={`node-${i}`}
            className="pointer-events-none absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_hsl(28_96%_58%_/_0.95)]"
            style={{
              left: `${10 + (i % 6) * 14}%`,
              top: `${22 + Math.floor(i / 6) * 34}%`,
            }}
            animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.4, 1] }}
            transition={{ duration: 2.4 + i * 0.08, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="container mx-auto px-6 pt-4 pb-16 md:pt-7 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 shadow-[0_0_28px_hsl(28_96%_58%_/_0.18)]"><img src="/logo.png" alt="VAHNOVA logo" className="h-11 w-11 rounded-lg object-cover" /></div>

            <h1 className="mb-3 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-[#d6c9aa] drop-shadow-[0_2px_10px_hsl(222_47%_8%_/_0.6)] sm:text-4xl md:text-5xl">
              VAHNOVA TECHNOLOGIES
            </h1>

            <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-[#d4c9b1] drop-shadow-[0_1px_4px_hsl(222_47%_8%_/_0.9)] md:text-xl">
              Where Innovation Connects to Life.
            </p>

            <p className="mx-auto mb-7 max-w-2xl text-sm leading-relaxed text-[#cbbfa9] drop-shadow-[0_1px_4px_hsl(222_47%_8%_/_0.9)] md:text-base">
              VAHNOVA Technologies is a digital engineering company that builds scalable software platforms, automation tools, and enterprise technology systems. It combines innovation and strong engineering practices to deliver reliable digital solutions that help organizations operate efficiently and create long-term value.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-[#ded4c1] transition-all hover:shadow-[var(--shadow-lg)]"
              >
                Start a Project
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group flex items-center gap-1.5 rounded-lg border border-[#f6d28b]/55 bg-[#f6d28b]/10 px-5 py-2.5 text-xs font-semibold text-[#d6c9aa] transition-all hover:bg-[#f6d28b]/18"
              >
                Explore Solutions
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
