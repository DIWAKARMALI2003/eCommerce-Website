/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    fontFamily:{
      gotham:['Gotham pro','sans-serif']
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      xxl:'1590px'
    },




    extend: {},
  },
  plugins: [],
}
