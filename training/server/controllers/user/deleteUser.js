const config = require("../../config");

module.exports = async (req, Models) => {
  if (req.query.id) {
    try {
      let user = await Models.User.remove({
        _id: req.query.id
      });
      if (user.deletedCount > 0) {
        return {
          msg: "Success.",
          code: 200
        };
      } else {
        return {
          msg: "No users deleted.",
          code: 300
        };
      }
    } catch (e) {
      return {
        msg: e.errmsg,
        code: e.code
      };
    }
  } else {
    return {
      msg: "Absent 'id' parameter.",
      code: 400
    };
  }
};
