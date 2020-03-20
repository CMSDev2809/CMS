const controller = require("../../controllers/user/deleteUser");

module.exports = (app, secure, Models) =>
  secure.delete("/deleteUser", (req, res) =>
    controller(req, Models).then(r_value => res.json(r_value))
  );
