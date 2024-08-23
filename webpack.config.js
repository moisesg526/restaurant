const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Stats } = require("webpack");

module.exports = {
  mode: "development",

  //define entry point
  entry: "./src/index.js",

  //define output point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "eval-source-map",

  devServer: {
    watchFiles: ["./src/index.html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
