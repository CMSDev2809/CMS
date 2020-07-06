const _sendMail = require("./_sendMail");
const Handler = require("../controllers/handler");
const _Util = require("../controllers/_util");
const config = require("../config");

const _mailFunc = async (to, metaData, content, resolve, reject, error) =>
  await _sendMail({
    to,
    error,
    resolve,
    reject,
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
  const metaData = await Handler.Api.getResults({
    query: { accessionId },
  })
    .then(
      (res) =>
        res.getResultsResponse.ResultRecords.AccessionRecords.AccessionRecord
    )
    .then((res) => ({
      group: res.EnrolleeRecord.GroupName
        ? res.EnrolleeRecord.GroupName._text
        : "",
      memo: res.EnrolleeRecord.Memo ? res.EnrolleeRecord.Memo._text : "",
      nameFirst: res.EnrolleeRecord.NameFirst
        ? res.EnrolleeRecord.NameFirst._text
        : "",
      nameLast: res.EnrolleeRecord.NameLast
        ? res.EnrolleeRecord.NameLast._text
        : "",
      date: res.CollectionDateTime
        ? res.CollectionDateTime._text.toString().split("T")[0]
        : "",
      abnormal: res.Abnormal ? res.Abnormal._text : "",
    }));
  const content = await Handler.Api.getAccessionPDF({
    query: { accessionId },
  });
  const participants = _Util.parseRecipients(metaData.memo);
  try {
    if (participants && participants.length > 0) {
      await Promise.all(
        participants.map(
          async (to) =>
            await new Promise((resolve, reject) =>
              _mailFunc(
                config.production
                  ? to
                  : "broc2@compliancemonitoringsystems.com",
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
