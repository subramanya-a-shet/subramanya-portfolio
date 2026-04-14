import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter","sans-serif"],
        display: ["Syne","sans-serif"],
        mono:    ["Fira Code","monospace"],
      },
      colors: {
        bg:     { DEFAULT:"#0f0f0f", 2:"#161616", 3:"#1e1e1e", 4:"#2a2a2a" },
        indigo: { DEFAULT:"#6366f1" },
        gray:   { DEFAULT:"#a1a1aa", 2:"#71717a" },
        white:  { DEFAULT:"#ffffff" },
      },
      screens: { xs:"375px" },
      keyframes: {
        "spring-pop": {
          "0%":   { transform:"scale(0.8)", opacity:"0" },
          "60%":  { transform:"scale(1.08)", opacity:"1" },
          "80%":  { transform:"scale(0.96)" },
          "100%": { transform:"scale(1)" },
        },
      },
      animation: {
        "spring-pop": "spring-pop 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
