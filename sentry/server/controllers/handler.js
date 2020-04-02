module.exports = {
  Api: {
    getResults: require("./apiHandling/getResults")
  },
  Accession: {
    createAccession: require("./accessionHandling/createAccession"),
    deleteAccession: require("./accessionHandling/deleteAccession"),
    getAccession: require("./accessionHandling/getAccession"),
    updateAccession: require("./accessionHandling/updateAccession")
  }
};
