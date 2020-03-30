const xmlRequest = require("../_util/xmlRequest");

module.exports = async (req, res) => {
  try {
    const response = await xmlRequest();
    res.json(response);
  } catch (e) {
    throw new Error(e.message);
  }
};
