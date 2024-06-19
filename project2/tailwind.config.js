/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'sans-bold': ['Montserrat', 'sans-serif'],
      'sans-light': ['Montserrat', 'sans-serif'],
      'sans-medium': ['Montserrat', 'sans-serif'],
      'sans-semibold': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'footer-color': '#303236',
        'button-blue': '#4662C7',
        'hero-text': '#FFFBF2',
        'heading-color': '#252524',
      },
    },
  },
  plugins: [],
}