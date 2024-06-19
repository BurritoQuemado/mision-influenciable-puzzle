/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        principal: '#35FBFD',
        contraste: '#65a890',
        resalto: '#a43722'
      },
      backgroundImage: {
        'main': "url('./assets/images/background.webp')",
        'conoce': "url('./assets/images/boton-conoce.webp')",
        'archivo': "url('./assets/images/boton-archivo.webp')",
        'pistas': "url('./assets/images/boton-pistas.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}
