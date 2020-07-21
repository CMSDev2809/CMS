const nodemailer = require("nodemailer");
const credentials = require("../config").mailCredentials;
const _mailTemplate = require("./_mailTemplate");
const _violationTemplate = require("./_violationTemplate");
const _errorTemplate = require("./_errorTemplate");
const config = require("../config");

const _sendMail = (transporter, mailOptions, resolve, reject, totalItems) =>
  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      if (error.responseCode === 432) {
        await new Promise((resolve, reject) =>
          setTimeout(() => resolve(), 10000)
        );
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            // totalItems();
            resolve();
          }
        });
      }
    } else {
      // totalItems();
      resolve();
    }
  });

module.exports = (obj, totalItems) => {
  let fn;
  if (obj.error) {
    fn = _errorTemplate;
  } else if (obj.violation) {
    fn = _violationTemplate;
  } else {
    fn = _mailTemplate;
  }
  return _sendMail(
    nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
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
    },
    obj.resolve,
    obj.reject,
    totalItems
  );
};
