"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, FileClock, EyeOff } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "محاسب يقعد ساعات عشان يدخل فواتير",
    body: "إدخال يدوي لكل فاتورة، ومطابقة بنكية تستهلك أيام من وقت فريقك.",
    accent: "from-rose-50 to-rose-100"
  },
  {
    icon: AlertTriangle,
    title: "تأخر إقرار ZATCA = غرامة محتملة ٥٠,٠٠٠ ر.س",
    body: "أنظمة قديمة لا تواكب متطلبات المرحلة الثانية للفاتورة الإلكترونية.",
    accent: "from-amber-50 to-amber-100"
  },
  {
    icon: FileClock,
    title: "تقرير الشهر يوصلك بعد ٢٠ يوم من نهايته",
    body: "تاخذ قرارات الشهر القادم ببيانات الشهر اللي راح. متأخر دائماً.",
    accent: "from-sky-50 to-sky-100"
  },
  {
    icon: EyeOff,
    title: "ما تعرف ربحيتك الحقيقية إلا في آخر السنة",
    body: "بدون عمق ERP حقيقي، الربحية على مستوى الفرع أو المنتج تبقى غامضة.",
    accent: "from-slate-50 to-slate-100"
  }
];

export function Problem() {
  return (
    <section id="platform" className="section bg-white">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">الواقع اليوم</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            كل صاحب عمل سعودي يعرف هالمعاناة
          </h2>
          <p className="mt-5 text-lg leading-loose text-ink-muted">
            المحاسبة التقليدية ما عادت كافية لإيقاع السوق. هذي أربع مشاكل
            تسمعها كل يوم من أصحاب المنشآت.
          </p>
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
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-navy`}
              >
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold leading-relaxed text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
