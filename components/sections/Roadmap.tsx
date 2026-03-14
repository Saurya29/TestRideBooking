"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Box, MapPin, Gift, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const months = [
  {
    month:   "Month 1",
    theme:   "Quick Wins",
    label:   "Ship fast, prove ROI",
    color:   "#C41E3A",
    items: [
      {
        icon:    Zap,
        title:   "Persistent 1-Click CTA",
        impact:  "+45% CTR",
        ice:     648,
        effort:  "Low",
      },
      {
        icon:    MapPin,
        title:   "Live Dealer Slot Availability",
        impact:  "+28% form completion",
        ice:     448,
        effort:  "Medium",
      },
    ],
  },
  {
    month:   "Month 2",
    theme:   "Growth Layer",
    label:   "Personalise & incentivise",
    color:   "#C9A84C",
    items: [
      {
        icon:    Brain,
        title:   "AI Motorcycle Recommender",
        impact:  "+22% qualified leads",
        ice:     336,
        effort:  "Medium",
      },
      {
        icon:    Gift,
        title:   "Test Ride Reward Engine",
        impact:  "+18% bookings",
        ice:     392,
        effort:  "Medium",
      },
    ],
  },
  {
    month:   "Month 3",
    theme:   "Immersive Delight",
    label:   "Differentiate with tech",
    color:   "#38bdf8",
    items: [
      {
        icon:    Box,
        title:   "3D / AR Bike Explorer",
        impact:  "+20% intent signals",
        ice:     216,
        effort:  "High",
      },
    ],
  },
];

const effortColor: Record<string, string> = {
  Low:    "text-emerald-400",
  Medium: "text-re-gold",
  High:   "text-orange-400",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32 bg-re-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-re-gold/20 to-transparent" />

      {/* Diagonal background stripe */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C41E3A 0, #C41E3A 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <SectionHeader
            eyebrow="Launch Roadmap"
            title="3-Month"
            titleHighlight="Execution Plan"
            subtitle="Sequenced by ICE score — highest impact, lowest effort ships first. Full conversion uplift realised by Month 3."
          />
        </div>

        {/* Timeline connector */}
        <div className="hidden lg:flex items-center justify-center mb-12 px-4">
          <div className="flex-1 h-px bg-gradient-to-r from-re-red via-re-gold to-sky-400 opacity-30" />
        </div>

        {/* Month columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {months.map((m, mi) => (
            <motion.div
              key={m.month}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: mi * 0.15 }}
              className="relative flex flex-col"
            >
              {/* Month header */}
              <div
                className="relative mb-5 p-5 overflow-hidden"
                style={{ borderBottom: `2px solid ${m.color}` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{ background: `linear-gradient(135deg, ${m.color} 0%, transparent 60%)` }}
                />
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <p
                      className="text-xs font-body font-bold tracking-[0.3em] uppercase mb-1"
                      style={{ color: m.color }}
                    >
                      {m.month}
                    </p>
                    <h3 className="font-display font-bold text-re-cream text-2xl leading-tight">
                      {m.theme}
                    </h3>
                    <p className="text-re-cream/40 font-body text-xs mt-1">{m.label}</p>
                  </div>
                  {/* Step number */}
                  <div
                    className="w-10 h-10 flex items-center justify-center font-display font-black text-white text-lg shrink-0"
                    style={{ backgroundColor: m.color + "33", border: `1.5px solid ${m.color}50` }}
                  >
                    {mi + 1}
                  </div>
                </div>
              </div>

              {/* Feature cards */}
              <div className="flex flex-col gap-4 flex-1">
                {m.items.map((item, ii) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + mi * 0.15 + ii * 0.1 }}
                    className="group relative p-5 bg-re-panel border border-re-cream/5 hover:border-re-cream/10 transition-all duration-300 overflow-hidden"
                  >
                    {/* Side accent */}
                    <div
                      className="absolute left-0 top-0 w-0.5 h-full opacity-60"
                      style={{ backgroundColor: m.color }}
                    />

                    <div className="flex items-start gap-3 pl-3">
                      <div
                        className="shrink-0 w-9 h-9 flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: m.color + "18", border: `1px solid ${m.color}30` }}
                      >
                        <item.icon size={15} style={{ color: m.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body font-semibold text-re-cream text-sm leading-snug mb-2">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="font-display font-bold text-sm"
                            style={{ color: m.color }}
                          >
                            {item.impact}
                          </span>
                          <div className="flex items-center gap-3 text-[10px] font-body">
                            <span className="text-re-cream/30">ICE</span>
                            <span className="text-re-cream/60 font-semibold">{item.ice}</span>
                            <span className="text-re-cream/30">Effort</span>
                            <span className={`font-semibold ${effortColor[item.effort]}`}>
                              {item.effort}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Completion indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + mi * 0.15 }}
                className="mt-5 flex items-center gap-2"
              >
                <CheckCircle size={14} style={{ color: m.color }} />
                <span className="text-re-cream/30 text-xs font-body">
                  {m.items.length} feature{m.items.length > 1 ? "s" : ""} · End of {m.month}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Total expected lift banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 border border-re-red/20 bg-re-panel relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              background:
                "linear-gradient(90deg, #C41E3A 0%, #C9A84C 50%, #38bdf8 100%)",
            }}
          />
          <div className="relative z-10">
            <p className="text-re-red text-xs font-body font-semibold tracking-widest uppercase mb-1">
              90-Day Target
            </p>
            <p className="font-display font-bold text-re-cream text-2xl sm:text-3xl">
              2.8% → 6.5% conversion rate
            </p>
          </div>
          <div className="relative z-10 flex gap-8">
            {[
              { val: "+132%", lbl: "Conversion Lift" },
              { val: "97K",   lbl: "New Bookings/Mo" },
              { val: "3 Mo",  lbl: "Time to Value"   },
            ].map((s) => (
              <div key={s.lbl} className="text-center">
                <p className="font-display font-bold text-re-gold text-xl">{s.val}</p>
                <p className="text-re-cream/40 text-[10px] font-body tracking-wider uppercase mt-0.5">{s.lbl}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
