const _Util = require("../_util");
const fs = require("fs");

module.exports = async (req, res) => {
  try {
    const results = await _Util
      .XMLRequest({
        method: "getAccessionPDF",
        body: `
        <AccessionSearch>
          <AccessionId>${req.query.accessionId}</AccessionId>
        </AccessionSearch>
      `
      })
      .then(_res => _res.text())
      .then(_res => _Util.parseXMLToObject(_res))
      .then(_res => _res.getAccessionPDFResponse.AccessionPDF._text);
    return res ? res.send(results) : results;
  } catch (e) {
    throw new Error(e.message);
  }
};
