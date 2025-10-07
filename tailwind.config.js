/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#D0BBA8",
        sky: "#A8D5DB", 
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        'russo': ['Russo One', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}