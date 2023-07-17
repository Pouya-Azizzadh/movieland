/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'max': {'max': '767px'},
      'maxsm': {'max': '437px'},
      "maxlg":{ 'max':'820px'},
      "md" : '767px',
      "ml":'820px',
      'lg':  '1024px',
    },
    colors:{
      "white":"#f5f0f0",
      "black":"#000",
      "yellow":"#fcb900",
      "blue-navy":"#11223d",
      "gray":"#abb8c3"
    },
    extend: {},
  },
  plugins: [],
}