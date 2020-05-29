const Handler = require("../controllers/handler");
const _sendReport = require("./_sendReport");
const _sendViolation = require("./_sendViolation");
const _Util = require("../controllers/_util");

const _reduce = (arr, cb, violation) => {
  if (arr.length > 0) {
    try {
      cb(arr[0], violation);
    } catch (e) {
      console.log(e);
    }
    arr.shift();
    if (arr.length > 0) {
      _reduce(arr, cb, violation);
    }
  }
};

module.exports = async () => {
  console.log("RUNNING CRON JOB");
  const metaData = await Handler.Api.getResults({
    query: { accessionId: null },
  });
  const accessionIds = metaData.getResultsResponse.ResultRecords
    .AccessionRecords.AccessionRecord
    ? metaData.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord.map(
        (el) => el.AccessionId._text
      )
    : null;
  if (accessionIds) {
    _reduce(accessionIds, _sendReport);
  }
  const missedTests = await Handler.Api.getSelections({
    query: { date: _Util.getDate(-1) },
  });
  if (missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord) {
    _reduce(
      missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord,
      _sendViolation,
      "Missed Test"
    );
  }
};
