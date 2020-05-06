const nodemailer = require("nodemailer");
const credentials = require("../config").mailCredentials;
const _mailTemplate = require("./_mailTemplate");
const _violationTemplate = require("./_violationTemplate");

const _sendMail = (transporter, mailOptions) => {
  transporter.sendMail(mailOptions, (error, info) => {});
};

module.exports = obj => {
  let date = new Date(obj.date);
  date = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`;
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
      subject: `${obj.subject} ${date}`,
      html: obj.violation
        ? _violationTemplate({
            donor: `${obj.nameFirst} ${obj.nameLast}`,
            violation: obj.violation
          })
        : _mailTemplate({
            donor: `${obj.nameFirst} ${obj.nameLast}`,
            abnormal: obj.abnormal
          }),
      attachments: obj.attachments ? obj.attachments : null
    }
  );
};
