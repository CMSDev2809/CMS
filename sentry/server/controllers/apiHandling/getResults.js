const _Util = require("../_util");

module.exports = async (req, res) => {
  try {
    const results = await _Util.XMLRequest({
      method: "getResults",
      body: `
        <ResultSearchRequest>
          ${
            req && req.query.accessionId
              ? `<AccessionId>${req.query.accessionId}</AccessionId>`
              : `<DateRange>
                  <DateStart>${Date.now() - 1 * 24 * 60 * 60 * 1000}</DateStart>
                  <DateEnd>${Date.now()}</DateEnd>
                </DateRange>`
          }
        </ResultSearchRequest>
      `
    });
    return res ? res.json(results) : results;
  } catch (e) {
    throw new Error(e.message);
  }
};
