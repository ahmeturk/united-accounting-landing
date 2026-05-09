import { cn } from "@/lib/utils";

/**
 * United Accounting brand mark — interlocking S-monogram inspired by the
 * official lockup. Single source of truth for the brand identity.
 *
 * The monogram uses `currentColor` so it inverts cleanly on dark/light
 * surfaces. Pair with `<Wordmark/>` for the full lockup.
 */
export function Monogram({
  className,
  title = "United Accounting"
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={cn("h-full w-full", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
    >
      <title>{title}</title>
      {/* Top arc — opens to the right */}
      <path d="M44 18 C 44 10, 32 10, 32 18 C 32 26, 44 26, 44 32" />
      {/* Bottom arc — opens to the left, interlocks with the top */}
      <path d="M20 46 C 20 54, 32 54, 32 46 C 32 38, 20 38, 20 32" />
      {/* Centre seam */}
      <path d="M32 18 L 32 46" opacity="0.0" />
    </svg>
  );
}

type LogoProps = {
  /** "dark" = white mark on navy plate, "light" = navy mark on white plate */
  variant?: "dark" | "light";
  /** show wordmark + tagline alongside the monogram */
  showWordmark?: boolean;
  /** show the Arabic tagline under the wordmark */
  showTagline?: boolean;
  className?: string;
};

export function Logo({
  variant = "dark",
  showWordmark = true,
  showTagline = true,
  className
}: LogoProps) {
  const plateClasses =
    variant === "dark"
      ? "bg-navy text-white"
      : "bg-white text-navy ring-1 ring-navy/10";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex h-11 w-11 flex-none items-center justify-center rounded-xl shadow-soft transition-transform",
          plateClasses
        )}
      >
        <Monogram className="h-6 w-6" />
      </div>

      {showWordmark && (
        <div className="leading-tight">
          <div className="font-latin text-[15px] font-light uppercase tracking-[0.18em] text-navy">
            United
            <span className="ms-1.5 font-bold tracking-tight normal-case">
              Accounting
            </span>
          </div>
          {showTagline && (
            <div className="text-[11px] text-ink-muted">
              معنا… حساباتك أسهل
            </div>
          )}
        </div>
      )}
    </div>
  );
}
