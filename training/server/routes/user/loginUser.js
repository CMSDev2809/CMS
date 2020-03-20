const controller = require("../../controllers/user/loginUser");

module.exports = (app, secure, Models) =>
  app.get("/loginUser", (req, res) =>
    controller(req, Models).then(r_value => res.json(r_value))
  );
