const Handler = require("./controllers/handlerIndex");

module.exports = app => {
  app.get("/test", (req, res) => Handler.Participant.test(req, res));
};
