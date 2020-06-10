const _sendMail = require("./_sendMail");
const Handler = require("../controllers/handler");
const _Util = require("../controllers/_util");
const pdf = require("html-pdf");
const _violationPDF = require("./_violationPDF");

const _mailFunc = (violation, to, enrollee, content) =>
  _sendMail({
    violation,
    to,
    date: enrollee.date,
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
      participants.map(async (to) => {
        _mailFunc(
          violation,
          "joe@compliancemonitoringsystems.com",
          enrollee,
          content
        );
      });
    } else {
      _mailFunc(
        violation,
        "broc@compliancemonitoringsystems.com",
        enrollee,
        content
      );
    }
  } catch (e) {
    console.log(e);
  }
};
