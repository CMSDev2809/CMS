const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const pdf = require("html-pdf");
const fs = require("fs");
const multer = require("multer");
const PORT = process.env.PORT || 5000;
const convergeConfig = require("./convergeConfig");
const serverConfig = require("./config");
const referralTemplate = require("./referralTemplate");
const http = serverConfig.production ? require("https") : require("http");
const receipt_html = require("./receipt_html").receipt_html;
const cors = require("cors");
let app = express();

app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

app.use("/images", express.static("images"));

const ss = [
  "&cmsd&",
  "&247&",
  "&sha&",
  "&srb&",
  "&ha&",
  "&gpsa&",
  "&gpsp&",
  "&phmc&",
  "&hfdt&",
  "&247M",
  "&ssua&",
];
const s247 = ["&dp&", "&ua&", "&tdb&"];
const ha = ["&ham1&", "&ham2&", "&ham3&"];
const ham = ["&apt1&", "&apt2&", "&apt3&", "&apt4&", "&apt5&"];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./new");
  },
  filename: function (req, file, cb) {
    cb(null, "attachment" + ".pdf");
  },
});

const upload = multer({ storage }).single("image");

app.use(express.static(path.join(__dirname, "images")));

const subHTML = (html1, html2, data) => {
  const boxSub = `<span style="border: 1px solid #000;font-size: 10px;margin-right: 2px"><font style="color: white;margin-left: 2px;margin-right: 2px">X</font></span>`;
  const checkSub = `<span style="border: 1px solid #000;font-size: 10px;margin-right: 2px"><font style="margin-left: 2px;margin-right: 2px">X</font></span>`;
  let html = html1 + html2 + referralTemplate.comments;
  if (data.gridValues.pretrialState === 0) {
    html = html.replace("&ptb&", checkSub);
    html = html.replace("&sb&", boxSub);
    html = html.replace("&ot&", boxSub);
  } else if (data.gridValues.pretrialState === 1) {
    html = html.replace("&ptb&", boxSub);
    html = html.replace("&sb&", checkSub);
    html = html.replace("&ot&", boxSub);
  } else {
    html = html.replace("&sb&", boxSub);
    html = html.replace("&ptb&", boxSub);
    html = html.replace("&ot&", checkSub);
  }
  html = html.replace("&date&", data.gridValues.date);
  html = html.replace("&name&", data.gridValues.name);
  html = html.replace("&pn&", data.gridValues.phoneNumber);
  html = html.replace("&address&", data.gridValues.address);
  html = html.replace("&charges&", data.gridValues.charges);
  html = html.replace("&cn&", data.gridValues.caseNumber);
  html = html.replace("&teb&", data.gridValues.toEnrollBy);
  html = html.replace("&cd&", data.gridValues.programLength);
  html = html.replace("&ct&", data.gridValues.court);
  html = html.replace("&jd&", data.gridValues.judge);
  html = html.replace("&rt&", data.gridValues.violationsReportedTo);
  html = html.replace("&type&", data.dropDownValue);
  html = html.replace("&cmts&", data.commentBoxText);
  html = html.replace("&csewrk&", data.gridValues.caseWorker);
  html = html.replace("&proboff&", data.gridValues.probationOfficer);
  html = html.replace(
    "&uaC&",
    `<span style="text-decoration: underline;">${data.txtBox.ua}</span>`
  );
  html = html.replace("&wm&", `${data.uaDropDown}`);
  let i = 0;
  for (let key in data.supervisionServices) {
    if (data.supervisionServices[key]) {
      html = html.replace(ss[i++], checkSub);
    } else {
      html = html.replace(ss[i++], boxSub);
    }
  }
  i = 0;
  for (let key in data.houseArrestState) {
    if (data.houseArrestState[key] && data.supervisionServices.c4) {
      html = html.replace(ha[i++], checkSub);
    } else {
      html = html.replace(ha[i++], boxSub);
    }
  }
  i = 0;
  for (let key in data.houseArrestMovement) {
    if (data.houseArrestMovement[key] && data.supervisionServices.c4) {
      html = html.replace(ham[i++], checkSub);
    } else {
      html = html.replace(ham[i++], boxSub);
    }
  }
  i = 0;
  for (let key in data.services247) {
    if (data.services247[key]) {
      html = html.replace(s247[i++], checkSub);
    } else {
      html = html.replace(s247[i++], boxSub);
    }
  }
  if (data.txtBox.frequency.length > 0) {
    html = html.replace(
      "&freq&",
      `<span style="text-decoration: underline;">${data.txtBox.frequency}</span>`
    );
  } else {
    html = html.replace("&freq&", "____");
  }
  if (data.txtBox.other.length > 0) {
    html = html.replace(
      "&other&",
      `<span style="text-decoration: underline;">${data.txtBox.other}</span>`
    );
  } else {
    html = html.replace("&other&", "_______");
  }
  return html;
};

