let mongoose = require("mongoose");
const config = require("./config");
const option = {
  keepAlive: true,
  reconnectTries: 30,
  reconnectInterval: 3000
};

module.exports = cb => {
  if (mongoose.connection.readyState < 1) {
    mongoose.connect(config.db, option).then(
      () => {
        console.log("Database linking successful!");
        if (cb) {
          return cb;
        }
      },
      err => {
        console.log("Failed to connect to database.");
      }
    );
  }
};
