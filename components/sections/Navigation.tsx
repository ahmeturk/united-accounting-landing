"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#platform", label: "المنصة" },
  { href: "#features", label: "المميزات" },
  { href: "#pricing", label: "الباقات" },
  { href: "#faq", label: "الأسئلة" },
  { href: "#contact", label: "تواصل" }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-navy/5 bg-white/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-prose flex h-16 items-center justify-between sm:h-20">
        {/* Brand — visually first on the right in RTL */}
        <a
          href="#"
          aria-label="United Accounting — الصفحة الرئيسية"
          className="group transition-transform hover:scale-[1.02]"
        >
          <Logo variant="dark" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-navy-50 hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#login" className="btn-primary hidden sm:inline-flex">
            تسجيل الدخول
          </a>
          <button
            className="lg:hidden rounded-xl p-2 text-navy hover:bg-navy-50"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden border-t border-navy/5 bg-white">
          <div className="container-prose flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-navy-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              تسجيل الدخول
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
