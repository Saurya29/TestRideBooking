"use client";

import { motion } from "framer-motion";
import { TrendingDown, Users, MousePointerClick, AlertTriangle } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  {
    icon:  Users,
    value:  2.1,
    decimals: 1,
    suffix: "M+",
    label: "Monthly Website Visitors",
    sub:   "High-intent traffic already arriving",
    color: "text-re-gold",
    bg:    "bg-re-gold/10",
    border:"border-re-gold/20",
  },
  {
    icon:  TrendingDown,
    value:  3,
    decimals: 0,
    prefix: "<",
    suffix: "%",
    label: "Test Ride Conversion Rate",
    sub:   "Far below industry benchmark of 8–12%",
    color: "text-re-red",
    bg:    "bg-re-red/10",
    border:"border-re-red/30",
  },
  {
    icon:  MousePointerClick,
    value:  68,
    decimals: 0,
    suffix: "%",
    label: "Booking Form Drop-off",
    sub:   "Users abandon mid-form before submitting",
    color: "text-orange-400",
    bg:    "bg-orange-400/10",
    border:"border-orange-400/20",
  },
];

const insights = [
  {
    icon:  AlertTriangle,
    title: "High Intent, Low Action",
    body:  "Millions visit Royal Enfield's site every month to explore models — yet almost none take the critical next step of booking a test ride.",
  },
  {
    icon:  MousePointerClick,
    title: "Broken Booking Experience",
    body:  "The current booking flow requires 4+ clicks, 8 form fields, and manual dealer selection — creating massive friction at the moment of highest intent.",
  },
  {
    icon:  TrendingDown,
    title: "Revenue Left on the Table",
    body:  "A test ride is the single highest-converting touchpoint before purchase. Every missed booking is a lost sale to Jawa, KTM, or Yezdi.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 sm:py-32 bg-re-dark overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-re-red/40 to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-re-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <SectionHeader
            eyebrow="The Problem"
            title="The Conversion"
            titleHighlight="Gap"
            subtitle="Royal Enfield gets massive organic traffic — but the path from website visit to test ride booking is broken at every step."
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative group p-8 border ${stat.border} ${stat.bg} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className={`inline-flex p-3 rounded-sm ${stat.bg} border ${stat.border} mb-5`}>
                <stat.icon size={22} className={stat.color} />
              </div>

              <div className={`font-display font-black text-5xl sm:text-6xl ${stat.color} mb-2 leading-none`}>
                <AnimatedCounter
                  to={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>

              <p className="text-re-cream font-body font-semibold text-base mb-2">
                {stat.label}
              </p>
              <p className="text-re-cream/40 font-body text-sm leading-relaxed">
                {stat.sub}
              </p>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-12 h-12 ${stat.bg} opacity-50`} />
              <div className={`absolute top-0 right-0 w-1 h-12 ${stat.color.replace("text-", "bg-")} opacity-60`} />
            </motion.div>
          ))}
        </div>

        {/* Insight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 border border-re-cream/5 hover:border-re-red/20 bg-re-panel/50 transition-colors duration-300"
            >
              <div className="mt-0.5 shrink-0">
                <item.icon size={18} className="text-re-red" />
              </div>
              <div>
                <p className="font-body font-semibold text-re-cream text-sm mb-2">
                  {item.title}
                </p>
                <p className="font-body text-re-cream/40 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
