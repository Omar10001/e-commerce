/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode:"class",
  content: [
    './index.html',
    './src/App.jsx',
    './src/components/Header/header.jsx',
    './src/pages/Home.jsx',
    './src/components/darkMode/darkMode.jsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
