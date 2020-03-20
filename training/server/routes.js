const routes = [require("./routes/file/search_directory")];

module.exports = (app, secure) => routes.map(fn => fn(app, secure));
