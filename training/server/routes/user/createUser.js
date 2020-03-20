const controller = require("../../controllers/user/createUser");

module.exports = (app, secure, Models) =>
  app.post("/createUser", (req, res) =>
    controller(req, Models).then(r_value => res.json(r_value))
  );
