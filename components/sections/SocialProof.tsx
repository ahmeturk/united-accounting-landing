"use client";

import { motion } from "framer-motion";

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

        {/* Hero pull-quote — editorial Arabic typography */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          {/* Decorative oversized opening bracket */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 -end-2 select-none text-[8rem] font-light leading-none text-clay-200 sm:-top-12 sm:text-[10rem]"
          >
            «
          </span>

          {/*
            Arabic editorial feel comes from light weight + generous leading,
            NOT serif (Latin-only fonts like Fraunces don't render Arabic).
          */}
          <blockquote className="relative text-2xl font-light leading-[1.7] text-navy sm:text-[1.75rem] sm:leading-[1.7] lg:text-4xl lg:leading-[1.55]">
            {hero.quote}
          </blockquote>

          <figcaption className="mt-10 flex flex-wrap items-center gap-4">
            <span className="h-px w-12 bg-clay-500" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-navy">{hero.name}</div>
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
              <blockquote className="text-base font-light leading-[1.85] text-navy lg:text-lg">
                {t.quote}
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
