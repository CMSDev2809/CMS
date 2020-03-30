const fetch = require("node-fetch");

module.exports = async () => {
  try {
    const response = await fetch(
      encodeURI("https://sentry.cordanths.com/Sentry/SoapV1/Service"),
      {
        method: "post",
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          Host: "sentry.cordanths.com",
          SOAPAction: "https://Norchem/Samp/WebApp/SoapV1/getResults"
        },
        body: `
          <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="https://Norchem/Samp/WebApp/SoapV1">
            <soapenv:Header/>
            <soapenv:Body>
              <getResults xmlns="https://Norchem/Samp/WebApp/SoapV1">
                <SentryLogin>
                <Login>string</Login>
                <Password>string</Password>
                </SentryLogin>
                <ResultSearchRequest>
                <AccessionId>string</AccessionId> <!--Zero or more repetitions:-->
                <CocId>string</CocId> <!--Zero or more repetitions:-->
                <FtkId>string</FtkId> <!--Zero or more repetitions:-->
                <SinceAccessionId>string</SinceAccessionId> <!--Optional:-->
                <SingleDate>date</SingleDate> <!--Optional:-->
                <DateRange> <!--Optional:-->
                <DateStart>date</DateStart>
                <DateEnd>date</DateEnd>
                </DateRange>
                <NewAccessions>string</NewAccessions> <!--Optional:-->
                </ResultSearchRequest>
              </getResults>
            </soapenv:Body>
          </soapenv:Envelope>
        `
      }
    ).then(res => res.text());
    console.log(response);
    return response;
  } catch (e) {
    throw new Error(e);
  }
};
