import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://idham.sa"),
  title: {
    default: "إدهام — محاسبتك تشتغل لحالها",
    template: "%s · إدهام"
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
    "إدهام",
    "IDHAM"
  ],
  openGraph: {
    title: "إدهام — محاسبتك تشتغل لحالها",
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
      className={`${plexArabic.variable} ${inter.variable}`}
    >
      <body className="bg-white text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
