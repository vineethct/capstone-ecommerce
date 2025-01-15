import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
	colors : {
		primary : "#f6e8ea",
		primaryAccent : "#E1D2D5",
		secondary : "#ef626c",
		primaryDark : "#22181C",
		secondaryDark : "#312F2F",
		tertiary : "#84DCCF",
	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
