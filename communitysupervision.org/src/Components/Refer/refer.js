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
import "./refer.css";

class StatusModal extends Component {
  render() {
    return (
      <Modal bsSize="med" show={this.props.modalState}>
        <Modal.Body>
          {this.props.referralSuccess === 0 ? (
            <Loader
              type="spinningBubbles"
              color="black"
              className={"visible"}
            />
          ) : this.props.referralSuccess === 1 ? (
            <center>
              <h1 class="glyphicon glyphicon-ok" style={{ color: "green" }} />
            </center>
          ) : this.props.referralSuccess === 2 ? (
            <center>
              <h1 class="glyphicon glyphicon-remove" style={{ color: "red" }} />
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
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      sendingReferral: false,
      referralSuccess: 0,
      modalText: "",
      dropDownValue: "Select a form...",
      uaDropDown: "week",
      emailIsValid: null,
      commentBoxText: "",
      gridValues: {
        pretrialState: 0,
        date: this.getDate(),
        name: "",
        phoneNumber: "",
        charges: "",
        caseNumber: "",
        toEnrollBy: "",
        programLength: "",
        court: "",
        judge: "",
        address: "",
        violationsReportedTo: "",
      },
      houseArrestState: {
        b1: false,
        b2: false,
        b3: false,
      },
      houseArrestMovement: {
        b1: false,
        b2: false,
        b3: false,
        b4: false,
        b5: false,
      },
      supervisionServices: {
        c1: false,
        c2: false,
        c3: false,
        c4: false,
        c5: false,
        c6: false,
        c7: false,
        c10: false,
      },
      services247: {
        c1: false,
        c2: false,
        c3: false,
      },
      txtBox: {
        frequency: "3",
        ua: "0",
        other: "",
      },
    };
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

  updateInput(str, obj, key) {
    const newObj = this.state[obj];
    newObj[key] = str;
    this.setState({ newObj });
  }

  updateCheckbox(obj, key) {
    const newObj = this.state[obj];
    newObj[key] = !newObj[key];
    this.setState({ newObj });
  }

  pretrialState(int) {
    const obj = this.state.gridValues;
    obj.pretrialState = int;
    this.setState({ gridValues: obj });
  }

  houseArrestState(key, boolean) {
    const obj = this.state.houseArrestState;
    if (key === "b1" && boolean) {
      obj.b2 = false;
      obj.b3 = false;
    } else {
      obj.b1 = false;
    }
    obj[key] = boolean;
    this.setState({ houseArrestState: obj });
  }

  houseArrestMovement(key, boolean) {
    const obj = this.state.houseArrestMovement;
    if (key === "b4" && boolean) {
      obj.b1 = true;
      obj.b2 = true;
      obj.b3 = true;
    } else if (key === "b4" && !boolean) {
      obj.b1 = false;
      obj.b2 = false;
      obj.b3 = false;
      obj.b4 = false;
    } else {
      obj.b4 = false;
    }
    obj[key] = boolean;
    this.setState({ houseArrestMovement: obj });
  }

  validateSubmission() {
    let valid = false;
    if (
      this.state.gridValues.name.length > 0 &&
      this.state.gridValues.phoneNumber.length > 0 &&
      this.state.gridValues.toEnrollBy.length > 0 &&
      this.state.gridValues.violationsReportedTo.length > 0 &&
      this.state.emailIsValid === "success"
    ) {
      for (let key in this.state.supervisionServices) {
        if (this.state.supervisionServices[key]) {
          valid = true;
        }
      }
      for (let key in this.state.services247) {
        if (this.state.services247[key]) {
          valid = true;
        }
      }
    }
    return valid;
  }

  validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let object = this.state;
    object.gridValues.violationsReportedTo = email;
    if (email.length > 0) {
      object.emailIsValid = email.match(regEx) ? "success" : "error";
    } else {
      object.emailIsValid = "";
    }
    this.setState(object);
  }

  submitReferral(state) {
    this.setState({
      sendingReferral: true,
    });
    if (this.validateSubmission()) {
      const body = {
        gridValues: state.gridValues,
        houseArrestState: state.houseArrestState,
        houseArrestMovement: state.houseArrestMovement,
        supervisionServices: state.supervisionServices,
        services247: state.services247,
        uaDropDown: state.uaDropDown,
        dropDownValue: state.dropDownValue,
        txtBox: state.txtBox,
        commentBoxText: state.commentBoxText,
        attachedForm: this.state.files.length > 0 ? true : false,
        css: true,
      };
      const formData = new FormData();
      formData.append("image", this.state.files[0]);
      fetch(`${config.api}/image`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          fetch(`${config.api}/refer`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then(() =>
              this.setState({
                referralSuccess: 1,
                modalText: "Referral Received!",
              })
            )
            .catch((err) => {
              this.setState({
                referralSuccess: 2,
                modalText: "Uh oh, there was an error receiving your referral.",
              });
            })
            .then(
              setTimeout(() => {
                this.setState({ sendingReferral: false });
                setTimeout(() => window.location.reload(), 500);
              }, 3000)
            );
        });
    } else {
      this.setState({
        referralSuccess: 3,
        modalText:
          "Please fill all required fields and a minimum of 1 service before submission.",
      });
      setTimeout(() => this.setState({ sendingReferral: false }), 4000);
    }
  }

  onDrop(files) {
    if (files[0].type === "application/pdf") {
      this.setState({
        files,
      });
    }
  }

  render() {
    let oStyle = this.state.supervisionServices.c4
      ? {}
      : { opacity: "0.25", pointerEvents: "none" };
    let dropClass =
      (this.state.supervisionServices.c5 ||
        this.state.supervisionServices.c6) &&
      this.state.files.length < 1
        ? "dropZone_flash"
        : "dropZone_stable";
    let dropStyle =
      this.state.supervisionServices.c5 || this.state.supervisionServices.c6
        ? { display: "inline-flex" }
        : { opacity: "0.25", pointerEvents: "none", display: "inline-flex" };
    let otherStyle = {
      display: "inline-flex",
      marginLeft: "10px",
      maxWidth: "250px",
      opacity: "1",
    };
    const grid = (
      <Grid fluid={true} bsClass="grid">
        <Row style={{ marginLeft: "-15px", marginBottom: "15px" }}>
          <Col md={3} className="col">
            <h1>Offender Information</h1>
            <h2>
              <font style={{ color: "red" }}>*</font> Required field
            </h2>
          </Col>
          <Col md={4}>
            <Checkbox
              bsClass="checkBox"
              postClick={() => this.pretrialState(0)}
              checked={this.state.gridValues.pretrialState === 0 ? true : false}
            />
            <h2
              style={{
                marginTop: "2px",
                display: "inline-flex",
              }}
            >
              Pretrial
            </h2>
            <Checkbox
              bsClass="checkBox"
              postClick={() => this.pretrialState(1)}
              checked={this.state.gridValues.pretrialState === 1 ? true : false}
            />
            <h2 style={{ marginTop: "2px", display: "inline-flex" }}>
              Sentencing
            </h2>
            <Checkbox
              bsClass="checkBox"
              postClick={() => this.pretrialState(2)}
              checked={this.state.gridValues.pretrialState === 2 ? true : false}
            />
            <h2 style={{ marginTop: "2px", display: "inline-flex" }}>Other</h2>
          </Col>
          <Col md={3} className="col" style={{ marginTop: "-12.5px" }}>
            <div style={{ float: "right" }}>
              <h2 style={{ display: "inline-flex" }}>Date</h2>
              <h3 style={{ display: "inline-flex" }}>
                {this.state.gridValues.date}
              </h3>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="col">
            <h2>
              <font style={{ color: "red" }}>*</font> Name
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  this.updateInput(e.target.value, "gridValues", "name")
                }
              />
            </InputGroup>
          </Col>
          <Col md={6} className="col">
            <h2>
              <font style={{ color: "red" }}>*</font> Phone Number
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Phone Number"
                onChange={(e) =>
                  this.updateInput(e.target.value, "gridValues", "phoneNumber")
                }
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h2>
              <font style={{ color: "red" }}>*</font> To Enroll By
            </h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="To Enroll By"
                onChange={(e) =>
                  this.updateInput(e.target.value, "gridValues", "toEnrollBy")
                }
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <h2>
              <font style={{ color: "red" }}>*</font> Violations Reported To
            </h2>
            <FormGroup
              className="input-block-level"
              controlId="formValidationError2"
              validationState={this.state.emailIsValid}
            >
              <FormControl
                type="text"
                placeholder="john.hancock@gmail.com"
                onBlur={(e) => this.validateEmail(e.target.value)}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h2>Charges</h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Charges"
                onChange={(e) =>
                  this.updateInput(e.target.value, "gridValues", "charges")
                }
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <h2>Program Length</h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Program Length"
                onChange={(e) =>
                  this.updateInput(
                    e.target.value,
                    "gridValues",
                    "programLength"
                  )
                }
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h2>Agency</h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Court"
                onChange={(e) =>
                  this.updateInput(e.target.value, "gridValues", "court")
                }
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <h2>Judge</h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Judge"
                onChange={(e) =>
                  this.updateInput(e.target.value, "gridValues", "judge")
                }
              />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="col">
            <h2>Address</h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Address"
                onChange={(e) =>
                  this.updateInput(e.target.value, "gridValues", "address")
                }
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <h2>Case Number</h2>
            <InputGroup className="input-block-level">
              <FormControl
                type="text"
                placeholder="Case Number"
                onChange={(e) =>
                  this.updateInput(e.target.value, "gridValues", "caseNumber")
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
        {grid}
        <span
          style={{
            display: "block",
            width: "100%",
            borderTop: "3px solid",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <div style={{ textAlign: "center" }}>
          <h1>{this.state.dropDownValue}</h1>
        </div>
        <h2 style={{ textAlign: "left" }}>Select a form</h2>
        <div style={{ marginBottom: "25px" }}>
          <DropdownButton title={this.state.dropDownValue}>
            <MenuItem
              onClick={() =>
                this.setState({ dropDownValue: "Supervision Services" })
              }
            >
              Supervison Services
            </MenuItem>
            <MenuItem
              onClick={() =>
                this.setState({ dropDownValue: "24.7 Program Services" })
              }
            >
              24.7 Monitoring
            </MenuItem>
          </DropdownButton>
        </div>
        {this.state.dropDownValue !== "Select a form..." ? (
          this.state.dropDownValue === "Supervision Services" ? (
            <div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.updateCheckbox("supervisionServices", "c1")
                    }
                    checked={this.state.supervisionServices.c1}
                  />
                  <h2>
                    SCRAM CAM Alcohol Monitoring $300/mo ($50 Install fee){" "}
                    <b>Continuous Alcohol Monitoring 48 tests/day</b>
                  </h2>
                </div>
              </div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.updateCheckbox("supervisionServices", "c2")
                    }
                    checked={this.state.supervisionServices.c2}
                  />
                  <h2>
                    SCRAM Alcohol Monitoring <b>w/ House Arrest</b> $300/mo ($50
                    Install fee) landline OR Ethernet capability
                  </h2>
                </div>
              </div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.updateCheckbox("supervisionServices", "c3")
                    }
                    checked={this.state.supervisionServices.c3}
                  />
                  <h2>
                    SCRAM Remote Breath: $210/mo ($50 Install Fee){" "}
                    <b>
                      Frequency:{" "}
                      <InputGroup
                        style={{
                          display: "inline-flex",
                          width: "50px",
                        }}
                      >
                        <FormControl
                          type="text"
                          placeholder=""
                          style={{ height: "20px" }}
                          onChange={(e) =>
                            this.updateInput(
                              e.target.value.length > 1
                                ? e.target.value.charAt(0)
                                : e.target.value,
                              "txtBox",
                              "frequency"
                            )
                          }
                          value={this.state.txtBox.frequency}
                        />
                      </InputGroup>{" "}
                      x/day
                    </b>
                  </h2>
                </div>
              </div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.updateCheckbox("supervisionServices", "c4")
                    }
                    checked={this.state.supervisionServices.c4}
                  />
                  <h2>
                    House Arrest – $10/day ($50 Install fee)
                    cellular/Ethernet/landline/GPS Satellite
                  </h2>
                </div>
              </div>
              <div style={oStyle}>
                <h2 style={{ marginLeft: "50px", marginTop: "-5px" }}>
                  <b>Movement allowed for House Arrest: </b>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.houseArrestState(
                        "b1",
                        !this.state.houseArrestState.b1
                      )
                    }
                    checked={this.state.houseArrestState.b1}
                  />
                  <b>NONE - Lockdown OR</b>
                  <Checkbox
                    bsClass="checkBox"
                    style={{ display: "inline-flex", marginLeft: "10px" }}
                    postClick={() =>
                      this.houseArrestState(
                        "b2",
                        !this.state.houseArrestState.b2
                      )
                    }
                    checked={this.state.houseArrestState.b2}
                  />
                  Work
                  <Checkbox
                    bsClass="checkBox"
                    style={{ display: "inline-flex", marginLeft: "10px" }}
                    postClick={() =>
                      this.houseArrestState(
                        "b3",
                        !this.state.houseArrestState.b3
                      )
                    }
                    checked={this.state.houseArrestState.b3}
                  />
                  Treatment
                </h2>
                <h2 style={{ marginLeft: "50px", marginTop: "-15px" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.houseArrestMovement(
                        "b1",
                        !this.state.houseArrestMovement.b1
                      )
                    }
                    checked={this.state.houseArrestMovement.b1}
                  />
                  Medical Appointment
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.houseArrestMovement(
                        "b2",
                        !this.state.houseArrestMovement.b2
                      )
                    }
                    checked={this.state.houseArrestMovement.b2}
                  />
                  Legal Appointment
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.houseArrestMovement(
                        "b3",
                        !this.state.houseArrestMovement.b3
                      )
                    }
                    checked={this.state.houseArrestMovement.b3}
                  />
                  Religious Functions
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.houseArrestMovement(
                        "b4",
                        !this.state.houseArrestMovement.b4
                      )
                    }
                    checked={this.state.houseArrestMovement.b4}
                  />
                  All
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.houseArrestMovement(
                        "b5",
                        !this.state.houseArrestMovement.b5
                      )
                    }
                    checked={this.state.houseArrestMovement.b5}
                  />
                  Other
                  <InputGroup style={otherStyle}>
                    <FormControl
                      type="text"
                      placeholder=""
                      onChange={(e) => {
                        this.updateInput(e.target.value, "txtBox", "other");
                      }}
                    />
                  </InputGroup>
                  <div>
                    <b>
                      <i>All house arrest movement verified by CMS</i>
                    </b>
                  </div>
                </h2>
              </div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() => {
                      this.updateCheckbox("supervisionServices", "c5");
                      if (this.state.supervisionServices.c5) {
                        let obj = this.state.supervisionServices;
                        obj.c6 = false;
                        this.setState({ supervisionServices: obj });
                      }
                    }}
                    checked={this.state.supervisionServices.c5}
                  />
                  <h2>
                    GPS Bracelet Tracking <b>(active)</b>{" "}
                    <i>
                      $390/mo ($50 Install fee) This GPS rate pertains to
                      immediate response to strap and exclusion zone violations,
                      clients with victims are at this rate.
                    </i>{" "}
                    <b>Order with restrictions is needed</b>
                  </h2>
                </div>
              </div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() => {
                      this.updateCheckbox("supervisionServices", "c6");
                      if (this.state.supervisionServices.c6) {
                        let obj = this.state.supervisionServices;
                        obj.c5 = false;
                        this.setState({ supervisionServices: obj });
                      }
                    }}
                    checked={this.state.supervisionServices.c6}
                  />
                  <h2>
                    GPS Bracelet Tracking <b>(passive)</b>{" "}
                    <i>
                      $300/mo ($50 Install fee) This GPS rate is for tracking
                      purposes only and violations will be submitted within one
                      (1) business day.
                    </i>{" "}
                    <b>Order with restrictions is preferred</b>
                  </h2>
                </div>
              </div>
              <section style={dropStyle}>
                <div className={dropClass}>
                  <Dropzone
                    onDrop={(files) => this.onDrop(files)}
                    style={{
                      padding: "0px",
                      backgroundColor: "rgb(187, 187, 187)",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      class="glyphicon glyphicon-file"
                      style={{
                        fontSize: "25px",
                        marginTop: "8px",
                        marginLeft: "11.5px",
                      }}
                    />
                  </Dropzone>
                </div>
                <aside>
                  <h2>Attached Order (.pdf)</h2>
                  <ul>
                    {this.state.files.map((f) => {
                      return (
                        <li key={f.name}>
                          {f.name} - {f.size} bytes
                        </li>
                      );
                    })}
                  </ul>
                </aside>
              </section>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() =>
                      this.updateCheckbox("supervisionServices", "c7")
                    }
                    checked={this.state.supervisionServices.c7}
                  />
                  <h2>
                    PharmChem Drug Patch (2-14 days) Cocaine, Opiates,
                    Amphetamines/Methamphetamine, PCP, THC -{" "}
                    <i>$65/patch ($50 Install fee)</i>
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() => this.updateCheckbox("services247", "c1")}
                    checked={this.state.services247.c1}
                  />
                  <h2>24/7 Drug Patch $65/patch ($50 Install fee)</h2>
                </div>
              </div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() => this.updateCheckbox("services247", "c2")}
                    checked={this.state.services247.c2}
                  />
                  <h2>
                    24/7 Urinalysis drug testing{" "}
                    <InputGroup
                      style={{
                        display: "inline-flex",
                        width: "50px",
                      }}
                    >
                      <FormControl
                        type="text"
                        placeholder=""
                        style={{ height: "20px" }}
                        onChange={(e) =>
                          this.updateInput(
                            e.target.value.length > 1
                              ? e.target.value.charAt(0)
                              : e.target.value,
                            "txtBox",
                            "ua"
                          )
                        }
                        value={this.state.txtBox.ua}
                      />
                    </InputGroup>{" "}
                    x /{" "}
                    <DropdownButton title={this.state.uaDropDown}>
                      <MenuItem
                        onClick={() =>
                          this.setState({
                            uaDropDown: "week",
                          })
                        }
                      >
                        week
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          this.setState({
                            uaDropDown: "month",
                          })
                        }
                      >
                        month
                      </MenuItem>
                    </DropdownButton>{" "}
                    <b>Pricing dependant upon specified drug panel</b>
                  </h2>
                </div>
                <div
                  style={{
                    marginLeft: "75px",
                    marginBottom: "25px",
                    color: "rgb(88, 88, 88)",
                  }}
                >
                  <b>
                    <i>Please include panel details in the comments section</i>
                  </b>
                </div>
              </div>
              <div>
                <div style={{ display: "inline-flex" }}>
                  <Checkbox
                    bsClass="checkBox"
                    postClick={() => this.updateCheckbox("services247", "c3")}
                    checked={this.state.services247.c3}
                  />
                  <h2>
                    24/7 Acohol Monitoring - SCRAM CAM or Twice Daily
                    Breathalyzer
                  </h2>
                </div>
              </div>
            </div>
          )
        ) : (
          <div />
        )}
        <div style={{ width: "100%", marginTop: "15px" }}>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>
              <h2>Leave a comment</h2>
            </ControlLabel>
            <FormControl
              componentClass="textarea"
              style={{ height: "250px" }}
              onChange={(e) =>
                this.setState({ commentBoxText: e.target.value })
              }
            />
          </FormGroup>
        </div>
        {this.state.dropDownValue !== "Select a form..." ? (
          <div>
            <div style={{ textAlign: "center" }}>
              <Button
                className="custom_button"
                onClick={() => this.submitReferral(this.state)}
              >
                Submit
              </Button>
            </div>
            <h2 style={{ textAlign: "center" }}>
              *** Individual pricing may vary by location ***
            </h2>
            <StatusModal
              modalState={this.state.sendingReferral}
              referralSuccess={this.state.referralSuccess}
              modalText={this.state.modalText}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

class Refer extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="refer">
          <FormFields />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Refer);
