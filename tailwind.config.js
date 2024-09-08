/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary:{
          "500": "#D9614C",
          "100": "#F8EEE2",
          "300": "#FEDBC8"
        },
        
        dark: {
          "500": "#201739",
          "300": "#231E40",
          "100": "#40677D"
        },
      },
    },
  },
  darkMode:"class",
  plugins: [],
};
