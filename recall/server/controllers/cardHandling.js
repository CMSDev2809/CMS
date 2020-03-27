const Users = require("../models/user");
const Cards = require("../models/card");

module.exports = {
  getCards: async (req, res) => {
    try {
      let searchObject = {};
      if (req.body.name.includes(" ")) {
        const regEx1 = ".*" + req.body.name.split(" ")[0] + ".*";
        const regEx2 = ".*" + req.body.name.split(" ")[1] + ".*";
        searchObject = {
          $or: [
            { firstName: { $regex: regEx1, $options: "i" } },
            { lastName: { $regex: regEx2, $options: "i" } },
            { firstName: { $regex: regEx2, $options: "i" } },
            { lastName: { $regex: regEx1, $options: "i" } }
          ]
        };
      } else {
        const regEx = ".*" + req.body.name + ".*";
        searchObject = {
          $or: [
            { firstName: { $regex: regEx, $options: "i" } },
            { lastName: { $regex: regEx, $options: "i" } },
            { lastFour: req.body.name }
          ]
        };
      }
      const cards = req.body.chrono
        ? await Cards.find({ dateModified: { $ne: null } })
            .find(searchObject)
            .skip(req.body.skip)
            .limit(req.body.limit)
            .sort({ dateModified: -1 })
        : await Cards.find(searchObject)
            .skip(req.body.skip)
            .limit(req.body.limit)
            .sort({ lastName: 1 });
      const totalSize =
        req.body.name.length > 0
          ? await Cards.count(searchObject)
          : await Cards.count();
      return {
        cards,
        totalSize
      };
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getTasks: async (req, res) => {
    try {
      const cards = await Cards.find({ processing: { $ne: null } }).find({
        $where: "this.processing.length > 0"
      });
      return cards;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  createCard: async (req, res) => {
    try {
      const card = await Cards.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        cardNumber: req.body.cardNumber,
        expDate: req.body.expDate,
        cardHolder: req.body.cardHolder,
        securityCode: req.body.securityCode,
        amount: req.body.amount,
        billingAddress: req.body.billingAddress,
        billingAddress2: req.body.billingAddress2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phoneNumber: req.body.phoneNumber,
        purpose: req.body.purpose,
        notes: req.body.notes,
        processing: req.body.processing,
        highPriority: req.body.highPriority,
        dateModified: new Date(),
        contactEmail: req.body.contactEmail,
        receiptEmail: req.body.receiptEmail,
        lastFour: req.body.lastFour,
        lastAccess: req.body.processing
      });
      card.success = true;
      return card;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  updateCard: async (req, res) => {
    try {
      const card = await Cards.update(
        { _id: req.body.id },
        Object.assign(req.body.data, {
          dateModified: new Date(),
          contactEmail: req.body.data.contactEmail,
          receiptEmail: req.body.data.receiptEmail,
          lastAccess: req.body.lastAccess
        })
      );
      card.success = true;
      return card;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  deleteCard: async (req, res) => {
    try {
      const card = await Cards.remove({ _id: req.body.id });
      card.success = true;
      return card;
    } catch (e) {
      throw new Error(e.message);
    }
  }
};
