/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: {
    colors: {
      'red': '#D73D35',
      'brown': '#71553D',
      'yellow': '#E8B029',
      'navy': '#173952',
      'black': '#0C0C0C',
      'white': '#FFFFFF',
      'pink': '#A18792',
      'green': '#80815F',
      'light-blue': '#3C9DC8'
    }
  },
  theme: {
    extend: {
    },
    colors: {
      'red': '#D73D35',
      'brown': '#71553D',
      'yellow': '#E8B029',
      'navy': '#173952',
      'black': '#0C0C0C',
      'white': '#FFFFFF',
      'pink': '#A18792',
      'green': '#80815F',
      'light-blue': '#3C9DC8'
    }
  },
  plugins: [],
};
