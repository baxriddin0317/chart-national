/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#32a932",
          black: {
            DEFAULT:" #2d353c", 
            primary: "#242a30",
            medium: "#22282d"
          },
          gray: {
            DEFAULT: "#f1f3f4", 
            primary: "#6c757d",
            light: "#adb5bd"
          },
          zinc: "#333"
        }
      },
      boxShadow:{
        'header': '0 1px rgba(255,255,255,.25)',
        'fixed': '0 0 16px rgba(0,0,0,.15)'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif']
      },
      fontSize: {
        '6.5xl': ['64px']
      }
    },
  },
  plugins: [],
}

