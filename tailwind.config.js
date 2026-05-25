/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        surface: "#111113",
        "surface-elevated": "#18181b",
        border: "#27272a",
        muted: "#71717a",
        accent: "#3b82f6",
        "accent-soft": "#60a5fa",
        purple: "#8b5cf6",
        "purple-soft": "#a78bfa",
      },
      boxShadow: {
        "glow-purple": "0 0 24px rgba(139, 92, 246, 0.35)",
        "glow-blue": "0 0 24px rgba(59, 130, 246, 0.35)",
        "card-glow": "0 0 0 1px rgba(139, 92, 246, 0.4), 0 8px 32px rgba(99, 102, 241, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
