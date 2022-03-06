var colorsTW =  require('./colors/tw-colors-main.js');


const configTailwind = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      colorsTW
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


module.exports = configTailwind;
