const config = require("../../../config");
const fetch = require("node-fetch");
const client = require("twilio")(
  config.twilioAccountSid,
  config.twilioAuthToken
);
const Handler = require("../handler");

const SMS = require("../../models/SMS");

module.exports = {
  sendSMS: async (req, res) => {
    await SMS.create({
      timestamp: new Date(),
      content: req.body.message,
      origin: config.twilioPhoneNumber,
    });
    client.messages.create(
      {
        body: `${req.body.message}\n\nPay Online:\nhttps://tinyurl.com/yyfm7flv`,
        from: config.twilioPhoneNumber,
        to: req.body.to,
      },
      (err, msg) => (err ? console.log(err) : res.json(msg.sid))
    );
  },
  dailySend: async (req, res) => {
    const results = await fetch(
      `${config.developmentEndpoint}:${config.port}/getCalendarEvents`
    ).then((res) => res.json());
    await Promise.all(
      results.map(
        async (el) =>
          await fetch(`${config.developmentEndpoint}:${config.port}/sendSMS`, {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              message: el.description,
              to: el.phoneNumber,
            }),
          })
      )
    );
    res.json("Operation Complete");
  },
};
