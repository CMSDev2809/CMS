module.exports = {
  Api: {
    getResults: require("./apiHandling/getResults"),
    getAccessionPDF: require("./apiHandling/getAccessionPDF"),
    getSelections: require("./apiHandling/getSelections")
  },
  Accession: {
    createAccession: require("./accessionHandling/createAccession"),
    deleteAccession: require("./accessionHandling/deleteAccession"),
    getAccession: require("./accessionHandling/getAccession"),
    updateAccession: require("./accessionHandling/updateAccession")
  }
};
