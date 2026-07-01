import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-alt": "var(--paper-alt)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        muted: "var(--muted)",
        line: "var(--line)",
        teal: "var(--teal)",
        "teal-deep": "var(--teal-deep)",
        correct: "var(--correct)",
        "correct-soft": "var(--correct-soft)",
        wrong: "var(--wrong)",
        "wrong-soft": "var(--wrong-soft)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(26,43,51,0.04), 0 12px 32px -12px rgba(26,43,51,0.18)",
        lift: "0 2px 4px rgba(26,43,51,0.06), 0 20px 48px -16px rgba(26,43,51,0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
