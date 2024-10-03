/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    textColor: {
      'bronze': "#AC6748",
      'prata': "#90868E",
      'ouro': "#CDB754",
      'vermelho': "#BD0000",
      'cinza': "#808080",
      'azul': "#0e76a8",
    },
    extend: {
      fontFamily: {
        'roboto': ["Fredoka", "sans-serif"],
        'playwrite': ["Playwrite DE Grund", "cursive"],
      },
      backgroundImage: {
        'c-background': "url('/public/bg.jpg')",
       },
       backgroundColor: {
        'vermelho': "#BD0000",
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

