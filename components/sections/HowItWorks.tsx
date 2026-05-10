"use client";

import { motion } from "framer-motion";
import { Plug, Bot, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Plug,
    n: "١",
    title: "اربط بنكك وفواتيرك",
    micro: "٥ دقائق"
  },
  {
    icon: Bot,
    n: "٢",
    title: "AI يصنّف ويسجّل تلقائياً",
    micro: "تلقائي"
  },
  {
    icon: BarChart3,
    n: "٣",
    title: "تقاريرك لحظية. محاسبك متاح.",
    micro: "لحظي"
  }
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
          {/* Horizontal connector — desktop */}
          <div
            className="absolute inset-x-12 top-9 hidden h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent lg:block"
            aria-hidden
          />

          <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="card card-hover relative flex flex-col items-center p-8 text-center">
                  {/* Step circle */}
                  <div className="relative z-10 -mt-14 flex h-16 w-16 items-center justify-center rounded-full bg-white ring-4 ring-sand-50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white font-latin text-lg font-bold shadow-lift">
                      <span className="nums-ar">{s.n}</span>
                    </div>
                  </div>

                  <div className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <s.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug text-navy">
                    {s.title}
                  </h3>

                  <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    {s.micro}
                  </span>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
