/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif']
      },
      colors: {

       'navbar-bg': " rgba(244, 246, 253, 1)",
       'button':" rgba(255, 127, 86, 1)",
       'tee': "rgba(83, 82, 237, 1)",
       'genre':"rgba(213, 220, 243, 1)"




      },
      
  },
  },
  plugins: [],
}

