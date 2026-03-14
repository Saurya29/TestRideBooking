"use client";

import { motion } from "framer-motion";
import { EyeOff, FileText, HelpCircle, MapPinOff, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const hypotheses = [
  {
    id:      "H1",
    icon:    EyeOff,
    title:   "CTA Visibility Gap",
    desc:    '"Book Test Ride" is buried below the fold on mobile. Users scroll through specs and never encounter the primary conversion action.',
    impact:  "HIGH",
    validate:"Heatmap analysis / Scroll depth tracking",
    color:   "#C41E3A",
  },
  {
    id:      "H2",
    icon:    FileText,
    title:   "Booking Form Friction",
    desc:    "The 8-field form requires manual dealer selection with no autofill. 68% of users abandon mid-form — a classic UX failure.",
    impact:  "HIGH",
    validate:"Funnel drop-off analytics / Form analytics",
    color:   "#C41E3A",
  },
  {
    id:      "H3",
    icon:    HelpCircle,
    title:   "Model Decision Paralysis",
    desc:    "With 20+ models and no smart recommendation engine, users feel overwhelmed and delay their test ride booking indefinitely.",
    impact:  "MEDIUM",
    validate:"Session recordings / User interviews",
    color:   "#E67E22",
  },
  {
    id:      "H4",
    icon:    MapPinOff,
    title:   "Dealer Availability Opacity",
    desc:    "No real-time slot or dealer availability is shown. Users fear their preferred dealer may be unavailable and don't commit to booking.",
    impact:  "HIGH",
    validate:"Exit-intent surveys / User research",
    color:   "#C41E3A",
  },
  {
    id:      "H5",
    icon:    Clock,
    title:   "No Urgency or Incentive",
    desc:    "There is zero reward for booking a test ride. Competitors like KTM and Jawa offer accessory vouchers — creating a competitive disadvantage.",
    impact:  "MEDIUM",
    validate:"Competitor benchmarking / A/B test",
    color:   "#E67E22",
  },
];

const impactStyle: Record<string, string> = {
  HIGH:   "bg-re-red/20 text-re-red border border-re-red/30",
  MEDIUM: "bg-orange-500/15 text-orange-400 border border-orange-400/30",
};

export default function WhyDropOff() {
  return (
    <section id="hypotheses" className="relative py-24 sm:py-32 bg-re-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-re-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-re-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <SectionHeader
            eyebrow="Drop-Off Hypotheses"
            title="Why Users Don't"
            titleHighlight="Convert"
            subtitle="5 evidence-backed hypotheses explaining the conversion gap — each validated through analytics, A/B tests, and user research."
          />
        </div>

        <div className="flex flex-col gap-5">
          {hypotheses.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative flex flex-col sm:flex-row gap-5 p-6 sm:p-7 bg-re-panel border border-re-cream/5 hover:border-re-cream/10 transition-all duration-300 overflow-hidden"
            >
              {/* Left accent */}
              <motion.div
                className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500"
                style={{ backgroundColor: h.color }}
              />

              {/* Hypothesis ID */}
              <div
                className="shrink-0 w-14 h-14 flex items-center justify-center font-display font-black text-white text-xl"
                style={{ backgroundColor: h.color + "22", border: `1.5px solid ${h.color}40` }}
              >
                {h.id}
              </div>

              {/* Icon */}
              <div className="hidden sm:flex shrink-0 items-start pt-1">
                <h.icon size={20} className="text-re-cream/25 group-hover:text-re-cream/50 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-body font-semibold text-re-cream text-base">
                    {h.title}
                  </h3>
                  <span className={`text-[10px] font-body font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm ${impactStyle[h.impact]}`}>
                    {h.impact} IMPACT
                  </span>
                </div>
                <p className="font-body text-re-cream/45 text-sm leading-relaxed mb-3">
                  {h.desc}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-re-gold/50" />
                  <span className="text-re-gold/60 text-xs font-body">
                    Validate via: {h.validate}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
