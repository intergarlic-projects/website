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
        background: "var(--background)",
        foreground: "var(--foreground)",

        bgBlack: "#09090B",
        bgBlue: "#0F172A",
        txtLight: "#FFFFFF",
        txtDark: "#A4ABB7",
        orange: "#FF6B35",
        blue: "#3B82F6"

      },
    },
  },
  plugins: [],
};
export default config;
