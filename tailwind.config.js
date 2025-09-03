/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        indium: {
          500: '#6366f1', // This will fix the typo in your component
        }
      }
    },
  },
  plugins: [],
}
