const fetch = require("node-fetch");
const credentials = require("../../config.js").sentryCredentials;
const _XMLToJS = require("./parseXMLToObject");

module.exports = async object => {
  try {
    const response = await fetch(
      "https://sentry.cordanths.com/Sentry/SoapV1/Service",
      {
        method: "post",
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          Host: "sentry.cordanths.com",
          SOAPAction: `"https://Norchem/Samp/WebApp/SoapV1/${object.method}"`
        },
        body: `
          <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="https://Norchem/Samp/WebApp/SoapV1">
            <soapenv:Header/>
            <soapenv:Body>
               <${object.method} xmlns="https://Norchem/Samp/WebApp/SoapV1">
                  <SentryLogin>
                     <Login>${credentials.username}</Login>
                     <Password>${credentials.password}</Password>
                  </SentryLogin>
                  ${object.body}
               </${object.method}>
            </soapenv:Body>
          </soapenv:Envelope>
        `
      }
    )
      .then(res => res.text())
      .then(res => _XMLToJS(res));
    return response;
  } catch (e) {
    throw new Error(e);
  }
};
