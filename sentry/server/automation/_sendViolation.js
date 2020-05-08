const _sendMail = require("./_sendMail");
const Handler = require("../controllers/handler");
const _Util = require("../controllers/_util");
const pdf = require("html-pdf");
const _violationPDF = require("./_violationPDF");

module.exports = async (enrollee, violation) => {
  console.log(enrollee.ScheduleRecord.TestRecords);
  enrollee = {
    violation,
    date: enrollee.TestDate._text,
    nameFirst: enrollee.EnrolleeRecord.NameFirst._text,
    nameLast: enrollee.EnrolleeRecord.NameLast._text,
    memo: enrollee.EnrolleeRecord.Memo
      ? enrollee.EnrolleeRecord.Memo._text
      : "",
    enrolleeCaseId: enrollee.EnrolleeRecord.EnrolleeCaseId
      ? enrollee.EnrolleeRecord.EnrolleeCaseId._text
      : ""
  };
  _Util.parseRecipients(enrollee.memo).map(async to => {
    const content = await new Promise((resolve, reject) => {
      pdf.create(_violationPDF(enrollee)).toBuffer((err, buffer) => {
        resolve(buffer);
      });
    });
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
          content
        }
      ]
    });
  });
};
