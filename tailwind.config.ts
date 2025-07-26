import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: "#fcf8eb",
          100: "#f9f1d7",
          200: "#f3e2ae",
          300: "#eccf81",
          400: "#e4b654",
          500: "#dea131",
          600: "#cb8126",
          700: "#a55d23",
          800: "#854a25",
          900: "#6d3d23",
        },
      },
    },
  },
  plugins: [],
};
export default config;
