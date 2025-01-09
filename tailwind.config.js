/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: '#242c4c', 
        primaryText:'#001c38',
        secondary: '#e31909',
        dark:'#141718',
        light:'#6C7275',
        lightBlue:'#f0f8ff',
        secondaryDark: '#832429',
        secondaryCustom: '#e84844',
       custom:'#542C48',
       darkBrown:'#3e251b',

      },
    },
  },
  plugins: [],
};
