import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      colors: {
        accent: "#6366f1",
        "accent-light": "#818cf8",
        bg: { DEFAULT: "#050505", 2: "#0e0e0e", 3: "#141414" },
      },
      screens: { xs: "375px" },
    },
  },
  plugins: [],
};
export default config;
