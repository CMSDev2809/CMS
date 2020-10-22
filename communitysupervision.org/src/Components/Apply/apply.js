import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import {
  InputGroup,
  FormGroup,
  FormControl,
  Grid,
  Row,
  Col,
  Button,
  Modal,
  DropdownButton,
  MenuItem,
  ControlLabel,
} from "react-bootstrap";
import MediaQuery from "react-responsive";
import Dropzone from "react-dropzone";
import Loader from "react-loading";
import "../../Components/Home/home.css";
import config from "../../config";
import "./apply.css";

class StatusModal extends Component {
  render() {
    return (
      <Modal bsSize="med" show={this.props.modalState}>
        <Modal.Body>
          {this.props.referralSuccess === 0 ? (
            <center>
              <Loader
                type="spinningBubbles"
                color="black"
                className={"visible"}
              />
            </center>
          ) : this.props.referralSuccess === 1 ? (
            <center>
              <h1 class="glyphicon glyphicon-ok" style={{ color: "green" }} />
              <h2>Application Successful!</h2>
            </center>
          ) : this.props.referralSuccess === 2 ? (
            <center>
              <h1 class="glyphicon glyphicon-remove" style={{ color: "red" }} />
              <h2>Something went wrong.</h2>
            </center>
          ) : (
            <center>
              <h1
                class="glyphicon glyphicon-warning-sign"
                style={{ color: "rgb(255, 199, 0)" }}
              />
            </center>
          )}
          <center>
            <h2>{this.props.modalText}</h2>
          </center>
        </Modal.Body>
      </Modal>
    );
  }
}

class Checkbox extends Component {
  clickHandler() {
    this.props.postClick();
  }

  render() {
    const width = 25;
    const height = width;
    return (
      <Button onClick={() => this.clickHandler()} className="custom_checkbox">
        {this.props.checked ? (
          <div
            class="glyphicon glyphicon glyphicon-ok"
            style={{
              marginTop: "-12px",
              width: `${width}`,
              height: `${height}`,
            }}
          />
        ) : (
          <div style={{ width: `${width}`, height: `${height}` }} />
        )}
      </Button>
    );
  }
}

class FormFields extends Component {
  state = {
    emailIsValid: false,
    date: this.getDate(),
    checkbox: false,
  };

  validate() {
    const _helper_ = (key) =>
      this.state[key] && this.state[key].length > 0 && this.state.checkbox;
    return (
      _helper_("referringCompany") &&
      _helper_("pointOfContact") &&
      _helper_("contactPhoneNumber") &&
      _helper_("contactEmailAddress") &&
      _helper_("companyMailingAddress") &&
      _helper_("fundsRequested") &&
      _helper_("monitoringType") &&
      _helper_("dailyRate") &&
      _helper_("clientName") &&
      _helper_("referringAgency") &&
      _helper_("otherFees")
    );
  }

  validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.length > 0 && email.match(regEx);
  }

  getDate() {
    let date = new Date();
    let month = date.getMonth();
    month = month + 1;
    month = month.toString();
    let year = date.getFullYear().toString();
    let day = date.getDate().toString();
    return month + "/" + day + "/" + year;
  }

  async submit() {
    this.props.setState({ modalState: true, referralStatus: 0 });
    const results = await fetch(`${config.api}/api/grant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rco: this.state.referringCompany,
        cpn: this.state.contactPhoneNumber,
        coma: this.state.companyMailingAddress,
        coma2: this.state.companyMailingAddress2,
        mt: this.state.monitoringType,
        of: this.state.otherFees,
        poc: this.state.pointOfContact,
        cea: this.state.contactEmailAddress,
        fr: this.state.fundsRequested,
        dr: this.state.dailyRate,
        cn: this.state.clientName,
        ra: this.state.referringAgency,
      }),
    }).then((res) => res.json());
    if (results.code <= 200) {
      this.props.setState({ referralStatus: 1 });
    } else {
      this.props.setState({ referralStatus: 2 });
    }
    setTimeout(() => window.location.reload(), 2000);
  }

  render() {
    const applicant = (
      <Grid fluid={true} bsClass="grid">
        <Row style={{ marginLeft: "-15px", marginBottom: "15px" }}>
          <Col md={12} className="col">
            <h4>Applicant</h4>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="col">
            <h2>
              <font style={{ color: "red" }}>*</font> Referring Company or
              Organization
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Referring Company or Organization"
                onChange={(e) =>
                  this.setState({ referringCompany: e.target.value })
                }
              />
            </InputGroup>
          </Col>
          <Col md={6} className="col">
            <h2>
              <font style={{ color: "red" }}>*</font> Point of Contact
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Point of Contact"
                onChange={(e) =>
                  this.setState({
                    pointOfContact: e.target.value,
                    emailIsValid: this.validateEmail(e.target.value),
                  })
                }
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>
              <font style={{ color: "red" }}>*</font> Contact Phone Number
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Contact Phone Number"
                onChange={(e) =>
                  this.setState({ contactPhoneNumber: e.target.value })
                }
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <h2>
              <font style={{ color: "red" }}>*</font> Contact Email Address
            </h2>
            <FormGroup
              className="input-block-level"
              controlId="formValidationError2"
              validationState={this.state.emailIsValid}
            >
              <FormControl
                type="text"
                placeholder="Contact Email Address"
                onChange={(e) =>
                  this.setState({ contactEmailAddress: e.target.value })
                }
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>
              <font style={{ color: "red" }}>*</font> Company or Organization
              Mailing Address
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Line 1"
                onChange={(e) =>
                  this.setState({ companyMailingAddress: e.target.value })
                }
              />
            </InputGroup>
            <div style={{ marginTop: "10px" }}>
              <InputGroup className="input-block-level">
                <FormControl
                  type="text"
                  placeholder="Line 2 (optional)"
                  onChange={(e) =>
                    this.setState({ companyMailingAddress2: e.target.value })
                  }
                />
              </InputGroup>
            </div>
          </Col>
          <Col md={6}>
            <h2>
              <font style={{ color: "red" }}>*</font> Funds Requested
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="i.e $2,500.00"
                onChange={(e) =>
                  this.setState({ fundsRequested: e.target.value })
                }
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>
              <font style={{ color: "red" }}>*</font> Monitoring Type
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Monitoring Type"
                onChange={(e) =>
                  this.setState({ monitoringType: e.target.value })
                }
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <h2>
              <font style={{ color: "red" }}>*</font> Daily Rate
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="i.e. $12.50"
                onChange={(e) => this.setState({ dailyRate: e.target.value })}
              />
            </InputGroup>
          </Col>
          <Col md={12}>
            <h2>
              <font style={{ color: "red" }}>*</font> Other Fees
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="i.e. install fee $25.00"
                onChange={(e) => this.setState({ otherFees: e.target.value })}
              />
            </InputGroup>
          </Col>
        </Row>
      </Grid>
    );
    const client = (
      <Grid fluid={true} bsClass="grid" style={{ marginTop: "20px" }}>
        <Row style={{ marginLeft: "-15px", marginBottom: "15px" }}>
          <Col md={12} className="col">
            <h4>Client</h4>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="col">
            <h2>
              <font style={{ color: "red" }}>*</font> Client Name
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Client Name"
                onChange={(e) => this.setState({ clientName: e.target.value })}
              />
            </InputGroup>
          </Col>
          <Col md={6} className="col">
            <h2>
              <font style={{ color: "red" }}>*</font> Referring Agency
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Referring Agency"
                onChange={(e) =>
                  this.setState({ referringAgency: e.target.value })
                }
              />
            </InputGroup>
          </Col>
        </Row>
      </Grid>
    );
    return (
      <div className="formFields">
        <MediaQuery query="(min-width: 990px)" />
        <div style={{ textAlign: "center", marginBottom: "75px" }}>
          <h1>Community Supervision Solutions</h1>
          <h2>2809 Great Northern Loop, Suite 200</h2>
          <h2>Missoula, Montana 59808</h2>
          <h2>(406) 529-1789</h2>
          <h2>Fax: (888) 855-7964</h2>
        </div>
        <Grid fluid={true} bsClass="grid">
          <Row style={{ marginLeft: "-15px", marginBottom: "15px" }}>
            <Col md={6} className="col">
              <h1>Funds Request Application</h1>
              <h2>
                <font style={{ color: "red" }}>*</font> Required field
              </h2>
            </Col>
            <Col md={4} className="col" style={{ marginTop: "-12.5px" }}>
              <div style={{ float: "right" }}>
                <h2 style={{ display: "inline-flex" }}>Date</h2>
                <h3 style={{ display: "inline-flex" }}>{this.state.date}</h3>
              </div>
            </Col>
          </Row>
        </Grid>
        {applicant}
        {client}
        <span
          style={{
            display: "block",
            width: "100%",
            borderTop: "3px solid",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <i>
          <p>
            Applicant shall maintain insurance against claims for injuries to
            persons or damages to property, including contractual liability,
            which may arise from or in connection with the performance of the
            work by Contractor, agents, employees, representatives, assigns, or
            subcontractors. This insurance shall cover such claims as may be
            caused by any negligent act or omission
          </p>
          <p>
            Applicant will fully comply with all applicable federal, Tribe, or
            local laws, rules, regulations, and executive orders including but
            not limited to, the Montana Human Rights Act, the Equal Pay Act of
            1963, the Civil Rights Act of 1964, the Age Discrimination Act of
            1975, the Americans with Disabilities Act of 1990, and Section 504
            of the Rehabilitation Act of 1973
          </p>
          <p>
            Applicant shall be registered to do business with the Montana
            Secretary of State and shall maintain this registration in good
            standing during the term of this Agreement and any renewal.
          </p>
          <p>
            Applicant shall indemnify and hold harmless CSS, its employees and
            agents, from all claims, liabilities, causes of action or judgments,
            including costs and attorney fees, asserted by or awarded to third
            parties as a result of any negligent action or omission or willful
            misconduct of the applicant, its employees or agents.
          </p>
        </i>
        <table>
          <tbody>
            <tr>
              <td>
                <Checkbox
                  bsClass="checkBox"
                  postClick={() =>
                    this.setState({ checkbox: !this.state.checkbox })
                  }
                  checked={this.state.checkbox}
                />
              </td>
              <td>
                <p style={{ marginTop: "12px" }}>
                  I have read and agree that I meet the above requirements.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            textAlign: "center",
            opacity: this.validate() ? 1 : 0.35,
            pointerEvents: this.validate() ? "auto" : "none",
          }}
        >
          <Button className="custom_button" onClick={() => this.submit()}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

class Apply extends Component {
  state = {
    modalText: null,
    referralStatus: 0,
    modalState: false,
  };

  render() {
    return (
      <div className="home">
        <Header />
        <div className="refer">
          <FormFields setState={(state) => this.setState(state)} />
        </div>
        <div className={"modal"}>
          <StatusModal
            modalState={this.state.modalState}
            referralSuccess={this.state.referralStatus}
            modalText={this.state.modalText}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Apply);
