import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Sans_Arabic,
  IBM_Plex_Sans,
  Fraunces,
  JetBrains_Mono
} from "next/font/google";
import "./globals.css";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap"
});

const plexLatin = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-latin",
  display: "swap"
});

// Editorial display serif — variable font, used for English numerals/accents.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap"
});

// Tabular figures + technical labels — the "futuristic precision" cue
const jbm = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbm",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unitedaccounting.sa"),
  title: {
    default: "United Accounting — معنا… حساباتك أسهل",
    template: "%s · United Accounting"
  },
  description:
    "أول منصة محاسبية ذكية في المملكة، مبنية على الذكاء الاصطناعي ومدعومة بمحاسبين سعوديين معتمدين. متوافقة مع ZATCA Phase 2 وSOCPA.",
  keywords: [
    "محاسبة",
    "ذكاء اصطناعي",
    "ZATCA",
    "SOCPA",
    "السعودية",
    "محاسبة سحابية",
    "United Accounting",
    "يونايتد للمحاسبة"
  ],
  openGraph: {
    title: "United Accounting — معنا… حساباتك أسهل",
    description:
      "أول منصة محاسبية ذكية في المملكة، مبنية على الذكاء الاصطناعي ومدعومة بمحاسبين سعوديين معتمدين.",
    type: "website",
    locale: "ar_SA"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#0B1E3F",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${plexArabic.variable} ${plexLatin.variable} ${fraunces.variable} ${jbm.variable}`}
    >
      <body className="bg-ivory-100 text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
