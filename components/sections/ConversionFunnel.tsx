"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stages = [
  { label: "Website Visit",     visitors: 2100000, pct: 100, drop: null,   color: "#C41E3A", badge: "TOP OF FUNNEL" },
  { label: "Model Discovery",   visitors: 1220000, pct: 58,  drop: "−42%", color: "#9B1E30", badge: null },
  { label: "Model Evaluation",  visitors:  588000, pct: 28,  drop: "−30%", color: "#731626", badge: null },
  { label: "Test Ride Page",    visitors:  189000, pct: 9,   drop: "−19%", color: "#4D0F1A", badge: "⚠ KEY DROP" },
  { label: "Booking Confirmed", visitors:   59000, pct: 2.8, drop: "−6%",  color: "#310A10", badge: "CRITICAL" },
];

function formatVisitors(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000)     return Math.round(n / 1_000) + "K";
  return n.toString();
}

export default function ConversionFunnel() {
  const maxPct = 100;

  return (
    <section id="funnel" className="relative py-24 sm:py-32 bg-re-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-re-red/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <SectionHeader
            eyebrow="Conversion Funnel"
            title="Where Visitors"
            titleHighlight="Drop Off"
            subtitle="From 2.1 million monthly visits to just 59,000 bookings — a 97.2% abandonment rate across the funnel."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Visual funnel */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-2">
              {stages.map((stage, i) => {
                const widthPct = (stage.pct / maxPct) * 100;
                const visitorStr = formatVisitors(stage.visitors);

                return (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="relative group"
                  >
                    {/* Drop label */}
                    {stage.drop && (
                      <div className="absolute -top-3 left-0 z-10">
                        <span className="text-re-gold/70 text-[10px] font-body font-semibold tracking-wider">
                          {stage.drop}
                        </span>
                      </div>
                    )}

                    {/* Bar + label row */}
                    <div className="flex items-center gap-4">
                      {/* Bar */}
                      <div className="flex-1 relative h-14 bg-re-panel overflow-hidden">
                        <motion.div
                          className="absolute left-0 top-0 h-full flex items-center"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${widthPct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.0, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                          style={{ backgroundColor: stage.color }}
                        >
                          {/* Shimmer */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, delay: 1 + i * 0.15, repeat: 0 }}
                          />
                        </motion.div>

                        {/* Stage name */}
                        <div className="absolute left-4 top-0 h-full flex items-center gap-2 z-10">
                          <span className="text-white/90 font-body font-semibold text-sm">
                            {stage.label}
                          </span>
                          {stage.badge && (
                            <span className={`text-[9px] font-body font-bold tracking-widest uppercase px-1.5 py-0.5 ${
                              stage.badge.includes("CRITICAL")
                                ? "bg-re-red text-white"
                                : stage.badge.includes("⚠")
                                ? "bg-orange-500/80 text-white"
                                : "bg-re-gold/20 text-re-gold"
                            }`}>
                              {stage.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Percentage + visitors */}
                      <div className="shrink-0 text-right w-28">
                        <p className="font-display font-bold text-re-gold text-xl leading-none">
                          {stage.pct}%
                        </p>
                        <p className="text-re-cream/40 font-body text-xs mt-0.5">
                          {visitorStr} visitors
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Key insight panel */}
          <div className="lg:w-72 shrink-0 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-re-panel border border-re-red/20 p-6"
            >
              <p className="text-re-red text-xs font-body font-semibold tracking-widest uppercase mb-3">
                Biggest Leak
              </p>
              <p className="font-display font-bold text-re-cream text-3xl mb-1">
                <AnimatedCounter to={42} suffix="%" />
              </p>
              <p className="text-re-cream/50 font-body text-sm">
                of visitors drop off between landing and reaching the Model Discovery section
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-re-panel border border-re-gold/15 p-6"
            >
              <p className="text-re-gold text-xs font-body font-semibold tracking-widest uppercase mb-3">
                Opportunity
              </p>
              <p className="font-display font-bold text-re-gold text-3xl mb-1">
                <AnimatedCounter to={97} suffix="K+" />
              </p>
              <p className="text-re-cream/50 font-body text-sm">
                additional bookings per month if we lift conversion from 2.8% to just 6.5%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-re-panel border border-orange-400/15 p-6"
            >
              <p className="text-orange-400 text-xs font-body font-semibold tracking-widest uppercase mb-3">
                Form Drop-off
              </p>
              <p className="font-display font-bold text-orange-400 text-3xl mb-1">
                <AnimatedCounter to={68} suffix="%" />
              </p>
              <p className="text-re-cream/50 font-body text-sm">
                of users who reach the booking form abandon it without completing
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
