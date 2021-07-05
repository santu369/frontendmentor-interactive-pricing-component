const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./images/favicon-32x32.png",
    }),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
