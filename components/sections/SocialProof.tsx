"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "وفّرت ٤٠٪ من وقت محاسبتنا في أول شهرين. وأهم شي، إقرار ZATCA يطلع جاهز بدون ما أتابع.",
    name: "خالد العتيبي",
    role: "المالك",
    company: "مطاعم البيت السعودي",
    industry: "مطاعم",
    avatar: "/api/placeholder/64x64?variant=avatar",
    stars: 5
  },
  {
    quote:
      "كنت أنتظر تقرير الشهر ١٥ يوم. الحين أفتح الجوال وأشوف ربحية كل فرع لحظياً. غيّر طريقة قراراتي.",
    name: "نورة الشهري",
    role: "المديرة المالية",
    company: "متاجر لمسة",
    industry: "تجزئة",
    avatar: "/api/placeholder/64x64?variant=avatar",
    stars: 5
  },
  {
    quote:
      "اللي عجبني إن المحاسب البشري متاح. جاوبني على استشارة ضريبية معقدة في نفس اليوم. خدمة محترمة.",
    name: "عبدالعزيز الدوسري",
    role: "الشريك الإداري",
    company: "مكتب الدوسري للمقاولات",
    industry: "مقاولات",
    avatar: "/api/placeholder/64x64?variant=avatar",
    stars: 5
  }
];

export function SocialProof() {
  return (
    <section className="section bg-white">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">آراء العملاء</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            ماذا يقول عملاؤنا
          </h2>
          <p className="mt-5 text-lg leading-loose text-ink-muted">
            ٧٥+ منشأة سعودية تعتمد على إدهام في محاسبتها اليومية. هذه بعض
            تجاربهم.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card card-hover relative flex flex-col p-7"
            >
              <Quote
                className="absolute end-6 top-6 h-8 w-8 text-teal-100"
                aria-hidden
              />

              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.stars }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-5 text-base leading-loose text-navy">
                «{t.quote}»
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/5 pt-5">
                <img
                  src={t.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full ring-2 ring-sand-100"
                />
                <div className="leading-tight">
                  <div className="text-sm font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-ink-muted">
                    {t.role} · {t.company}
                  </div>
                </div>
                <span className="ms-auto rounded-full bg-sand-100 px-2.5 py-1 text-[10px] font-medium text-navy">
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
