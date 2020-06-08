const _Util = require("../_util");

module.exports = async (req, res) => {
  try {
    const results = await _Util
      .XMLRequest({
        method: "getResults",
        body: `
        <ResultSearchRequest>
          ${
            req && req.query.accessionId
              ? `<AccessionId>${req.query.accessionId}</AccessionId>`
              : `<DateRange>
                   <DateStart>${_Util.getDate(-3)}</DateStart>
                   <DateEnd>${_Util.getDate(-1)}</DateEnd>
                 </DateRange>
                 <NewAccessions>1</NewAccessions>`
          }
        </ResultSearchRequest>
      `,
      })
      .then((_res) => _res.text())
      .then((_res) => _Util.parseXMLToObject(_res));
    return res ? res.json(results) : results;
  } catch (e) {
    throw new Error(e.message);
  }
};
