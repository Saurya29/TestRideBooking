"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#problem",   label: "Problem"   },
  { href: "#segments",  label: "Segments"  },
  { href: "#funnel",    label: "Funnel"    },
  { href: "#solutions", label: "Solutions" },
  { href: "#roadmap",   label: "Roadmap"   },
  { href: "#metrics",   label: "Metrics"   },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-re-black/95 backdrop-blur-md border-b border-re-red/20 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-re-red flex items-center justify-center font-display font-black text-white text-sm tracking-wider">
              RE
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-re-cream text-sm font-semibold leading-tight tracking-widest uppercase">
                Royal Enfield
              </p>
              <p className="text-re-gold/60 text-[10px] tracking-[0.2em] uppercase">
                Case Study
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-re-cream/60 hover:text-re-gold text-xs tracking-widest uppercase font-body transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="hidden md:inline-flex items-center gap-2 bg-re-red hover:bg-re-red2 text-white text-xs font-body font-semibold tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
            >
              Book Test Ride
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-re-cream/80 hover:text-re-gold transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-re-dark border-b border-re-red/20 lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-re-cream/70 hover:text-re-gold text-sm tracking-widest uppercase font-body transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-re-red text-white text-xs font-semibold tracking-widest uppercase px-5 py-3"
              >
                Book Test Ride
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
