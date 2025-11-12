/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(99 102 241 / .12), 0 10px 40px rgb(79 70 229 / .25)",
      },
      backgroundImage: {
        radial:
          "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,.25), rgba(14,165,233,.15) 35%, rgba(255,255,255,0) 70%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        reveal: {
          "0%": { opacity: 0, transform: "translateY(12px) scale(.98)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.2s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 10s linear infinite",
        reveal: "reveal .5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
