"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "هل المنصة معتمدة من ZATCA؟",
    a: "نعم. معتمدون لمرحلة الربط الثانية. الفواتير موقّعة رقمياً والإقرارات تُرسَل تلقائياً."
  },
  {
    q: "كيف تحمون بياناتي؟",
    a: "بياناتك داخل المملكة. تشفير AES-256 و TLS 1.3. نسخ احتياطي يومي."
  },
  {
    q: "أقدر أنقل بياناتي من نظامي الحالي؟",
    a: "نعم. ترحيل مجاني من Qoyod، Wafeq، Zoho، QuickBooks، Excel. خلال ٣ إلى ٧ أيام."
  },
  {
    q: "هل المحاسب البشري متاح؟",
    a: "محاسبك المخصص: الأحد–الخميس، ٨ ص – ٦ م. الدعم الفني ٢٤/٧."
  },
  {
    q: "كم يستغرق التشغيل؟",
    a: "٢٤ إلى ٤٨ ساعة للمنشآت الصغيرة. ٥ إلى ٧ أيام للمتوسطة."
  },
  {
    q: "هل المنصة مناسبة لقطاعي؟",
    a: "مطاعم، تجزئة، خدمات مهنية، مقاولات، تجارة إلكترونية. لقطاعات أخرى تواصل معنا."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-ivory-100">
      <div className="container-prose">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow">الأسئلة الشائعة</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              أسئلة شائعة.
            </h2>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              ← اسأل سؤالك
            </a>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-ink/10 rounded-2xl bg-ivory-50 ring-1 ring-ink/8 shadow-warm-soft">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start transition-colors hover:bg-sand-50/50"
                    >
                      <span className="text-base font-semibold text-navy sm:text-lg">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-teal-500 text-white"
                            : "bg-navy-50 text-navy"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm leading-loose text-ink-muted">
                            {f.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
