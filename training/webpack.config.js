const path = require("path");

module.exports = {
  entry: "./src/index.js",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  }
};
