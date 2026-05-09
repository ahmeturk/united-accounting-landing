"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "هل المنصة معتمدة من ZATCA؟",
    a: "نعم، United Accounting معتمدة بالكامل لمتطلبات الفاتورة الإلكترونية المرحلة الثانية (Integration Phase). نصدر فواتير موقّعة رقمياً ونرسلها لمنصة فاتورة لحظياً، ونحضّر إقرارات ضريبة القيمة المضافة والزكاة بصيغة جاهزة للإرسال."
  },
  {
    q: "كيف تحمون بيانات منشأتي؟",
    a: "بياناتك مستضافة داخل المملكة العربية السعودية على بنية تحتية معتمدة من الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا). نستخدم تشفير AES-256 للبيانات في الراحة وTLS 1.3 أثناء النقل، مع نسخ احتياطية يومية ومتعددة المناطق."
  },
  {
    q: "هل أقدر أنقل بياناتي من نظامي الحالي؟",
    a: "نعم. فريقنا يهجّر بياناتك مجاناً من Qoyod، Wafeq، Zoho Books، QuickBooks، Excel، أو حتى دفاترك الورقية. عملية الترحيل عادة تستغرق ٣ إلى ٧ أيام عمل حسب حجم البيانات."
  },
  {
    q: "هل المحاسب البشري متاح ٢٤/٧؟",
    a: "محاسبك المخصص متاح خلال ساعات العمل (الأحد إلى الخميس، ٨ صباحاً إلى ٦ مساءً). للحالات العاجلة خارج هذه الأوقات، فريق الدعم الفني متاح ٢٤/٧ عبر واتساب والبريد الإلكتروني."
  },
  {
    q: "كم تستغرق عملية التشغيل؟",
    a: "للمنشآت الصغيرة، التشغيل الكامل يستغرق ٢٤ إلى ٤٨ ساعة. للمنشآت المتوسطة مع تكاملات بنكية متعددة وفروع، نتم التشغيل عادة خلال ٥ إلى ٧ أيام عمل."
  },
  {
    q: "هل المنصة مناسبة لقطاعي؟",
    a: "نخدم حالياً مطاعم، تجزئة، خدمات مهنية، مقاولات، ومنشآت تجارية إلكترونية. لو قطاعك متخصص (مثل الطبي أو التعليمي)، تواصل معنا لنوضح لك كيف نغطي متطلبات قطاعك."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-prose">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow">الأسئلة الشائعة</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              أسئلة يسألها أصحاب المنشآت
            </h2>
            <p className="mt-5 text-base leading-loose text-ink-muted">
              ما لقيت سؤالك؟ تواصل معنا مباشرة، فريقنا يرد عليك خلال ساعات
              العمل.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              ← اسأل سؤالك
            </a>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-navy/10 rounded-2xl bg-white ring-1 ring-navy/10 shadow-soft">
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
