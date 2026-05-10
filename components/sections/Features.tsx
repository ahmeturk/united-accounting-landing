"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  Receipt,
  MessageSquareText,
  Database,
  Building2,
  Users,
  Sparkles,
  Check,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section id="features" className="section bg-ivory-100">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">المميزات</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            كل ما تحتاجه. في منصة واحدة.
          </h2>
        </div>

        {/* Bento grid: 3-col on lg, 2-col on md, 1-col on mobile */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* Row 1 */}
          <BentoCard span={2} className="lg:row-span-1">
            <CardHeader
              icon={ScanLine}
              badge="AI"
              title="محاسبة ذاتية"
              tagline="OCR · تصنيف تلقائي · مطابقة بنكية"
            />
            <OCRDemo />
          </BentoCard>

          <BentoCard>
            <CardHeader
              icon={Receipt}
              badge="متوافق"
              title="ZATCA Phase 2"
              tagline="فواتير موقّعة · إقرارات مهيأة"
            />
            <ZatcaBadge />
          </BentoCard>

          {/* Row 2 */}
          <BentoCard>
            <CardHeader
              icon={Database}
              badge="مؤسسي"
              title="عمق ERP"
              tagline="مخزون · مراكز تكلفة · فروع"
            />
            <BranchPills />
          </BentoCard>

          <BentoCard span={2}>
            <CardHeader
              icon={MessageSquareText}
              badge="محادثة"
              title="مستشار بالعربي"
              tagline="اسأل بياناتك. تجاوبك بأرقام."
            />
            <ChatDemo />
          </BentoCard>

          {/* Row 3 */}
          <BentoCard>
            <CardHeader
              icon={Building2}
              badge="مدمج"
              title="تكاملات حكومية"
              tagline="مزامنة لحظية مع الجهات السعودية"
            />
            <GovIntegrations />
          </BentoCard>

          <BentoCard span={2}>
            <CardHeader
              icon={Users}
              badge="بشري"
              title="محاسبون SOCPA"
              tagline="محاسب معتمد جاهز للرد"
            />
            <SocpaRoster />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── BENTO PRIMITIVES ─────────────── */

function BentoCard({
  children,
  span,
  className
}: {
  children: React.ReactNode;
  span?: 2;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-ivory-50 p-7 ring-1 ring-ink/5 shadow-warm-soft transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-warm-lift hover:ring-ink/10",
        span === 2 && "lg:col-span-2",
        className
      )}
    >
      {children}
    </article>
  );
}

function CardHeader({
  icon: Icon,
  badge,
  title,
  tagline
}: {
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  title: string;
  tagline: string;
}) {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-clay-50 text-clay-500 ring-1 ring-clay-100 transition-colors group-hover:bg-clay-100">
          <Icon className="h-5 w-5" />
        </div>
        {/* Badge — drop tracking/uppercase since most badges are Arabic */}
        <span className="font-mono text-[10px] font-semibold text-ink-subtle">
          {badge}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
      <p className="mt-1 text-xs text-ink-muted">{tagline}</p>
    </>
  );
}

/* ─────────────── MINI-UI DEMOS ─────────────── */

/**
 * OCR Demo — animated invoice scan with field-extraction reveal.
 */
