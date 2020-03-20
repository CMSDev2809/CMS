const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const config = require("../config");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: false,
    required: true
  },
  level: {
    type: Number,
    unique: false,
    required: true
  }
});

userSchema.methods.getToken = user => {
  if (user) {
    return jwt.sign(
      {
        id: user._id
      },
      config.secret,
      {
        expiresIn: 60 * 60 * 1140
      }
    );
  } else {
    throw new Error("Passwords don't match");
  }
};

module.exports = mongoose.model("User", userSchema);
