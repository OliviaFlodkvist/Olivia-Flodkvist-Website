/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",                // Matches HTML files in the root directory
    "./src/**/*.{html,js,css}",// Matches all HTML and JS files in src, includes CSS
  ],
  theme: {
    extend: {
      colors: {
        "pinkk": "#f27a93",
      }
    },
  },
  plugins: [],
};

