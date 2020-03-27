const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  cardNumber: {
    type: String,
    required: false
  },
  expDate: {
    type: String,
    required: false
  },
  cardHolder: {
    type: String,
    required: false
  },
  securityCode: {
    type: String,
    required: false
  },
  amount: {
    type: String,
    required: false
  },
  billingAddress: {
    type: String,
    required: false
  },
  billingAddress2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  zip: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: false
  },
  purpose: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  processing: {
    type: String,
    required: false
  },
  highPriority: {
    type: Boolean,
    required: false
  },
  lastFour: {
    type: String,
    required: false
  },
  dateModified: {
    type: Date,
    required: false
  },
  contactEmail: {
    type: String,
    required: false
  },
  receiptEmail: {
    type: String,
    required: false
  },
  lastAccess: {
    type: String,
    required: false
  },
  isAutoPay: {
    type: Boolean,
    required: false
  },
  autoPayDate: {
    type: Date,
    required: false
  }
});

module.exports = mongoose.model("Card", cardSchema);
