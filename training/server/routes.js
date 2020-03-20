const glob = require("glob"),
  path = require("path");

const routes = [];
const Models = {};

glob.sync("./routes/**/*.js").forEach(file => {
  routes.push(require(path.resolve(file)));
});

glob.sync("./models/**/*.js").forEach(file => {
  let name = file
    .split("/")
    .pop()
    .replace(".js", "");
  Models[name] = require(path.resolve(file));
});

module.exports = (app, secure) => routes.map(fn => fn(app, secure, Models));