const convertPDF = async (text) => {
  const prom = await new Promise((resolve, reject) => {
    pdf.create(text).toFile(__dirname + "/ref.pdf", (err, res) => {
      resolve("file created");
    });
  });
  return prom;
};

const sendToMonitoringCenter = async (data) => {
  "use strict";
  const locations = {
    Missoula: "missoula@compliancemonitoringsystems.com",
    Kalispell: "flathead@compliancemonitoringsystems.com",
  };
  const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: serverConfig.monitoringCenterFromEmail,
      pass: serverConfig.monitoringCenterPassword,
    },
  });
  await convertPDF(
    subHTML(
      data.css
        ? referralTemplate.alternateHeaderHTML
        : referralTemplate.headerHTML,
      data.dropDownValue === "Supervision Services"
        ? referralTemplate.supervisionServices
        : referralTemplate.services247,
      data
    )
  );
  let attachments = [
    {
      filename: "referral.pdf",
      path: __dirname + "/ref.pdf",
    },
  ];
  if (fs.existsSync(__dirname + "/attachment.pdf") && data.attachedForm) {
    attachments.push({
      path: __dirname + "/attachment.pdf",
    });
  }
  let mailOptions = {
    from: serverConfig.monitoringCenterFromEmail,
    to: data.location
      ? locations[data.location]
      : serverConfig.monitoringCenterEmail,
    subject: "Referral",
    attachments: attachments,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
};

app.post("/api/refer", (req, res, next) => {
  sendToMonitoringCenter(req.body);
  res.json("finished");
});

app.post("/api/moonlighting", (req, res, next) => {
  (async () => {
    const nodemailer = require("nodemailer");
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: serverConfig.moonlightingFromEmail,
        pass: serverConfig.moonlightingPassword,
      },
    });
    let mailOptions = {
      from: serverConfig.moonlightingFromEmail,
      to: serverConfig.moonlightingEmail,
      subject: "Referral",
      html: `<p>${req.body.name}</p><p>${req.body.email}</p><p>${req.body.message}</p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.json(error);
      }
    });
    res.json("Email received! We will contact you soon.");
  })();
});

app.post("/api/image", (req, res, next) => {
  upload(req, res, (err) => {
    const msg = err
      ? { success: false, message: "Failed to upload image" }
      : { success: true, message: "Image uploaded" };
    res.json(msg);
  });
});

const sendReceipt = async (data, response, receiver) => {
  ("use strict");
  const nodemailer = require("nodemailer");
  let recipient = "";
  if (serverConfig.production) {
    recipient = receiver === "merchant" ? convergeConfig.email : data.email;
  } else {
    recipient = "broc@compliancemonitoringsystems.com";
  }
  if (recipient && recipient.length > 0) {
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: convergeConfig.email,
        pass: convergeConfig.emailPassword,
      },
    });
    await new Promise((resolve, reject) => {
      pdf
        .create(receipt_html(data, response))
        .toFile(__dirname + "/receipt.pdf", (err, res) => {
          resolve("file created");
        });
    });
    let attachments = [
      {
        filename: "receipt.pdf",
        path: __dirname + "/receipt.pdf",
      },
    ];
    if (fs.existsSync(__dirname + "/receipt.pdf") && data.attachedForm) {
      attachments.push({
        path: __dirname + "/receipt.pdf",
      });
    }
    let mailOptions = {
      from: convergeConfig.email,
      to: recipient,
      subject: "Payment Receipt",
      attachments: attachments,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
  }
};

app.post("/api/comment", (req, res) => {
  (async (data, response, receiver) => {
    ("use strict");
    const nodemailer = require("nodemailer");
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: serverConfig.monitoringCenterFromEmail,
        pass: serverConfig.monitoringCenterPassword,
      },
    });
    let mailOptions = {
      from: serverConfig.monitoringCenterFromEmail,
      to: serverConfig.monitoringCenterEmail,
      subject: "Website Comment",
      html: `<div><h2>Name: ${req.body.data.name}</h2></div><div><h3>${req.body.data.email}</h3></div><div><p>${req.body.data.comment}</p></div>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
    res.json("success");
  })();
});

