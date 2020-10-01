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
  app.post("/createUser", (req, res) =>
    Handler.UserHandling.createUser(req, res)
  );
  app.put("/updateUser", (req, res) =>
    Handler.UserHandling.updateUser(req, res)
  );
  app.post("/loginUser", (req, res) =>
    Handler.UserHandling.loginUser(req, res)
  );
  app.get("/getUser", (req, res) => Handler.UserHandling.getUser(req, res));
  app.get("/validateToken", (req, res) =>
    Handler.UserHandling.validateToken(req, res)
  );
  app.delete("/removeUser", (req, res) =>
    Handler.UserHandling.removeUser(req, res)
  );
  app.get("/getCalendarEvents", (req, res) =>
    Handler.CalendarAPI.getCalendarEvents(req, res)
  );
  app.get("/smsVoice", (req, res) => res.json(""));
  app.get("/matchSMS", (req, res) => Handler.KnownSMS.matchSMS(req, res));
  app.get("/getSMS", (req, res) => Handler.SMS.getSMS(req, res));
  app.put("/updateMatchSMS", (req, res) =>
    Handler.KnownSMS.updateMatchSMS(req, res)
  );
  app.delete("/removeMatchSMS", (req, res) =>
    Handler.KnownSMS.removeMatchSMS(req, res)
  );
  app.delete("/deleteAllSMS", (req, res) => Handler.SMS.deleteAllSMS(req, res));
};
