const Participant = require("../models/participant");

module.exports = {
  test: async (req, res) => {
    try {
      res.json("Shalom");
    } catch (e) {
      throw new Error(e.message);
    }
  },
  createParticipant: async (req, res) => {
    try {
      const participant = await Participant.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        ivr: req.body.ivr,
        parent: req.body.parent,
        contactEmailList: req.body.contactEmailList
      });
      return participant;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getParticipants: async (req, res) => {
    try {
      const participant = await Participant.find({});
      return participant;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  updateParticipant: async (req, res) => {
    try {
      const participant = await Participant.update(
        { _id: req.body.id },
        Object.assign(req.body.data, {
          dateModified: new Date(),
          contactEmail: req.body.data.contactEmail,
          receiptEmail: req.body.data.receiptEmail,
          lastAccess: req.body.lastAccess
        })
      );
      return participant;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  deleteParticipant: async (req, res) => {
    try {
      const participant = await Participant.remove({ _id: req.body.id });
      return participant;
    } catch (e) {
      throw new Error(e.message);
    }
  }
};
