/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "base":"16px",
        'paragraph': '14px', 
        'h3': '20px', 
        'h2': '25px', 
        'h1':"30px"
      },
      colors:{
        brand:"#461F16",
        brandhover:"#291009",
        accent:"#efe5b9",
        customgray:"#D7D7D7",
      },
      
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      animation: {
        marquee: 'marquee 140s linear infinite',
        marquee2: 'marquee2 140s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      
    },
  },
  plugins: [],
};
