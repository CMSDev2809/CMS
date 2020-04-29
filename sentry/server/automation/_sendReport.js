const _sendMail = require("./_sendMail");
const Handler = require("../controllers/handler");

const _parseRecipients = string => {
  string = string.replace(/ /g, "");
  string = string.replace(/\n/g, "");
  if (string.charAt(string.length - 1) === ";") {
    string = string.slice(0, string.length - 1);
  }
  string = string.split(";");
  return [
    "broc@compliancemonitoringsystems.com",
    "joe@compliancemonitoringsystems.com",
    "thisisafakeemail@compliancemonitoringsystems78.com"
  ];
  return string;
};

module.exports = async (accessionId, secondPass) => {
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
  _parseRecipients(metaData.memo).map(to =>
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
