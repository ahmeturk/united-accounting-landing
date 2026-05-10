"use client";

import { motion } from "framer-motion";
import { LogIn, ArrowLeft } from "lucide-react";

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
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          حسابك
          <span className="text-teal-300"> ينتظرك.</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-4 text-base font-bold text-white shadow-glow transition-all hover:bg-teal-400 active:scale-[0.98]"
          >
            <LogIn className="h-4 w-4" />
            تسجيل الدخول
          </a>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-4 text-base font-semibold text-white ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/15"
          >
            حساب جديد
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          <span>SOCPA</span>
          <span aria-hidden>·</span>
          <span>ZATCA Phase 2</span>
          <span aria-hidden>·</span>
          <span>RIYADH</span>
        </div>
      </motion.div>
    </section>
  );
}
