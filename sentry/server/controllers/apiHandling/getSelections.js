const _Util = require("../_util");

module.exports = async (req, res) => {
  console.log(req.query.date);
  try {
    const results = await _Util
      .XMLRequest({
        method: "getSelections",
        body: `
        <SelectionsSearchRequest>
          <SingleDate>${req.query.date}</SingleDate>
          <Filter>Missed</Filter>
        </SelectionsSearchRequest>
      `
      })
      .then(_res => _res.text())
      .then(_res => _Util.parseXMLToObject(_res));
    console.log(results);
    return res ? res.json(results) : results;
  } catch (e) {
    throw new Error(e.message);
  }
};
