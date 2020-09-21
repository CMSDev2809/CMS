const config = require("../../../config");

const SMS = require("../../models/SMS");

module.exports = {
  getSMS: async (req, res) => {
    const results = await SMS.find({});
    res.json(results);
  },
};
