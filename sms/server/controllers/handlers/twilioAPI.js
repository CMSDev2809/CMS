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
    });
    client.messages.create(
      {
        body: req.body.message,
        from: config.twilioPhoneNumber,
        to: req.body.target,
      },
      (err, msg) => (err ? console.log(err) : res.json(msg))
    );
  },
  dailySend: async (req, res) => {
    const results = await fetch(
      `${config.developmentEndpoint}:${config.port}/getCalendarEvents`
    ).then((res) => res.json());
    let _Date = new Date();
    _Date.setHours(_Date.getHours() - 6);
    await Promise.all(
      results.map(
        async (el) =>
          await fetch(`${config.developmentEndpoint}:${config.port}/sendSMS`, {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              timestamp: _Date,
              message: `${el.description}\n\nPay Online:\nhttps://tinyurl.com/yyfm7flv`,
              target: el.phoneNumber,
              origin: config.twilioPhoneNumber,
            }),
          })
      )
    );
    res.json("Operation Complete");
  },
};
