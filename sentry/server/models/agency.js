const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agencySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Agency", agencySchema);
