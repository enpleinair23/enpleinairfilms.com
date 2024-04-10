/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './**/*.{html,js}'],
  theme: {
    screens:{
      'large': {'max': '1600px'},
      'middle': {'max': '1040px'},
      'small': {'max': '768px'},
      'laptop': {'max': '1390px'},
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      prata: ['Prata', 'serif'],
      haviland: ['Mr De Haviland', 'cursive'],
  },
  },
}
