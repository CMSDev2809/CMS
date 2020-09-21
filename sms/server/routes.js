const Handler = require("./controllers/handler");

module.exports = (app) => {
  app.get("/getCalendarEvents", (req, res) =>
    Handler.CalendarAPI.getCalendarEvents(req, res)
  );
  app.get("/getSMS", (req, res) => Handler.SMS.getSMS(req, res));
  app.post("/dailySend", (req, res) => Handler.TwilioAPI.dailySend(req, res));
  app.post("/sendSMS", (req, res) => Handler.TwilioAPI.sendSMS(req, res));
};
