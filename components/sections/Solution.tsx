"use client";

import { motion } from "framer-motion";
import { Sparkles, UserCheck, LineChart } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    eyebrow: "الطبقة الأولى",
    title: "AI يتولى المتكرر",
    bullets: ["OCR للفواتير", "مطابقة بنكية تلقائية", "إقرارات ضريبية مهيأة"]
  },
  {
    icon: UserCheck,
    eyebrow: "الطبقة الثانية",
    title: "محاسب SOCPA للمعقّد",
    bullets: [
      "استشارات مالية وضريبية",
      "قوائم موقعة من محاسب قانوني",
      "تمثيل أمام الجهات الحكومية"
    ]
  },
  {
    icon: LineChart,
    eyebrow: "الطبقة الثالثة",
    title: "أنت تعرف وضعك لحظياً",
    bullets: ["تقارير لحظية", "تنبيهات ذكية", "توقعات تدفق نقدي"]
  }
];

export function Solution() {
  return (
    <section className="section bg-sand-50">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">الحل</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            ثلاث طبقات. تشتغل لحالها.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card card-hover relative flex flex-col p-7 lg:p-8"
            >
              {/* Number watermark */}
              <span className="font-latin pointer-events-none absolute end-6 top-6 text-6xl font-bold text-navy/5 select-none">
                0{i + 1}
              </span>

              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-100">
                <p.icon className="h-6 w-6" />
              </div>

              <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-teal-700">
                {p.eyebrow}
              </div>
              <h3 className="mt-2 text-xl font-bold leading-snug text-navy">
                {p.title}
              </h3>

              <ul className="mt-6 space-y-2 border-t border-ink/8 pt-5">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-navy"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
