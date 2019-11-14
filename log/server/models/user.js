const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const config = require("../config");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: Boolean,
    unique: false,
    required: true
  },
  expectedReturn: {
    type: String,
    unique: false,
    required: false
  },
  comment: {
    type: String,
    unique: false,
    required: false
  },
  phone: {
    type: String,
    unique: false,
    required: false
  },
  workHours: {
    type: String,
    unique: false,
    required: false
  }
});

module.exports = mongoose.model("User", userSchema);
