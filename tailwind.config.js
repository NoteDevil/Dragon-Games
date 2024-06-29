/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "dark",
  plugins: [nextui({
    themes:{
      dark:{
        layout:{},
        colors:{
          background: "#1F2235",
          text: "#FFF",
          
        }
      }
    }
  })]
};
