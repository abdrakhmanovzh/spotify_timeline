import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#bafca2"
      },
      boxShadow: {
        "login-button-sm": "6px 6px 0 0 #000",
        "login-button": "8px 8px 0 0 #000"
      }
    }
  },
  plugins: []
};
export default config;