function OCRDemo() {
  return (
    <div className="mt-6 flex-1">
      <div className="relative overflow-hidden rounded-xl bg-ivory-100 ring-1 ring-ink/8 p-5">
        {/* Mock invoice */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
              INVOICE · #٢٠٢٦-٠٤١٢
            </span>
            <span className="font-mono text-[10px] text-ink-subtle">PDF</span>
          </div>
          <div className="h-1.5 w-2/3 rounded-full bg-ink/10" />
          <div className="h-1.5 w-1/2 rounded-full bg-ink/10" />
          <div className="h-1.5 w-3/5 rounded-full bg-ink/10" />
        </div>

        {/* Scan line — sweeps top→bottom */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 80, opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.6, ease: "linear", delay: 0.3 }}
          className="absolute inset-x-3 h-[2px] rounded-full bg-gradient-to-r from-transparent via-clay-500 to-transparent shadow-[0_0_12px_rgba(198,107,61,0.6)]"
          aria-hidden
        />

        {/* Extracted fields */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { label: "Total", value: "٤,٢٠٠ ر.س" },
            { label: "VAT", value: "٦٣٠ ر.س" },
            { label: "Vendor", value: "النور" }
          ].map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
              className="rounded-lg bg-ivory-50 ring-1 ring-ink/5 px-2.5 py-2"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-subtle">
                {f.label}
              </div>
              <div className="num-mono text-xs font-semibold text-navy mt-0.5 truncate">
                {f.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * ZATCA Submission Badge — pulsing live indicator + filing summary.
 */
function ZatcaBadge() {
  return (
    <div className="mt-6 flex flex-1 flex-col justify-end">
      <div className="rounded-xl bg-ivory-100 ring-1 ring-ink/8 p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
            VAT Q2 2026
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-70 animate-pulse-soft" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
          </span>
        </div>
        <div className="num-mono mt-3 text-xl font-semibold text-navy">
          ١٢,٤٠٠ ر.س
        </div>
        <div className="mt-3 flex items-center gap-1.5 rounded-md bg-teal-50 px-2 py-1.5 text-[11px] font-semibold text-teal-700">
          <Check className="h-3 w-3" strokeWidth={3} />
          مُرسَل تلقائياً · ٠٥ يوليو
        </div>
      </div>
    </div>
  );
}

/**
 * Branch Pills — multi-branch ERP capability shown as live KPI pills.
 */
function BranchPills() {
  const branches = [
    { name: "الرياض", revenue: "١٢٤K", trend: "+٨٪" },
    { name: "جدة", revenue: "٩٢K", trend: "+١٤٪" },
    { name: "الدمام", revenue: "٤٧K", trend: "−٢٪" }
  ];
  return (
    <div className="mt-6 space-y-2">
      {branches.map((b, i) => (
        <motion.div
          key={b.name}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex items-center justify-between rounded-lg bg-ivory-100 px-3 py-2 ring-1 ring-ink/5"
        >
          <span className="text-xs font-medium text-navy">{b.name}</span>
          <div className="flex items-center gap-2">
            <span className="num-mono text-xs text-ink-muted">
              {b.revenue}
            </span>
            <span
              className={cn(
                "num-mono text-[10px] font-semibold",
                b.trend.startsWith("−") ? "text-rose-500" : "text-teal-700"
              )}
            >
              {b.trend}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Chat Demo — Arabic Q&A with a live answer.
 */
function ChatDemo() {
  return (
    <div className="mt-6 flex-1 space-y-3">
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-navy px-4 py-2.5 text-sm text-white">
          كم نسبة نمو المبيعات الربع الحالي؟
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-clay-50 ring-1 ring-clay-100 text-clay-500">
          <Sparkles className="h-3.5 w-3.5" />
        </div>
        <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-ivory-100 px-4 py-2.5 text-sm text-navy">
          <span>المبيعات نمت بـ </span>
          <span className="num-mono font-semibold text-clay-500">+١٨٪</span>
          <span> مقارنةً بالربع الماضي. الزيادة الأكبر من فرع الرياض.</span>
        </div>
      </div>
      {/* Tiny suggestion chips */}
      <div className="flex gap-1.5 pt-1">
        {["كم المصروفات؟", "تقرير الربحية", "حضّر ZATCA"].map((s) => (
          <span
            key={s}
            className="rounded-full bg-ivory-100 px-2.5 py-1 text-[10px] text-ink-muted ring-1 ring-ink/5"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Government Integrations — live sync ticks.
 */
function GovIntegrations() {
  const services = ["GOSI", "مدد", "قوى", "مقيم"];
  return (
    <div className="mt-6 grid grid-cols-2 gap-2">
      {services.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="flex items-center gap-2 rounded-lg bg-ivory-100 px-3 py-2.5 ring-1 ring-ink/5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-60 animate-pulse-soft" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500" />
          </span>
          <span className="text-xs font-medium text-navy">{s}</span>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * SOCPA Roster — three avatar circles + availability indicator.
 */
function SocpaRoster() {
  const accountants = [
    { name: "أ. سلمان", initials: "س" },
    { name: "أ. منى", initials: "م" },
    { name: "أ. فهد", initials: "ف" }
  ];
  return (
    <div className="mt-6 flex flex-1 items-end justify-between gap-4">
      <div className="flex items-center -space-x-3 -space-x-reverse">
        {accountants.map((a) => (
          <div
            key={a.name}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sand-200 to-clay-100 ring-2 ring-ivory-50 text-sm font-semibold text-navy"
          >
            {a.initials}
          </div>
        ))}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory-100 ring-2 ring-ivory-50 font-mono text-[10px] font-semibold text-ink-muted">
          +١٢
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <div className="flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-60 animate-pulse-soft" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500" />
          </span>
          متاحون الآن
        </div>
        <span className="font-mono text-[10px] text-ink-subtle">
          متوسط الرد: ٤ دقائق
        </span>
      </div>
    </div>
  );
}
