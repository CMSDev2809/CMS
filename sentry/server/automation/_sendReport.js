const _sendMail = require("./_sendMail");
const Handler = require("../controllers/handler");
const _Util = require("../controllers/_util");

const _mailFunc = (to, metaData, content, error) =>
  _sendMail({
    to,
    error,
    abnormal: metaData.abnormal,
    date: metaData.date,
    nameFirst: metaData.nameFirst,
    nameLast: metaData.nameLast,
    subject: `${metaData.nameLast}, ${metaData.nameFirst} - Test Results`,
    metaData,
    attachments: [
      {
        encoding: "base64",
        filename: `${metaData.nameLast}, ${metaData.nameFirst}.pdf`,
        content,
        contentType: "application/pdf",
      },
    ],
  });

module.exports = async (accessionId) => {
  try {
    const metaData = await Handler.Api.getResults({
      query: { accessionId },
    })
      .then(
        (res) =>
          res.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord
      )
      .then((res) => ({
        group: res.EnrolleeRecord.GroupName._text,
        memo: res.EnrolleeRecord.Memo ? res.EnrolleeRecord.Memo._text : "",
        nameFirst: res.EnrolleeRecord.NameFirst
          ? res.EnrolleeRecord.NameFirst._text
          : "",
        nameLast: res.EnrolleeRecord.NameLast
          ? res.EnrolleeRecord.NameLast._text
          : "",
        date: res.ResultDateTime ? res.ResultDateTime._text : "",
        abnormal: res.Abnormal ? res.Abnormal._text : "",
      }));
    const content = await Handler.Api.getAccessionPDF({
      query: { accessionId },
    });
    const participants = _Util.parseRecipients(metaData.memo);
    if (participants && participants.length > 0) {
      participants.map((to) =>
        _mailFunc("joe@compliancemonitoringsystems.com", metaData, content)
      );
    } else {
      ["joe@compliancemonitoringsystems.com"].map((to) =>
        _mailFunc(to, metaData, content, true)
      );
    }
  } catch (e) {
    console.log(e);
  }
};
