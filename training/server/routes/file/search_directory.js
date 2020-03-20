const search_directory = require("../../controllers/file/search_directory");

module.exports = (app, secure, Models) =>
  app.get("/search_directory", (req, res) => search_directory(req, res));
