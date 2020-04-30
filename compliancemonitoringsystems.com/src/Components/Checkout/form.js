import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  FormGroup,
  InputGroup,
  FormControl,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  ControlLabel
} from "react-bootstrap";
import LoadingModal from "./loading_modal";
import {
  transactionStatus,
  selectedBox
} from "../../Actions/transactionActions";
import ConfirmModal from "./confirm_modal";
import Recaptcha from "react-recaptcha";
import config from "../../config";

const CAPTCHA_KEY = "6LcXSsAUAAAAAICzcfA5adl9d5nFgVOr4PuF0D5A";

class Form extends Component {
  constructor(props) {
    super(props);
    this.props.setTransactionStatus("idle");
    this.config = {
      inputGroupWidth: 275,
      inputGroupWidthModifier: 1.5,
      helpFontSize: 15,
      showHelp: true
    };
    this.state = {
      captcha: null,
      showModal: false,
      showConfirm: false,
      helpIndex: 0,
      willFlow: false,
      linesShown: 1,
      invoiceNumber: "",
      firstName: "",
      middleInitial: "",
      lastName: "",
      clientFirstName: "",
      clientMiddleInitial: "",
      clientLastName: "",
      selectedService: "Select a Program...",
      cardType: "Select a Card Type...",
      cardNumber: "",
      cardValidation: null,
      paymentValidation: null,
      cvcValidaiton: null,
      expDateValidaiton: null,
      cvcNumber: "",
      expDate: "",
      errorState: "formValidationError2",
      cvcErrorState: "formValidationError2",
      expDateErrorState: "formValidationError2",
      paymentErrorState: "formValidationError2",
      other: false,
      cartTotal: 0,
      email: "",
      billingAddress: {
        line1: "",
        line2: "",
        city: "",
        state: "MT",
        zipCode: ""
      }
    };
  }

  cardValidation(num) {
    let length = num.replace(/ /g, "").length;
    if (length === 0) {
      this.setState({
        cardValidation: null,
        cardNumber: num
      });
    } else if (
      ((this.state.cardType !== "American Express" && length === 16) ||
        (this.state.cardType === "American Express" && length === 15)) &&
      /^\d+$/.test(num.replace(/ /g, ""))
    ) {
      this.setState({
        cardValidation: "success",
        errorState: "formValidationSuccess2",
        cardNumber: num
      });
    } else {
      this.setState({
        cardValidation: "error",
        errorState: "formValidationError2",
        cardNumber: num
      });
    }
  }

  cvcValidation(num) {
    if (num.length === 0) {
      this.setState({
        cvcValidation: null,
        cvcNumber: num
      });
    } else if (
      (num.length === 3 && this.state.cardType !== "American Express") ||
      (num.length === 4 &&
        this.state.cardType === "American Express" &&
        /^\d+$/.test(num))
    ) {
      this.setState({
        cvcValidation: "success",
        cvcErrorState: "formValidationSuccess2",
        cvcNumber: num
      });
    } else {
      this.setState({
        cvcValidation: "error",
        cvcErrorState: "formValidationError2",
        cvcNumber: num
      });
    }
  }

