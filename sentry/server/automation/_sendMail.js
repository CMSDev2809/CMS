const nodemailer = require("nodemailer");
const credentials = require("../config").mailCredentials;
const _mailTemplate = require("./_mailTemplate");

module.exports = obj => {
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: credentials.username,
      pass: credentials.password
    }
  });
  let mailOptions = {
    from: credentials.username,
    to: obj.to,
    subject: obj.subject,
    html: _mailTemplate(obj.subject),
    attachments: obj.attachment
      ? [
          {
            path: obj.attachment
          }
        ]
      : null
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
};
