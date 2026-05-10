"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, FileClock, EyeOff } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "ساعات في إدخال فواتير يدوي",
    metric: "−١٢ ساعة / أسبوع"
  },
  {
    icon: AlertTriangle,
    title: "تأخر ZATCA = غرامة ٥٠,٠٠٠ ر.س",
    metric: "غرامة محتملة"
  },
  {
    icon: FileClock,
    title: "تقرير الشهر يوصلك متأخر ٢٠ يوم",
    metric: "+٢٠ يوم تأخير"
  },
  {
    icon: EyeOff,
    title: "ربحيتك الحقيقية مجهولة طول السنة",
    metric: "صفر رؤية"
  }
];

export function Problem() {
  return (
    <section id="platform" className="section bg-ivory-100">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">الواقع اليوم</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            معاناة كل صاحب اعمال في السعودية.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card card-hover p-6"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-clay-50 text-clay-500 ring-1 ring-clay-100">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold leading-relaxed text-navy">
                {p.title}
              </h3>
              <div className="mt-4 inline-flex items-center text-xs font-semibold text-clay-500">
                {p.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
