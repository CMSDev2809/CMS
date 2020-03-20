const bcrypt = require("bcrypt");
const config = require("../../config");

module.exports = async (req, Models) => {
  try {
    await Models.User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      level: 0
    });
    return {
      msg: "Success",
      code: 200
    };
  } catch (e) {
    return {
      msg: e.errmsg,
      code: e.code
    };
  }
};
