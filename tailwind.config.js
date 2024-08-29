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
        "base":"18px",
        'paragraph': '20px', 
        'h3': '20px', 
        'h2': '25px', 
        'h1':"30px"
      },
      colors:{
        brand:"#461F16",
        brandhover:"#291009",
        accent:"#FBD71C",
        customgray:"#D7D7D7",
      },
      
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
