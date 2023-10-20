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
      await new Promise((r) => setTimeout(r, 10000));
      return await _reduce(arr, cb, violation);
    }
  }
};

let total = 0;

module.exports = async () => {
  const totalItems = () => ++total;
  const accessionIds = await Handler.Api.getResults({
    query: {
      date: _Util.getDate(-1),
      thisDate: _Util.getDate(0),
      lastDate: _Util.getDate(-2),
    },
  }).then((res) =>
    res
      .map((el) => el.AccessionId._text)
      .filter((id) => !_Util.SaveFile.read(id))
  );
  if (accessionIds && accessionIds.length) {
    console.log(`Reporting ${accessionIds.length} test results.`);
    await _reduce(accessionIds, _sendReport, null, totalItems);
  }
  await new Promise((r) => setTimeout(r, 3000));
  _Util.SaveFile.save(accessionIds);
  const missedTests = await Handler.Api.getSelections({
    query: { date: _Util.getDate(-1) },
  }).then((res) =>
    res.filter(
      (t) => !_Util.SaveFile.read(t.EnrolleeRecord.EnrolleeIVRCode._text)
    )
  );
  await new Promise((r) => setTimeout(r, 3000));
  if (missedTests && missedTests.length) {
    console.log(`Reporting ${missedTests.length} missed test violations.`);
    await _reduce(missedTests, _sendViolation, "Missed Test", totalItems);
  }
  _Util.SaveFile.save(
    missedTests.map((t) => t.EnrolleeRecord.EnrolleeIVRCode._text)
  );
};
