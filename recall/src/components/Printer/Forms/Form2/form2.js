import React from "react";
import "./form2.css";

export default data => {
  const date = new Date();
  return (
    <div className={"form2"}>
      {data ? (
        <table>
          <tr>
            <td>
              <div>
                <p>Client Name:</p>
              </div>
              <div>
                <p>{`${data.lastName}, ${data.firstName}`}</p>
              </div>
            </td>
            <td>
              <div>
                <p>Card Number:</p>
              </div>
              <div>
                <p>{data.cardNumber}</p>
              </div>
            </td>
            <td>
              <div>
                <p>Exp. Date:</p>
              </div>
              <div>
                <p>{data.expDate}</p>
              </div>
            </td>
            <td>
              <div>
                <p>Payment Amount:</p>
              </div>
              <div>
                <p>{data.amount}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Security Code:</p>
              </div>
              <div>
                <p>{data.securityCode}</p>
              </div>
            </td>
            <td>
              <div>
                <p>Name on Card:</p>
              </div>
              <div>
                <p>{data.cardHolder}</p>
              </div>
            </td>
            <td>
              <div>
                <p>Billing Address:</p>
              </div>
              <div>
                <p>{data.billingAddress}</p>
              </div>
              <div>
                <p style={{ marginTop: "-5px" }}>{data.billingAddress2}</p>
              </div>
              <div>
                <p style={{ marginTop: "-5px" }}>
                  {data.city}, {data.state} {data.zip}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Phone Number:</p>
              </div>
              <div>
                <p>{data.phoneNumber}</p>
              </div>
            </td>
            <td>
              <div>
                <p>Purpose:</p>
              </div>
              <div>
                <p>{data.purpose}</p>
              </div>
            </td>
            <td>
              <p>Printed On:</p>
              <p>
                {date.getMonth() +
                  1 +
                  "/" +
                  date.getDate() +
                  "/" +
                  date.getFullYear()}
              </p>
            </td>
          </tr>
          <tr>
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
    </div>
  );
};
