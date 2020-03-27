import React, { Component } from "react";
import { connect } from "react-redux";
import config from "electron-json-config";
import { Prompt, Link } from "react-router-dom";
import * as deepEqual from "deep-equal";
import { TextInput, SelectBox, resetUID } from "../inputs.js";
import { GridLoader } from "react-spinners";
import Modal from "react-awesome-modal";
import { components, history, store } from "../components.js";
import { actions } from "./component.js";
import dropDownStateOptions from "./drop_down_state_options";
import dropDownCityOptions from "./cities/router";
import "./entry_interface.css";

import fns from "../../fns";
import keyword from "../../keyword";

class EntryInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePane: "search",
      activeClient: "",
      editorState: {},
      placeholder: 0
    };
  }

  componentDidMount() {
    if (this.props.location.search.length > 0) {
      this.setEditorState(
        this.props.location.search.split("=")[1],
        this.props.sendCard
      );
    }
    (async () => {
      const placeholder = await fns.readFromSave();
      this.setState({ placeholder: parseInt(placeholder.placeHolderText) });
    })();
  }

  setEditorState(activePane, editorState) {
    this.setState({ activePane, editorState });
  }

  render() {
    const style =
      this.state.activeClient.length > 0 && this.state.activePane === "search"
        ? { opacity: "1.0" }
        : { opacity: "0.35", pointerEvents: "none" };
    return (
      <div>
        <header className={"toolbar toolbar-header"}>
          <div className="toolbar-actions">
            <div className="btn-group">
              <button
                className="btn btn-default"
                onClick={() => this.setEditorState("editor-new", {})}
              >
                <span className="icon icon-credit-card" />
              </button>
              <button
                className="btn btn-default"
                onClick={() => this.setState({ activePane: "search" })}
              >
                <span className="icon icon-user" />
              </button>
            </div>
          </div>
        </header>
        {this.state.activePane === "editor" ? (
          <CardEditor
            placeholder={this.state.placeholder}
            setEditorState={(activePane, editorState) =>
              this.setEditorState(activePane, editorState)
            }
            editorState={this.state.editorState}
            history={this.props}
          />
        ) : this.state.activePane === "editor-new" ? (
          <CardEditor
            placeholder={this.state.placeholder}
            setEditorState={(activePane, editorState) =>
              this.setEditorState(activePane, editorState)
            }
            history={this.props}
          />
        ) : (
          <Search
            setEditorState={(activePane, editorState) =>
              this.setEditorState(activePane, editorState)
            }
          />
        )}
      </div>
    );
  }
}

class Pagination extends Component {
  render() {
    return (
      <p>
        {this.props.totalSize > 0
          ? `Displaying results ${this.props.searchIndex + 1} -
              ${
                this.props.searchIndex + this.props.limit > this.props.totalSize
                  ? this.props.totalSize
                  : this.props.searchIndex + this.props.limit
              } of ${this.props.totalSize}`
          : ``}
      </p>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastButton: 0,
      hits: [],
      textInput: "",
      searchIndex: 0,
      totalSize: 0,
      limit: 0
    };
  }

  componentDidMount() {
    fns
      .readFromSave()
      .then(res => this.setState({ limit: parseInt(res.limit) }));
  }

