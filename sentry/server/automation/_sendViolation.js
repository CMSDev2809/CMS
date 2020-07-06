const _sendMail = require("./_sendMail");
const Handler = require("../controllers/handler");
const _Util = require("../controllers/_util");
const pdf = require("html-pdf");
const _violationPDF = require("./_violationPDF");
const config = require("../config");

const _mailFunc = async (
  violation,
  to,
  enrollee,
  content,
  resolve,
  reject,
  error
) =>
  await _sendMail({
    violation,
    to,
    resolve,
    reject,
    error,
    nameFirst: enrollee.nameFirst,
    nameLast: enrollee.nameLast,
    subject: `${enrollee.nameLast}, ${enrollee.nameFirst} - Violation (${enrollee.violation})`,
    enrollee,
    attachments: [
      {
        filename: `${enrollee.nameLast}, ${enrollee.nameFirst}.pdf`,
        content,
      },
    ],
  });

module.exports = async (enrollee, violation) => {
  try {
    enrollee = {
      violation,
      group: enrollee.EnrolleeRecord.GroupName._text,
      date: enrollee.TestDate ? enrollee.TestDate._text : "",
      nameFirst: enrollee.EnrolleeRecord.NameFirst
        ? enrollee.EnrolleeRecord.NameFirst._text
        : "",
      nameLast: enrollee.EnrolleeRecord.NameLast
        ? enrollee.EnrolleeRecord.NameLast._text
        : "",
      memo: enrollee.EnrolleeRecord.Memo
        ? enrollee.EnrolleeRecord.Memo._text
        : "",
      enrolleeCaseId: enrollee.EnrolleeRecord.EnrolleeCaseId
        ? enrollee.EnrolleeRecord.EnrolleeCaseId._text
        : "",
    };
    const participants = _Util.parseRecipients(enrollee.memo);
    const content = await new Promise((resolve, reject) => {
      pdf.create(_violationPDF(enrollee)).toBuffer((err, buffer) => {
        resolve(buffer);
      });
    });
    if (participants && participants.length > 0) {
      await Promise.all(
        participants.map(
          async (to) =>
            await new Promise((resolve, reject) =>
              _mailFunc(
                config.production ? to : "broc@compliancemonitoringsystems.com",
                metaData,
                content,
                resolve,
                reject
              )
            )
        )
      );
    } else {
      const errorContacts = config.production
        ? config.errorContacts
        : ["broc@compliancemonitoringsystems.com"];
      await Promise.all(
        errorContacts.map(
          async (to) =>
            await new Promise((resolve, reject) =>
              _mailFunc(to, metaData, content, resolve, reject, true)
            )
        )
      );
    }
  } catch (e) {}
};
