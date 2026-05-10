import { cn } from "@/lib/utils";

/**
 * Idham brand mark — stepped tower silhouette referencing Najdi mud-brick
 * architecture (e.g. Diriyah). Two stacked rounded blocks, the smaller
 * perched atop and offset toward the start side. Reads simultaneously
 * as architectural form and as modular "data blocks."
 *
 * Uses `currentColor` so it inverts cleanly on dark/light surfaces.
 */
export function Monogram({
  className,
  title = "إدهام"
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
      fill="currentColor"
    >
      <title>{title}</title>
      {/* Larger lower block */}
      <rect x="10" y="30" width="42" height="22" rx="4" />
      {/* Upper block — offset toward the start (right in RTL) */}
      <rect x="30" y="12" width="22" height="18" rx="4" />
    </svg>
  );
}

type LogoProps = {
  /** "dark" = white mark on navy plate, "light" = navy mark on white plate */
  variant?: "dark" | "light";
  showWordmark?: boolean;
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
          "flex h-11 w-11 flex-none items-center justify-center rounded-xl shadow-warm-soft transition-transform",
          plateClasses
        )}
      >
        <Monogram className="h-6 w-6" />
      </div>

      {showWordmark && (
        <div className="leading-tight">
          <div className="text-xl font-bold tracking-tight text-navy">
            إدهام
          </div>
          {showTagline && (
            <div className="text-[11px] text-ink-muted mt-0.5">
              معنا… حساباتك أسهل
            </div>
          )}
        </div>
      )}
    </div>
  );
}
