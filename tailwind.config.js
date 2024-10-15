module.exports = {
  contents: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '94':'22rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
