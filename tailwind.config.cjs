/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, css}"],
  theme: {
    colors: {
      "green": {
        100: "#8BAC3E",
        200: "#A4B441",
        300: "#F3F7D9",
        400: "#F0FEEB", 
        500: "#F9FFF6"
      },

      "blue-stabilo": {
        100: "#40A2B1",
        200: "#E6F3F5"
      },

      "blue": {
        100: "#405EB6",
        200: "#EAEEFA"
      },

      "red": {
        100: "#B23F74",
        200: "#F9EEF3"
      }

    },

    fontFamily: {
      "Rubik": ["Rubik", "sans-serif"],
      "Open-Sans": ["Open Sans", "sans-serif"]
    },

    extend: {
      boxShadow: {
        "default": "0px 11px 30px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [],
}
