const DAYS_TO_SAVE = 3;

module.exports = async () => {
  const DATE = Date.now();
  const _compare = (d1, d2) => (d1 - d2) / 1000 / 60 / 60 / 24;
  const _deleteAccession = require("../controllers/accessionHandling/deleteAccession");
  const _accessions = await require("../controllers/accessionHandling/getAccession")();
  _accessions.accession.map(acc => {
    if (_compare(DATE, acc.creationDate) > DAYS_TO_SAVE) {
      _deleteAccession(acc._id);
    }
  });
};
