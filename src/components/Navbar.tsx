import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-3 py-2.5">
        <Link to="/" className="flex items-center gap-1.5">
          <img src="/logo.png" alt="VAHNOVA logo" className="h-5 w-5 rounded object-cover" />
          <span className="font-heading text-base font-bold tracking-tight text-white drop-shadow-[0_1px_4px_hsl(222_47%_8%_/_0.9)]">
            VAHNOVA
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs font-semibold text-white drop-shadow-[0_1px_3px_hsl(222_47%_8%_/_0.9)] transition-colors hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-all hover:shadow-[var(--shadow-md)]"
          >
            Start a Project
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="text-foreground lg:hidden">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col gap-1 px-3 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-1.5 text-[11px] font-medium text-white hover:bg-secondary hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-md bg-primary px-3 py-1.5 text-center text-[11px] font-semibold text-white"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
