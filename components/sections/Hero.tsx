"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, PlayCircle, Sparkles, TrendingUp } from "lucide-react";

const userMessage = "كم ربحي هذا الشهر؟";
const aiReply =
  "ربحك الصافي ٤٧,٢٠٠ ر.س — أعلى ١٢٪ من الشهر الماضي. الزيادة جاءت من قسم المبيعات الإلكترونية.";

export function Hero() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? aiReply : "");
  const [showChart, setShowChart] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i += 1;
        setTyped(aiReply.slice(0, i));
        if (i >= aiReply.length) {
          clearInterval(id);
          setShowChart(true);
        }
      }, 28);
    }, 1200);
    return () => clearTimeout(start);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden />
      {/* Soft sand wash bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-sand-50"
        aria-hidden
      />

      <div className="container-prose relative grid grid-cols-1 items-center gap-12 pt-12 pb-24 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-32">
        {/* Copy column — first in DOM, sits on the right in RTL */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>الجيل الجديد من المحاسبة السعودية</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-hero-sm sm:text-hero-md lg:text-hero-lg font-bold tracking-tight text-navy"
          >
            محاسبتك
            <span className="text-teal-600"> تشتغل </span>
            لحالها.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-loose text-ink-muted sm:text-xl"
          >
            أول منصة محاسبية ذكية في المملكة، مبنية على الذكاء الاصطناعي
            ومدعومة بمحاسبين سعوديين معتمدين.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              ابدأ تجربة مجانية
              <ArrowLeft className="h-4 w-4" />
            </a>
            <a href="#how" className="btn-secondary">
              <PlayCircle className="h-4 w-4" />
              شاهد كيف تعمل
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-sm text-ink-muted"
          >
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
              ZATCA Phase 2
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
              SOCPA معتمد
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
              ٧٥+ منشأة
            </div>
          </motion.div>
        </div>

        {/* Chat mock — left in RTL */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6"
        >
          <div className="relative mx-auto w-full max-w-xl">
            {/* Floating stat badge */}
            <div className="absolute -top-6 start-4 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-lift ring-1 ring-navy/5">
              <TrendingUp className="h-4 w-4 text-teal-500" />
              <span>+١٢٪ هذا الشهر</span>
            </div>

            <div className="card overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-navy/5 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <Sparkles className="h-3.5 w-3.5 text-teal-500" />
                  <span>المساعد الذكي</span>
                </div>
              </div>

              <div className="space-y-4 px-5 py-6">
                {/* User bubble */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-navy px-4 py-3 text-white">
                    <p className="text-sm leading-relaxed">{userMessage}</p>
                  </div>
                </div>

                {/* AI bubble */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-teal-50 ring-1 ring-teal-100">
                    <Sparkles className="h-4 w-4 text-teal-600" />
                  </div>
                  <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-sand-100 px-4 py-3 text-navy">
                    <p className="text-sm leading-relaxed min-h-[3.5rem]">
                      {typed}
                      {!showChart && (
                        <span className="ms-0.5 inline-block h-4 w-[2px] translate-y-1 bg-navy/60 animate-blink" />
                      )}
                    </p>

                    {/* Inline chart */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={
                        showChart
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 0, height: 0 }
                      }
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden"
                    >
                      <MiniChart />
                    </motion.div>
                  </div>
                </div>

                {/* Suggestions */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "أرني تقرير المبيعات",
                    "كم المصروفات الثابتة؟",
                    "حضّر إقرار ZATCA"
                  ].map((s) => (
                    <button
                      key={s}
                      className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-teal-300 hover:text-teal-700"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating reply card */}
            <div className="absolute -bottom-6 end-4 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift ring-1 ring-navy/5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                ✓
              </div>
              <div className="leading-tight">
                <div className="text-xs text-ink-muted">إقرار ZATCA</div>
                <div className="text-sm font-semibold text-navy">
                  جاهز للإرسال
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniChart() {
  // Mock monthly profit bars — values in arbitrary units
  const bars = [38, 42, 36, 44, 41, 48, 47];
  const max = Math.max(...bars);
  const months = ["د", "ن", "أ", "س", "أ", "ي", "م"];

  return (
    <div className="mt-3 rounded-xl bg-white p-3 ring-1 ring-navy/5">
      <div className="flex items-end gap-1.5 h-20">
        {bars.map((v, i) => {
          const isLast = i === bars.length - 1;
          const heightPct = (v / max) * 100;
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="relative flex w-full flex-1 items-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPct}%` }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className={`w-full rounded-md ${
                    isLast ? "bg-teal-500" : "bg-navy/15"
                  }`}
                />
              </div>
              <span className="text-[10px] text-ink-subtle">{months[i]}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-ink-muted">آخر ٧ أشهر</span>
        <span className="font-semibold text-teal-700">٤٧,٢٠٠ ر.س</span>
      </div>
    </div>
  );
}
