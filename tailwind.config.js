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
          "red" : "#C92626",
          "purple": "#700B47",
          "yellow": "#C1C52B",
          "green": "#70B857",
          "light-blue": "#35CEF0",
          "orange": "#EB7635",
          "pink": "#CA38AA",
          "dark-blue": "#374FA6"
        },
      },
    },
  },
  darkMode:"class",
  plugins: [],
};
