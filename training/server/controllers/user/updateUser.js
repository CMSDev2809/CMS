const config = require("../../config");
const ObjectId = require("mongodb").ObjectID;

module.exports = async (req, Models) => {
  try {
    const user = await Models.User.update(
      {
        _id: ObjectId(req.query.id)
      },
      req.body
    );
    if (user.nModified > 0) {
      return {
        msg: "Success",
        code: 200
      };
    } else {
      return {
        msg: "No changes made.",
        code: 300
      };
    }
  } catch (e) {
    return {
      msg: e.errmsg,
      code: e.code
    };
  }
};
