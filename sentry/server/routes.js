const Handler = require("./controllers/handler");

module.exports = app => {
  app.get("/getResults", (req, res) => Handler.Api.getResults(req, res));
  app.get("/getAccessionPDF", (req, res) =>
    Handler.Api.getAccessionPDF(req, res)
  );
};
