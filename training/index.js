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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Authorization, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

secure.use(security);

app.use("/secure", secure);

routes(app, secure);

app.use(express.static(path.join(__dirname, "build")));

app.use("/Forms", express.static(config.base));

app.get("/locations", (req, res) => {
  res.json(require("../locationList"));
});

if (config.production) {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(config.port, () =>
  console.log(
    `--------------------------------------------------------------` +
      `\n\t\tListening on port ${config.port}\n` +
      `--------------------------------------------------------------`
  )
);
