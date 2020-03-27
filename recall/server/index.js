const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config");
const mongoose = require("mongoose");
mongoose.connect(config.db);
const {
  createUser,
  deleteUser,
  loginUser,
  getUserAccess,
  updateLevel
} = require("./controllers/userHandling");
const {
  createCard,
  updateCard,
  getCards,
  getCardsChrono,
  getTasks,
  deleteCard
} = require("./controllers/cardHandling");
const { protectionRoute } = require("./controllers/protected");
const { getUser, getUsers } = require("./controllers/getUser");
const { sendMail, sendReceipt } = require("./controllers/sendMail");
const { ping } = require("./controllers/ping");
const path = require("path");
const routifyPromise = require("./controllers/util").routifyPromise;

app.set("key", config.key);

var protectedRoute = express.Router();
app.use(morgan("dev"));

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

protectedRoute.use(protectedRoute);
app.use(express.static("build"));
app.use("/api", protectedRoute);
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../build/index.html"))
);

app.post("/ping", routifyPromise(ping));
app.post("/get_user_access", routifyPromise(getUserAccess));
app.post("/get_cards", routifyPromise(getCards));
app.post("/get_cards_chrono", routifyPromise(getCardsChrono));
app.post("/get_tasks", routifyPromise(getTasks));
app.post("/user", routifyPromise(createUser));
app.post("/create_card", routifyPromise(createCard));
app.post("/update_level", routifyPromise(updateLevel));
app.post("/update_card", routifyPromise(updateCard));
app.post("/send_receipt", routifyPromise(sendReceipt));
app.post("/authenticate", routifyPromise(loginUser(app)));
app.post("/send_mail", routifyPromise(sendMail));
app.get("/getUser/:id", routifyPromise(getUser));
app.post("/getUsers", routifyPromise(getUsers));
app.delete("/delete_card", routifyPromise(deleteCard));
app.delete("/delete_user", routifyPromise(deleteUser));

app.listen(config.port);
