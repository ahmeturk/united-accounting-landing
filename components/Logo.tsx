import { cn } from "@/lib/utils";

/**
 * Idham brand mark — stylized "إ" letterform: a single confident vertical
 * stroke (the alif body) with a small filled circle below (the hamza).
 * Directly references the brand-name's signature letter, monochromatic,
 * scales to any size. Uses `currentColor` for inversion on dark/light.
 *
 * Use this for favicon, app icon, social share image, or anywhere the
 * full wordmark won't fit. The default <Logo/> exports the wordmark
 * since the marketing page wants the brand name to do the work.
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
      {/* Alif body — vertical stroke */}
      <rect x="28" y="12" width="8" height="34" rx="2" />
      {/* Hamza dot — small filled circle below */}
      <circle cx="32" cy="53" r="3.5" />
    </svg>
  );
}

type LogoProps = {
  /** Show the small Arabic tagline under the wordmark */
  showTagline?: boolean;
  /** Render only the monogram in a navy plate — for tight spaces / icon contexts */
  iconOnly?: boolean;
  className?: string;
};

/**
 * Idham logo — pure wordmark by default (Deloitte-style: bold name + single
 * accent dot, no plate). The wordmark *is* the brand element.
 *
 * Set `iconOnly` to render just the monogram-on-navy-plate (favicon contexts).
 */
export function Logo({
  showTagline = true,
  iconOnly = false,
  className
}: LogoProps) {
  if (iconOnly) {
    return (
      <div
        className={cn(
          "flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy text-white shadow-warm-soft",
          className
        )}
      >
        <Monogram className="h-6 w-6" />
      </div>
    );
  }

  return (
    <div className={cn("leading-tight", className)}>
      {/* Wordmark: heavy إدهام + clay terminal dot.
          flex with default direction in RTL puts the wordmark on the
          right and the dot on the left (= after the word in reading order). */}
      <div className="flex items-end gap-1.5">
        <span className="text-2xl font-bold tracking-tight text-navy leading-none">
          إدهام
        </span>
        <span
          aria-hidden
          className="mb-1.5 h-2.5 w-2.5 rounded-full bg-clay-500"
        />
      </div>
      {showTagline && (
        <div className="mt-1.5 text-[11px] text-ink-muted">
          معنا… حساباتك أسهل
        </div>
      )}
    </div>
  );
}
