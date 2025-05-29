/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         green: "#67a8ac",
         blue: "#7271b7",
         purple:"#714642",
         bggray: "#F9FAFC",
         gray: "#4E5663",
         borderlight: "#808080",
      }
 
    },
  },
  plugins: [],
}

