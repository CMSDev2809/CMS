const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");
const routes = require("./routes");

const mongoose = require("mongoose");
mongoose.connect(config.db);

routes(app);

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.port}!`)
);
