const express = require("express");
const app = express();
const security = express.Router();
const protected = require("./protected").protected;
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("../config");
const routes = require("./routes");
const schedule = require("node-schedule");
const cors = require("cors");
const socket = require("./socket-io/socket-io");
const fs = require("fs");
const fetch = require("node-fetch");
require("./db_util")();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ origin: true, credentials: true }));

app.use("/s", security);
security.use(cors({ origin: true, credentials: true }));
security.use(protected);

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(express.static(path.join(__dirname, "./audio")));

if (config.production) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

let server = null;
if (config.production) {
  const key = fs.readFileSync(
    "/etc/letsencrypt/live/compliancemonitoringsystems.com/privkey.pem",
    "utf8"
  );
  const cert = fs.readFileSync(
    "/etc/letsencrypt/live/compliancemonitoringsystems.com/cert.pem",
    "utf8"
  );
  server = require("https").createServer({ key, cert }, app);
} else {
  server = require("http").createServer(app);
}

const io = require("socket.io")(server);

server.listen(config.port, () =>
  console.log(`SMS listening on port ${config.port}!`)
);

routes(app, security, socket(io));

schedule.scheduleJob("*/15 * * * *", () =>
  fetch(
    `${
      config.production ? config.productionEndpoint : config.developmentEndpoint
    }:${config.port}/dailySend`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
);
