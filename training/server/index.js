const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes");
const app = express();
const security = require("./security");
const secure = express.Router();
const path = require("path");

app.use(bodyParser.json());
app.use("/Forms", express.static(config.base));
app.use(cors({ origin: true }));
secure.use(cors({ origin: true, credentials: true }));
secure.use(security);

app.use("/secure", secure);

routes(app, secure);

app.listen(config.port, () =>
  console.log(
    `--------------------------------------------------------------` +
      `\n\t\tListening on port ${config.port}\n` +
      `--------------------------------------------------------------`
  )
);
