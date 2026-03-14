"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, MousePointerClick, MapPin, ShoppingBag, Eye, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface Metric {
  icon:     React.ElementType;
  label:    string;
  sub:      string;
  baseline: number;
  target:   number;
  suffix:   string;
  color:    string;
  priority: "PRIMARY" | "SECONDARY";
}

const metrics: Metric[] = [
  {
    icon:     TrendingUp,
    label:    "Test Ride Conversion Rate",
    sub:      "North Star Metric — 90-day target",
    baseline: 2.8,
    target:   6.5,
    suffix:   "%",
    color:    "#C41E3A",
    priority: "PRIMARY",
  },
  {
    icon:     MousePointerClick,
    label:    "CTA Click-Through Rate",
    sub:      "Book Test Ride button CTR",
    baseline: 4.2,
    target:   10,
    suffix:   "%",
    color:    "#C9A84C",
    priority: "PRIMARY",
  },
  {
    icon:     MapPin,
    label:    "Dealer Visit Rate",
    sub:      "After booking confirmation",
    baseline: 61,
    target:   80,
    suffix:   "%",
    color:    "#34d399",
    priority: "SECONDARY",
  },
  {
    icon:     ShoppingBag,
    label:    "Test Ride → Purchase",
    sub:      "Conversion from ride to sale",
    baseline: 18,
    target:   28,
    suffix:   "%",
    color:    "#f59e0b",
    priority: "SECONDARY",
  },
  {
    icon:     Eye,
    label:    "Avg. Booking Form Completion",
    sub:      "Users who start and finish booking",
    baseline: 32,
    target:   65,
    suffix:   "%",
    color:    "#38bdf8",
    priority: "SECONDARY",
  },
  {
    icon:     CheckCircle,
    label:    "AR / 3D Explorer Engagement",
    sub:      "Sessions interacting with 3D viewer",
    baseline: 0,
    target:   35,
    suffix:   "%",
    color:    "#a78bfa",
    priority: "SECONDARY",
  },
];

function MetricCard({ metric, delay }: { metric: Metric; delay: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const baselineWidth = (metric.baseline / (metric.target * 1.1)) * 100;
  const targetWidth   = (metric.target   / (metric.target * 1.1)) * 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative group p-6 border transition-all duration-300 overflow-hidden ${
        metric.priority === "PRIMARY"
          ? "border-re-red/25 bg-re-panel hover:border-re-red/40"
          : "border-re-cream/5 bg-re-panel hover:border-re-cream/10"
      }`}
    >
      {metric.priority === "PRIMARY" && (
        <div
          className="absolute inset-0 opacity-5"
          style={{ background: `radial-gradient(ellipse at top left, ${metric.color} 0%, transparent 60%)` }}
        />
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 flex items-center justify-center shrink-0"
              style={{ backgroundColor: metric.color + "18", border: `1px solid ${metric.color}30` }}
            >
              <metric.icon size={16} style={{ color: metric.color }} />
            </div>
            <div>
              <p className="font-body font-semibold text-re-cream text-sm leading-snug">
                {metric.label}
              </p>
              <p className="text-re-cream/35 font-body text-xs mt-0.5">{metric.sub}</p>
            </div>
          </div>
          {metric.priority === "PRIMARY" && (
            <span
              className="shrink-0 text-[9px] font-body font-bold tracking-widest uppercase px-2 py-0.5"
              style={{ backgroundColor: metric.color + "22", color: metric.color }}
            >
              PRIMARY
            </span>
          )}
        </div>

        {/* Before/After numbers */}
        <div className="flex items-end gap-3 mb-4">
          <div>
            <p className="text-re-cream/30 text-[9px] font-body tracking-widest uppercase mb-0.5">Now</p>
            <p className="font-display font-bold text-re-cream/50 text-2xl">
              {metric.baseline === 0 ? "N/A" : `${metric.baseline}${metric.suffix}`}
            </p>
          </div>
          <div className="mb-2 text-re-cream/30 text-lg">→</div>
          <div>
            <p className="text-[9px] font-body tracking-widest uppercase mb-0.5" style={{ color: metric.color }}>
              Target
            </p>
            <p className="font-display font-bold text-2xl" style={{ color: metric.color }}>
              {metric.target}{metric.suffix}
            </p>
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-2.5">
          {/* Baseline bar */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-re-cream/30 text-[10px] font-body">Baseline</span>
              <span className="text-re-cream/40 text-[10px] font-body">
                {metric.baseline === 0 ? "—" : `${metric.baseline}${metric.suffix}`}
              </span>
            </div>
            <div className="h-1.5 bg-re-black rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-re-cream/20"
                initial={{ width: 0 }}
                animate={inView ? { width: `${baselineWidth}%` } : { width: 0 }}
                transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Target bar */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-body" style={{ color: metric.color + "80" }}>Target</span>
              <span className="text-[10px] font-body font-semibold" style={{ color: metric.color }}>
                {metric.target}{metric.suffix}
              </span>
            </div>
            <div className="h-1.5 bg-re-black rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: metric.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${targetWidth}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: delay + 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Lift percentage */}
        {metric.baseline > 0 && (
          <div className="mt-4 pt-3 border-t border-re-cream/5 flex items-center justify-between">
            <span className="text-re-cream/30 text-[10px] font-body uppercase tracking-wider">Expected Lift</span>
            <span className="font-display font-bold text-sm" style={{ color: metric.color }}>
              +{Math.round(((metric.target - metric.baseline) / metric.baseline) * 100)}%
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function MetricsDashboard() {
  return (
    <section id="metrics" className="relative py-24 sm:py-32 bg-re-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-re-red/30 to-transparent" />
      <div className="absolute -top-20 left-1/2 w-80 h-80 bg-re-red/4 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <SectionHeader
            eyebrow="Success Metrics"
            title="How We Measure"
            titleHighlight="Success"
            subtitle="Primary and secondary KPIs tracked across GA4, Mixpanel, and dealer CRM — with 90-day uplift targets."
          />
        </div>

        {/* Primary metrics — 2 large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {metrics
            .filter((m) => m.priority === "PRIMARY")
            .map((m, i) => (
              <MetricCard key={m.label} metric={m} delay={i * 0.12} />
            ))}
        </div>

        {/* Secondary metrics — 4 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics
            .filter((m) => m.priority === "SECONDARY")
            .map((m, i) => (
              <MetricCard key={m.label} metric={m} delay={0.25 + i * 0.1} />
            ))}
        </div>

        {/* Tracking info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-re-cream/25 text-xs font-body tracking-wider"
        >
          {["Google Analytics 4", "Mixpanel Events", "Hotjar Heatmaps", "Dealer CRM API", "Amplitude Funnels"].map(
            (tool) => (
              <div key={tool} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-re-red/50" />
                {tool}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
