import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Config from "../../config";
import { Button, FormControl, Modal } from "react-bootstrap";

class MyModal extends Component {
  render() {
    return (
      <Modal bsSize="small" show={this.props.show}>
        <Modal.Body>
          <h1>Thanks for your feedback!</h1>
          <center>
            <Button
              className="custom_button"
              onClick={() => this.props.close_modal()}
            >
              Close
            </Button>
          </center>
        </Modal.Body>
      </Modal>
    );
  }
}

class CommentBox extends Component {
  state = {
    name: "",
    email: "",
    comment: "",
    phone_number: "",
    show: false
  };

  submit() {
    this.setState({ show: true });
    fetch(`${Config.api}/api/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: this.state
      })
    });
  }

  validate() {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      this.state.name.length > 0 &&
      this.state.email.match(regEx) &&
      this.state.comment.length > 0
    ) {
      return { width: "50%", opacity: "1" };
    } else {
      return { width: "50%", opacity: "0.25", pointerEvents: "none" };
    }
  }

  render() {
    const bttnStyle = this.validate();
    return (
      <div className={"comment-box"}>
        <MyModal
          show={this.state.show}
          close_modal={() =>
            this.setState({ show: false, name: "", email: "", comment: "" })}
        />
        <h2>Got something you want to say? Leave a reply!</h2>
        <table width={"100%"}>
          <tr>
            <td>
              <h3>
                <p
                  style={{
                    color: "red",
                    display: "inline-flex",
                    marginBottom: "0px",
                    marginRight: "5px"
                  }}
                >
                  *
                </p>Name
              </h3>
              <div className={"text"} style={{ marginTop: "17.5px" }}>
                <FormControl
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h3>
                <p
                  style={{
                    color: "red",
                    display: "inline-flex",
                    marginBottom: "0px",
                    marginRight: "5px"
                  }}
                >
                  *
                </p>Email
              </h3>
              <div className={"text"} style={{ marginTop: "17.5px" }}>
                <FormControl
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Phone Number</h3>
              <div className={"text"} style={{ marginTop: "17.5px" }}>
                <FormControl
                  type="text"
                  placeholder="Phone Number"
                  value={this.state.phone_number}
                  onChange={e =>
                    this.setState({ phone_number: e.target.value })}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h3>
                <p
                  style={{
                    color: "red",
                    display: "inline-flex",
                    marginBottom: "0px",
                    marginRight: "5px"
                  }}
                >
                  *
                </p>Comment
              </h3>
              <div className={"text-area"}>
                <FormControl
                  componentClass="textarea"
                  style={{ height: "250px" }}
                  value={this.state.comment}
                  onChange={e => this.setState({ comment: e.target.value })}
                />
              </div>
            </td>
          </tr>
          <center>
            <Button
              className="custom_button"
              style={bttnStyle}
              onClick={() => this.submit()}
            >
              Submit
            </Button>
          </center>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
