const nodemailer = require("nodemailer");
const credentials = require("../config").mailCredentials;
const errorContacts = require("../config").errorContacts;
const _mailTemplate = require("./_mailTemplate");

const CYCLE_CAP = 3;

const _sendError = (transporter, mailOptions, iteration = 0) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      if (iteration >= CYCLE_CAP) {
        console.log(error);
      } else {
        _sendError(transporter, mailOptions, iteration + 1);
      }
    }
  });
};

const _sendMail = (transporter, mailOptions, iteration = 0) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      if (iteration >= CYCLE_CAP) {
        console.log(errorContacts.join(";"));
        _sendError(
          nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 25,
            secure: false,
            auth: {
              user: credentials.username,
              pass: credentials.password
            }
          }),
          {
            from: credentials.username,
            to: errorContacts.join(";"),
            subject: "SENTRY REPORTING ERROR",
            html: `There was a reporting error for ${mailOptions.subject}.`
          }
        );
      } else {
        _sendMail(transporter, mailOptions, iteration + 1);
      }
    }
  });
};

module.exports = obj =>
  _sendMail(
    nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 25,
      secure: false,
      auth: {
        user: credentials.username,
        pass: credentials.password
      }
    }),
    {
      from: credentials.username,
      to: obj.to,
      subject: obj.subject,
      html: _mailTemplate(`${obj.nameFirst} ${obj.nameLast}`),
      attachments: obj.attachments ? obj.attachments : null
    }
  );
