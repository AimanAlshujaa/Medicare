import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAFAFA",
          warm: "#F8F5F0",
          pearl: "#F3EDE4",
          nude: "#EAE0D5",
        },
        emerald: {
          deep: "#0F3E36",
          darker: "#092924",
          rich: "#145247",
          soft: "#1E6B5E",
          mist: "#E8F1EF",
        },
        slate: {
          midnight: "#111827",
          charcoal: "#1F2937",
        },
        champagne: {
          DEFAULT: "#D4AF37",
          rose: "#E5C398",
          light: "#F5E6C8",
          muted: "#C5A059",
          dark: "#9E7B2C",
        },
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "var(--font-cairo)", "sans-serif"],
        display: ["var(--font-cairo)", "var(--font-tajawal)", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 50px -12px rgba(15, 62, 54, 0.08)",
        "luxury-hover": "0 25px 60px -12px rgba(212, 175, 55, 0.18)",
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.28)",
        "emerald-glow": "0 12px 32px -8px rgba(15, 62, 54, 0.35)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #D4AF37 0%, #E5C398 50%, #C5A059 100%)",
        "emerald-gradient":
          "linear-gradient(135deg, #0F3E36 0%, #145247 55%, #092924 100%)",
        "pearl-gradient":
          "linear-gradient(180deg, #FAFAFA 0%, #F8F5F0 50%, #F3EDE4 100%)",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatDelayed: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(7px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float-slow": "floatSlow 5s ease-in-out infinite",
        "float-delayed": "floatDelayed 6s ease-in-out infinite 1.5s",
        shimmer: "shimmer 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
