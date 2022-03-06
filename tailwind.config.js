//var presets = './src/presets-tw/tw-presets-main.js';

module.exports = {
  content: ['./src/views/**/**/*.js'],
  presets: [
    //require("./src/presets-tw/tw-presets-main.js"),
    require("./src/presets-tw/test1.js"),
    require("./src/presets-tw/test2.js"),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
