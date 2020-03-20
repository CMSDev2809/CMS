const bcrypt = require("bcrypt");
const config = require("../../config");

module.exports = async (req, Models) => {
  try {
    const parseUserInfo = str =>
      Buffer.from(str.split(" ")[1], "base64")
        .toString()
        .split(":");
    const [username, password] = parseUserInfo(req.headers["authorization"]);
    const user = await Models.User.findOne({ username });
    if (!user) {
      return {
        msg: "User not found.",
        code: 400
      };
    }
    try {
      const token = user.getToken(
        bcrypt.compareSync(password, user.password) ? user : null
      );
      return {
        code: 200,
        token,
        msg: "Success."
      };
    } catch (e) {
      return {
        msg: "Authentication error.",
        code: 400
      };
    }
  } catch (e) {
    return {
      msg: e.errmsg,
      code: e.code
    };
  }
};
