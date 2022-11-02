/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dm' : 'DM Sans',
        'sans' : "Poppins"
      },
      colors:{
        black :"#0b0a12",
        secondary : "#EDECFB",
        primary : "#5143D9"
      },
      boxShadow:{
        'cus' : '0 1rem 3rem rgb(29 58 83 / 15%)',
        'blurest' : '0px 0px 40px rgb(29 58 83 / 10%)' 
      }
    },
  },
  plugins: [],
}
