const config = require("../../../config");

const SMS = require("../../models/SMS");
const KnownSMS = require("../../models/KnownSMS");

module.exports = {
  getSMS: async (req, res) => {
    const results = await SMS.find(
      Object.keys(req.query).length > 0
        ? {
            $or: [
              { target: "+" + req.query.n1 },
              { origin: "+" + req.query.n2 },
              { origin: "+" + req.query.n1 },
              { target: "+" + req.query.n2 },
            ],
          }
        : {}
    ).sort({ timestamp: 1 });
    res.json(results);
  },
  deleteAllSMS: async (req, res) => {
    const results = await SMS.remove({
      $or: [
        { target: req.body.n1 },
        { origin: req.body.n2 },
        { origin: req.body.n1 },
        { target: req.body.n2 },
      ],
    });
    console.log(results, req.body);
    res.json(results);
  },
};
