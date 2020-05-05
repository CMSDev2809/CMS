const _sendMail = require("./_sendMail");
const Handler = require("../controllers/handler");
const _Util = require("../controllers/_util");

module.exports = async accessionId => {
  const metaData = await Handler.Api.getResults({
    query: { accessionId }
  })
    .then(
      res =>
        res.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord
    )
    .then(res => ({
      memo: res.EnrolleeRecord.Memo._text,
      nameFirst: res.EnrolleeRecord.NameFirst._text,
      nameLast: res.EnrolleeRecord.NameLast._text,
      date: res.ResultDateTime._text,
      abnormal: res.Abnormal._text
    }));
  const content = await Handler.Api.getAccessionPDF({
    query: { accessionId }
  });
  _Util.parseRecipients(metaData.memo).map(to =>
    _sendMail({
      to,
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
          contentType: "application/pdf"
        }
      ]
    })
  );
};
