const config = require("../../config");
const nodemailer = require("nodemailer");

const sendMail = (data) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "webreferral@compliancemonitoringsystems.com",
      pass: "Scramtastic1!",
    },
  });
  const mailOptions = {
    from: "webreferral@compliancemonitoringsystems.com",
    to: "wowawards@compliancemonitoringsystems.com",
    subject: `WOW Award Submission`,
    html: `<h1>WoW Award</h1><div><h2>Nominee: ${data.nominee}</h2></div><div><h2>Nominated By: ${data.nominated_by}</h2></div><div><h2>Reason:</h2><div><h3>${data.reason}</h3></div></div>`,
  };
  return new Promise((resolve, reject) =>
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.log(error);
        resolve("Submission failed.");
      }
      resolve("Submission Successful!");
    })
  );
};

module.exports = async (req, res) => {
  const response = await sendMail(req.body);
  res.json(response);
};
