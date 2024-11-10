import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        gray: 'rgb(51, 51, 51)',
        lightGreen: 'rgb(216, 223, 208)',
      },
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'sans-serif'],
        secondary: ['Dela Gothic One', 'sans-serif'],
        third: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
