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
          "800": "#BE2020",
          "700": "#D74A4A",
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
        note: {
          "red" : "#EA1616",
          "orange": "#FF7817",
          "yellow": "#FAFF00",
          "green": "#0CAA08",
          "light-blue": "#35CEF0",
          "dark-blue": "#0034EA",
          "purple": "#90008A",
          "pink": "#EA4DC8"
        },
      },
    },
  },
  darkMode:"class",
  plugins: [],
};
