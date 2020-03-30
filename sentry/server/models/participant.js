const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  ivr: {
    type: String,
    required: true
  },
  parent: {
    type: String,
    required: true
  },
  contactEmailList: {
    type: Object,
    required: false
  }
});

module.exports = mongoose.model("Participant", participantSchema);
