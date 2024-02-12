/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': {'max': '570px'},

      'md': {'max': '768px'},

      'lg': {'max': '1024px'},

      'xl': {'max': '1280px'},

      '2xl': {'max': '1536px'},
    },
    extend: {
      colors: {
        'creme': '#F5F5F4',
        'grey': '#8E8E8E',
        'leired': '#00A8B5'
      }
    }
  },
  plugins: [],
}