  async deleteCard(id) {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      await fns.deleteCard(id);
      this.setState({ hits: [] });
      this.find(this.state.textInput);
    }
  }

  selectCard(card) {
    this.props.setEditorState("editor", card);
  }

  async find(chrono) {
    const hits = await fns.getCards(
      this.state.textInput,
      this.state.searchIndex,
      chrono
    );
    const totalSize = hits.totalSize;
    const cards = await Promise.all(
      hits.cards.map(async element => {
        const card = await fns.decryptCard(element);
        return (
          <li className="list-group-item" style={{ position: "relative" }}>
            <div
              className={
                card.processing.length > 0 ? "list_item-void" : "list_item"
              }
              onClick={() =>
                card.processing.length > 0 ? null : this.selectCard(card)
              }
            >
              <span className="icon icon-user pull-left" />
              <div className="media-body">
                <div style={{ float: "right" }}>
                  <h2>{card.cardNumber.slice(-4)}</h2>
                  <p style={{ float: "right" }}>{card.securityCode}</p>
                  {card.lastAccess ? (
                    <p style={{ float: "right" }}>{card.lastAccess}</p>
                  ) : null}
                </div>
                {card.processing.length > 0 ? (
                  <div className={"exclemation"}>
                    <span className="icon icon-key" />
                  </div>
                ) : null}
                <div style={{ display: "inline-flex" }}>
                  <div style={{ marginLeft: "25px" }}>
                    <strong>
                      {card.lastName}, {card.firstName}
                    </strong>
                    <p>Phone Number: {card.phoneNumber}</p>
                    <p>Address: {card.billingAddress}</p>
                    <p>{card.billingAddress2}</p>
                  </div>
                </div>
                {card.processing.length > 0 ? (
                  <h5 style={{ marginLeft: "25px" }}>
                    This card has been flagged for processing.
                  </h5>
                ) : null}
              </div>
            </div>
            {card.processing.length > 0 ? null : (
              <div className={"cancel-button"}>
                <h1
                  className={"icon icon-cancel-squared"}
                  onClick={() => this.deleteCard(card.id)}
                />
              </div>
            )}
          </li>
        );
      })
    );
    this.setState({ hits: cards, totalSize });
  }

  clearFields() {
    this.setState({
      hits: [],
      textInput: "",
      totalSize: 0,
      searchIndex: 0
    });
  }

  render() {
    const transStyle = {
      opacity: "0.5",
      pointerEvents: "none"
    };
    return (
      <div style={{ position: "relative" }}>
        <div
          className="box"
          style={{ position: "sticky", top: "0%", zIndex: "9999" }}
        >
          <div className="search_box">
            <header className="toolbar toolbar-header">
              <h1 className="title">Cardholder Search</h1>
            </header>
            <div className="padded">
              <TextInput
                label="Client Name"
                placeholder=""
                value={this.state.textInput}
                onChange={value => {
                  this.setState({ textInput: value });
                }}
              />
              <button
                className="btn btn-large btn-primary"
                onClick={() => {
                  this.setState({ lastButton: 0 });
                  this.find();
                }}
              >
                Search
              </button>
              <button
                className="btn btn-large btn-default"
                onClick={() => {
                  this.setState({ lastButton: 1 });
                  this.find(true);
                }}
              >
                <span className="icon icon-clock" />
              </button>
              <button
                className="btn btn-large btn-default"
                onClick={() => this.clearFields()}
              >
                Clear
              </button>
              <div className={"prev-next"}>
                <button
                  className="btn btn-large btn-default"
                  style={
                    this.state.searchIndex >= this.state.limit ? {} : transStyle
                  }
                  onClick={() => {
                    this.state.searchIndex -= this.state.limit;
                    this.find(this.state.lastButton ? true : false);
                  }}
                >
                  Previous
                </button>
                <button
                  className="btn btn-large btn-default"
                  style={
                    this.state.searchIndex <
                    this.state.totalSize - this.state.limit
                      ? {}
                      : transStyle
                  }
                  onClick={() => {
                    this.state.searchIndex += this.state.limit;
                    this.find(this.state.lastButton ? true : false);
                  }}
                >
                  Next
                </button>
              </div>
              <Pagination
                totalSize={this.state.totalSize}
                searchIndex={this.state.searchIndex}
                limit={this.state.limit}
              />
            </div>
          </div>
        </div>
        <div className="box" style={{ marginTop: "15px" }}>
          <header className="toolbar toolbar-header">
            <h1 className="title">Search Results</h1>
          </header>
          <div className="padded">
            <ul className="list-group">{this.state.hits}</ul>
          </div>
        </div>
      </div>
    );
  }
}

class CardEditor extends Component {
  constructor(props) {
    super(props);
    this.stateObject = {
      id: "",
      firstName: "",
      lastName: "",
      cardNumber: "",
      expDate: "",
      cardHolder: "",
      securityCode: "",
      amount: "",
      billingAddress: "",
      billingAddress2: "",
      city: "Missoula",
      state: "MT",
      zip: "",
      phoneNumber: "",
      purpose: "",
      notes: "",
      processing: "",
      contactEmail: "",
      receiptEmail: 0,
      isAutopay: false,
      modal: {
        success: false,
        status: false,
        waiting: true,
        code: ""
      }
    };
    this.state = this.stateObject;
  }

