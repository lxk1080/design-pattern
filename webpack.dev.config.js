const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, './release'),
    filename: "bundle.js",
  },

  devServer: {
    contentBase: './release',
    open: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
