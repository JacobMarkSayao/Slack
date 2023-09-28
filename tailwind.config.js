/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'violet' : '#541554',
        'white' : '#ffffff'
      },
      fontFamily: {
        'Poppins' : 'san-serif',
      }
    },
  },
  plugins: [],
}