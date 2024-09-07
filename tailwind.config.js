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
          "100": "#F8EEE2"
        },
        "dark": "#231E40" 
      },
    },
  },
  darkMode:"class",
  plugins: [],
};
