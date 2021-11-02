const Handler = require("../controllers/handler");
const _sendReport = require("./_sendReport");
const _sendViolation = require("./_sendViolation");
const _Util = require("../controllers/_util");

const _reduce = async (arr, cb, violation, totalItems) => {
  if (arr.length > 0) {
    await cb(arr[0], violation, totalItems);
    console.log(`Mail Sent - Items remaining: ${arr.length}`);
    arr.shift();
    if (arr.length > 0) {
      return await _reduce(arr, cb, violation);
    }
  }
};

let total = 0;

module.exports = async () => {
  console.log("RUNNING CRON JOB");
  const totalItems = () => ++total;
  const accessionIds = await Handler.Api.getResults({
    query: {
      date: _Util.getDate(-1),
      thisDate: _Util.getDate(0),
      lastDate: _Util.getDate(-6),
    },
  }).then((res) => res.map((el) => el.AccessionId._text));
  if (accessionIds) {
    console.log(`Reporting ${accessionIds.length} test results.`);
    await _reduce(accessionIds, _sendReport, null, totalItems);
  }
  const missedTests = await Handler.Api.getSelections({
    query: { date: _Util.getDate(-1) },
  });
  if (missedTests) {
    console.log(`Reporting ${missedTests.length} missed test violations.`);
    await _reduce(missedTests, _sendViolation, "Missed Test", totalItems);
  }
  console.log("Reporting Finished");
};
