import { ShieldCheck, BadgeCheck, FileBadge } from "lucide-react";

const logos = [
  "ARAMCO",
  "STC",
  "SABIC",
  "ALMARAI",
  "JARIR",
  "AJEEX",
  "TAMARA",
  "NOON"
];

const badges = [
  { icon: ShieldCheck, label: "ZATCA Phase 2 Compliant" },
  { icon: BadgeCheck, label: "SOCPA Certified" },
  { icon: FileBadge, label: "متوافق مع نظام الزكاة والضريبة" }
];

export function TrustBar() {
  return (
    <section className="relative bg-sand-50 py-14 sm:py-16">
      <div className="container-prose">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-muted">
          تثق فينا أكثر من <span className="text-navy font-bold">٧٥</span> منشأة سعودية
        </p>

        {/* Logo strip — duplicated for seamless marquee */}
        <div
          className="mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)"
          }}
        >
          <div className="flex w-max animate-marquee gap-12">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-10 min-w-[120px] items-center justify-center rounded-md text-base font-semibold tracking-widest text-navy/35 grayscale transition-all hover:text-navy/60"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Compliance badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-navy ring-1 ring-navy/10 shadow-soft"
            >
              <b.icon className="h-4 w-4 text-teal-600" />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
