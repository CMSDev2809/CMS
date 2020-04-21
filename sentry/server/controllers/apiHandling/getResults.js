const _Util = require("../_util");

const _getDate = num => {
  const date = new Date();
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + num);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  console.log(
    `${newDate.getFullYear()}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`
  );
  return `${newDate.getFullYear()}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};

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
              : `
                <DateRange>
                  <DateStart>${_getDate(-1)}</DateStart>
                  <DateEnd>${_getDate(-1)}</DateEnd>
                </DateRange>`
          }
        </ResultSearchRequest>
      `
      })
      .then(_res => _res.text())
      .then(_res => _Util.parseXMLToObject(_res));
    return res ? res.json(results) : results;
  } catch (e) {
    throw new Error(e.message);
  }
};
