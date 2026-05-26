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
        // Light theme surfaces
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#F8FAFF",
          tertiary: "#F1F5FE",
          card: "#FFFFFF",
        },
        // Borders
        border: {
          DEFAULT: "#E2E8F8",
          strong: "#C7D4F5",
        },
        // Text
        ink: {
          DEFAULT: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
          faint: "#94A3B8",
        },
        // Brand blue (kept same for identity)
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          light: "#3B82F6",
          pale: "#EFF6FF",
          soft: "#DBEAFE",
        },
        // Accent
        accent: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,23,42,0.06), 0 4px 16px rgba(37,99,235,0.06)",
        "card-hover": "0 8px 32px rgba(37,99,235,0.14), 0 2px 8px rgba(15,23,42,0.06)",
        "btn-primary": "0 4px 14px rgba(37,99,235,0.35)",
        "btn-primary-hover": "0 6px 20px rgba(37,99,235,0.5)",
        "nav": "0 1px 0 rgba(226,232,248,1), 0 4px 24px rgba(37,99,235,0.06)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
