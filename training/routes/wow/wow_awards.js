const submit_wow = require("../../controllers/wow/wow_awards");

module.exports = (app, secure, Models) =>
  app.post("/submit_wow", (req, res) => submit_wow(req, res));
