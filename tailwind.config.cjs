/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'img-login': "url('./src/assets/images/svg/bg-login-digiform.svg')",
        'img-security': "url('./src/assets/images/svg/img-secure-login.svg')",
      },
      colors: {
        'blue-digi': '#3497FF',
        'blue-sidebar': '#1D4D8D',
        'orange-digi': 'rgb(255, 165, 0)',
        'white-text': '#ffff'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require("daisyui")],
}
