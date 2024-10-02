/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ["Fredoka", "sans-serif"],
        'playwrite': ["Playwrite DE Grund", "cursive"],
      },
      backgroundImage: {
        'c-background': "url('/public/bg.jpg')",
       }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}

