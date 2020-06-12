const nodemailer = require("nodemailer");
const credentials = require("../config").mailCredentials;
const _mailTemplate = require("./_mailTemplate");
const _violationTemplate = require("./_violationTemplate");
const _errorTemplate = require("./_errorTemplate");

const _sendMail = (transporter, mailOptions) => {
  transporter.sendMail(mailOptions, (error, info) => {});
};

module.exports = (obj) => {
  let fn;
  if (obj.error) {
    fn = _errorTemplate;
  } else if (obj.violation) {
    fn = _violationTemplate;
  } else {
    fn = _mailTemplate;
  }
  _sendMail(
    nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 25,
      secure: false,
      auth: {
        user: credentials.username,
        pass: credentials.password,
      },
    }),
    {
      from: credentials.username,
      to: obj.to,
      subject: obj.date ? `${obj.subject} ${obj.date}` : `${obj.subject}`,
      html: fn({
        donor: `${obj.nameFirst} ${obj.nameLast}`,
        abnormal: obj.abnormal,
      }),
      attachments: obj.attachments ? obj.attachments : null,
    }
  );
};
