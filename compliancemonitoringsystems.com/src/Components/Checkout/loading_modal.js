import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, FormGroup, FormControl } from "react-bootstrap";
import Loader from "react-loading";
import { transactionStatus } from "../../Actions/transactionActions";

class LoaderModal extends Component {
  constructor(props) {
    super(props);
    this.state = { loaderClass: "visible" };
  }

  closeButton() {
    return (
      <center>
        <Button
          style={{ width: "125px", marginTop: "20px" }}
          onClick={() => {
            this.props.changeShow();
            if (this.props.transactionStatus.success) {
              window.location.reload();
            }
          }}
        >
          OK
        </Button>
      </center>
    );
  }

  render() {
    return (
      <Modal bsSize="small" show={this.props.show}>
        <Modal.Body>
          {this.props.transactionStatus === "busy" ? (
            <div>
              <Loader
                type="spinningBubbles"
                color="black"
                className={this.state.loaderClass}
              />
              <h3 style={{ fontSize: "16px", textAlign: "left" }}>
                Please wait while your transaction is finalized
              </h3>
            </div>
          ) : (
            ""
          )}
          {this.props.transactionStatus &&
          this.props.transactionStatus.success ? (
            <div style={{ color: "green" }}>
              <div className={"visible"}>
                <div
                  class="glyphicon glyphicon-ok"
                  style={{ fontSize: "50px" }}
                />
              </div>
              <h3 style={{ fontSize: "16px", textAlign: "left" }}>
                Your payment has been successfully proccessed!
              </h3>
              {this.closeButton()}
            </div>
          ) : (
            ""
          )}
          {this.props.transactionStatus &&
          this.props.transactionStatus !== "busy" &&
          !this.props.transactionStatus.success ? (
            <div style={{ color: "#8c032c" }}>
              <div className={"visible"}>
                <div
                  class="glyphicon glyphicon-remove"
                  style={{ fontSize: "50px" }}
                />
              </div>
              <h3 style={{ fontSize: "16px", textAlign: "left" }}>
                Uh oh, something went wrong!
              </h3>
              {this.props.transactionStatus.code}
              {this.closeButton()}
            </div>
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoaderModal);
