const Accession = require("../../models/accession");

module.exports = async obj => {
  const accession = await (obj && obj.accession
    ? Accession.findOne({ accession: obj.accession })
    : Accession.find());
  if (!accession) {
    return { code: 11102, msg: "Get Accession Error." };
  }
  try {
    return { code: 200, msg: "Get Accession Successful!", accession };
  } catch (e) {
    return { code: 11102, msg: "Get Accession Error." };
  }
};
