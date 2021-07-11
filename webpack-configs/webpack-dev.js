const Path = require("path");

module.exports = {
  entry: {
    main: ["./src/main.js"],
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: Path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
};
