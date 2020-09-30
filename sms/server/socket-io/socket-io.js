const ORIGIN = "SMS";

module.exports = (io) =>
  new Promise((resolve, reject) => {
    io.on("connection", (socket) => {
      const Emitters = require("./emitters")(io)(socket)(ORIGIN, "room");
      require("./events")(socket)(Emitters)(ORIGIN, "room");
      resolve(Emitters);
    });
  });
