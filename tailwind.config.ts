import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      },
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E3F",
          50: "#F2F4F8",
          100: "#E1E6EF",
          200: "#B8C2D5",
          300: "#8898B5",
          400: "#4F628A",
          500: "#1F345E",
          600: "#0B1E3F",
          700: "#091833",
          800: "#061226",
          900: "#040C1A"
        },
        teal: {
          DEFAULT: "#14B8A6",
          50: "#EFFCFA",
          100: "#CFF6F0",
          200: "#A0EDE1",
          300: "#5BD9C5",
          400: "#2BC5AE",
          500: "#14B8A6",
          600: "#0E9587",
          700: "#0C766B",
          800: "#0A5E55",
          900: "#073F39"
        },
        sand: {
          DEFAULT: "#F5F1EA",
          50: "#FBF9F5",
          100: "#F5F1EA",
          200: "#EBE3D3",
          300: "#DCCFB5",
          400: "#C5B188",
          500: "#A8915F"
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#5A5A5A",
          subtle: "#8A8A8A"
        }
      },
      fontFamily: {
        sans: [
          "var(--font-plex-arabic)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif"
        ],
        latin: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      fontSize: {
        // Generous Arabic line heights
        "hero-sm": ["2.5rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "hero-md": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "hero-lg": ["4.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }]
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,30,63,0.04), 0 4px 16px rgba(11,30,63,0.06)",
        lift: "0 4px 12px rgba(11,30,63,0.06), 0 16px 40px rgba(11,30,63,0.08)",
        glow: "0 0 0 1px rgba(20,184,166,0.18), 0 12px 32px rgba(20,184,166,0.18)"
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(11,30,63,0.08) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(1200px 600px at 80% -10%, rgba(20,184,166,0.10), transparent 60%), radial-gradient(800px 400px at 10% 110%, rgba(11,30,63,0.06), transparent 60%)"
      },
      backgroundSize: {
        "dot-grid": "22px 22px"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "marquee": "marquee 35s linear infinite",
        "blink": "blink 1s steps(2) infinite"
      }
    }
  },
  plugins: []
};

export default config;
