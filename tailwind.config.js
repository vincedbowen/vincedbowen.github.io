/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
    },
    colors: {
      'red': '#dc212c',
      'brown': '#71553D',
      'yellow': '#ffba13',
      'navy': '#173952',
      'black': '#0C0C0C',
      'white': '#FFFFFF',
      'pink': '#A18792',
      'green': '#80815F',
      'light-blue': '#2fa0c8'
    }
  },
  plugins: [],
};
