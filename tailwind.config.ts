import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#3d348b",
        primaryAccent: "#7678ed",
        secondary: "#f7b801",
        secondaryAccent: "#f18701",
        tertiary: "#f35b04",
        blackAccent: "#333",
      },
    },
  },
  // eslint-disable-next-line unicorn/prefer-module
  plugins: [require("tailwindcss-animate")],
};
export default config;
