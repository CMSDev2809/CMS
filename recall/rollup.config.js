//const babel = require("rollup-plugin-babel");
import babel from "rollup-plugin-babel";
const { uglify } = require("rollup-plugin-uglify");
const { minify } = require("uglify-es");

export default {
  entry: "./main.js",
  format: "cjs",
  dest: "dist/app.min.js",
  plugins: [babel({ exclude: "node_modules/**" }), uglify({}, minify)],
  external: []
};
