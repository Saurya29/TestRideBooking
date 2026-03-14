"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const ref               = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y                 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity           = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[680px] flex items-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&auto=format&fit=crop"
          alt="Royal Enfield motorcycle on open road"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-re-black via-re-black/80 to-re-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-re-black via-transparent to-transparent" />
      </motion.div>

      {/* Animated red accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-re-red to-transparent z-10"
        style={{ width: "60%", transformOrigin: "left" }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-20"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-10 bg-re-gold" />
          <span className="text-re-gold text-xs font-body font-semibold tracking-[0.35em] uppercase">
            Product Strategy Case Study
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="font-display font-black text-re-cream leading-[0.92] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
        >
          Improving
          <br />
          <span className="text-re-red italic">Test Ride</span>
          <br />
          Conversion
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-re-cream/60 text-base sm:text-lg font-body max-w-md mb-10 leading-relaxed"
        >
          A product strategy case study on converting Royal Enfield website
          visitors into test ride bookings at dealerships.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-3 bg-re-red hover:bg-re-red2 text-white font-body font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Book a Test Ride</span>
            <Zap size={14} className="relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </a>
          <a
            href="#problem"
            className="inline-flex items-center gap-3 border border-re-cream/20 hover:border-re-gold text-re-cream/70 hover:text-re-gold font-body font-medium text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
          >
            View Strategy
          </a>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-8 border-t border-re-cream/10 pt-8"
        >
          {[
            { val: "2.1M+", lbl: "Monthly Visitors" },
            { val: "<3%",   lbl: "Conversion Rate"  },
            { val: "68%",   lbl: "Form Drop-off"    },
          ].map((stat) => (
            <div key={stat.lbl} className="flex flex-col gap-1">
              <span className="font-display font-bold text-re-gold text-2xl sm:text-3xl">
                {stat.val}
              </span>
              <span className="text-re-cream/40 text-xs font-body tracking-wider uppercase">
                {stat.lbl}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-re-cream/30 text-[10px] tracking-[0.3em] uppercase font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-re-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}
