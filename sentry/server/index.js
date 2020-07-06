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

schedule.scheduleJob("0 3 * * *", () => reportNew());

if (!config.production) {
  reportNew();
}

app.listen(config.port, () =>
  console.log(`Sentry listening on port ${config.port}!`)
);
