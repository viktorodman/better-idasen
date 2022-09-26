/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dfe3e6',
        secondary: '#eef2f3',
        accent: '#2f69fe',
        'accent-grey': '#ccd0d3',
        'icon-grey': '#8a9099',
        'dark-one': '#363c4f',
        'dark-two': '#4a5060',
        'mah-blue': '#5e7bb8',
      }
    },
  },
  plugins: [],
}
