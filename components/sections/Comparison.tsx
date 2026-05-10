"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Cell = "yes" | "partial" | "no" | string;

type Competitor = {
  key: string;
  label: string;
  /** matches order of `criteria` */
  cells: Cell[];
};

const criteria = [
  "السرعة",
  "العمق (ERP فعلي)",
  "الذكاء الاصطناعي",
  "اللغة العربية الكاملة",
  "محاسب SOCPA",
  "التكلفة الفعلية"
];

const ua: Cell[] = ["yes", "yes", "yes", "yes", "yes", "متوازنة"];

const competitors: Competitor[] = [
  {
    key: "trad",
    label: "محاسب تقليدي",
    cells: ["no", "no", "no", "yes", "yes", "مرتفعة"]
  },
  {
    key: "saas",
    label: "Qoyod / Wafeq",
    cells: ["partial", "partial", "no", "partial", "no", "منخفضة"]
  },
  {
    key: "erp",
    label: "SAP / Odoo",
    cells: ["partial", "yes", "partial", "partial", "no", "مرتفعة جداً"]
  }
];

export function Comparison() {
  const [active, setActive] = useState(competitors[1]); // default Qoyod/Wafeq

  return (
    <section className="section bg-ivory-100">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">المقارنة</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            ليش نختلف.
          </h2>
        </div>

        {/* Competitor tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle me-2">
            مقارنة مع
          </span>
          {competitors.map((c) => {
            const isActive = active.key === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c)}
                aria-pressed={isActive}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-navy text-ivory-50 shadow-warm-soft"
                    : "bg-ivory-50 text-ink-muted ring-1 ring-ink/10 hover:ring-ink/20 hover:text-navy"
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Comparison grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-3xl bg-ivory-50 ring-1 ring-ink/8 shadow-warm-soft"
        >
          {/* Header row — UA + active competitor */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-ink/8 bg-ivory-100/60">
            <div className="px-5 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
              المعيار
            </div>

            {/* UA column header — always teal-highlighted */}
            <div className="relative bg-teal-500/5 px-5 py-5 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-teal-500 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-warm-soft whitespace-nowrap">
                <Sparkles className="h-3 w-3" />
                نحن
              </span>
              <div className="text-sm font-bold text-navy">إدهام</div>
            </div>

            {/* Active competitor column header */}
            <div className="px-5 py-5 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-semibold text-ink-muted"
                >
                  {active.label}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Body rows */}
          {criteria.map((label, ri) => (
            <div
              key={label}
              className={cn(
                "grid grid-cols-[1fr_1fr_1fr] items-center border-b border-ink/5 last:border-0",
                ri % 2 === 1 && "bg-sand-50/40"
              )}
            >
              <div className="px-5 py-4 text-sm font-semibold text-navy">
                {label}
              </div>

              {/* UA cell — always present */}
              <div className="bg-teal-500/5 px-5 py-4 text-center">
                <CellMark value={ua[ri]} highlight />
              </div>

              {/* Competitor cell — animated swap on tab change */}
              <div className="px-5 py-4 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active.key}-${ri}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.25, delay: ri * 0.03 }}
                    className="inline-flex items-center justify-center"
                  >
                    <CellMark value={active.cells[ri]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ))}
        </motion.div>

        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
          ✓ مكتمل · — جزئي · ✗ غير متوفر
        </p>
      </div>
    </section>
  );
}

function CellMark({ value, highlight }: { value: Cell; highlight?: boolean }) {
  if (value === "yes") {
    return (
      <span
        className={cn(
          "inline-flex h-7 w-7 items-center justify-center rounded-full",
          highlight ? "bg-teal-500 text-white" : "bg-teal-50 text-teal-600"
        )}
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-600">
        <Minus className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-rose-500">
        <X className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span
      className={cn(
        "text-sm font-medium",
        highlight ? "text-teal-700 font-semibold" : "text-ink-muted"
      )}
    >
      {value}
    </span>
  );
}
