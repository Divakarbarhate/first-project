import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        // black: "#000",
        dark: "#1D2430",
        primary: "#023F40",
        secondary: "#05F228",
        yellow: "#FBB040",
        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {
          // ...colors.gray,
          // dark: "#1E232E",
          navy: "#0d1717",
          dark: "#000",
          primary: "rgb(0 23 24)",
          light: "#F0F2F9",
        },
      
      },
      dark: {
        
      }
    },
  },
  plugins: [],
};
export default config;
