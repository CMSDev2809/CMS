const fetch = require("node-fetch");

module.exports = async (object) => {
	try {
		const response = await fetch(
			"https://payments.ebizcharge.com/ebizsoap/wsdl/v2",
			{
				method: "post",
				body: `
                <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ebiz="http://eBizCharge.ServiceModel.SOAP">
                <soapenv:Header/>
                <soapenv:Body>
                   <ebiz:runTransaction>
                      <ebiz:securityToken>
                         <ebiz:SecurityId>c3f5baf6-2213-4627-959c-329f01865552</ebiz:SecurityId>
                         <ebiz:UserId>134gqergrq9999</ebiz:UserId>
                         <ebiz:Password>dafgb45g</ebiz:Password>
                      </ebiz:securityToken>
                      <ebiz:tran>
                         <ebiz:CustReceiptName/>
                         <ebiz:LineItems>
                            <ebiz:LineItem>
                               <ebiz:ProductName>Services</ebiz:ProductName>
                               <ebiz:Description>Services</ebiz:Description>
                               <ebiz:UnitPrice>25.00</ebiz:UnitPrice>
                               <ebiz:Qty>1</ebiz:Qty>
                            </ebiz:LineItem>
                         </ebiz:LineItems>
                         <ebiz:Details>
                            <ebiz:Invoice>inv008</ebiz:Invoice>
                            <ebiz:Comments>New Transaction</ebiz:Comments>
                            <ebiz:Description>Validation Authorization 2</ebiz:Description>
                         </ebiz:Details>
                         <ebiz:Software>NAV_EBC</ebiz:Software>
                         <ebiz:CustReceipt>false</ebiz:CustReceipt>
                         <ebiz:CreditCardData>
                            <ebiz:CardNumber>4111111111111111</ebiz:CardNumber>
                            <ebiz:CardExpiration>1222</ebiz:CardExpiration>
                            <ebiz:CardCode>123</ebiz:CardCode>
                            <ebiz:AvsZip>92618</ebiz:AvsZip>
                            <ebiz:AvsStreet>20 Alton</ebiz:AvsStreet>
                         </ebiz:CreditCardData>
                         <ebiz:Command>sale</ebiz:Command>
                         <ebiz:BillingAddress>
                            <ebiz:City>antro luctantis ventos</ebiz:City>
                            <ebiz:Company>sciret dare</ebiz:Company>
                            <ebiz:Country>luctantis ventos</ebiz:Country>
                            <ebiz:Email>ipsa iovis</ebiz:Email>
                            <ebiz:Fax>aris imponet</ebiz:Fax>
                            <ebiz:FirstName>imperio premit</ebiz:FirstName>
                            <ebiz:LastName>arce sceptra tenens</ebiz:LastName>
                            <ebiz:Phone>ni faciat</ebiz:Phone>
                            <ebiz:State>circum claustra fremunt</ebiz:State>
                            <ebiz:Street>corde volutans</ebiz:Street>
                            <ebiz:Street2>insuper altos</ebiz:Street2>
                            <ebiz:Zip>temperat iras</ebiz:Zip>
                         </ebiz:BillingAddress>
                      </ebiz:tran>
                   </ebiz:runTransaction>
                </soapenv:Body>
             </soapenv:Envelope>
        `,
			}
		).then((res) => res.text());
		return response;
	} catch (e) {
		throw new Error(e);
	}
};
