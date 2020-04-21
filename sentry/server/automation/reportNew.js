const _sendReport = require("./_sendReport");
const Handler = require("../controllers/handler");

const _reduce = arr => {
  _sendReport(arr[0]);
  arr.shift();
  if (arr.length > 0) {
    _reduce(arr);
  }
};

module.exports = async () => {
  console.log("RUNNING CRON JOB");
  const metaData = await Handler.Api.getResults({
    query: { accessionId: null }
  });
  const accessionIds = metaData.getResultsResponse.ResultRecords
    .AccessionRecords.AccessionRecord
    ? metaData.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord.map(
        el => el.AccessionId._text
      )
    : null;
  if (accessionIds) {
    console.log(accessionIds);
    _reduce(accessionIds);
  }
};
