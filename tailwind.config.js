/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Update the pattern to include HTML and JS files
    "./src/**/*.js", // This pattern now correctly matches all JavaScript files
  ],
  theme: {
    extend: {
      colors: {
      "pinkk": "#f27a93",
      }
    },
  },
  plugins: [],
}

