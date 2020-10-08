const Handler = require("./controllers/handler");

module.exports = async (app, security, emitters) => {
  emitters = await emitters.then((res) => res);
  app.post("/smsPOST", (req, res) =>
    Handler.TwilioAPI.catchSMS(req, res, emitters)
  );
  security.post("/createMatchSMS", (req, res) =>
    Handler.KnownSMS.createMatchSMS(req, res)
  );
  security.post("/smartMatchSMS", (req, res) =>
    Handler.KnownSMS.smartMatchSMS(req, res, emitters)
  );
  app.post("/dailySend", (req, res) => Handler.TwilioAPI.dailySend(req, res));
  security.post("/sendSMS", (req, res) => Handler.TwilioAPI.sendSMS(req, res));
  security.post("/createUser", (req, res) =>
    Handler.UserHandling.createUser(req, res)
  );
  security.put("/updateUser", (req, res) =>
    Handler.UserHandling.updateUser(req, res)
  );
  app.post("/loginUser", (req, res) =>
    Handler.UserHandling.loginUser(req, res)
  );
  security.get("/getUser", (req, res) =>
    Handler.UserHandling.getUser(req, res)
  );
  security.get("/validateToken", (req, res) =>
    Handler.UserHandling.validateToken(req, res)
  );
  security.delete("/removeUser", (req, res) =>
    Handler.UserHandling.removeUser(req, res)
  );
  app.get("/getCalendarEvents", (req, res) =>
    Handler.CalendarAPI.getCalendarEvents(req, res)
  );
  app.get("/smsVoice", (req, res) =>
    res.sendFile(`${__dirname}/audio/aud.mp3`)
  );
  security.get("/matchSMS", (req, res) => Handler.KnownSMS.matchSMS(req, res));
  security.get("/getSMS", (req, res) => Handler.SMS.getSMS(req, res));
  security.put("/updateMatchSMS", (req, res) =>
    Handler.KnownSMS.updateMatchSMS(req, res)
  );
  security.put("/markSMSAsRead", (req, res) =>
    Handler.SMS.markSMSAsRead(req, res)
  );
  security.delete("/removeMatchSMS", (req, res) =>
    Handler.KnownSMS.removeMatchSMS(req, res)
  );
  security.delete("/deleteAllSMS", (req, res) =>
    Handler.SMS.deleteAllSMS(req, res, emitters)
  );
};
