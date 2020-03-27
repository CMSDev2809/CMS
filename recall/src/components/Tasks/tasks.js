import React, { Component } from "react";
import { connect } from "react-redux";
import config from "electron-json-config";
import { Prompt } from "react-router-dom";
import * as deepEqual from "deep-equal";
import { TextInput, SelectBox, resetUID } from "../inputs.js";
import { components, history, store } from "../components.js";
import { actions } from "./component.js";
import fns from "../../fns";
import "./tasks.css";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      textInput: ""
    };
  }

  componentDidMount() {
    this.find();
  }

  async find() {
    let hits = await fns.getTasks();
    let cards = [];
    hits = await Promise.all(
      hits.map(async element => {
        const card = await fns.decryptCard(element);
        cards.push(card);
        return (
          <li
            className="list-group-item"
            onClick={() => {
              this.props.sendCard(card);
              this.props.history.push("/entry_interface?activepane=editor");
            }}
          >
            <div className="list_item">
              <span className="icon icon-user pull-left" />
              <div className="media-body">
                <div style={{ float: "right" }}>
                  <h2>{card.cardNumber.slice(-4)}</h2>
                  <p style={{ float: "right" }}>{card.securityCode}</p>
                </div>
                <div className={"hourglass"}>
                  <span className="icon icon-hourglass" />
                </div>
                {card.highPriority ? (
                  <div className={"priority"}>
                    <span className="icon icon-attention" />
                  </div>
                ) : null}
                <div style={{ marginLeft: "25px" }}>
                  <strong>
                    {card.lastName}, {card.firstName}
                  </strong>
                  <p>Phone Number: {card.phoneNumber}</p>
                  <p>Address: {card.billingAddress}</p>
                  <p>{card.billingAddress2}</p>
                </div>
                <h5 style={{ marginLeft: "25px" }}>
                  A request has been made to charge this card for{" "}
                  {`${card.amount}.`}
                </h5>
                <h5 style={{ fontStyle: "italic", marginLeft: "25px" }}>
                  {card.processing}
                </h5>
              </div>
            </div>
          </li>
        );
      })
    );
    this.setState({ hits, cards });
  }

  render() {
    return (
      <div className={"tasks"}>
        <div className="box" style={{ marginTop: "35px" }}>
          <header className="toolbar toolbar-header">
            <h1 className="title">Tasks</h1>
          </header>
          <div className="padded">
            <ul className="list-group">{this.state.hits}</ul>
          </div>
        </div>
        {this.state.hits.length >= 0 ? (
          <div className={"bttn-block"}>
            <components.Printer batch={true} data={this.state.cards} />
            {false === true ? (
              <button
                className="button"
                onClick={() => {
                  if (window.confirm("Mark all cards as completed?")) {
                    this.state.cards.map(index => {
                      fns.sendReceipt(index);
                      fns.updateCard(index.id, { processing: "" });
                    });
                    this.find();
                  }
                }}
              >
                <div className="icon-checkmark">
                  <div className="icon icon-check" />
                </div>
                <div>Complete All</div>
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

const Tasks_mapStateToProps = state => {
  return {
    ...state.Tasks
  };
};
const Tasks_mapDispatchToProps = dispatch => {
  return {
    sendCard: card => {
      dispatch(actions.sendCard(card));
    }
  };
};

Tasks = connect(
  Tasks_mapStateToProps,
  Tasks_mapDispatchToProps
)(Tasks);

export default Tasks;
