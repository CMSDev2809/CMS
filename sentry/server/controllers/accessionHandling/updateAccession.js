const Accession = require("../../models/accession");

module.exports = async obj => {
  try {
    const accession = await Accession.update({ _id: obj.id }, obj);
    accession.code = 200;
    accession.msg = "Accession Update Successful!";
    return accession;
  } catch (e) {
    return e;
  }
};
