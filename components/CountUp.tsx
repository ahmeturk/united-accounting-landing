"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

function toArabic(s: string): string {
  return s.replace(/[0-9]/g, (d) => ARABIC_DIGITS[Number(d)]);
}

type Props = {
  value: number;
  /** Render this many decimal places (e.g. 1 → "99.4") */
  decimals?: number;
  /** Animation duration in ms (default 1400) */
  duration?: number;
  /** Delay before animation starts (default 0) */
  delay?: number;
  /** Trigger on mount (Hero) or on scroll-into-view (StatsBand). Default: "view" */
  trigger?: "mount" | "view";
  className?: string;
};

/**
 * Animated number counter with Eastern Arabic digits.
 * - Uses requestAnimationFrame (one timer, 60fps, no Framer overhead).
 * - Honors prefers-reduced-motion: jumps straight to final value.
 * - Tabular figures via the `num-mono` utility on the rendered span.
 */
export function CountUp({
  value,
  decimals = 0,
  duration = 1400,
  delay = 0,
  trigger = "view",
  className = ""
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const shouldStart = trigger === "mount" || inView;
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce || !shouldStart) return;

    let raf = 0;
    let started = false;

    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4); // ease-out-quart
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    const id = setTimeout(() => {
      started = true;
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(id);
      if (started) cancelAnimationFrame(raf);
    };
  }, [shouldStart, value, duration, delay, reduce]);

  const factor = Math.pow(10, decimals);
  const display = (Math.round(n * factor) / factor).toLocaleString("ar-SA", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  // ar-SA locale uses Eastern digits already in modern Node, but coerce
  // explicitly so the output is stable across runtimes.
  const formatted = toArabic(display.replace(/[0-9]/g, (d) => d));

  return (
    <span ref={ref} className={`num-mono ${className}`}>
      {formatted}
    </span>
  );
}
