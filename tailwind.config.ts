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
        background: "#F7F7F3",
        surface: {
          DEFAULT: "#FAFAF8",
          subtle: "#F2F1EC",
          warm: "#FAF9F5",
          white: "#FFFFFF",
        },
        charcoal: {
          DEFAULT: "var(--text-charcoal, #111119)",
          deep: "var(--text-charcoal-deep, #0A0A0F)",
          soft: "var(--text-charcoal-soft, #383848)",
          muted: "var(--text-charcoal-muted, #5C5C70)",
          faded: "var(--text-charcoal-faded, #828296)",
          border: "var(--border-subtle, rgba(0, 0, 0, 0.08))",
        },
        brand: {
          DEFAULT: "#F43F5E",
          hover: "#E11D48",
          light: "#FDA4AF",
          subtle: "rgba(244, 63, 94, 0.12)",
        },
        calm: {
          coral: "#E26D5C",
          peach: "#F9D5A7",
          lavender: "#B8A9C9",
          lavenderLight: "#F2EEF9",
          mist: "#A8C5DA",
          mistLight: "#EDF4F9",
          sage: "#9EB79E",
          sageLight: "#F0F5F0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "SF Pro Text", "SF Pro Display", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SF Mono", "monospace"],
      },
      boxShadow: {
        calm: "0 2px 20px -2px rgba(17, 17, 25, 0.04), 0 1px 4px -1px rgba(17, 17, 25, 0.02)",
        float: "0 12px 36px -4px rgba(17, 17, 25, 0.06), 0 4px 16px -2px rgba(17, 17, 25, 0.03)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.04)",
        glow: "0 0 60px -10px rgba(242, 101, 34, 0.15)",
        "glow-lavender": "0 0 60px -10px rgba(184, 169, 201, 0.2)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
