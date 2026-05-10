"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Lock, AtSign } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ivory-100">
      {/* Atmospheric layers — same as Hero */}
      <div className="absolute inset-0 bg-warm-aurora" aria-hidden />
      <div className="absolute inset-0 bg-najdi opacity-60" aria-hidden />

      <div className="container-prose relative flex min-h-screen flex-col">
        {/* Top bar — back to home */}
        <div className="flex items-center justify-between py-6">
          <Link
            href="/"
            aria-label="إدهام — الصفحة الرئيسية"
            className="transition-transform hover:scale-[1.02]"
          >
            <Logo variant="dark" showTagline={false} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-navy"
          >
            <ArrowRight className="h-4 w-4" />
            العودة للرئيسية
          </Link>
        </div>

        {/* Centered card */}
        <div className="flex flex-1 items-center justify-center pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md"
          >
            {/* Editorial top accent rule */}
            <div className="mx-auto mb-6 h-px w-16 bg-clay-500" aria-hidden />

            {/* Card */}
            <div className="rounded-3xl bg-ivory-50 p-8 ring-1 ring-ink/8 shadow-warm-lift sm:p-10">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-navy sm:text-3xl">
                  مرحباً بعودتك
                </h1>
                <p className="mt-2 text-sm text-ink-muted">
                  سجّل الدخول إلى حسابك في إدهام
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 space-y-4"
              >
                <Field
                  icon={AtSign}
                  type="email"
                  label="البريد الإلكتروني"
                  placeholder="name@company.sa"
                  autoComplete="email"
                />
                <Field
                  icon={Lock}
                  type="password"
                  label="كلمة المرور"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  trailing={
                    <a
                      href="#forgot"
                      className="text-xs font-medium text-clay-500 hover:text-clay-700"
                    >
                      نسيت كلمة المرور؟
                    </a>
                  }
                />

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  تسجيل الدخول
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-ink-subtle">
                <span className="h-px flex-1 bg-ink/10" />
                أو
                <span className="h-px flex-1 bg-ink/10" />
              </div>

              {/* Create account link */}
              <p className="text-center text-sm text-ink-muted">
                ليس لديك حساب؟{" "}
                <a
                  href="#signup"
                  className="font-semibold text-navy underline decoration-clay-500/60 decoration-[2px] underline-offset-[4px] hover:decoration-clay-500"
                >
                  أنشئ حسابك الآن
                </a>
              </p>
            </div>

            {/* Below-card compliance strip */}
            <div className="mt-8 flex items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
              <span>SOCPA</span>
              <span aria-hidden>·</span>
              <span>ZATCA Phase 2</span>
              <span aria-hidden>·</span>
              <span>RIYADH</span>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

/* ─────────────── FIELD ─────────────── */

function Field({
  icon: Icon,
  label,
  type,
  placeholder,
  autoComplete,
  trailing
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  trailing?: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-medium text-navy">{label}</span>
        {trailing}
      </div>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-ink-subtle">
          <Icon className="h-4 w-4" />
        </span>
        <input
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full rounded-xl bg-ivory-100 ps-10 pe-4 py-3 text-sm text-navy placeholder:text-ink-subtle/70 ring-1 ring-ink/10 transition-all focus:outline-none focus:ring-2 focus:ring-clay-500/40 focus:bg-ivory-50"
        />
      </div>
    </label>
  );
}
