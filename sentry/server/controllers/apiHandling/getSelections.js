const _Util = require("../_util");

module.exports = async (req, res) => {
  try {
    const results = await _Util
      .XMLRequest({
        method: "getSelections",
        body: `
        <SelectionsSearchRequest>
          ${
            req && req.query.date
              ? `<SingleDate>${req.query.date}</SingleDate>`
              : `<DateRange>
                   <DateStart>${_Util.getDate(-3)}</DateStart>
                   <DateEnd>${_Util.getDate(-1)}</DateEnd>
                 </DateRange>`
          }
          <Filter>Missed</Filter>
        </SelectionsSearchRequest>
      `
      })
      .then(_res => _res.text())
      .then(_res => _Util.parseXMLToObject(_res));
    return res ? res.json(results) : results;
  } catch (e) {
    throw new Error(e.message);
  }
};
