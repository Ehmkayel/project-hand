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
        veryLightGray: "#E7E7E7",
        gray: "#5A6675",
        lightGray: "#525D6A",

      },
   
      backgroundImage: {
        'custom-images': "url('/small-shape.svg'), url('/big-shape.svg')",
      },
      backgroundPosition: {
        'left-right': 'left 20px, right 20px',
      },
      backgroundSize: {
        'custom-size': 'contain, contain',
      },
      screens: {
        sm: '400px',
        md: '768px',
        lg: '900px',
        xl: '1440px'
      },
      boxShadow: {
        'darkbox': '0px 0px 1px 1px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};


 
     
      
    

