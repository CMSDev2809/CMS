const nodemailer = require("nodemailer");

module.exports = {
  sendMail: async (req, res) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "cardbot@compliancemonitoringsystems.com",
        pass: "Compliance1"
      }
    });
    let mailOptions = {
      from: "cardbot@compliancemonitoringsystems.com",
      to: "broc@compliancemonitoringsystems.com",
      subject: "High Priority Card",
      html: `<div>
              A card has been submitted with High Priority in Recall for <b>${req
                .body.amount}</b> belonging to <b>${req.body.lastName}, ${req
        .body.firstName} (${req.body.cardNumber.slice(
        -4
      )})</b> requested by <b>${req.body.requestedBy}</b>.
            </div>`,
      headers: {
        "x-priority": "1",
        "x-msmail-priority": "High",
        importance: "high"
      }
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
  },
  sendReceipt: async (req, res) => {
    if (req.body.contactEmail && req.body.contactEmail.length > 0) {
      let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
          user: "cardbot@compliancemonitoringsystems.com",
          pass: "Compliance1"
        }
      });
      let mailOptions = {
        from: "cardbot@compliancemonitoringsystems.com",
        to: `${req.body.contactEmail}`,
        subject: `${req.body.clientLastName}, ${req.body
          .clientFirstName} - Your card request has been processed.`,
        html: `<div>
          The card you've submitted for <b>${req.body
            .amount}</b> belonging to <b>${req.body
          .clientLastName}</b>, <b>${req.body.clientFirstName} (${req.body
          .lastFour})</b> has been processed.
        </div>`,
        headers: {
          "x-priority": "1",
          "x-msmail-priority": "High",
          importance: "high"
        }
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
      });
    }
  }
};
