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
        // Warm paper canvas — replaces pure white throughout
        ivory: {
          50: "#FDFBF7",
          100: "#FAF6EF",
          200: "#F2EBDD",
          300: "#E8DEC9"
        },
        // Terracotta accent — Najdi mud-brick reference, used sparingly
        clay: {
          50: "#FCF3EC",
          100: "#F7E2D2",
          300: "#E5A88A",
          500: "#C66B3D",
          700: "#9A4C26"
        },
        // Warm-tinted neutrals (replaces cool grays)
        ink: {
          DEFAULT: "#1A1812",
          muted: "#5C564B",
          subtle: "#9C9384"
        }
      },
      fontFamily: {
        sans: [
          "var(--font-plex-arabic)",
          "var(--font-plex-latin)",
          "system-ui",
          "sans-serif"
        ],
        latin: ["var(--font-plex-latin)", "system-ui", "sans-serif"],
        // Editorial serif — used for English numerals, brand-like accents
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        // Tabular figures, technical labels — the "futuristic" cue
        mono: ["var(--font-jbm)", "ui-monospace", "monospace"]
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
        glow: "0 0 0 1px rgba(20,184,166,0.18), 0 12px 32px rgba(20,184,166,0.18)",
        // Warm-tinted shadows — pair with ivory canvas
        "warm-soft":
          "0 1px 2px rgba(45,30,15,0.04), 0 4px 14px rgba(45,30,15,0.05)",
        "warm-lift":
          "0 6px 16px rgba(45,30,15,0.06), 0 20px 48px rgba(45,30,15,0.08)",
        "warm-glow":
          "0 0 0 1px rgba(198,107,61,0.18), 0 12px 32px rgba(198,107,61,0.20)",
        // Editorial paper feel — inset highlight + soft shadow
        paper:
          "inset 0 1px 0 rgba(255,255,255,0.65), 0 1px 2px rgba(45,30,15,0.04), 0 8px 24px rgba(45,30,15,0.06)"
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(11,30,63,0.08) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(1200px 600px at 80% -10%, rgba(20,184,166,0.10), transparent 60%), radial-gradient(800px 400px at 10% 110%, rgba(11,30,63,0.06), transparent 60%)",
        // Warm aurora — terracotta + teal + sand washes for ivory canvases
        "warm-aurora":
          "radial-gradient(900px 500px at 88% -10%, rgba(198,107,61,0.10), transparent 60%), radial-gradient(700px 500px at 8% 100%, rgba(20,184,166,0.07), transparent 60%), radial-gradient(500px 400px at 100% 100%, rgba(220,207,181,0.45), transparent 70%)",
        // Najdi-inspired hairline grid (very subtle)
        "najdi-grid":
          "linear-gradient(to right, rgba(26,24,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,24,18,0.05) 1px, transparent 1px)"
      },
      backgroundSize: {
        "dot-grid": "22px 22px",
        "najdi-grid": "88px 88px"
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
        },
        "pulse-soft": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(20,184,166,0.55)"
          },
          "70%": {
            opacity: "0.85",
            boxShadow: "0 0 0 8px rgba(20,184,166,0)"
          }
        },
        "draw-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "marquee": "marquee 35s linear infinite",
        "blink": "blink 1s steps(2) infinite",
        "pulse-soft": "pulse-soft 2.4s ease-out infinite",
        "draw-line": "draw-line 0.9s cubic-bezier(0.22,1,0.36,1) both"
      }
    }
  },
  plugins: []
};

export default config;
