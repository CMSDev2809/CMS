const Accession = require("../../models/accession");

module.exports = async obj => {
  try {
    const accession = await Accession.remove({ _id: obj.id });
    accession.code = 200;
    accession.msg = "Accession Remove Successful!";
    return accession;
  } catch (e) {
    return e;
  }
};
