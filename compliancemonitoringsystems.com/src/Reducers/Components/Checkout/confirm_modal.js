import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import Loader from "react-loading";

class ConfirmModal extends Component {
  constructor(props) {
    super(props);
    this.state = { loaderClass: "visible" };
  }

  closeButton() {
    return (
      <center>
        <Button
          style={{ width: "125px", marginTop: "20px" }}
          onClick={() => this.props.changeShow()}
        >
          OK
        </Button>
      </center>
    );
  }

  render() {
    let newNum = "";
    for (let i = 0; i < this.props.data.cardNumber.length; i++) {
      if (i < this.props.data.cardNumber.length - 4) {
        newNum += "*";
      } else {
        newNum += this.props.data.cardNumber.charAt(i);
      }
    }
    return (
      <Modal bsSize="med" show={this.props.show}>
        <Modal.Body>
          <div className="confirmModal">
            <div>
              <h1>Checkout</h1>
            </div>
            <div>
              <h3>Please review this information one last time.</h3>
            </div>
            <div>
              <h2 style={{ marginTop: "20px" }}>Invoice Number</h2>
            </div>
            <div>
              <h3>{this.props.data.invoiceNumber}</h3>
            </div>
            <div>
              <h2>Client Name</h2>
            </div>
            <div>
              <h3>
                {this.props.data.clientFirstName}{" "}
                {this.props.data.clientMiddleInitial}{" "}
                {this.props.data.clientLastName}
              </h3>
            </div>
            <div>
              <h2>Payment Amount</h2>
            </div>
            <div>
              <h3>{this.props.data.paymentAmount}</h3>
            </div>
            <div>
              <h2>Program / Service</h2>
            </div>
            <div>
              <h3>{this.props.data.program}</h3>
            </div>
            <div>
              <h2>Cardholder</h2>
            </div>
            <div>
              <h3>
                {this.props.data.cardHolderFirstName}{" "}
                {this.props.data.cardHolderMiddleInitial}{" "}
                {this.props.data.cardHolderLastName}
              </h3>
            </div>
            <div>
              <h2>Card Number</h2>
            </div>
            <div>
              <h3>
                {this.props.data.cardType} {newNum} {this.props.data.expDate}
              </h3>
            </div>
            <div>
              <h2>Billing Address</h2>
            </div>
            <div>
              <h3>{this.props.data.billingAddress.line1}</h3>
            </div>
            <div>
              <h3>{this.props.data.billingAddress.line2}</h3>
            </div>
            <div>
              <h3>
                {this.props.data.billingAddress.city} {this.props.data.state}
              </h3>
            </div>
            <div>
              <h3>{this.props.data.billingAddress.zipCode}</h3>
            </div>
            {this.props.data.email !== "" ? (
              <div>
                <div>
                  <h2>Email Address</h2>
                </div>
                <div>
                  <h3>{this.props.data.email}</h3>
                </div>
              </div>
            ) : (
              ""
            )}

            <center>
              <Button
                style={{
                  width: "175px",
                  marginTop: "20px"
                }}
                onClick={() => {
                  this.props.submitTransaction();
                  this.props.changeShow();
                }}
              >
                Submit Transaction
              </Button>
            </center>
            <center>
              <Button
                style={{
                  width: "75px",
                  height: "20px",
                  padding: "0px",
                  marginTop: "5px",
                  backgroundColor: "rgba(199, 199, 199, 1)"
                }}
                onClick={() => {
                  this.props.changeShow();
                }}
              >
                <div style={{ fontSize: "10px" }}>Cancel</div>
              </Button>
            </center>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);
