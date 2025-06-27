const express = require("express");
const app = express();
const config = require("./config");
const routes = require("./routes");
const schedule = require("node-schedule");
const reportNew = require("./automation/reportNew");

routes(app);

schedule.scheduleJob("0 * * * *", reportNew);

console.log(config);

if (!config.production) {
  reportNew();
}

app.listen(config.port, () =>
  console.log(`Sentry listening on port ${config.port}!`)
);

app.get(`/sentrystatus`, (req, res) => res.json("Sentry is running!"));
