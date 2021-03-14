const path = require("path");

module.exports = {
  mode: "development",
  entry: "./demo/index.js",
  output: {
    path: path.resolve(__dirname, "./output"),
    filename: "index.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.dson$/,
        use: [
          {
            loader: path.resolve(__dirname, "./src/index.js"),
            options: {
              comment: false,
            },
          },
        ],
      },
    ],
  },
};
