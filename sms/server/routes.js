const Handler = require("./controllers/handler");

module.exports = (app, emitters) => {
  app.post("/smsPOST", (req, res) =>
    Handler.TwilioAPI.catchSMS(req, res, emitters)
  );
  app.post("/createMatchSMS", (req, res) =>
    Handler.KnownSMS.createMatchSMS(req, res)
  );
  app.post("/smartMatchSMS", (req, res) =>
    Handler.KnownSMS.smartMatchSMS(req, res, emitters)
  );
  app.post("/dailySend", (req, res) => Handler.TwilioAPI.dailySend(req, res));
  app.post("/sendSMS", (req, res) => Handler.TwilioAPI.sendSMS(req, res));
  app.get("/getCalendarEvents", (req, res) =>
    Handler.CalendarAPI.getCalendarEvents(req, res)
  );
  app.get("/matchSMS", (req, res) => Handler.KnownSMS.matchSMS(req, res));
  app.get("/getSMS", (req, res) => Handler.SMS.getSMS(req, res));
  app.put("/updateMatchSMS", (req, res) =>
    Handler.KnownSMS.updateMatchSMS(req, res)
  );
  app.delete("/removeMatchSMS", (req, res) =>
    Handler.KnownSMS.removeMatchSMS(req, res)
  );
};
