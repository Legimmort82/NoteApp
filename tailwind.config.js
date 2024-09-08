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
          "600": "#DF6363",
          "500": "#D9614C",
          "400": "#D49393",
          "300": "#FEDBC8",
          "200": "#F8CBCB", 
          "100": "#F8EEE2"
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
