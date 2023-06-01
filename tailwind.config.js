/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        NFont : ['Almarai', "sans-serif"],
        NFonts: ['Dancing Script', 'cursive']
      },
      colors: {
        bodyColor: "#250821",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#12f7ff",
        SecondesignColor: "#292e33",

        blueColor: "#3a6cf4",

      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      borderRadius: {

        bor: '56% 44% 68% 47%  ',
        borh:'73% 24% 56% 97% '

      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'htmll': 'htmll 10s'
      },
      keyframes: {
        htmll: {
          '0%': { width: '0%' },
          '100%': {width: '90%' },
        }
      },
      inset: {
        '3px': '10px',
      }
    
    },
  },
  plugins: [],
};