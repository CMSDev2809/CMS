const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");
const routes = require("./routes");
const schedule = require("node-schedule");
const reportNew = require("./automation/reportNew");

// const mongoose = require("mongoose");
// mongoose.connect(config.db);

routes(app);

const TESTING = async () => {
  const Handler = require("./controllers/handler");
  const _Util = require("./controllers/_util");
  const missedTests = await Handler.Api.getSelections({
    query: { date: _Util.getDate(-1) },
  });
  if (
    missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord &&
    missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord.length
  ) {
    console.log(
      "Results retrieved: ",
      missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord &&
        missedTests.getSelectionsResponse.SelectionRecords.SelectionRecord
          .length,
      `- ${new Date()}`
    );
  } else {
    console.log("No results yet - ", `${new Date()}`);
  }
};

schedule.scheduleJob("0 6 * * *", () => reportNew());
schedule.scheduleJob("0 1 * * *", () => TESTING());
schedule.scheduleJob("0 2 * * *", () => TESTING());
schedule.scheduleJob("0 3 * * *", () => TESTING());
schedule.scheduleJob("0 4 * * *", () => TESTING());
schedule.scheduleJob("0 5 * * *", () => TESTING());
schedule.scheduleJob("0 6 * * *", () => TESTING());

app.listen(config.port, () =>
  console.log(`Sentry listening on port ${config.port}!`)
);
