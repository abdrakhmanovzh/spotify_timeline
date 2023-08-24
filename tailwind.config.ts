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
        "main-green": "#daffde"
      },
      boxShadow: {
        "login-button-sm": "4px 4px 0 0 #000",
        "login-button": "10px 10px 0 0 #000"
      }
    }
  },
  plugins: []
};
export default config;