  expDateValidation(num) {
    if (num.replace(/\//g, "").length < 1) {
      this.setState({
        cvcValidation: null,
        cvcNumber: num
      });
    } else if (num.replace(/\//g, "").length === 4) {
      this.setState({
        expDateValidation: "success",
        expDateErrorState: "formValidationSuccess2",
        expDate: num
      });
    } else {
      this.setState({
        expDateValidation: "error",
        expDateErrorState: "formValidationError2",
        expDate: num
      });
    }
  }

  formatCC(cardNum, oldCardNum) {
    let length = cardNum.replace(/ /g, "").length;
    if (length > oldCardNum.replace(/ /g, "").length) {
      if (
        this.state.cardType !== "American Express" &&
        length % 4 === 0 &&
        (length < 16) & (length !== 0)
      ) {
        cardNum += " ";
      } else if (this.state.cardType === "American Express" && length !== 0) {
        if (length === 4 || length === 10) {
          cardNum += " ";
        }
      }
    }
    return cardNum;
  }

  paymentValidation(cardTotal) {
    if (cardTotal.length > 0) {
      if (parseInt(cardTotal) >= 20) {
        this.setState({
          cardTotal,
          paymentValidation: "success",
          paymentErrorState: "formValidationSuccess2"
        });
      } else {
        this.setState({
          cardTotal,
          paymentValidation: "error",
          paymentErrorState: "formValidationError2"
        });
      }
    } else {
      this.setState({
        cardTotal,
        paymentValidation: null
      });
    }
  }

  clientName() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <h3>Client Name</h3>
            <InputGroup
              style={{
                width: `${this.config.inputGroupWidth}px`,
                display: "inline-block"
              }}
            >
              <FormControl
                type="text"
                placeholder="First Name"
                onChange={e =>
                  this.setState({ clientFirstName: e.target.value })
                }
                onFocus={() => {
                  this.props.selectedBox(10);
                  this.setState({
                    helpIndex: 10
                  });
                }}
                onBlur={() => {
                  this.props.selectedBox(0);
                  this.setState({
                    helpIndex: 0
                  });
                }}
              />
            </InputGroup>
            <InputGroup
              style={{
                width: `${this.config.inputGroupWidth * 0.3}px`,
                display: "inline-block",
                marginLeft: "2.5px"
              }}
            >
              <FormControl
                type="text"
                placeholder="MI"
                onChange={e =>
                  this.setState({ clientMiddleInitial: e.target.value })
                }
                onFocus={() => {
                  this.props.selectedBox(10);
                  this.setState({
                    helpIndex: 10
                  });
                }}
                onBlur={() => {
                  this.props.selectedBox(0);
                  this.setState({
                    helpIndex: 0
                  });
                }}
              />
            </InputGroup>
            <InputGroup
              style={{
                width: `${this.config.inputGroupWidth}px`,
                marginTop: "-5px"
              }}
            >
              <FormControl
                type="text"
                placeholder="Last Name"
                onChange={e =>
                  this.setState({ clientLastName: e.target.value })
                }
                onFocus={() => {
                  this.props.selectedBox(10);
                  this.setState({
                    helpIndex: 10
                  });
                }}
                onBlur={() => {
                  this.props.selectedBox(0);
                  this.setState({
                    helpIndex: 0
                  });
                }}
              />
            </InputGroup>
            {this.config.showHelp && this.state.helpIndex === 10 ? (
              <div
                style={{
                  width: `${this.config.inputGroupWidth *
                    this.config.inputGroupTextModier}px`,
                  fontSize: `${this.config.helpFontSize}px`
                }}
              >
                This will be the client to whom the invoice pertains.
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }

  invoiceNumber() {
    return (
      <div>
        <h3>
          Invoice Number{" "}
          <h3
            style={{
              fontSize: "12px",
              display: "inline-block",
              marginLeft: "6px"
            }}
          >
            (Optional)
          </h3>
        </h3>
        <InputGroup
          style={{
            width: `${this.config.inputGroupWidth}px`
          }}
        >
          <FormControl
            type="text"
            placeholder="xxxxxxxxx"
            onChange={e => this.setState({ invoiceNumber: e.target.value })}
            onFocus={() => {
              this.props.selectedBox(1);
              this.setState({
                helpIndex: 1
              });
            }}
            onBlur={() => {
              this.props.selectedBox(0);
              this.setState({
                helpIndex: 0
              });
            }}
          />
        </InputGroup>
        {this.config.showHelp && this.state.helpIndex === 1 ? (
          <div
            style={{
              width: `${this.config.inputGroupWidth *
                this.config.inputGroupTextModier}px`,
              fontSize: `${this.config.helpFontSize}px`
            }}
          >
            This number will be on an invoice provided to you by Compliance
            Monitoring Systems.
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  nameOnCard() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <h3>Name on Card</h3>
            <InputGroup
              style={{
                width: `${this.config.inputGroupWidth}px`,
                display: "inline-block"
              }}
            >
              <FormControl
                type="text"
                placeholder="First Name"
                onChange={e => this.setState({ firstName: e.target.value })}
                onFocus={() => {
                  this.setState({
                    helpIndex: 2
                  });
                }}
                onBlur={() => {
                  this.setState({
                    helpIndex: 0
                  });
                }}
              />
            </InputGroup>
            <InputGroup
              style={{
                width: `${this.config.inputGroupWidth * 0.3}px`,
                display: "inline-block",
                marginLeft: "2.5px"
              }}
            >
              <FormControl
                type="text"
                placeholder="MI"
                onChange={e => this.setState({ middleInitial: e.target.value })}
                onFocus={() => {
                  this.setState({
                    helpIndex: 2
                  });
                }}
                onBlur={() => {
                  this.setState({
                    helpIndex: 0
                  });
                }}
              />
            </InputGroup>
            <InputGroup
              style={{
                width: `${this.config.inputGroupWidth}px`,
                marginTop: "-5px"
              }}
            >
              <FormControl
                type="text"
                placeholder="Last Name"
                onChange={e => this.setState({ lastName: e.target.value })}
                onFocus={() => {
                  this.setState({
                    helpIndex: 2
                  });
                }}
                onBlur={() => {
                  this.setState({
                    helpIndex: 0
                  });
                }}
              />
            </InputGroup>
            {this.config.showHelp && this.state.helpIndex === 2 ? (
              <div
                style={{
                  width: `${this.config.inputGroupWidth *
                    this.config.inputGroupTextModier}px`,
                  fontSize: `${this.config.helpFontSize}px`
                }}
              >
                This will be the name of the card holder.
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }

  selectService() {
    let title = this.state.other ? "Other" : this.state.selectedService;
    if (
      (this.state.firstName.length > 0 && this.state.lastName.length > 0) ||
      this.state.willFlow === false
    ) {
      return (
        <div>
          <h3>Select a Program</h3>
          <ButtonToolbar
            onFocus={() => {
              this.props.selectedBox(3);
              this.setState({
                helpIndex: 3
              });
            }}
            onBlur={() => {
              this.props.selectedBox(0);
              this.setState({
                helpIndex: 0
              });
            }}
          >
            <DropdownButton
              bsSize="small"
              title={title}
              id="services-dropdown"
              style={{ width: `${this.config.inputGroupWidth}px` }}
            >
              <MenuItem
                eventKey="1"
                onClick={() =>
                  this.setState({
                    selectedService: "Scram Monitoring",
                    other: false
                  })
                }
              >
                Scram Monitoring
              </MenuItem>
              <MenuItem
                eventKey="2"
                onClick={() =>
                  this.setState({
                    selectedService: "GPS Monitoring",
                    other: false
                  })
                }
              >
                GPS Monitoring
              </MenuItem>
              <MenuItem
                eventKey="3"
                onClick={() =>
                  this.setState({
                    selectedService: "House Arrest",
                    other: false
                  })
                }
              >
                House Arrest
              </MenuItem>
              <MenuItem
                eventKey="4"
                onClick={() =>
                  this.setState({
                    selectedService: "Drug Patch",
                    other: false
                  })
                }
              >
                Drug Patch
              </MenuItem>
              <MenuItem
                eventKey="5"
                onClick={() =>
                  this.setState({
                    selectedService: "Urinalysis",
                    other: false
                  })
                }
              >
                Urinalysis (Lab)
              </MenuItem>
              <MenuItem divider />
              <MenuItem
                eventKey="10"
                onClick={() =>
                  this.setState({
                    selectedService: "Other",
                    other: true
                  })
                }
              >
                Other...
              </MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          {this.state.other ? (
            <InputGroup style={{ width: `${this.config.inputGroupWidth}px` }}>
              <FormControl
                type="text"
                placeholder="Program Name"
                onFocus={() => {
                  this.setState({
                    helpIndex: 3
                  });
                }}
                onBlur={() => {
                  this.setState({
                    helpIndex: 0
                  });
                }}
                style={{ marginTop: "2.5px" }}
                onChange={e =>
                  this.setState({ selectedService: e.target.value })
                }
              />
            </InputGroup>
          ) : (
            ""
          )}
          {this.config.showHelp && this.state.helpIndex === 3 ? (
            <div
              style={{
                width: `${this.config.inputGroupWidth *
                  this.config.inputGroupTextModier}px`,
                fontSize: `${this.config.helpFontSize}px`
              }}
            >
              This value will be the program that you have been invoiced for.
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      this.state.linesShown = 1;
      return "";
    }
  }

  paymentAmount() {
    if (this.state.linesShown > 0) {
      return (
        <div>
          <h3>Payment Amount</h3>
          <FormGroup
            validationState={this.state.paymentValidation}
            controlId={this.state.paymentErrorState}
          >
            <InputGroup style={{ width: `${this.config.inputGroupWidth}px` }}>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="e.g. 25.00"
                onChange={e =>
                  this.paymentValidation(e.target.value.replace(/\$/g, ""))
                }
                onFocus={() => {
                  this.props.selectedBox(4);
                  this.setState({
                    helpIndex: 4
                  });
                }}
                onBlur={() => {
                  this.props.selectedBox(0);
                  this.setState({
                    helpIndex: 0
                  });
                }}
              />
              <InputGroup.Addon style={{ width: "35px" }}>
                <FormControl.Feedback />
                <ControlLabel />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          {this.config.showHelp && this.state.helpIndex === 4 ? (
            <div
              style={{
                width: `${this.config.inputGroupWidth *
                  this.config.inputGroupTextModier}px`,
                fontSize: `${this.config.helpFontSize}px`
              }}
            >
              This number represents the total amount owed specified on your
              invoice or payment. Only amounts of $20.00 or more are valid.
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return "";
    }
  }

  cardType() {
    if (this.state.linesShown > 1 || this.state.willFlow === false) {
      return (
        <div>
          <h3>Card Type</h3>
          <ButtonToolbar
            onFocus={() => {
              this.setState({
                helpIndex: 5
              });
            }}
            onBlur={() => {
              this.setState({
                helpIndex: 0
              });
            }}
          >
            <DropdownButton
              bsSize="small"
              title={this.state.cardType}
              id="services-dropdown"
              style={{ width: `${this.config.inputGroupWidth}px` }}
            >
              <MenuItem
                eventKey="1"
                onClick={() =>
                  this.setState({
                    cardType: "Visa",
                    linesShown: 3,
                    cardNumber: "",
                    cvcNumber: "",
                    cardValidation: null,
                    cvcValidaiton: null
                  })
                }
              >
                Visa
              </MenuItem>
              <MenuItem
                eventKey="2"
                onClick={() =>
                  this.setState({
                    cardType: "Mastercard",
                    linesShown: 3,
                    cardNumber: "",
                    cvcNumber: ""
                  })
                }
              >
                Mastercard
              </MenuItem>
              <MenuItem
                eventKey="3"
                onClick={() =>
                  this.setState({
                    cardType: "American Express",
                    linesShown: 3,
                    cardNumber: "",
                    cvcNumber: ""
                  })
                }
              >
                American Express
              </MenuItem>
              <MenuItem
                eventKey="4"
                onClick={() =>
                  this.setState({
                    cardType: "Discover",
                    linesShown: 4,
                    cardNumber: "",
                    cvcNumber: ""
                  })
                }
              >
                Discover
              </MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          {this.config.showHelp && this.state.helpIndex === 5 ? (
            <div
              style={{
                width: `${this.config.inputGroupWidth *
                  this.config.inputGroupTextModier}px`,
                fontSize: `${this.config.helpFontSize}px`
              }}
            >
              This value represents carrier of your credit or debit card.
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return "";
    }
  }

  creditCardNumber() {
    if (this.state.linesShown > 2 || this.state.willFlow === false) {
      return (
        <div>
          <h3>Credit Card Number</h3>
          <FormGroup
            validationState={this.state.cardValidation}
            controlId={this.state.errorState}
          >
            <InputGroup style={{ width: `${this.config.inputGroupWidth}px` }}>
              <FormControl
                type="text"
                placeholder="xxxx xxxx xxxx xxxx"
                onChange={e => {
                  this.cardValidation(
                    this.formatCC(e.target.value, this.state.cardNumber)
                  );
                }}
                value={this.state.cardNumber}
                onFocus={() => this.setState({ helpIndex: 9 })}
                onBlur={() => this.setState({ helpIndex: 0 })}
              />
              <InputGroup.Addon style={{ width: "35px" }}>
                <FormControl.Feedback />
                <ControlLabel />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          {this.config.showHelp && this.state.helpIndex === 9 ? (
            <div
              style={{
                width: `${this.config.inputGroupWidth *
                  this.config.inputGroupTextModier}px`,
                fontSize: `${this.config.helpFontSize}px`
              }}
            >
              This will be the full card number associated with this credit or
              debit card.
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return "";
    }
  }

  cvc() {
    return (
      <div>
        <h3>CVC</h3>
        <FormGroup
          validationState={this.state.cvcValidation}
          controlId={this.state.cvcErrorState}
        >
          <InputGroup
            style={{ width: `${this.config.inputGroupWidth * 0.67}px` }}
          >
            <FormControl
              type="text"
              placeholder="xxx"
              onChange={e => {
                this.cvcValidation(e.target.value);
              }}
              value={this.state.cvcNumber}
              onFocus={() => this.setState({ helpIndex: 8 })}
              onBlur={() => this.setState({ helpIndex: 0 })}
            />
            <InputGroup.Addon style={{ width: "35px" }}>
              <FormControl.Feedback />
              <ControlLabel />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {this.config.showHelp && this.state.helpIndex === 8 ? (
          <div
            style={{
              width: `${this.config.inputGroupWidth *
                this.config.inputGroupTextModier}px`,
              fontSize: `${this.config.helpFontSize}px`
            }}
          >
            This will be the cvc or cvv number associated with this credit or
            debit card.
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  expDate() {
    return (
      <div>
        <h3>Expiration Date</h3>
        <FormGroup
          validationState={this.state.expDateValidation}
          controlId={this.state.expDateErrorState}
        >
          <InputGroup
            style={{ width: `${this.config.inputGroupWidth * 0.8}px` }}
          >
            <FormControl
              type="text"
              placeholder="xx/xx"
              onChange={e => {
                this.expDateValidation(e.target.value);
              }}
              value={this.state.expDate}
              onFocus={() => {
                this.props.selectedBox(11);
                this.setState({ helpIndex: 11 });
              }}
              onBlur={() => {
                this.props.selectedBox(0);
                this.setState({ helpIndex: 0 });
              }}
            />
            <InputGroup.Addon style={{ width: "35px" }}>
              <FormControl.Feedback />
              <ControlLabel />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {this.config.showHelp && this.state.helpIndex === 11 ? (
          <div
            style={{
              width: `${this.config.inputGroupWidth *
                this.config.inputGroupTextModier}px`,
              fontSize: `${this.config.helpFontSize}px`
            }}
          >
            This will be the expiration date of this credit or debit card.
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  billingAddress() {
    const focusOn = () => {
      this.setState({
        helpIndex: 6
      });
    };
    const blurOn = () => {
      this.setState({
        helpIndex: 0
      });
    };
    return (
      <div>
        <h3>Card Billing Address</h3>
        <InputGroup
          style={{
            width: `${this.config.inputGroupWidth}px`
          }}
        >
          <FormControl
            type="text"
            placeholder="123 North Pole Ave"
            onChange={e =>
              this.setState({
                billingAddress: {
                  ...this.state.billingAddress,
                  line1: e.target.value
                }
              })
            }
            style={{ marginBottom: "2.5px" }}
            onFocus={focusOn}
            onBlur={blurOn}
          />
        </InputGroup>
        <InputGroup
          style={{
            width: `${this.config.inputGroupWidth}px`
          }}
        >
          <FormControl
            type="text"
            placeholder="(Optional) Suite 1"
            onChange={e =>
              this.setState({
                billingAddress: {
                  ...this.state.billingAddress,
                  line2: e.target.value
                }
              })
            }
            style={{ marginBottom: "2.5px" }}
            onFocus={focusOn}
            onBlur={blurOn}
          />
        </InputGroup>
        <div style={{ display: "flex" }}>
          <InputGroup
            style={{
              width: `${this.config.inputGroupWidth * 0.7 - 2.5}px`,
              display: "inline-block",
              marginRight: "2.5px"
            }}
          >
            <FormControl
              type="text"
              placeholder="City"
              onChange={e =>
                this.setState({
                  billingAddress: {
                    ...this.state.billingAddress,
                    city: e.target.value
                  }
                })
              }
              onFocus={focusOn}
              onBlur={blurOn}
            />
          </InputGroup>
          <InputGroup
            style={{
              width: `${this.config.inputGroupWidth * 0.3}px`,
              display: "inline-block"
            }}
          >
            <FormControl
              type="text"
              placeholder="ST"
              onChange={e =>
                this.setState({
                  billingAddress: {
                    ...this.state.billingAddress,
                    state: e.target.value.toUpperCase()
                  }
                })
              }
              value={this.state.billingAddress.state}
              onFocus={focusOn}
              onBlur={blurOn}
            />
          </InputGroup>
        </div>
        <InputGroup
          style={{
            width: `${this.config.inputGroupWidth * 0.7 - 2.5}px`,
            marginTop: "2.5px"
          }}
        >
          <FormControl
            type="text"
            placeholder="Zip Code"
            onChange={e =>
              this.setState({
                billingAddress: {
                  ...this.state.billingAddress,
                  zipCode: e.target.value
                }
              })
            }
            value={this.state.billingAddress.zipCode}
            onFocus={focusOn}
            onBlur={blurOn}
          />
        </InputGroup>
        {this.config.showHelp && this.state.helpIndex === 6 ? (
          <div
            style={{
              width: `${this.config.inputGroupWidth *
                this.config.inputGroupTextModier}px`,
              fontSize: `${this.config.helpFontSize}px`
            }}
          >
            This will be the billing address associated with this credit or
            debit card.
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  email() {
    return (
      <div>
        <h3 style={{ display: "inline-block" }}>
          Email
          <h3
            style={{
              fontSize: "12px",
              display: "inline-block",
              marginLeft: "6px"
            }}
          >
            (Optional)
          </h3>
        </h3>
        <InputGroup
          style={{
            width: `${this.config.inputGroupWidth}px`
          }}
        >
          <FormControl
            type="text"
            placeholder="john.smith@gmail.com"
            onChange={e => this.setState({ email: e.target.value })}
            onFocus={() => {
              this.setState({
                helpIndex: 15
              });
            }}
            onBlur={() => {
              this.setState({
                helpIndex: 0
              });
            }}
          />
        </InputGroup>
        {this.config.showHelp && this.state.helpIndex === 15 ? (
          <div
            style={{
              width: `${this.config.inputGroupWidth *
                this.config.inputGroupTextModier}px`,
              fontSize: `${this.config.helpFontSize}px`
            }}
          >
            Compliance Monitoring Systems will email you a receipt and
            transaciton ID if this field has been filled with an email provied
            by you.
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  submitTransaction() {
    this.props.setTransactionStatus("busy");
    this.setState({ showModal: true });
    console.log(config.api);
    fetch(
      `${config.api}/api/proccessPayment?ccnum=${
        this.state.cardNumber
      }&amount=${this.state.cardTotal}&expDate=${this.state.expDate.replace(
        /\//g,
        ""
      )}&cvc=${this.state.cvcNumber}&email=${
        this.state.email
      }&clientFirstName=${this.state.clientFirstName}&clientMiddleInitial=${
        this.state.clientMiddleInitial
      }&clientLastName=${this.state.clientLastName}&invoiceNumber=${
        this.state.invoiceNumber
      }&program=${this.state.selectedService}&billingAddress=${
        this.state.billingAddress
      }&cardHolderFirstName=${this.state.firstName}&cardHolderLastName=${
        this.state.lastName
      }`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          captchaToken: this.state.captcha
        })
      }
    )
      .then(res => res.json())
      .then(res => {
        this.props.setTransactionStatus(res);
      });
  }

  submitButton(ready) {
    if (ready) {
      return (
        <Button
          style={{
            width: `${this.config.inputGroupWidth * 1.25}px`,
            marginTop: "30px"
          }}
          onClick={() => this.changeConfirmModal()}
        >
          Review
        </Button>
      );
    } else {
      return (
        <Button
          style={{
            width: `${this.config.inputGroupWidth * 1.25}px`,
            marginTop: "30px",
            opacity: "0.5",
            cursor: "default"
          }}
        >
          Review
        </Button>
      );
    }
  }

  readyCheck() {
    if (
      this.state.clientFirstName.length > 0 &&
      this.state.clientLastName.length > 0 &&
      this.state.selectService !== "Select a Program..." &&
      this.state.firstName.length > 0 &&
      this.state.cardType !== "Card Type..." &&
      this.state.cardNumber.length > 0 &&
      this.state.cvcNumber.length > 0 &&
      this.state.expDate.length > 0 &&
      this.state.billingAddress.city.length > 0 &&
      this.state.billingAddress.state.length > 0 &&
      this.state.billingAddress.zipCode.length > 0 &&
      this.state.billingAddress.line1.length > 0 &&
      parseInt(this.state.cardTotal) >= 20
    ) {
      return true;
    } else {
      return false;
    }
  }

  changeShow() {
    this.setState({ showModal: !this.state.showModal });
  }

  changeConfirmModal() {
    this.setState({ showConfirm: !this.state.showConfirm });
  }

  captcha() {
    return (
      <div style={{ marginTop: "25px" }}>
        <Recaptcha
          sitekey={CAPTCHA_KEY}
          verifyCallback={captcha => {
            this.setState({ captcha });
          }}
          expiredCallback={() => this.setState({ captcha: null })}
        />
      </div>
    );
  }

  render() {
    let status = this.props.transactionStatus;
    return (
      <FormGroup>
        <LoadingModal
          show={this.state.showModal}
          transactionStatus={status}
          changeShow={() => this.changeShow()}
        />
        <ConfirmModal
          show={this.state.showConfirm}
          changeShow={() => this.changeConfirmModal()}
          submitTransaction={() => this.submitTransaction()}
          data={{
            invoiceNumber: this.state.invoiceNumber,
            clientFirstName: this.state.clientFirstName,
            clientMiddleInitial: this.state.clientMiddleInitial,
            clientLastName: this.state.clientLastName,
            paymentAmount: this.state.cardTotal,
            program: this.state.selectedService,
            cardHolderFirstName: this.state.firstName,
            cardHolderMiddleInitial: this.state.middleInitial,
            cardHolderLastName: this.state.lastName,
            cardType: this.state.cardType,
            expDate: this.state.expDate,
            billingAddress: this.state.billingAddress,
            cardNumber: this.state.cardNumber,
            email: this.state.email
          }}
        />
        {this.clientName()}
        {this.paymentAmount()}
        {this.selectService()}
        {this.nameOnCard()}
        {this.cardType()}
        {this.state.cardType !== "Select a Card Type..." ? (
          <div>
            {this.creditCardNumber()}
            {this.cvc()}
            {this.expDate()}
          </div>
        ) : (
          <div />
        )}
        {this.billingAddress()}
        {this.email()}
        {this.invoiceNumber()}
        {this.captcha()}
        {this.submitButton(this.readyCheck())}
      </FormGroup>
    );
  }
}

const mapStateToProps = state => ({
  transactionStatus: state.transactionReducer.transactionStatus
});

const mapDispatchToProps = dispatch => ({
  selectedBox: box => dispatch(selectedBox(box)),
  setTransactionStatus: status => dispatch(transactionStatus(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
