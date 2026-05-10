"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  Receipt,
  MessageSquareText,
  Database,
  Building2,
  Users
} from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "محاسبة ذاتية",
    badge: "AI",
    body: "OCR · تصنيف تلقائي · مطابقة بنكية."
  },
  {
    icon: Receipt,
    title: "ZATCA Phase 2",
    badge: "متوافق",
    body: "فواتير موقّعة. إقرارات جاهزة."
  },
  {
    icon: MessageSquareText,
    title: "مستشار بالعربي",
    badge: "محادثة",
    body: "اسأل بياناتك. تجاوبك بأرقام."
  },
  {
    icon: Database,
    title: "عمق ERP",
    badge: "مؤسسي",
    body: "مخزون · مراكز تكلفة · فروع."
  },
  {
    icon: Building2,
    title: "تكاملات حكومية",
    badge: "مدمج",
    body: "GOSI · مدد · قوى · مقيم."
  },
  {
    icon: Users,
    title: "محاسبون SOCPA",
    badge: "بشري",
    body: "محاسب معتمد جاهز للرد."
  }
];

export function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">المميزات</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            كل ما تحتاجه. في منصة واحدة.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card card-hover group p-7"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy transition-colors group-hover:bg-teal-50 group-hover:text-teal-600">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="font-latin rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-700">
                  {f.badge}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {f.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
