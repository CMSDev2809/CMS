const express = require("express"),
  app = (module.exports.app = express());
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");
const mongoose = require("mongoose");
mongoose.connect(config.db);
const { toggle } = require("./controllers/toggle");
const { createUser, getUsers } = require("./controllers/userHandling");
const path = require("path");
const routifyPromise = require("./controllers/util").routifyPromise;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(express.static("build"));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../build/index.html"))
);

app.post("/users", routifyPromise(getUsers));
app.post("/toggle", routifyPromise(toggle));
app.post("/createUser", routifyPromise(createUser));

const server = http.createServer(app);
const io = require("socket.io").listen(server); //pass a http.Server instance
server.listen(3001); //listen on port 80
