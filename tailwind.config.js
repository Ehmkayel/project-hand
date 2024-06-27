/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow: "#FEC00A",
        lightYellow: "#FDCA09",
        black: "#101010",
        white: "#E7E7E7",
        gray: "#5A6675",
        lightGray: "#525D6A",

      },
      backgroundImage: {
        
      },
      screens: {
        sm: '400px',
        md: '768px',
        lg: '900px',
        xl: '1440px'
      },
    },
  },
  plugins: [],
};


 
     
      
    

