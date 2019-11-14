const Users = require("../models/user");

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await Users.create({
        username: req.body.username,
        status: req.body.status,
        expectedReturn: req.body.expectedReturn,
        comment: req.body.comment,
        phone: req.body.phone,
        workHours: req.body.workHours
      });
      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  },
  getUsers: async (req, res) => {
    try {
      let workers = [];
      let installers = [];
      const users = await Users.find().sort({ username: 1 });
      users.map(
        element =>
          element.workHours.toLowerCase() === "installer" ||
          element.workHours.toLowerCase() === "irregular hours"
            ? installers.push(element)
            : workers.push(element)
      );
      return workers.concat(installers);
    } catch (e) {
      throw new Error(e.message);
    }
  },
  deleteUser: async (req, res) => {
    const userProfile = await Users.remove({ _id: req.params.id });
    return userProfile;
  }
};
