/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    colors: {
      'murrey': {
        100: "#efdee5",
        200: "#e0bfcd",
        300: "#d4a5b9",
        400: "#ca90a9",
        500: "#bc7493",
        600: "#ae587d",
        700: "#a03c67",
        800: "#982c5a",
        900: "#8c1448",
      },
      'cerise':{
        100: "#fbcbe7",
        200: "#f9aad8",
        300: "#f894ce",
        400: "#f67dc4",
        500: "#f467ba",
        600: "#f250b0",
        700: "#f03ca7",
        800: "#ee239c",
        900: "#ec058e",
      },

      'pink':{
        100: "#fae9f2",
        200: "#f6d8e8",
        300: "#f3cae0",
        400: "#f0bfda",
        500: "#edb1d2",
        600: "#eaa5cb",
        700: "#e89dc6",
        800: "#e692c0",
        900: "#e386b9",
      },
      'black': "#000000",
      'white': "#ffffff",
      'gray': "#9ca3af"
    },
    extend: {},
  },
  plugins: [],
}