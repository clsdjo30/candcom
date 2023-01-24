/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./assets/react/controllers/*.jsx"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#757968",
          "secondary": "#A6AF8B",
          "accent": "#284E53",
          "neutral": "#1C1E16",
          "base-100": "#fff",
          "white": "#FFF",
          "info": "#002226",
          "success": "#4B5C1B",
          "warning": "#D0B113",
          "error": "#C52331",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      'text': ['VT323'],
      'subtitle': ['Cutive Mono'],
      'title': ['AudioWide']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}