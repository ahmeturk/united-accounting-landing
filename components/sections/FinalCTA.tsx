"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-24 text-white sm:py-28"
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl"
        aria-hidden
      />
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="container-prose relative text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-200 ring-1 ring-inset ring-white/10">
          <Calendar className="h-3.5 w-3.5" />
          معنا… حساباتك أسهل · ١٥ دقيقة فقط
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          جاهز تخلي محاسبتك
          <br className="hidden sm:block" />
          <span className="text-teal-300"> تشتغل لحالها؟</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-loose text-white/70 sm:text-lg">
          احجز عرض تجريبي مجاني مع أحد متخصصينا. نوريك المنصة على بيانات حقيقية
          لمنشأة شبه منشأتك.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-4 text-base font-bold text-white shadow-glow transition-all hover:bg-teal-400 active:scale-[0.98]"
          >
            احجز عرض تجريبي مجاني — ١٥ دقيقة فقط
            <ArrowLeft className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-4 text-base font-semibold text-white ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/15"
          >
            استكشف المنصة
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />
            بدون بطاقة ائتمان
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />
            تشغيل خلال ٤٨ ساعة
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />
            ترحيل بيانات مجاني
          </div>
        </div>
      </motion.div>
    </section>
  );
}
