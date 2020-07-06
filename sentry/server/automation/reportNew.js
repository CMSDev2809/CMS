const Handler = require("../controllers/handler");
const _sendReport = require("./_sendReport");
const _sendViolation = require("./_sendViolation");
const _Util = require("../controllers/_util");

const _reduce = async (arr, cb, violation) => {
  if (arr.length > 0) {
    await cb(arr[0], violation);
    arr.shift();
    if (arr.length > 0) {
      return await _reduce(arr, cb, violation);
    }
  }
};

module.exports = async () => {
  console.log("RUNNING CRON JOB");
  const metaData = await Handler.Api.getResults({
    query: { date: _Util.getDate(-1) },
  });
  const accessionIds =
    metaData.getResultsResponse.ResultRecords.AccessionRecords
      .AccessionRecord &&
    Object.prototype.toString.call(
      metaData.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord
    ) == "[object Array]"
      ? metaData.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord.map(
          (el) => el.AccessionId._text
        )
      : null;
  if (accessionIds) {
    console.log(`Reporting ${accessionIds.length} test results.`);
    await _reduce(accessionIds, _sendReport);
  }
  const missedTests = await Handler.Api.getSelections({
    query: { date: _Util.getDate(-1) },
  });
  if (missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord) {
    // console.log(
    //   `Reporting ${missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord.length} missed test violations.`
    // );
    // await _reduce(
    //   missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord,
    //   _sendViolation,
    //   "Missed Test"
    // );
  }
};
