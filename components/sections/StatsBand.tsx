"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";

type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 75, suffix: "+", label: "منشأة سعودية" },
  { value: 210, suffix: "+", label: "إقرار ZATCA / شهر" },
  { value: 12400, suffix: "+", label: "ساعة موفّرة / شهر" },
  { value: 99.4, decimals: 1, suffix: "٪", label: "دقة الترحيل" }
];

export function StatsBand() {
  return (
    <section className="relative border-y border-ink/8 bg-ivory-50">
      {/* Subtle warm aurora */}
      <div
        className="pointer-events-none absolute inset-0 bg-warm-aurora opacity-50"
        aria-hidden
      />

      <div className="container-prose relative py-16 sm:py-20">
        {/* Editorial section label */}
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-clay-500" aria-hidden />
          <span className="text-xs font-semibold text-clay-500">
            قياسات لحظية
          </span>
        </div>

        {/* Stat grid — divided cells, no extra chrome */}
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((s, i) => (
            <StatCell key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({ stat, index }: { stat: Stat; index: number }) {
  const isLastInRow = (index + 1) % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={[
        "relative px-4 sm:px-8 lg:px-6",
        // Vertical divider — start side except first cell of row.
        // Hidden on mobile when this cell is the last in its 2-col row.
        index % 2 !== 0 ? "border-s border-ink/8" : "",
        // On desktop, every cell except the first gets a left divider.
        index !== 0 ? "lg:border-s lg:border-ink/8" : ""
      ].join(" ")}
    >
      <div className="flex items-baseline gap-1">
        <CountUp
          value={stat.value}
          decimals={stat.decimals ?? 0}
          duration={1600}
          delay={index * 120}
          className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl"
        />
        {stat.suffix && (
          <span className="num-mono text-2xl font-semibold text-clay-500 sm:text-3xl">
            {stat.suffix}
          </span>
        )}
      </div>
      {/* Arabic label — no letter-spacing (breaks cursive joining) */}
      <div className="mt-3 text-xs text-ink-subtle sm:text-sm">
        {stat.label}
      </div>
    </motion.div>
  );
}
