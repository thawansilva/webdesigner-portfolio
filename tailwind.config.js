/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-p": "#1B263B",
        "yellow-s": "#FFC300",
        "lightyellow-s": "#AA9039",
        "white-n": "#F6F6F6",
        "gray-n": "#CCC",
        "gray-d": "#333",
        "dark-n": "#0E0E0E",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      padding: {
        side: "120px",
        vertical: "120px",
      },
    },
  },
  plugins: [],
};
