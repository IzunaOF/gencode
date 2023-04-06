/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-10": "#d4c331",
        "green-e": "#2cac36",
        "mint-blue": "#225ae7",
        "light-mintblue": "#10a9e1",
        "red-10": "#a71717",
        "darkred-10": "#700707",
        "dark-er": "#151516",
        'off-top': "#2b42dd20"
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
