/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        gray:{
          100:'#eeeeef',
          200:'#e6e9ed',
          600:'#95989c'
        },
        purple: {
          200: "#d9ddee",
          500: "#3e38a7",
          600: "#5046e4"
        }
      }
    },
  },
  plugins: [],
}

