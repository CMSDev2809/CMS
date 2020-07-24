const routes = [
  require("./routes/file/search_directory"),
  require("./routes/wow/wow_awards"),
];

module.exports = (app, secure) => routes.map((fn) => fn(app, secure));
