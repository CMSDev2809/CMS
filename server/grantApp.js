const __replace__ = (key) => (key ? key : "");

module.exports = (obj) => `
<html>
  <body>
    <div style="padding: 20px;">
      <center style="margin-bottom: 20px;">
        <h1 style="font-size: 15px;">Community Supervision Services</h1>
        <h2 style="font-size: 8px;">2809 Great Northern Loop, Suite 200</h2>
        <h2 style="font-size: 8px;">Missoula, Montana 59808</h2>
        <h2 style="font-size: 8px;">(406) 529-1789</h2>
        <h2 style="font-size: 8px;">Fax: (888) 855-7964</h2>
      </center>
      <center><b><h1 style="font-size: 18px;">Grant Funds Application</b></center>
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
            : ""
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
          <h2 style="font-size: 9px">Name of Person Completing Application:</h2>
          <h2 style="font-size: 12px"><b>${__replace__(obj.nopca)}</b></h2>
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
      <span style="display: block;width: 100%; border-top: 3px solid; margin-top: 20px; margin-bottom: 20px;" />
      <i style="font-size: 8px">
        <div style="margin-bottom: 10px;margin-top: 10px;">
          Applicant shall maintain insurance against claims for injuries to
          persons or damages to property, including contractual liability,
          which may arise from or in connection with the performance of the
          work by Contractor, agents, employees, representatives, assigns, or
          subcontractors. This insurance shall cover such claims as may be
          caused by any negligent act or omission
        </div>
        <div style="margin-bottom: 10px;">
          Applicant will fully comply with all applicable federal, Tribe, or
          local laws, rules, regulations, and executive orders including but
          not limited to, the Montana Human Rights Act, the Equal Pay Act of
          1963, the Civil Rights Act of 1964, the Age Discrimination Act of
          1975, the Americans with Disabilities Act of 1990, and Section 504
          of the Rehabilitation Act of 1973
        </div>
        <div style="margin-bottom: 10px;">
          Applicant shall be registered to do business with the Montana
          Secretary of State and shall maintain this registration in good
          standing during the term of this Agreement and any renewal.
        </div>
        <div style="margin-bottom: 10px;">
          Applicant shall indemnify and hold harmless CSS, its employees and
          agents, from all claims, liabilities, causes of action or judgments,
          including costs and attorney fees, asserted by or awarded to third
          parties as a result of any negligent action or omission or willful
          misconduct of the applicant, its employees or agents.
        </div>
      </i>
      <table>
        <tbody>
          <tr>
            <td>
              <font style="margin-left: 2px;margin-right: 2px;border: 1px solid #000;font-size: 10px;">X</font>
            </td>
            <td>
              <div style="font-size: 10px;">I have read and agree that I meet the above requirements.</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`;
