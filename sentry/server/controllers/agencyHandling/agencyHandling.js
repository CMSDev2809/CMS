const Agency = require("../models/Agency");

module.exports = {
  createAgency: async (req, res) => {
    try {
      const agency = await Agency.create({
        name: req.body.name
      });
      return agency;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  updateAgency: async (req, res) => {
    try {
      const agency = await Agency.update(
        { _id: req.body.id },
        Object.assign(req.body.data, {
          dateModified: new Date(),
          contactEmail: req.body.data.contactEmail,
          receiptEmail: req.body.data.receiptEmail,
          lastAccess: req.body.lastAccess
        })
      );
      return agency;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  deleteAgency: async (req, res) => {
    try {
      const agency = await Agency.remove({ _id: req.body.id });
      return agency;
    } catch (e) {
      throw new Error(e.message);
    }
  }
};
