import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary: { DEFAULT: "#2563EB" },
        secondary: { DEFAULT: "#06B6D4" },
        background: {
          light: "#ffffff",
          dark: "#0B1220"
        }
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.12)"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeInUp: "fadeInUp .4s ease-out both"
      }
    }
  },
  plugins: []
};
export default config;


