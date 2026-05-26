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
        bg:      "#0B0F1A",
        bg2:     "#111827",
        bg3:     "#1a2235",
        orange:  { DEFAULT: "#F97316", light: "#FB923C", dark: "#EA580C" },
        blue:    { DEFAULT: "#2563EB", light: "#3B82F6", pale: "#60A5FA" },
      },
      fontFamily: {
        syne:  ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