  resetState() {
    this.setState(this.stateObject);
  }

  async submitTransaction() {
    const modal = await new Promise((resolve, reject) => {
      fetch(
        `http://199.195.116.230:5000/api/processPayment?ccnum=${
          this.state.cardNumber
        }&amount=${parseFloat(
          this.state.amount.replace("$", "")
        )}&expDate=${this.state.expDate.replace(/\//g, "")}&cvc=${
          this.state.securityCode
        }&email=${this.state.contactEmail}&clientFirstName=${
          this.state.firstName
        }&clientMiddleInitial=${""}&clientLastName=${
          this.state.lastName
        }&invoiceNumber=${""}&program=${""}&billingAddress=${
          this.state.billingAddress
        }&cardHolder=${this.state.cardHolder}`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            apiKey: keyword.apiKey
          })
        }
      )
        .then(res => res.json())
        .then(res => {
          resolve({
            status: true,
            waiting: false,
            code: res.code,
            success: res.success
          });
        });
      setTimeout(() => {
        resolve({
          status: true,
          waiting: false,
          code: "The request timed out",
          success: res.success
        });
      }, 14000);
    });
    this.setState({ modal });
  }

  componentDidMount() {
    if (this.props.editorState) {
      this.setState({
        id: this.props.editorState.id,
        firstName: this.props.editorState.firstName,
        lastName: this.props.editorState.lastName,
        cardNumber: this.props.editorState.cardNumber,
        expDate: this.props.editorState.expDate,
        cardHolder: this.props.editorState.cardHolder,
        securityCode: this.props.editorState.securityCode,
        amount: this.props.editorState.amount,
        billingAddress: this.props.editorState.billingAddress,
        billingAddress2: this.props.editorState.billingAddress2,
        city: this.props.editorState.city,
        state: this.props.editorState.state,
        zip: this.props.editorState.zip,
        phoneNumber: this.props.editorState.phoneNumber,
        purpose: this.props.editorState.purpose,
        notes: this.props.editorState.notes,
        processing: this.props.editorState.processing,
        lastFour: this.props.lastFour ? this.props.lastFour : "",
        contactEmail: this.props.editorState.contactEmail
          ? this.props.editorState.contactEmail
          : "",
        receiptEmail: this.props.editorState.receiptEmail
          ? this.props.editorState.receiptEmail
          : 0,
        isAutopay: this.props.editorState.isAutopay
      });
    } else {
      this.resetState();
    }
  }

  formatExp(str, last) {
    if (
      (str.length < 6 && str[str.length - 1] !== "/") ||
      str.length < last.length
    ) {
      if (str.length === 2 && str.length > last.length) {
        return str + "/";
      } else {
        return str;
      }
    } else {
      return last;
    }
  }

  formatSecurityCode(str, last) {
    if (str.length < 5) {
      return str;
    } else {
      return last;
    }
  }

  formatTotal(str) {
    if (str.length > 0 && str[0] !== "$") {
      return "$" + str;
    } else {
      return str;
    }
  }

  formatPhone(str, old) {
    if (str.length > old.length) {
      if (str.length > 14) {
        return str.slice(0, -1);
      } else if (str.length === 3) {
        return "(" + str + ") ";
      } else if (str.length === 9) {
        return str + "-";
      }
    }
    return str;
  }

  cardValueFormater(str, lastValue) {
    const comp = str.replace(/ /g, "");
    if (
      comp.length > lastValue.replace(/ /g, "").length &&
      comp.length > 0 &&
      comp.length < 17 &&
      (str[0] === "5" || str[0] === "4")
    ) {
      if (comp.length % 4 === 0 && comp.length < 16) {
        return str + " ";
      } else {
        return str;
      }
    } else if (
      comp.length > lastValue.replace(/ /g, "").length &&
      comp.length > 0 &&
      comp.length < 16 &&
      str[0] === "3"
    ) {
      if (comp.length === 4 || comp.length === 9) {
        return str + " ";
      } else {
        return str;
      }
    } else if (comp.length < 17) {
      return str;
    }
    return lastValue;
  }

  render() {
    return (
      <div className="entry_interface">
        <div className="content">
          <Modal
            visible={this.state.modal.status}
            width="50%"
            height="45%"
            effect="fadeInUp"
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              {this.state.modal.waiting ? (
                <GridLoader
                  sizeUnit={"px"}
                  size={25}
                  color={"rgb(190, 0, 74)"}
                  loading={true}
                />
              ) : (
                <center>
                  {this.state.modal.success ? (
                    <div className="icon icon-check" />
                  ) : (
                    <div className="icon icon-cancel" />
                  )}
                  <h1>{this.state.modal.code}</h1>
                  <button
                    style={{ width: 325, height: 62.5 }}
                    className="button"
                    onClick={() => {
                      let modal = this.state.modal;
                      modal.status = false;
                      this.setState({ modal });
                      if (this.state.modal.success === true) {
                        fns.updateCard(this.state.id, { processing: "" });
                        this.props.setEditorState("search", {});
                        this.props.history.push("/tasks");
                      }
                    }}
                  >
                    <h2>Finish</h2>
                  </button>
                </center>
              )}
            </div>
          </Modal>
          <div className="button_container">
            {this.state.processing.length > 0 ? null : (
              <div>
                <button
                  className="button"
                  onClick={async () => {
                    if (
                      window.confirm(
                        "This card will only be accessible by admins until processing has finished. Continue?"
                      )
                    ) {
                      let card = this.state;
                      const settings = await fns.readFromSave();
                      card["contactEmail"] = settings.contactEmail;
                      card["receiptEmail"] = settings.receiptEmail;
                      card = await fns.encryptCard(card);
                      if (this.props.editorState) {
                        fns.updateCard(
                          this.state.id,
                          Object.assign(card, {
                            processing: this.props.history.username,
                            highPriority: false
                          })
                        );
                      } else {
                        fns.createCard(
                          Object.assign(card, {
                            processing: this.props.history.username,
                            highPriority: false
                          })
                        );
                      }
                      this.props.setEditorState("search", {});
                    }
                  }}
                >
                  <div className="icon">
                    <div className="icon icon-paper-plane" />
                  </div>
                  <div>Send to Processing</div>
                </button>
                <button
                  className="button"
                  onClick={async () => {
                    if (
                      window.confirm(
                        "This card has been submitted with high priority and will only be accessible by admins until processing has finished. Continue?"
                      )
                    ) {
                      let card = this.state;
                      const settings = await fns.readFromSave();
                      card["contactEmail"] = settings.contactEmail;
                      card["receiptEmail"] = settings.receiptEmail;
                      card = await fns.encryptCard(card);
                      if (this.props.editorState) {
                        fns.updateCard(
                          this.state.id,
                          Object.assign(card, {
                            processing: this.props.history.username,
                            highPriority: true
                          })
                        );
                      } else {
                        fns.createCard(
                          Object.assign(card, {
                            processing: this.props.history.username,
                            highPriority: true
                          })
                        );
                      }
                      fns.highPriority(
                        Object.assign(this.state, {
                          requestedBy: this.props.history.username
                        })
                      );
                      this.props.setEditorState("search", {});
                    }
                  }}
                >
                  <div
                    className="icon-priority"
                    style={{ marginBottom: "-15px" }}
                  >
                    <div className="icon icon-attention" />
                  </div>
                  <div>Send to Processing (High Priority)</div>
                </button>
              </div>
            )}
            {this.state.processing.length > 0 ? (
              <button
                ref={buttonDOM => {
                  this.buttonDOM = buttonDOM;
                }}
                className="button"
                onClick={() => {
                  console.log(this.state);
                  if (
                    window.confirm(
                      `You are about to charge this card for ${this.state.amount}. Proceed?`
                    )
                  ) {
                    this.buttonDOM.blur();
                    let modal = this.state.modal;
                    modal.status = true;
                    modal.waiting = true;
                    this.setState({ modal });
                    this.submitTransaction();
                  }
                }}
              >
                <div
                  className="icon-priority"
                  style={{ marginBottom: "-15px" }}
                >
                  <div className="icon icon-qq" />
                </div>
                <div>Process Card</div>
              </button>
            ) : null}
            <button
              className="button"
              onClick={async () => {
                const card = await fns.encryptCard(this.state);
                if (this.state.id.length > 0) {
                  fns.updateCard(this.state.id, card);
                  alert("Card Updated.");
                } else {
                  fns.createCard(card);
                  alert("New Card Added");
                  this.props.setEditorState("search", {});
                }
              }}
            >
              <div className="icon">
                <div className="icon icon-credit-card" />
              </div>
              <div>Save / Update</div>
            </button>
            <components.Printer data={this.state} />
            {this.state.processing.length > 0 ? (
              <button
                className="button"
                onClick={() => {
                  if (
                    window.confirm(
                      "Finish processing and mark completed WITHOUT running? This will return the current card to the selection pool."
                    )
                  ) {
                    if (
                      parseInt(this.state.receiptEmail) &&
                      this.state.contactEmail.length
                    ) {
                      fns.sendReceipt(this.state);
                    }
                    fns.updateCard(this.state.id, { processing: "" });
                    this.props.setEditorState("search", {});
                    this.props.history.push("/tasks");
                  }
                }}
              >
                <div className="icon-checkmark">
                  <div className="icon icon-check" />
                </div>
                <div>Mark Completed</div>
              </button>
            ) : null}

            <button
              className="button"
              onClick={() => this.resetState(this.stateObject)}
            >
              <div className="icon">
                <div className="icon icon-arrows-ccw" />
              </div>
              <div>Clear Fields</div>
            </button>
          </div>
          <div className="box-wrapper">
            <div className="box">
              <header className="toolbar toolbar-header">
                <h1 className="title">
                  Card Information{" "}
                  {this.state.processing.length > 0
                    ? "(Tasks)"
                    : this.state.id.length > 0
                    ? "(Edit)"
                    : "(Create)"}
                </h1>
              </header>
              <div className="padded">
                <div className="squish_row">
                  <div style={{ marginRight: "10px", width: "50%" }}>
                    <TextInput
                      label="Client First Name"
                      placeholder={this.props.placeholder ? "John" : ""}
                      value={this.state.firstName}
                      onChange={value => {
                        this.setState({ firstName: value });
                      }}
                    />
                  </div>
                  <div style={{ width: "50%" }}>
                    <TextInput
                      label="Client Last Name"
                      placeholder={this.props.placeholder ? "Hancock" : ""}
                      value={this.state.lastName}
                      onChange={value => {
                        this.setState({ lastName: value });
                      }}
                    />
                  </div>
                </div>
                <div className="squish_row">
                  <div style={{ marginRight: "10px", width: "60%" }}>
                    <TextInput
                      label="Card Number"
                      placeholder={
                        this.props.placeholder ? "0123 4567 8901 2345" : ""
                      }
                      value={this.state.cardNumber}
                      onChange={value => {
                        this.setState({
                          cardNumber: this.cardValueFormater(
                            value,
                            this.state.cardNumber
                          )
                        });
                      }}
                    />
                  </div>
                  <div style={{ width: "20%", marginRight: "10px" }}>
                    <TextInput
                      label="Expiration Date"
                      placeholder={this.props.placeholder ? "01/20" : ""}
                      value={this.state.expDate}
                      onChange={value => {
                        this.setState({
                          expDate: this.formatExp(value, this.state.expDate)
                        });
                      }}
                    />
                  </div>
                  <div style={{ width: "20%" }}>
                    <TextInput
                      label="Security Code"
                      placeholder={this.props.placeholder ? "012" : ""}
                      value={this.state.securityCode}
                      onChange={value => {
                        this.setState({
                          securityCode: this.formatSecurityCode(
                            value,
                            this.state.securityCode
                          )
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="squish_row">
                  <div style={{ marginRight: "10px", width: "60%" }}>
                    <TextInput
                      label="Cardholder"
                      placeholder={
                        this.props.placeholder ? "John J Hancock" : ""
                      }
                      value={this.state.cardHolder}
                      onChange={value => {
                        this.setState({ cardHolder: value });
                      }}
                    />
                  </div>
                  <div style={{ width: "40%" }}>
                    <TextInput
                      label="Amount"
                      placeholder={this.props.placeholder ? "$300.00" : ""}
                      value={this.state.amount}
                      onChange={value => {
                        this.setState({ amount: this.formatTotal(value) });
                      }}
                      onBlur={() =>
                        this.state.amount.length > 0
                          ? this.setState({
                              amount:
                                "$" +
                                parseFloat(
                                  this.state.amount.replace("$", "")
                                ).toFixed(2)
                            })
                          : this.setState({ amount: "" })
                      }
                    />
                  </div>
                </div>
                <TextInput
                  label="Billing Address"
                  placeholder={
                    this.props.placeholder ? "123 North Pole Ave" : ""
                  }
                  value={this.state.billingAddress}
                  onChange={value => {
                    this.setState({ billingAddress: value });
                  }}
                />
                <TextInput
                  placeholder={this.props.placeholder ? "Igloo 5" : ""}
                  value={this.state.billingAddress2}
                  onChange={value => {
                    this.setState({ billingAddress2: value });
                  }}
                />
                <div className="squish_row">
                  <div
                    style={{
                      marginRight: "10px",
                      marginTop: "10px",
                      width: "60%"
                    }}
                  >
                    <div style={{ marginBottom: "10px", marginTop: "-10px" }}>
                      City
                    </div>
                    <div className={"drop_down_block"}>
                      <div className={"element"}>
                        <TextInput
                          placeholder={
                            this.props.placeholder ? "Arctic Circle" : ""
                          }
                          value={this.state.city}
                          onChange={value => {
                            this.setState({ city: value });
                          }}
                        />
                      </div>
                      <div
                        className={"element"}
                        style={{ marginTop: "5px", marginBottom: "5px" }}
                      >
                        <select
                          placeholder={this.props.placeholder ? "Missoula" : ""}
                          defaultValue={"Missoula"}
                          class="form-control"
                          onChange={e => {
                            this.setState({
                              city: e.target.value
                            });
                          }}
                        >
                          {dropDownCityOptions(this.state.state)}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginRight: "10px",
                      marginTop: "10px",
                      width: "20%"
                    }}
                  >
                    <div style={{ marginBottom: "10px", marginTop: "-10px" }}>
                      State
                    </div>
                    <div className={"drop_down_block"}>
                      <div className={"element"}>
                        <TextInput
                          value={this.state.state}
                          onChange={value => {
                            this.setState({ state: value });
                          }}
                        />
                      </div>
                      <div
                        className={"element"}
                        style={{ marginTop: "5px", marginBottom: "5px" }}
                      >
                        <select
                          placeholder={this.props.placeholder ? "MT" : ""}
                          defaultValue={"MT"}
                          class="form-control"
                          onChange={e => {
                            this.setState({
                              state: e.target.value
                            });
                          }}
                        >
                          {dropDownStateOptions}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "20%" }}>
                    <TextInput
                      label="Zip Code"
                      placeholder={this.props.placeholder ? "01234" : ""}
                      value={this.state.zip}
                      onChange={value => {
                        this.setState({ zip: value });
                      }}
                    />
                  </div>
                </div>
                <TextInput
                  label="Phone Number"
                  placeholder={this.props.placeholder ? "(012) 345-6789" : ""}
                  value={this.state.phoneNumber}
                  onChange={value => {
                    this.setState({
                      phoneNumber: this.formatPhone(
                        value,
                        this.state.phoneNumber
                      )
                    });
                  }}
                />
                <input
                  type="checkbox"
                  name="vehicle1"
                  value="Bike"
                  onChange={value => {
                    console.log(value);
                    this.setState({
                      isAutopay: value
                    });
                  }}
                />
                <div style={{ marginLeft: "5px", display: "inline-flex" }}>
                  Is Autopay?
                </div>
                <TextInput
                  label="Purpose"
                  placeholder={this.props.placeholder ? "Penguins" : ""}
                  value={this.state.purpose}
                  onChange={value => {
                    this.setState({ purpose: value });
                  }}
                />
                <textarea
                  className="form-control"
                  rows="5"
                  label="Notes (Optional)"
                  placeholder=""
                  value={this.state.notes}
                  onChange={e => {
                    this.setState({ notes: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const EntryInterface_mapStateToProps = state => {
  return {
    ...state.EntryInterface,
    sendCard: state.Tasks,
    username: state.Home.username
  };
};

const EntryInterface_mapDispatchToProps = dispatch => {
  return {};
};

EntryInterface = connect(
  EntryInterface_mapStateToProps,
  EntryInterface_mapDispatchToProps
)(EntryInterface);

export default EntryInterface;
