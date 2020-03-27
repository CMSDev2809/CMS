import React from "react";
import "./form1.css";

export default data => {
  const date = new Date();
  return (
    <div className={"form1"}>
      <h2>Payment Information</h2>
      {data ? (
        <table>
          <tr>
            <td>
              <p>Client Name:</p>
            </td>
            <td>
              <p>{`${data.lastName}, ${data.firstName}`}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Card Number:</p>
            </td>
            <td>
              <p>{data.cardNumber}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Exp. Date:</p>
            </td>
            <td>
              <p>{data.expDate}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Payment Amount:</p>
            </td>
            <td>
              <p>{data.amount}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Security Code:</p>
            </td>
            <td>
              <p>{data.securityCode}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name on Card:</p>
            </td>
            <td>
              <p>{data.cardHolder}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Billing Address:</p>
            </td>
            <td>
              <p>{data.billingAddress}</p>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <p style={{ marginTop: "-5px" }}>{data.billingAddress2}</p>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <p style={{ marginTop: "-5px" }}>
                {data.city}, {data.state} {data.zip}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Phone Number:</p>
            </td>
            <td>
              <p>{data.phoneNumber}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Purpose:</p>
            </td>
            <td>
              <p>{data.purpose}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Printed On:</p>
            </td>
            <td>
              <p>
                {date.getMonth() +
                  1 +
                  "/" +
                  date.getDate() +
                  "/" +
                  date.getFullYear()}
              </p>
            </td>
            <td>
              <p>Requested By:</p>
            </td>
            <td>
              <p>{data.processing}</p>
            </td>
          </tr>
        </table>
      ) : (
        <div />
      )}
      <p style={{ pageBreakAfter: "always" }}>&nbsp;</p>
    </div>
  );
};
