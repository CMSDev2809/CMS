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
  totalItems,
  error
) => {
  console.log(` ---> ${enrollee.nameLast}, ${enrollee.nameFirst} (${to})`);
  await _sendMail(
    {
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
    },
    totalItems
  );
};

module.exports = async (enrollee, violation, totalItems) => {
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
    await participants.map(
      async (to) =>
        await new Promise((resolve, reject) =>
          _mailFunc(
            violation,
            config.production ? to : config.testingAddress,
            enrollee,
            content,
            resolve,
            reject,
            totalItems
          )
        )
    );
  } else {
    const errorContacts = config.production
      ? config.errorContacts
      : [config.testingAddress];
    await errorContacts.map(
      async (to) =>
        await new Promise((resolve, reject) =>
          _mailFunc(
            violation,
            to,
            enrollee,
            content,
            resolve,
            reject,
            totalItems,
            true
          )
        )
    );
  }
};
