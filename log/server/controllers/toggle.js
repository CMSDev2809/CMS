const Users = require("../models/user");

module.exports = {
  toggle: async (req, res) => {
    const user = await Users.findOne({ username: req.body.username });
    const updated = await Users.findByIdAndUpdate(
      { _id: user._id },
      {
        status: req.body.status,
        expectedReturn: req.body.expectedReturn,
        comment: req.body.comment,
        phone: req.body.phone,
        workHours: req.body.workHours
      }
    );
    return updated;
  }
};
