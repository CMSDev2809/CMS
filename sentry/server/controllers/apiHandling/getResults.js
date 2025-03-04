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
                  <DateStart>${req.query.lastDate}</DateStart>
                  <DateEnd>${req.query.thisDate}</DateEnd>
                </DateRange>`
          }
        </ResultSearchRequest>
      `,
      })
      .then((_res) => _res.text())
      .then((_res) => _Util.parseXMLToObject(_res))
      .then((_res) =>
        _res.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord
          ? Object.prototype.toString.call(
              _res.getResultsResponse.ResultRecords.AccessionRecords
                .AccessionRecord
            ) == "[object Array]" && false
            ? _res.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord.filter(
                (el) => el.ResultDateTime._text.split("T")[0] === req.query.date
              )
            : _res.getResultsResponse.ResultRecords.AccessionRecords
                .AccessionRecord
          : null
      );
    return res ? res.json(results) : results;
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};
