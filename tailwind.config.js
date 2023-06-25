/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "finger-paint": ['"Finger Paint"', "cursive"],
        farro: ["Farro", "sans-serif"],
        hubbali: ["Hubballi", "cursive"],
        inika: ["Inika", "serif"],
      },
    },
  },
  plugins: [],
};
