const _Util = require("../_util");

module.exports = async (req, res) => {
  try {
    const results = await _Util.XMLRequest({
      method: "getAccessionPDF",
      body: `
        <AccessionSearch>
          <AccessionId>${req.query.accessionId}</AccessionId>
        </AccessionSearch>
      `
    });
    return res ? res.json(results) : results;
  } catch (e) {
    throw new Error(e.message);
  }
};
