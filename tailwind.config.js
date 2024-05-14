/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'BigBoy': ['Montserrat', 'sans-serif'],
      'MediumBoy': ['Maven Pro', 'sans-serif'],
      'SmolBoy': ['Libre Franklin', 'sans-serif']
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

