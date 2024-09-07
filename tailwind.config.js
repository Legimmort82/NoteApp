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
        "total":"#F8EEE2",
        "sidebar": "#D74A4A",
        "home-page-card": "#FEDBC8",
        "total-dark":"#231E40",
        "sidebar-dark": "#201739",
        "home-page-card-dark": "#40677D",

      },
    },
  },
  darkMode:"class",
  plugins: [],
};
