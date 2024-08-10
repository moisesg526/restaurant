const path = require("path");

module.exports = {
  mode: "development",

  //define entry point
  entry: "./src/index.js",

  //define output point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: {
        test:/\.css/i,
        use: ['style-loader', 'css-loader']
    }
  }
};
