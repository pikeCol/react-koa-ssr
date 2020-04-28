const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");

const devConfig = merge(baseConfig, {
  mode: "development",
  sourceMap: "inline-source-map",
  devServer: {
    port: 3000,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
});
