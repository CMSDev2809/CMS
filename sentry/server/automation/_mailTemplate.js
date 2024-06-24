module.exports = (obj) => `
  <div>
    <img width="107.5" height="100" src="https://compliancemonitoringsystems.com/wp-content/uploads/2023/05/icon.png"></img>
    <div>
      <h2><b>[DO NOT REPLY]</b>${" "}<i style="font-size: 18px;">This is an automated message courtesy of Compliance Monitoring Systems.</i></h2>
    </div>
    </div>
    <div>
      <h2>See attached results for ${obj.donor} - ${
  parseInt(obj.abnormal) > 0
    ? `<i style="color: red;">Abnormal</i>`
    : `<i style="color: green;">Negative</i>`
}. Please retain for your records.</h2>
    </div>
    <div style="color: #2e5685"><i>
      CONFIDENTIALITY NOTICE: The information in this message, and any attachment, is intended for the sole use of the individual and entity to whom it is addressed.  This information may be privileged, confidential, and protected from disclosure.  Discussions regarding any test results are for information purposes only.  Consultation with a toxicologist for interpretation of these test results is essential. If you are not the intended recipient you are hereby notified that you have received this communication in error and that any review, disclosure, dissemination, distribution or copying of it, or its contents, is strictly prohibited.  If you think that you have received this message in error, please notify the sender and destroy all copies of this communication and any attachments..</i>Please consider the environment before printing this e-mail.
    </div>
  </div>
`;
