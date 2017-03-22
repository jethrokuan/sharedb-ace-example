var webpack = require('webpack');

module.exports = {
  entry: './js/index.js',
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  } 
};
