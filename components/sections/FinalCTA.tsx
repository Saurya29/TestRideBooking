"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Zap, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref               = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale             = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <section id="cta" ref={ref} className="relative h-[80vh] min-h-[540px] flex items-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <Image
          src="/bikes/6.jpg"
          alt="Royal Enfield on mountain road"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-re-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-re-black via-re-black/50 to-transparent" />
      </motion.div>

      {/* Diagonal red stripe */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          background:
            "linear-gradient(135deg, #C41E3A 0%, transparent 40%, transparent 60%, #C41E3A 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-re-gold" />
            <span className="text-re-gold text-xs font-body font-semibold tracking-[0.35em] uppercase">
              Next Step
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-display font-black text-re-cream leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
          >
            Ready to Experience
            <br />
            <span className="text-re-red italic">Royal Enfield?</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-re-cream/55 font-body text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
          >
            Book a test ride at your nearest Royal Enfield dealer.
            Feel the machine. Own the road.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group relative inline-flex items-center justify-center gap-3 bg-re-red hover:bg-re-red2 text-white font-body font-semibold text-sm tracking-widest uppercase px-10 py-5 transition-all duration-300 overflow-hidden">
              <Zap size={15} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Book Test Ride Now</span>
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
              />
            </button>

            <button className="inline-flex items-center justify-center gap-3 border border-re-cream/25 hover:border-re-gold text-re-cream/70 hover:text-re-gold font-body font-medium text-sm tracking-widest uppercase px-10 py-5 transition-all duration-300">
              Find Nearest Dealer
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-re-black to-transparent z-10" />
    </section>
  );
}
