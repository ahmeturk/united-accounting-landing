"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  audience: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "الانطلاق",
    audience: "للأعمال الناشئة والفردية",
    price: "٤٩٩",
    unit: "ر.س / شهرياً",
    features: [
      "حتى ١٠٠ فاتورة شهرياً",
      "محاسبة ذاتية بالذكاء الاصطناعي",
      "إقرارات ZATCA Phase 2",
      "تقارير لحظية أساسية",
      "تكامل مع بنك واحد",
      "دعم بريد إلكتروني"
    ],
    cta: "ابدأ الآن"
  },
  {
    name: "النمو",
    audience: "للمنشآت المتنامية",
    price: "١,٤٩٩",
    unit: "ر.س / شهرياً",
    features: [
      "حتى ١,٠٠٠ فاتورة شهرياً",
      "كل مميزات الانطلاق",
      "محاسب SOCPA مخصص",
      "مراكز تكلفة وفروع متعددة",
      "تكاملات GOSI، مدد، قوى",
      "دعم واتساب + هاتف"
    ],
    cta: "ابدأ تجربة مجانية",
    highlight: true
  },
  {
    name: "المؤسسات",
    audience: "للمجموعات متعددة الكيانات",
    price: "تواصل",
    unit: "تسعير مخصص",
    features: [
      "فواتير غير محدودة",
      "كل مميزات النمو",
      "ERP كامل + توحيد قوائم",
      "API و Webhooks مخصصة",
      "محاسب رئيسي + فريق دعم",
      "اتفاقية SLA مع تمثيل ZATCA"
    ],
    cta: "تكلّم مع فريق المبيعات"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="section bg-sand-50">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">الباقات</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            تسعير واضح. ينمو معك.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-3xl bg-white p-8 ring-1 transition-all shine",
                t.highlight
                  ? "ring-2 ring-teal-500 shadow-lift lg:scale-[1.04] lg:-mt-2"
                  : "ring-navy/10 shadow-soft hover:shadow-lift hover:-translate-y-0.5"
              )}
            >
              {t.highlight && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2 flex items-center gap-1.5 rounded-full bg-teal-500 px-4 py-1.5 text-xs font-bold text-white shadow-glow">
                  <Sparkles className="h-3.5 w-3.5" />
                  ★ الأكثر طلباً
                </div>
              )}

              <h3
                className={cn(
                  "text-xl font-bold",
                  t.highlight ? "text-teal-700" : "text-navy"
                )}
              >
                {t.name}
              </h3>
              <p className="mt-2 min-h-[2.75rem] text-sm leading-relaxed text-ink-muted">
                {t.audience}
              </p>

              <div className="mt-6 flex items-baseline gap-2 border-y border-navy/5 py-6">
                <span className="text-xs font-medium text-ink-muted">
                  ابتداءً من
                </span>
                <span className="font-latin text-4xl font-bold tracking-tight text-navy nums-ar">
                  {t.price}
                </span>
                <span className="text-sm text-ink-muted">{t.unit}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-navy"
                  >
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full",
                        t.highlight
                          ? "bg-teal-500 text-white"
                          : "bg-teal-50 text-teal-600"
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all",
                  t.highlight
                    ? "bg-teal-500 text-white shadow-soft hover:bg-teal-600 hover:shadow-glow"
                    : "bg-navy text-white hover:bg-navy-700"
                )}
              >
                {t.cta}
                <ArrowLeft className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
          VAT not included · Cancel anytime
        </p>
      </div>
    </section>
  );
}
