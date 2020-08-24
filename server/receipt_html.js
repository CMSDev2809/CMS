module.exports = {
  receipt_html: (data, response, imgs) => `
  <div style="padding: 175px; padding-bottom: 0px">
    <div style="width: 100%; background-color: rgb(235, 235, 235); border: 0 solid black">
      <div style="background-color: rgb(98, 98, 98); padding: 10px; color: rgb(255, 255, 255)">
        <div><h1 style="font-size: 14px; text-align: center">Compliance Monitoring Systems</h1></div>
        <div><h1 style="font-size: 10px; text-align: center">2809 Great Northern Loop Suite 200</h1></div>
        <div><h1 style="font-size: 10px; text-align: center">Missoula, Montana 59808</h1></div>
      </div>
      <div style="padding: 5px">
        <div style="margin-bottom: -102.5%; margin-top: 7.5%; opacity: 0.05; z-index: 1">
          <img width="100%" src="http://209.124.93.183/img.png" />
        </div>
          <div style="border: 1 solid rgb(33, 33, 33); padding: 10px; ; z-index: 100">
          <div><h2 style="font-size: 8px">Client</h2></div>
          <div style="font-size: 8px">${data.clientFirstName} ${
    data.clientMiddleInitial
  } ${data.clientLastName} (Paid for by ${data.cardHolder})</div>
          <div><h2 style="font-size: 8px">Transaction Date</h2></div>
          <div style="font-size: 8px">${response.match(
            /<ssl_txn_time>(.*?)<\/ssl_txn_time>/g
          )}</div>
          <div><h2 style="font-size: 8px">Invoice Number</h2></div>
          <div style="font-size: 8px">${data.invoiceNumber}</div>
          <div><h2 style="font-size: 8px">Program</h2></div>
          <div style="font-size: 8px">${data.program}</div>
          <div><h2 style="font-size: 8px">Program Location</h2></div>
          <div style="font-size: 8px">${data.location}</div>
          <div><h2 style="font-size: 8px">Transaction Amount</h2></div>
          <div style="font-size: 8px">$${data.amount}</div>
          <div><h2 style="font-size: 8px">Card Number</h2></div>
          <div style="font-size: 8px">${response.match(
            /<ssl_card_number>(.*?)<\/ssl_card_number>/g
          )}</div>
          <div><h2 style="font-size: 8px">Card Type</h2></div>
          <div style="font-size: 8px">${response.match(
            /<ssl_card_short_description>(.*?)<\/ssl_card_short_description>/g
          )}</div>
          <div><h2 style="font-size: 8px">Approval Code</h2></div>
          <div style="font-size: 8px">${response.match(
            /<ssl_approval_code>(.*?)<\/ssl_approval_code>/g
          )}</div>
        </div>
      </div>
    </div>
  </div>
  `,
};
