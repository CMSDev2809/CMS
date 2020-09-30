const config = require("../../../config");

const KnownSMS = require("../../models/KnownSMS");

module.exports = {
  smartMatchSMS: async (req, res, emitters) => {
    req.body.number = "+" + req.body.number;
    let results = await KnownSMS.findOne({ number: req.body.number });
    if (!results) {
      results = await KnownSMS.create({ ...req.body });
    } else {
      results = await KnownSMS.update(
        { number: req.body.number },
        { ...req.body }
      );
    }
    res.json(results);
    emitters.broadcast_nameChange();
  },
  createMatchSMS: async (req, res) => {
    req.body.number = "+" + req.body.number;
    const results = await KnownSMS.create({ ...req.body });
    res.json(results);
  },
  matchSMS: async (req, res) => {
    req.query.n = "+" + req.query.n;
    const results = await KnownSMS.findOne({ number: req.query.n });
    res.json(results);
  },
  updateMatchSMS: async (req, res) => {
    req.body.number = "+" + req.body.number;
    const results = await KnownSMS.update(
      { number: req.body.number },
      { ...req.body }
    );
    res.json(results);
  },
  removeMatchSMS: async (req, res) => {
    const results = await KnownSMS.remove({ number: req.body.number });
    res.json(results);
  },
};
