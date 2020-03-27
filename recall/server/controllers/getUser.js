var mongoose = require("mongoose");
const user = require("../models/user");

module.exports = {
  getUser: async (req, res) => {
    const userProfile = await user.find({ _id: req.params.id });
    return userProfile;
  },
  getUsers: async (req, res) => {
    const profiles = await user.find();
    return profiles;
  }
};
