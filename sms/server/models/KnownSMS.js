const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const config = require("../../config");

const KnownSMS = new Schema({
  number: {
    type: String,
    unique: true,
    required: false,
  },
  friendlyName: {
    type: String,
    unique: false,
    required: false,
  },
});

module.exports = mongoose.model("KnownSMS", KnownSMS);
