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
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.815rem',
      '7xl': '4.768rem',
      '8xl': '5.96rem',
      '9xl': '7.451rem',
      '10xl': '11rem',
    },
    extend: {
      colors: {
        'creme': '#F5F5F4',
        'grey': '#8E8E8E',
        'leired': '#00A8B5'
      }
    },
  },
  plugins: [],
}

