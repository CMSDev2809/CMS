const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accessionSchema = new Schema({
  accession: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Accession", accessionSchema);
