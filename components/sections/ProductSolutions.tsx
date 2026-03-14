"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Brain, Box, MapPin, Gift, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const solutions = [
  {
    id:      "01",
    icon:    Zap,
    tag:     "UX / Quick Win",
    title:   "Persistent 1-Click Test Ride CTA",
    problem: "CTA buried 4+ clicks deep; invisible on mobile",
    solution:"Sticky floating button on all model pages. GPS pre-fills location. Stripped to just name + phone — 2 fields maximum.",
    impact:  "+40–60% CTR",
    imgUrl:  "/bikes/1.jpg",
    imgAlt:  "Royal Enfield Classic 350",
    color:   "#C41E3A",
  },
  {
    id:      "02",
    icon:    Brain,
    tag:     "AI / Personalization",
    title:   "AI Motorcycle Recommender",
    problem: "20+ models with no guidance creates decision paralysis",
    solution:"3-question quiz — riding style, budget, use case — surfaces top 3 personalized recommendations with direct test ride CTAs.",
    impact:  "+25% qualified leads",
    imgUrl:  "/bikes/2.jpg",
    imgAlt:  "Royal Enfield Himalayan",
    color:   "#C9A84C",
  },
  {
    id:      "03",
    icon:    Box,
    tag:     "Metadome / AR",
    title:   "3D / AR Bike Explorer",
    problem: "Static images fail to communicate the real presence of the bike",
    solution:"Metadome-powered WebXR showroom — rotate in 3D, change colours, see scale in your garage via AR on mobile.",
    impact:  "+35% time-on-page",
    imgUrl:  "/bikes/3.jpg",
    
    imgAlt:  "Royal Enfield Interceptor 650",
    color:   "#38bdf8",
  },
  {
    id:      "04",
    icon:    MapPin,
    tag:     "Infra / Trust",
    title:   "Live Dealer Slot Availability",
    problem: "No transparency on dealer availability breeds hesitation",
    solution:"Real-time calendar showing slots at nearest dealers, integrated with dealer CRM. Book a specific time — not a vague request.",
    impact:  "+30% form completion",
    imgUrl:  "/bikes/4.jpg",
  
    imgAlt:  "Royal Enfield Meteor 350",
    color:   "#34d399",
  },
  {
    id:      "05",
    icon:    Gift,
    tag:     "Growth / Gamification",
    title:   "Test Ride Reward Engine",
    problem: "Zero incentive to book now rather than 'someday'",
    solution:"Book a test ride → earn ₹500 accessory voucher. Gamified progress bar on profile page creates urgency and return visits.",
    impact:  "+15–20% bookings",
    imgUrl:  "/bikes/5.jpg",
   
    imgAlt:  "Royal Enfield Hunter 350",
    color:   "#f59e0b",
  },
];

export default function ProductSolutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-re-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-re-red/30 to-transparent" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-re-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <SectionHeader
            eyebrow="Product Solutions"
            title="5 Interventions to"
            titleHighlight="Drive Bookings"
            subtitle="From UX quick wins to AI-powered personalization and immersive AR experiences — a layered approach to conversion."
          />
        </div>

        {/* Feature cards — alternating layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.slice(0, 3).map((sol, i) => (
              <SolutionCard key={sol.id} sol={sol} delay={i * 0.12} />
            ))}
          </div>
          {/* Row 2: 2 wider cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutions.slice(3).map((sol, i) => (
              <SolutionCard key={sol.id} sol={sol} delay={0.35 + i * 0.12} wide />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  sol,
  delay = 0,
  wide = false,
}: {
  sol: (typeof solutions)[number];
  delay?: number;
  wide?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col bg-re-panel border border-re-cream/5 hover:border-re-cream/10 overflow-hidden transition-all duration-300"
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${wide ? "h-52" : "h-44"}`}>
        <Image
          src={sol.imgUrl}
          alt={sol.imgAlt}
          fill
          className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-re-panel via-re-panel/40 to-transparent" />

        {/* ID badge */}
        <div
          className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center font-display font-black text-white text-sm"
          style={{ backgroundColor: sol.color }}
        >
          {sol.id}
        </div>

        {/* Tag */}
        <div
          className="absolute top-4 right-4 text-[9px] font-body font-bold tracking-widest uppercase px-2.5 py-1.5 text-white"
          style={{ backgroundColor: sol.color + "CC" }}
        >
          {sol.tag}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start gap-3 mb-3">
          <sol.icon size={18} className="mt-0.5 shrink-0" style={{ color: sol.color }} />
          <h3 className="font-display font-bold text-re-cream text-lg leading-snug">
            {sol.title}
          </h3>
        </div>

        <div className="space-y-3 flex-1">
          <div>
            <span className="text-re-cream/35 text-[10px] font-body font-semibold tracking-widest uppercase">Problem</span>
            <p className="text-re-cream/55 font-body text-sm mt-1 leading-relaxed">{sol.problem}</p>
          </div>
          <div>
            <span className="text-re-cream/35 text-[10px] font-body font-semibold tracking-widest uppercase">Solution</span>
            <p className="text-re-cream/55 font-body text-sm mt-1 leading-relaxed">{sol.solution}</p>
          </div>
        </div>

        {/* Impact footer */}
        <div
          className="mt-5 pt-4 border-t flex items-center justify-between"
          style={{ borderColor: sol.color + "25" }}
        >
          <span className="font-display font-bold text-lg" style={{ color: sol.color }}>
            {sol.impact}
          </span>
          <ArrowUpRight
            size={16}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: sol.color }}
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: sol.color }}
      />
    </motion.div>
  );
}
