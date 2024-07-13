import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Lexend": ["Lexend", "sans-serif"],
        "Lexend-semi": ["Lexend-semi", "sans-serif"],
        "Lexend-light": ["Lexend-light", "sans-serif"],
        "Lexend-medium": ["Lexend-medium", "sans-serif"]
      },
      screens: {
        'xs': '480px', // Custom screen size for extra small devices
        'sm': '640px', // Small devices
        'md': '768px', // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra large devices
        '2xl': '1536px', // Custom screen size for 2x extra large devices
        '3xl': '1920px'
      },
      textIndent: {
        '2em': '2em',
      },
      margin: {
        '2em': '2em',
      }
    },
  },
  plugins: [],
};
export default config;
