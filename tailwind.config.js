/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        farro: ["Farro", "sans-serif"],
        hubbali: ["Hubballi", "cursive"],
        inika: ["Inika", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
