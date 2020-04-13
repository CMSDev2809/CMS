const _getResults = require("../controllers/apiHandling/getResults");
const _getAccessionPDF = require("../controllers/apiHandling/getAccessionPDF");
const _sendMail = require("./_sendMail");
const _getAccession = require("../controllers/accessionHandling/getAccession");
const _createAccession = require("../controllers/accessionHandling/createAccession");

module.exports = async () => {
  // const results = await _getResults();
  // console.log(results);
  // results.map(async result => {
  //   const accession = await _getAccession(result.accession);
  //   if (accession && accession.accession) {
  //   } else {
  //     await _createAccession(result.accession);
  //     const attachment = await _getAccessionPDF(result.accession);
  //     _sendMail({
  //       to: "some_kind_of_reporting_email",
  //       subject: `${result.DonorInfo.Name}`,
  //       attachment
  //     });
  //   }
  // });
  _sendMail({
    to: "broc@compliancemonitoringsystems.com",
    subject: "Hancock, John",
    attachment: "http://www.pdf995.com/samples/pdf.pdf"
  });
};
