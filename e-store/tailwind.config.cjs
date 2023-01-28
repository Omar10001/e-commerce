/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode:"class",
  content: [
    './index.html',
    './src/App.jsx',
    './src/components/Header/header.jsx',
    './src/pages/Home.jsx',
    './src/components/darkMode/darkMode.jsx',
    './src/components/UI/cards.jsx',
    './src/components/UI/search.jsx',
    './src/components/Footer/footer.jsx',
    './src/components/UI/categoryCard.jsx',
    './src/pages/Shop.jsx',
    './src/pages/ProductDetails.jsx'

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
