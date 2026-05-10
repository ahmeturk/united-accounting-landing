"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Plug, Bot, BarChart3, Check, Sparkles } from "lucide-react";

type Step = {
  icon: React.ComponentType<{ className?: string }>;
  n: string;
  title: string;
  micro: string;
};

const steps: Step[] = [
  { icon: Plug, n: "١", title: "اربط بنكك وفواتيرك", micro: "٥ دقائق" },
  { icon: Bot, n: "٢", title: "AI يصنّف ويسجّل تلقائياً", micro: "تلقائي" },
  { icon: BarChart3, n: "٣", title: "تقاريرك لحظية", micro: "لحظي" }
];

export function HowItWorks() {
  return (
    <section id="how" className="section bg-sand-50">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">كيف تشتغل</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            من الصفر للتشغيل في يومين.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Desktop flow connector — animated dashed line + traveling dot.
              On RTL, the data flows from step 1 (rightmost) → step 3 (leftmost). */}
          <FlowConnector />

          <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map((s, i) => (
              <StepCard key={s.n} step={s} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── STEP CARD ─────────────── */

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      <div className="card card-hover relative flex flex-col items-center p-7 text-center">
        {/* Step circle — sits above card */}
        <div className="relative z-10 -mt-14 flex h-16 w-16 items-center justify-center rounded-full bg-sand-50 ring-4 ring-sand-50">
          <div className="num-mono flex h-14 w-14 items-center justify-center rounded-full bg-navy text-2xl font-semibold text-clay-300 shadow-warm-lift">
            {step.n}
          </div>
        </div>

        <div className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay-50 text-clay-500 ring-1 ring-clay-100">
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug text-navy">
          {step.title}
        </h3>

        {/* Mini live-UI per step */}
        <div className="mt-6 w-full">
          {index === 0 && <BankConnect />}
          {index === 1 && <AiTicker />}
          {index === 2 && <ReportsPreview />}
        </div>

        <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-ivory-100 px-3 py-1 text-xs font-medium text-navy ring-1 ring-ink/5">
          <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          {step.micro}
        </span>
      </div>
    </motion.li>
  );
}

/* ─────────────── FLOW CONNECTOR ─────────────── */

function FlowConnector() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      className="absolute inset-x-12 top-9 hidden lg:block pointer-events-none"
      aria-hidden
    >
      <svg
        ref={ref}
        viewBox="0 0 1000 24"
        preserveAspectRatio="none"
        className="h-6 w-full"
      >
        {/* Static dashed background line */}
        <line
          x1="0"
          y1="12"
          x2="1000"
          y2="12"
          stroke="rgba(198,107,61,0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />

        {/* Glowing traveling dot — sweeps right-to-left in RTL */}
        {inView && (
          <motion.circle
            r="5"
            cy="12"
            initial={{ cx: 1000 }}
            animate={{ cx: 0 }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.6
            }}
            fill="#C66B3D"
            style={{ filter: "drop-shadow(0 0 6px rgba(198,107,61,0.6))" }}
          />
        )}
      </svg>
    </div>
  );
}

/* ─────────────── MINI-UI DEMOS ─────────────── */

/**
 * Step 1 — Bank Connect. Three Saudi-bank rows toggle from "ربط" to a
 * green check as scroll-into-view animates them in sequence.
 */
function BankConnect() {
  const banks = ["الراجحي", "الأهلي", "ساب"];
  return (
    <div className="rounded-xl bg-ivory-100 ring-1 ring-ink/8 p-3 space-y-1.5 text-start">
      {banks.map((b, i) => (
        <motion.div
          key={b}
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.18 }}
          className="flex items-center justify-between rounded-lg bg-ivory-50 px-3 py-2 ring-1 ring-ink/5"
        >
          <span className="text-xs font-medium text-navy">{b}</span>
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.3,
              delay: 0.7 + i * 0.18,
              type: "spring",
              stiffness: 300
            }}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-white"
          >
            <Check className="h-3 w-3" strokeWidth={3} />
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Step 2 — AI Ticker. Cycles through what the AI is doing right now.
 */
function AiTicker() {
  const tasks = [
    "تصنيف ١٢٤ عملية بنكية",
    "قراءة ٤٧ فاتورة موردين",
    "تسوية ٢٣ معاملة بطاقة",
    "إعداد إقرار VAT للربع"
  ];
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % tasks.length);
    }, 2200);
    return () => clearInterval(id);
  }, [inView, tasks.length]);

  return (
    <div
      ref={ref}
      className="rounded-xl bg-ivory-100 ring-1 ring-ink/8 p-3"
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2 flex-none">
          <span className="absolute inline-flex h-full w-full rounded-full bg-clay-500 opacity-60 animate-pulse-soft" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-clay-500" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay-500">
          PROCESSING
        </span>
      </div>
      <div className="mt-3 h-9 overflow-hidden">
        <motion.div
          animate={{ y: -idx * 36 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {tasks.map((t) => (
            <div
              key={t}
              className="flex h-9 items-center gap-2 text-xs font-medium text-navy"
            >
              <Sparkles className="h-3 w-3 text-clay-500 flex-none" />
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Step 3 — Reports Preview. Tiny version of the Hero operating console:
 * headline number + sparkline, signaling "the actual product."
 */
function ReportsPreview() {
  return (
    <div className="rounded-xl bg-ivory-100 ring-1 ring-ink/8 p-3 text-start">
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] text-ink-subtle">
          صافي الربح
        </span>
        <span className="rounded-full bg-teal-50 px-1.5 py-0.5 font-mono text-[9px] font-bold text-teal-700">
          +١٢٪
        </span>
      </div>
      <div className="num-mono mt-1 text-xl font-semibold text-navy">
        ٤٧,٢٠٠ ر.س
      </div>
      <Sparkline />
    </div>
  );
}

function Sparkline() {
  const data = [38, 42, 36, 44, 41, 48, 47];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 200;
  const h = 28;
  const stepX = w / (data.length - 1);
  const points = data
    .map((v, i) => {
      const x = i * stepX;
      const y = h - ((v - min) / range) * (h - 4) - 2;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-7 w-full" aria-hidden>
      <motion.path
        d={points}
        fill="none"
        stroke="#14B8A6"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      />
    </svg>
  );
}
