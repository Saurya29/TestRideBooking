"use client";

import { motion } from "framer-motion";
import { Search, Target, Smartphone, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const segments = [
  {
    icon:    Search,
    label:   "The Explorer",
    tagline: "Just browsing, high curiosity",
    desc:    "In research mode — comparing models, reading specs, watching reviews. Open to discovery but not yet committed.",
    goals:   ["Model comparison", "Price discovery", "Brand evaluation"],
    color:   "re-gold",
    hex:     "#C9A84C",
  },
  {
    icon:    Target,
    label:   "The Intent Buyer",
    tagline: "Bike shortlisted, ready to feel it",
    desc:    "Has done the research. Knows what they want. Now needs a test ride to confirm the decision before visiting a dealer.",
    goals:   ["Test ride booking", "Nearest dealer", "EMI calculator"],
    color:   "re-red",
    hex:     "#C41E3A",
  },
  {
    icon:    Smartphone,
    label:   "Digital Native",
    tagline: "Mobile-first, friction-averse",
    desc:    "Discovers RE on Instagram or YouTube. Expects a seamless mobile experience. Will abandon any clunky flow instantly.",
    goals:   ["1-click booking", "AR visualization", "WhatsApp updates"],
    color:   "sky-400",
    hex:     "#38bdf8",
  },
  {
    icon:    MapPin,
    label:   "Local Seeker",
    tagline: "Wants the nearest experience",
    desc:    "Ready to act — but needs to know which dealership has availability, how far it is, and what to expect on arrival.",
    goals:   ["Dealer locator", "Slot availability", "Route & directions"],
    color:   "emerald-400",
    hex:     "#34d399",
  },
];

export default function UserSegments() {
  return (
    <section id="segments" className="relative py-24 sm:py-32 bg-re-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-re-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-re-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <SectionHeader
            eyebrow="User Segments"
            title="Who Visits the"
            titleHighlight="Website?"
            subtitle="Four distinct intent profiles — each with different needs and friction points along the booking journey."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col p-7 bg-re-panel border border-re-cream/5 hover:border-opacity-40 transition-all duration-400 cursor-default overflow-hidden"
              style={{ "--seg-color": seg.hex } as React.CSSProperties}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top left, ${seg.hex}0D 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="relative z-10 mb-5 w-12 h-12 flex items-center justify-center border"
                style={{ borderColor: `${seg.hex}30`, background: `${seg.hex}12` }}
              >
                <seg.icon size={20} style={{ color: seg.hex }} />
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <p className="font-body text-xs font-semibold tracking-widest uppercase mb-1"
                   style={{ color: seg.hex }}>
                  {seg.tagline}
                </p>
                <h3 className="font-display font-bold text-re-cream text-xl mb-3">
                  {seg.label}
                </h3>
                <p className="font-body text-re-cream/40 text-sm leading-relaxed mb-5">
                  {seg.desc}
                </p>

                {/* Goals list */}
                <div className="mt-auto space-y-2">
                  {seg.goals.map((g) => (
                    <div key={g} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ background: seg.hex }} />
                      <span className="text-re-cream/50 text-xs font-body">{g}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom border accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: seg.hex }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
