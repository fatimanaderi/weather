/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    "colors": colors,
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'pc': '1450px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}