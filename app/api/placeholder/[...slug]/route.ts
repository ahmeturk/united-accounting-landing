import { NextRequest } from "next/server";

/**
 * Lightweight SVG placeholder service.
 * Usage: /api/placeholder/120x40           → 120x40 logo plate
 *        /api/placeholder/400x300?label=X  → 400x300 with custom label
 *        /api/placeholder/64x64?variant=avatar → soft avatar circle
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const dim = params.slug?.[0] ?? "400x300";
  const [wRaw, hRaw] = dim.split("x");
  const w = Math.min(Math.max(parseInt(wRaw || "400", 10) || 400, 16), 1600);
  const h = Math.min(Math.max(parseInt(hRaw || "300", 10) || 300, 16), 1200);

  const url = new URL(req.url);
  const label = url.searchParams.get("label") ?? "";
  const variant = url.searchParams.get("variant") ?? "default";

  let svg: string;
  if (variant === "avatar") {
    const size = Math.min(w, h);
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E1E6EF"/>
      <stop offset="100%" stop-color="#CFF6F0"/>
    </linearGradient>
  </defs>
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="url(#g)"/>
  <circle cx="${size / 2}" cy="${size * 0.4}" r="${size * 0.18}" fill="#0B1E3F" opacity="0.18"/>
  <path d="M${size * 0.18} ${size} C ${size * 0.18} ${size * 0.7}, ${size * 0.82} ${size * 0.7}, ${size * 0.82} ${size}" fill="#0B1E3F" opacity="0.18"/>
</svg>`;
  } else if (variant === "logo") {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" rx="12" fill="#F2F4F8"/>
  <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="${Math.round(h * 0.38)}" font-weight="600" fill="#8898B5" text-anchor="middle" dominant-baseline="middle">${label || "LOGO"}</text>
</svg>`;
  } else {
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F5F1EA"/>
      <stop offset="100%" stop-color="#E1E6EF"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.12)}" fill="#4F628A" text-anchor="middle" dominant-baseline="middle">${label || `${w}×${h}`}</text>
</svg>`;
  }

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}
