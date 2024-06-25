/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gloria: ["Gloria Hallelujah", "cursive"],
        blackMango: ["BlackMango", "sans-serif"],
        brigast: ["Brigast", "serif"],
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
