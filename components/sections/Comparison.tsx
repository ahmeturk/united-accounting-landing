"use client";

import { motion } from "framer-motion";
import { Check, Minus, X, Sparkles } from "lucide-react";

type Cell = "yes" | "partial" | "no" | string;
type Column = { key: string; label: string; highlight?: boolean };

const columns: Column[] = [
  { key: "trad", label: "محاسب تقليدي" },
  { key: "saas", label: "Qoyod / Wafeq" },
  { key: "erp", label: "SAP / Odoo" },
  { key: "idham", label: "إدهام", highlight: true }
];

const rows: { label: string; cells: Cell[] }[] = [
  {
    label: "السرعة",
    cells: ["no", "partial", "partial", "yes"]
  },
  {
    label: "العمق (ERP فعلي)",
    cells: ["no", "partial", "yes", "yes"]
  },
  {
    label: "الذكاء الاصطناعي",
    cells: ["no", "no", "partial", "yes"]
  },
  {
    label: "اللغة العربية الكاملة",
    cells: ["yes", "partial", "partial", "yes"]
  },
  {
    label: "محاسب سعودي SOCPA",
    cells: ["yes", "no", "no", "yes"]
  },
  {
    label: "التكلفة الفعلية",
    cells: ["مرتفعة", "منخفضة", "مرتفعة جداً", "متوازنة"]
  }
];

function CellIcon({ value, highlight }: { value: Cell; highlight?: boolean }) {
  if (value === "yes") {
    return (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
          highlight ? "bg-teal-500 text-white" : "bg-teal-50 text-teal-600"
        }`}
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
      className={`text-sm font-medium ${
        highlight ? "text-teal-700" : "text-ink-muted"
      }`}
    >
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <section className="section bg-white">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">المقارنة</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            ليش إدهام تختلف
          </h2>
          <p className="mt-5 text-lg leading-loose text-ink-muted">
            أنت لا تختار بين أتمتة بسيطة أو نظام معقّد. مع إدهام، تحصل على
            الأثنين بدون مساومة.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-3xl ring-1 ring-navy/10 shadow-soft"
        >
          {/* Scroll wrapper for mobile */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-right">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-5 text-sm font-semibold text-white/80 text-start">
                    المعيار
                  </th>
                  {columns.map((c) => (
                    <th
                      key={c.key}
                      className={`px-5 py-5 text-sm font-semibold text-center ${
                        c.highlight
                          ? "bg-teal-500 text-white relative"
                          : "text-white/80"
                      }`}
                    >
                      {c.highlight && (
                        <span className="absolute -top-1 right-1/2 translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-teal-700 shadow-soft">
                          <Sparkles className="h-3 w-3" /> مُوصى
                        </span>
                      )}
                      <span
                        className={
                          c.highlight ? "font-bold" : "font-semibold"
                        }
                      >
                        {c.label}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {rows.map((row, ri) => (
                  <tr
                    key={row.label}
                    className={
                      ri % 2 === 0 ? "bg-white" : "bg-sand-50/60"
                    }
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-navy">
                      {row.label}
                    </td>
                    {row.cells.map((cell, ci) => {
                      const col = columns[ci];
                      return (
                        <td
                          key={ci}
                          className={`px-5 py-4 text-center ${
                            col.highlight ? "bg-teal-50/40" : ""
                          }`}
                        >
                          <CellIcon
                            value={cell}
                            highlight={col.highlight}
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-ink-subtle">
          ✓ مكتمل · — جزئي · ✗ غير متوفر
        </p>
      </div>
    </section>
  );
}
