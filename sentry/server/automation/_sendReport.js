const _sendMail = require("./_sendMail");
const Handler = require("../controllers/handler");
const _Util = require("../controllers/_util");
const config = require("../config");

const _mailFunc = async (
  to,
  metaData,
  content,
  resolve,
  reject,
  totalItems,
  error
) => {
  console.log(` ---> ${metaData.nameLast}, ${metaData.nameFirst} (${to})`);
  return await _sendMail(
    {
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
    },
    totalItems
  );
};

module.exports = async (accessionId, totalItems) => {
  let metaData = await Handler.Api.getResults({
    query: { accessionId },
  });
  metaData = {
    group: metaData.EnrolleeRecord.GroupName
      ? metaData.EnrolleeRecord.GroupName._text
      : "",
    memo: metaData.EnrolleeRecord.Memo
      ? metaData.EnrolleeRecord.Memo._text
      : "",
    nameFirst: metaData.EnrolleeRecord.NameFirst
      ? metaData.EnrolleeRecord.NameFirst._text
      : "",
    nameLast: metaData.EnrolleeRecord.NameLast
      ? metaData.EnrolleeRecord.NameLast._text
      : "",
    date: metaData.CollectionDateTime
      ? metaData.CollectionDateTime._text.toString().split("T")[0]
      : "",
    abnormal: metaData.Abnormal ? metaData.Abnormal._text : "",
  };
  const content = await Handler.Api.getAccessionPDF({
    query: { accessionId },
  });
  const participants = _Util.parseRecipients(metaData.memo);
  if (participants && participants.length > 0) {
    await participants.map(
      async (to) =>
        await new Promise((resolve, reject) =>
          _mailFunc(
            config.production ? to : "broc@compliancemonitoringsystems.com",
            metaData,
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
      : ["broc@compliancemonitoringsystems.com"];
    await errorContacts.map(
      async (to) =>
        new Promise((resolve, reject) =>
          _mailFunc(to, metaData, content, resolve, reject, totalItems, true)
        )
    );
  }
};
