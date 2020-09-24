const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const config = require("../../config");

const SMS = new Schema({
  content: {
    type: String,
    unique: false,
    required: false,
  },
  timestamp: {
    type: Date,
    unique: false,
    required: false,
  },
  origin: {
    type: String,
    unique: false,
    required: false,
  },
  target: {
    type: String,
    unique: false,
    required: false,
  },
  friendlyName: {
    type: String,
    unique: false,
    required: false,
  },
});

module.exports = mongoose.model("SMS", SMS);
