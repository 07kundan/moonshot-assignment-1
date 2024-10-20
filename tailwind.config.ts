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
        accent: "#E54065",
        background: "#F4F5F9",
        border: "#CFD2DC", 
        text: "#636363", 
        filterButton: "#E1E4EA",
        readBackground: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
export default config;
