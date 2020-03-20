const config = require("./config");
const jwt = require("jsonwebtoken");
const Users = require("./models/User");
const ObjectId = require("mongodb").ObjectID;

module.exports = (req, res, next) => {
  let token = req.headers["key"];
  if (token) {
    jwt.verify(token, config.secret, async (err, decoded) => {
      if (err) {
        return res.json({
          code: 400,
          msg: "Failed to authenticate token."
        });
      } else {
        try {
          req.user_info = await Users.findOne({
            _id: ObjectId(decoded.id)
          });
          if (req.user_info === null) {
            return res.json({
              code: 401,
              msg: "Failed to authenticate user."
            });
          }
          next();
        } catch (e) {
          throw new Error(e.message);
        }
      }
    });
  } else {
    return res.status(403).send({
      msg: "No token provided."
    });
  }
};
