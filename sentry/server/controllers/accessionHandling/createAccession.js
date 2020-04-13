const Accession = require("../../models/accession");

module.exports = async obj => {
  try {
    delete obj.createDate;
    const accession = await Accession.create(
      Object.assign({ creationDate: new Date() }, obj)
    );
    accession.code = 200;
    accession.msg = "Accession Creation Successful!";
    return accession;
  } catch (e) {
    return e;
  }
};
