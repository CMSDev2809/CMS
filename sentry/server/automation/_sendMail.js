const nodemailer = require("nodemailer");
const credentials = require("../config").mailCredentials;
const errorContacts = require("../config").errorContacts;
const _mailTemplate = require("./_mailTemplate");

const CYCLE_CAP = 0;

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
        _sendError(
          nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
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
    } else {
      console.log("email sent: ", mailOptions.to);
    }
  });
};

module.exports = obj => {
  let date = new Date(obj.date);
  date = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`;
  _sendMail(
    nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: credentials.username,
        pass: credentials.password
      }
    }),
    {
      from: credentials.username,
      to: obj.to,
      subject: `${obj.subject} ${date}`,
      html: _mailTemplate({
        donor: `${obj.nameFirst} ${obj.nameLast}`,
        abnormal: obj.abnormal
      }),
      attachments: obj.attachments ? obj.attachments : null
    }
  );
};
