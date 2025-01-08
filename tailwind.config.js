const {
  transform
} = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "10rem",
    },
    extend: {
      transitionProperty: {
        transform: 'transform'
      }

    }
  },
  plugins: [],
};