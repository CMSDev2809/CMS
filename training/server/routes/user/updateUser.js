const controller = require("../../controllers/user/updateUser");

module.exports = (app, secure, Models) =>
  secure.put("/updateUser", (req, res) =>
    controller(req, Models).then(r_value => res.json(r_value))
  );
