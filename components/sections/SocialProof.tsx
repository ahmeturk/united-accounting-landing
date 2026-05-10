"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const hero = {
  quote:
    "اختصرنا تقفيل الشهر من ١٥ يوم إلى ٣ أيام. وZATCA يطلع جاهز بدون أي متابعة.",
  name: "خالد العتيبي",
  role: "المالك",
  company: "مطاعم البيت السعودي",
  industry: "مطاعم"
};

const supporting = [
  {
    quote: "تقرير الشهر صار لحظي. أشوف ربحية كل فرع من جوالي.",
    name: "نورة الشهري",
    role: "المديرة المالية",
    company: "متاجر لمسة",
    industry: "تجزئة"
  },
  {
    quote: "محاسب معتمد يرد عليّ في نفس اليوم. خدمة محترمة.",
    name: "عبدالعزيز الدوسري",
    role: "الشريك الإداري",
    company: "مكتب الدوسري للمقاولات",
    industry: "مقاولات"
  }
];

export function SocialProof() {
  return (
    <section className="section bg-ivory-100">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">آراء العملاء</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            ٧٥+ منشأة. صفر تأخير.
          </h2>
        </div>

        {/* Hero pull-quote — massive editorial type */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          {/* Oversized decorative quote glyph */}
          <Quote
            className="pointer-events-none absolute -top-8 end-0 h-24 w-24 text-clay-100 sm:h-32 sm:w-32"
            aria-hidden
          />

          <blockquote className="relative font-display text-3xl font-light leading-[1.4] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.35]">
            <span aria-hidden className="text-clay-500">«</span>
            {hero.quote}
            <span aria-hidden className="text-clay-500">»</span>
          </blockquote>

          <figcaption className="mt-10 flex items-center gap-4">
            {/* Editorial separator */}
            <span className="h-px w-12 bg-clay-500" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-bold text-navy">{hero.name}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle mt-1">
                {hero.role} · {hero.company}
              </div>
            </div>
            <span className="ms-auto rounded-full bg-clay-50 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-clay-700 ring-1 ring-clay-100">
              {hero.industry}
            </span>
          </figcaption>
        </motion.figure>

        {/* Supporting quotes — smaller, two-up */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          {supporting.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-ink/10 pt-7"
            >
              <blockquote className="text-base leading-loose text-navy lg:text-lg">
                «{t.quote}»
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-clay-500/60" aria-hidden />
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-navy">
                    {t.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle mt-1">
                    {t.role} · {t.company}
                  </div>
                </div>
                <span className="ms-auto font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                  {t.industry}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