const handleError = (response, req, res) => {
  let approval_code = response.match(
    /<ssl_approval_code>(.*)<\/ssl_approval_code>/g
  );
  try {
    if (approval_code && approval_code[0]) {
      approval_code = approval_code[0]
        .replace("<ssl_approval_code>", "")
        .replace("</ssl_approval_code>", "");
      approval_code = approval_code.trim();
    }
  } catch (e) {
    approval_code = null;
  }
  let error_code = response.match(/<errorName>(.*)<\/errorName>/g);
  try {
    if (error_code && error_code[0]) {
      error_code = error_code[0]
        .replace("<errorName>", "")
        .replace("</errorName>", "");
      error_code = error_code.trim();
    } else {
      error_code = "There was problem running your card.";
    }
  } catch (e) {
    error_code = "There was problem running your card.";
  }
  console.log("approval_code: ", approval_code);
  if (approval_code && approval_code.length > 0) {
    sendReceipt(req.body.data, response, "merchant");
    sendReceipt(req.body.data, response, "client");
    res.json({ success: true, code: approval_code });
  } else {
    res.json({
      success: false,
      code: error_code,
    });
  }
};

app.post("/api/processPayment", async (req, res) => {
  console.log(req.body);
  const fetch = require("node-fetch");
  let pass = false;
  if (req.body.apiKey && req.body.apiKey === convergeConfig.apiKey) {
    pass = true;
  } else if (req.body.captchaToken) {
    const captcha = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LcXSsAUAAAAAB94INZ0RaMnDZFBr-pG-XDbg7pz&response=${req.body.captchaToken}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((response) => response.json());
    if (captcha.success) {
      pass = true;
    }
  }
  if (pass) {
    const builderText = `?xmldata="<txn><ssl_amount>${req.body.data.amount}</ssl_amount>
      <ssl_merchant_id>${convergeConfig.merchantId}</ssl_merchant_id><ssl_first_name>${req.body.data.clientFirstName}</ssl_first_name><ssl_last_name>${req.body.data.clientLastName}</ssl_last_name><ssl_user_id>${convergeConfig.userId}</ssl_user_id><ssl_pin>${convergeConfig.pin}</ssl_pin><ssl_transaction_type>${convergeConfig.transactionType}</ssl_transaction_type><ssl_card_number>${req.body.data.ccnum}</ssl_card_number><ssl_exp_date>${req.body.data.expDate}</ssl_exp_date><ssl_cvv2cvc2>${req.body.data.cvc}</ssl_cvv2cvc2><ssl_avs_address>${req.body.data.billingAddress.line1}</ssl_avs_address><ssl_city>${req.body.data.billingAddress.city}</ssl_city><ssl_state>${req.body.data.billingAddress.state}</ssl_state><ssl_avs_zip>${req.body.data.billingAddress.zipCode}</ssl_avs_zip></txn>"`;
    const url = convergeConfig.endpoint + builderText;
    fetch(url, { method: "post", credentials: "include" })
      .then((response) => response.text())
      .then((response) => handleError(response, req, res))
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.json("Captcha Failed");
  }
});

app.post("/api/grant", async (req, res) => {
  const nodemailer = require("nodemailer");
  const grantApp = require("./grantApp");
  const content = await new Promise((resolve, reject) => {
    pdf.create(grantApp(req.body)).toBuffer((err, buffer) => {
      resolve(buffer);
    });
  });
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: serverConfig.monitoringCenterFromEmail,
      pass: serverConfig.monitoringCenterPassword,
    },
  });
  let mailOptions = {
    from: serverConfig.monitoringCenterFromEmail,
    to: serverConfig.grantContactEmail,
    subject: "Grant Application",
    attachments: [
      {
        filename: `${req.body.rco} - Grant Application.pdf`,
        content,
      },
    ],
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.json(error);
    } else {
      res.json({
        msg: "Success!",
        code: 200,
      });
    }
  });
});

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"));

let server = null;

if (serverConfig.production) {
  const key = fs.readFileSync(
    "/etc/letsencrypt/live/communitysupervision.org/privkey.pem"
  );
  const cert = fs.readFileSync(
    "/etc/letsencrypt/live/communitysupervision.org/cert.pem"
  );
  const ca = fs.readFileSync(
    "/etc/letsencrypt/live/communitysupervision.org/chain.pem"
  );
  server = http.createServer({ key, cert, ca }, app);
} else {
  server = http.createServer(app);
}

server.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
