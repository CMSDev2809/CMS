const convert = require("xml-js");

module.exports = xml =>
  JSON.parse(convert.xml2json(xml, { compact: true, spaces: 0 }))[
    "SOAP-ENV:Envelope"
  ]["SOAP-ENV:Body"];
