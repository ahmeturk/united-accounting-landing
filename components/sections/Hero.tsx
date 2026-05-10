"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ArrowUpRight } from "lucide-react";
import { CountUp } from "@/components/CountUp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory-100">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-warm-aurora" aria-hidden />
      <div className="absolute inset-0 bg-najdi opacity-60" aria-hidden />
      {/* Bottom fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ivory-200/60"
        aria-hidden
      />
      {/* Decorative editorial rule — top */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent"
        aria-hidden
      />

      <div className="container-prose relative grid grid-cols-1 items-center gap-14 pt-14 pb-28 lg:grid-cols-12 lg:gap-12 lg:pt-24 lg:pb-36">
        {/* COPY column — first in DOM, sits on the right in RTL */}
        <div className="lg:col-span-6">
          <CopyBlock />
        </div>

        {/* OPERATING CONSOLE — left in RTL */}
        <div className="lg:col-span-6">
          <OperatingConsole />
        </div>
      </div>
    </section>
  );
}

/* ─────────────── COPY ─────────────── */

function CopyBlock() {
  return (
    <>
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[2.75rem] font-semibold leading-[1.1] tracking-tight text-navy sm:text-6xl lg:text-[4.75rem]"
      >
        كل أرقامك.
        <br />
        تحت{" "}
        <span className="relative inline-block">
          إيدك.
          <span
            className="absolute -bottom-2 left-0 right-0 h-[3px] origin-right rounded-full bg-clay-500/80"
            aria-hidden
          />
        </span>
      </motion.h1>

      {/* Subhead */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-6 max-w-xl text-lg text-ink-muted sm:text-xl"
      >
        محاسبة سعودية بذكاء اصطناعي، يدعمها محاسبون معتمدون.
      </motion.p>

      {/* Single CTA — Login lives in the nav, this calls new visitors */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center gap-3"
      >
        <a href="#signup" className="btn-accent group">
          ابدأ حسابك
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        </a>
      </motion.div>
    </>
  );
}

/* ─────────────── OPERATING CONSOLE ─────────────── */

function OperatingConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-xl"
    >
      {/* Aura behind console */}
      <div
        className="absolute -inset-8 -z-10 bg-warm-aurora opacity-80 blur-2xl"
        aria-hidden
      />

      {/* Console card */}
      <div className="relative overflow-hidden rounded-3xl bg-ivory-50 ring-1 ring-ink/8 shadow-warm-lift">
        {/* Top accent rule */}
        <div className="h-[3px] bg-gradient-to-l from-transparent via-clay-500 to-transparent" />

        {/* Status bar */}
        <div className="flex items-center justify-between border-b border-ink/5 bg-ivory-100/60 px-5 py-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-70 animate-pulse-soft" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
              ZATCA · Phase 2 · LIVE
            </span>
          </div>
          <span className="font-mono text-[11px] text-ink-subtle">
            ١٤:٢٢ · ٠٩ مايو
          </span>
        </div>

        {/* Hero number block */}
        <div className="px-7 pt-8 pb-6 sm:px-9">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
              صافي الربح · مايو ٢٠٢٦
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-teal-700">
              <ArrowUpRight className="h-3 w-3" />
              +١٢٪
            </span>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <CountUp
              value={47200}
              trigger="mount"
              delay={600}
              className="text-5xl font-semibold tracking-tight text-navy sm:text-6xl"
            />
            <span className="text-2xl font-semibold text-ink-muted">ر.س</span>
          </div>
          <div className="mt-1 text-xs text-ink-subtle">
            مقارنةً بـ ٤٢,١٠٠ ر.س في أبريل
          </div>

          {/* Refined chart */}
          <RefinedChart />
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-3 divide-x divide-x-reverse divide-ink/5 border-t border-ink/5 bg-ivory-100/50">
          <Kpi label="فاتورة معالجة" value="١٢٤" />
          <Kpi label="تنبيه يحتاج مراجعة" value="٣" accent />
          <Kpi label="دقة الترحيل" value="٩٨٪" />
        </div>
      </div>

      {/* Floating AI prompt callout */}
      <div className="absolute -bottom-7 end-4 hidden sm:flex items-center gap-3 rounded-2xl bg-navy text-ivory-50 px-4 py-3 shadow-warm-lift max-w-[260px]">
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-clay-500/20 text-clay-300">
          <Sparkles className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ivory-50/60">
            Ask in Arabic
          </div>
          <div className="text-sm font-medium">«كم صافي ربحي هذا الشهر؟»</div>
        </div>
      </div>

      {/* Floating compliance badge */}
      <div className="absolute -top-5 start-2 hidden sm:flex items-center gap-2 rounded-full bg-ivory-50 px-3.5 py-2 shadow-warm-soft ring-1 ring-ink/8">
        <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
          SOCPA Certified
        </span>
      </div>
    </motion.div>
  );
}

function Kpi({
  label,
  value,
  accent
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="px-4 py-4 text-center">
      <div
        className={`num-mono text-xl font-semibold ${
          accent ? "text-clay-500" : "text-navy"
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-ink-subtle">
        {label}
      </div>
    </div>
  );
}

/* Refined area chart — single confident line + soft gradient fill */
function RefinedChart() {
  const data = [38, 42, 36, 44, 41, 48, 47];
  const months = ["د", "ن", "أ", "س", "أ", "ي", "م"];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  // Build SVG path
  const w = 500;
  const h = 100;
  const stepX = w / (data.length - 1);
  const points = data.map((v, i) => {
    const x = i * stepX;
    const y = h - ((v - min) / range) * (h - 16) - 8;
    return [x, y] as const;
  });

  const linePath = points
    .map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`))
    .join(" ");
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;
  const lastPoint = points[points.length - 1];

  return (
    <div className="mt-6">
      <svg
        viewBox={`0 0 ${w} ${h + 24}`}
        className="h-24 w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Hairline baseline */}
        <line
          x1="0"
          y1={h - 0.5}
          x2={w}
          y2={h - 0.5}
          stroke="rgba(26,24,18,0.08)"
          strokeWidth={1}
        />

        {/* Area */}
        <motion.path
          d={areaPath}
          fill="url(#area-fill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Line — animated draw */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="#14B8A6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />

        {/* Endpoint dot */}
        <motion.circle
          cx={lastPoint[0]}
          cy={lastPoint[1]}
          r={4}
          fill="#14B8A6"
          stroke="#FAF6EF"
          strokeWidth={2}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        />
      </svg>

      {/* Month labels */}
      <div className="mt-1 flex justify-between font-mono text-[10px] text-ink-subtle">
        {months.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  );
}
