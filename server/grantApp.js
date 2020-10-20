const __replace__ = (key) => (key ? key : "");

module.exports = (obj) => `
<html>
  <body>
    <div style="padding: 20px;">
      <center style="margin-bottom: 20px;">
        <img src="http://192.163.204.58/images/img2.png" style="width: 75px;float: left;margin-right: -75px;margin-left: 15px;" >
        <h1 style="font-size: 15px;">Compliance Monitoring Systems, LLC</h1>
        <h2 style="font-size: 8px;">2809 Great Northern Loop, Suite 200</h2>
        <h2 style="font-size: 8px;">Missoula, Montana 59808</h2>
        <h2 style="font-size: 8px;">(406) 529-1789</h2>
        <h2 style="font-size: 8px;">Fax: (888) 855-7964</h2>
      </center>
      <center><b><h1>Grant Funds Application</b></center>
      <h1 style="font-size: 16px">Applicant</h1>
      <div style="margin-top: 20px; position: relative;">
        <h2 style="font-size: 9px">Referring Company or Organization:</h2>
        <h2 style="font-size: 12px"><b>${__replace__(obj.rco)}</b></h2>
        <h2 style="font-size: 9px">Contact Phone Number:</h2>
        <h2 style="font-size: 12px"><b>${__replace__(obj.cpn)}</b></h2>
        <h2 style="font-size: 9px">Company or Organization Mailing Address:</h2>
        <h2 style="font-size: 12px"><b>${__replace__(obj.coma)}</b></h2>
        ${
          obj.coma2
            ? `<h2 style="font-size: 12px"><b>${__replace__(
                obj.coma2
              )}</b></h2>`
            : null
        }
        <h2 style="font-size: 9px">Monitoring Type:</h2>
        <h2 style="font-size: 12px"><b>${__replace__(obj.mt)}</b></h2>
        <h2 style="font-size: 9px">Other Fees:</h2>
        <h2 style="font-size: 12px"><b>${__replace__(obj.of)}</b></h2>
        <div style="position: absolute; left: 50%; top: calc(0% - 10px);">
          <h2 style="font-size: 9px">Point of Contact:</h2>
          <h2 style="font-size: 12px"><b>${__replace__(obj.poc)}</b></h2>
          <h2 style="font-size: 9px">Contact Email Address:</h2>
          <h2 style="font-size: 12px"><b>${__replace__(obj.cea)}</b></h2>
          <h2 style="font-size: 9px">Funds Requested:</h2>
          <h2 style="font-size: 12px"><b>${__replace__(obj.fr)}</b></h2>
          <h2 style="font-size: 9px">Daily Rate:</h2>
          <h2 style="font-size: 12px"><b>${__replace__(obj.dr)}</b></h2>
        </div>
      </div>
      <h1 style="font-size: 16px;margin-top: 20px;">Client</h1>
      <div style="margin-top: 20px; position: relative;">
        <h2 style="font-size: 9px">Referring Company or Organization:</h2>
        <h2 style="font-size: 12px"><b>${__replace__(obj.cn)}</b></h2>
        <div style="position: absolute; left: 50%; top: calc(0% - 10px);">
          <h2 style="font-size: 9px">Point of Contact:</h2>
          <h2 style="font-size: 12px"><b>${__replace__(obj.ra)}</b></h2>
        </div>
      </div>
    </div>
  </body>
</html>
`;
