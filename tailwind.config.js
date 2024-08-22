/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rampart: ['Rampart One', 'sans-serif'],
        titillium: ['"Titillium Web"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
