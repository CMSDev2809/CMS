const Users = require("../models/user");
const config = require("../config");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await Users.create({
        username: req.body.username,
        password: req.body.password,
        level: req.body.level
      });
      user.success = true;
      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  updateLevel: async (req, res) => {
    try {
      const card = await Users.update(
        { username: req.body.username },
        {
          $set: { level: req.body.level }
        }
      );
      card.success = true;
      return card;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await Users.remove({
        username: req.body.username
      });
      user.success = true;
      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  loginUser: app => async (req, res) => {
    const parseUserInfo = str =>
      new Buffer(str.split(" ")[1], "base64").toString().split(":");
    const [username, password] = parseUserInfo(req.headers["authorization"]);
    const user = await Users.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }
    try {
      token = user.getToken(password);
      const response = Object.assign(
        { success: true, token: token },
        user.toObject()
      );
      return response;
    } catch (e) {
      throw new Error("Unable to login for this user");
    }
  },
  getUserAccess: async (req, res) => {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, config.key, function(err, decoded) {
        if (err) {
          return res.json({
            success: false,
            message: "Failed to authenticate token."
          });
        } else {
          return res.json({
            username: decoded.username,
            level: decoded.level
          });
        }
      });
    } else {
      return res.status(403).send({
        success: false,
        message: "No token provided."
      });
    }
  }
};
