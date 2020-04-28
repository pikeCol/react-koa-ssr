const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("./utils");

module.exports = {
  entry: resolve("app/index.js"),
  output: {
    path: resolve("dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // 只编译app文件夹下的文件
        include: resolve("app"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
    resolve: {
      // 设置路径别名
      alias: {
        "@": resolve("app"),
      },
      // 文件后缀自动补全, 就是你import文件的时候如果没写后缀名就会优先找下面这几个
      extensions: [".js", ".jsx"],
    },
    externals: {},
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: resolve("template/app.html"),
      }),
    ],
  },
};
