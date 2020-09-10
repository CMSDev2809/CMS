const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");
const routes = require("./routes");
const schedule = require("node-schedule");
const cors = require("cors");
const socket = require("./io");
require("./db_util")();

app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

routes(app);

app.use(express.static("./client/build"));

if (config.production) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

let server = null;
if (config.production) {
  const key = fs.readFileSync(
    "/etc/letsencrypt/live/titan-esports.org/privkey.pem",
    "utf8"
  );
  const cert = fs.readFileSync(
    "/etc/letsencrypt/live/titan-esports.org/cert.pem",
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

schedule.scheduleJob("0 2 * * *", () => reportNew());

socket(io);
