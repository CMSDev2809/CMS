const _checkBox = obj => {
  if (obj.checked) {
    return `<div style="position:absolute;left:88px;top: ${obj.top -
      5}px" class="cls_010"><span class="cls_010" style="font-size: 25.5px;">☒</span><span class="cls_011" style="margin-top: -10px"> ${
      obj.text
    }</span></div>`;
  } else {
    return `<div style="position:absolute;left:90.14px;top: ${obj.top}px" class="cls_010"><span class="cls_010">☐</span><span class="cls_011"> ${obj.text}</span></div>`;
  }
};

const _comments = obj => {
  switch (obj.violation) {
    case "Missed Test":
      return `${obj.nameFirst} ${obj.nameLast} missed test violation for the date of ${obj.date}.`;
    default:
      return "";
  }
};

module.exports = obj => `
<html>
  <head><meta http-equiv=Content-Type content="text/html; charset=UTF-8">
    <style type="text/css"></style>
    <script type="text/javascript" src="2c0c8392-8fdb-11ea-8b25-0cc47a792c0a_id_2c0c8392-8fdb-11ea-8b25-0cc47a792c0a_files/wz_jsgraphics.js"></script>
  </head>
  <body>
    <div style="position:absolute;left:50%;margin-left:-306px;top:0px;width:612px;height:792px;border-style:outset;overflow:hidden">
      <div style="position:absolute;left:50px;top:50px"><img src="https://compliancemonitoringsystems.com/static/media/img.18fd2225.png" width=100 height=100"></div>
      <div style="position:absolute;left:228.12px;top:93.80px" class="cls_003"><span class="cls_003">Compliance Monitoring Systems</span></div>
      <div style="position:absolute;left:228.12px;top:112.29px" class="cls_003"><span class="cls_003">Violation Form</span></div>
      <div style="position:absolute;left:69.12px;top:168.14px" class="cls_004"><span class="cls_004">Date: ${
        obj.date
      }</span></div>
      <div style="position:absolute;left:69.12px;top:204.02px" class="cls_007"><span class="cls_007">Participant: ${
        obj.nameLast
      }, ${obj.nameFirst}</span></div>
      <div style="position:absolute;left:69.12px;top:239.90px" class="cls_007"><span class="cls_007">Agency or Requesting Party: ${
        obj.enrolleeCaseId
      }</span></div>
      <div style="position:absolute;left:69.12px;top:275.78px" class="cls_008"><span class="cls_008">Testing Location:</span></div>
      <div style="position:absolute;left:69.12px;top:312.27px" class="cls_009"><span class="cls_009">Type of violation:</span></div>
      ${_checkBox({
        checked: obj.violation === "Missed Test",
        text: "Missed Test",
        top: 348.5
      })}
      ${_checkBox({
        checked: obj.violation === "Belligerent Donor",
        text: "Belligerent Donor",
        top: 366.4
      })}
      ${_checkBox({
        checked: obj.violation === "Specimen Tampering",
        text: "Specimen Tampering",
        top: 384.4
      })}
      ${_checkBox({
        checked: obj.violation === "Shy Bladder / UTP (Unable to Provide)",
        text: "Shy Bladder / UTP (Unable to Provide)",
        top: 402.26
      })}
      ${_checkBox({
        checked: obj.violation === "Refusal to Test",
        text: "Refusal to Test",
        top: 419.42
      })}
      <div style="position:absolute;left:69.12px;top:455.32px" class="cls_004"><span class="cls_004">Comments: ${_comments(
        obj
      )}</span></div>
      <div style="position:absolute;left:69.12px;top:527.20px" class="cls_004"><span class="cls_004">Violation Reported by CMS Staff</span></div>
    </div>
  </body>
</html>
`;