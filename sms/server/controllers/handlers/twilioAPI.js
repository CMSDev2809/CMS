const config = require("../../../config");
const fetch = require("node-fetch");
const client = require("twilio")(
  config.twilioAccountSid,
  config.twilioAuthToken
);
const Handler = require("../handler");

const SMS = require("../../models/SMS");

module.exports = {
  catchSMS: async (req, res, emitters) => {
    let _Date = new Date();
    _Date.setHours(_Date.getHours() - 6);
    const message = await SMS.create({
      timestamp: _Date,
      content: req.body.Body,
      origin: req.body.From,
      target: req.body.To,
      new: true,
    });
    emitters.broadcast_update(message);
  },
  sendSMS: async (req, res) => {
    let _Date = new Date();
    _Date.setHours(_Date.getHours() - 6);
    await SMS.create({
      timestamp: _Date,
      content: req.body.message,
      origin: config.twilioPhoneNumber,
      target: req.body.target,
      new: true,
    });
    client.messages.create(
      {
        body: req.body.message,
        from: config.twilioPhoneNumber,
        to: req.body.target,
      },
      (err, msg) => (err ? console.log(err) : res ? res.json(msg) : null)
    );
  },
  dailySend: async (req, res) => {
    const results = await fetch(
      `${config.developmentEndpoint}:${config.port}/getCalendarEvents`
    ).then((res) => res.json());
    const _Date = new Date();
    _Date.setHours(_Date.getHours() - 6);
    await Promise.all(
      results.map(async (el) => {
        if (el.time) {
          let t1 = el.time.split(":");
          t1 = t1[0] + t1[1];
          let t2 = _Date.toUTCString().split(" ")[4].split(":");
          t2 = t2[0] + t2[1];
          return t1 === t2
            ? await module.exports.sendSMS({
                body: {
                  timestamp: _Date,
                  message: `${el.description}\n\nPay Online:\nhttps://tinyurl.com/yyfm7flv`,
                  target: el.phoneNumber,
                  origin: config.twilioPhoneNumber,
                  new: true,
                },
              })
            : null;
        }
      })
    );
    res.json("Operation Complete");
  },
};
