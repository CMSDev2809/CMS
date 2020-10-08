const Users = require("../../models/User");
const fs = require("fs");
const config = require("../../../config");
const bcrypt = require("bcrypt");
const ObjectId = require("mongodb").ObjectID;

module.exports = {
  createUser: async (req, res) => {
    try {
      let user = await Users.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        level: 10,
      });
      user.code = 200;
      user.msg = "Account Creation Successful!";
      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  },
  updateUser: async (req, res) => {
    if (
      (exact && req.user_info.level !== 0 && level !== req.user_info.level) ||
      req.user_info.level > level
    ) {
      return res.json({
        msg: "Access Denied",
        code: 403,
      });
    }
    try {
      const user = await Users.update({ _id: req.body.id }, req.body);
      user.code = 200;
      user.msg = "User Account Updated!";
      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  },
  loginUser: async (req, res) => {
    const credentials = new Buffer(
      req.headers["authorization"].split(" ")[1],
      "base64"
    ).toString();
    const [username, password] = credentials.split(":");
    const user = await Users.findOne({ username });
    if (!user) {
      return res.json({ code: 11100 });
    }
    try {
      const token = user.getToken(
        bcrypt.compareSync(password, user.password) ? user : null
      );
      return res.json({
        token,
        code: 200,
        msg: "Login Successful!",
        u: user.username,
      });
    } catch (e) {
      return res.json({ code: 11101, msg: "Authentication Error." });
    }
  },
  getUser: async (req, res) => {
    const user = await Users.findOne({ _id: ObjectId(req.query.u) });
    if (!user) {
      return res.json({ code: 11102, msg: "Get User Error." });
    }
    try {
      return res.json({ code: 200, msg: "Get User Successful!", user });
    } catch (e) {
      return res.json({ code: 11102, msg: "Get User Error." });
    }
  },
  validateToken: async (req, res) => {
    const user = await Users.findOne({ username: req.user_info.username });
    if (!user) {
      return res.json({ code: 11105, msg: "Unable to Parse User." });
    }
    try {
      return res.json({
        code: 200,
        msg: "Token is Valid!",
        id: user._id,
        u: user.username,
        l: user.level,
      });
    } catch (e) {
      console.log(e);
      return res.json({ code: 11101, msg: "Invalid or Null Token." });
    }
  },
  removeUser: async (req, res) => {
    try {
      const user = await Users.remove({ _id: req.body.id });
      user.code = 200;
      user.msg = "User Account Removed!";
      return res.json(user);
    } catch (e) {
      return res.json(e);
    }
  },
};
