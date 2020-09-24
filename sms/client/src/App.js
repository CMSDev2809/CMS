import React from "react";
import styled from "styled-components";
import { Header } from "./components/index";
import { TextInput, Feed } from "./components/index";
import socketListeners from "./socketListeners/socketListeners";

const PRODUCTION = false;

const config = require("../../config");

const openSocket = require("socket.io-client");
const socket = openSocket(
  PRODUCTION
    ? "https://sms.compliancemonitoringsystems.com"
    : `http://localhost:${config.port}`
);

const ENDPOINT = config.production
  ? config.productionEndpoint
  : config.developmentEndpoint;

const _App = styled.div`
  position: relative;
  background-color: #282c34;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default class App extends React.Component {
  state = {
    active: null,
    friendlyName: "",
    filtered: null,
    origins: [],
  };

  async getSMSByNum(n) {
    n = n.replace("+", "");
    const filtered = await fetch(
      `${ENDPOINT}:${config.port}/getSMS?n1=${n}&n2=${n}`
    ).then((res) => res.json());
    this.setState({ filtered });
  }

  async aquire() {
    let origins = [];
    const messages = await fetch(
      `${ENDPOINT}:${config.port}/getSMS`
    ).then((res) => res.json());
    messages
      .map((el) => {
        if (
          !origins.includes(el.origin) &&
          el.origin !== config.twilioPhoneNumber
        ) {
          origins.push(el.origin);
        } else if (
          !origins.includes(el.target) &&
          el.target !== config.twilioPhoneNumber
        ) {
          origins.push(el.target);
        }
      })
      .filter((el) => (el !== config.twilioPhoneNumber ? el : null));
    origins = await Promise.all(
      origins.map(async (el) => {
        let friendlyName;
        const match = await fetch(
          `${ENDPOINT}:${config.port}/matchSMS?n=${el.replace("+", "")}`
        ).then((res) => res.json());
        if (match) friendlyName = match.friendlyName;
        return { number: el, friendlyName };
      })
    );
    origins = origins
      .map((el) => ({
        component: <div>{el.friendlyName ? el.friendlyName : el.number}</div>,
        friendlyName: el.friendlyName,
        value: el.number,
      }))
      .sort((a, b) =>
        a.friendlyName && b.friendlyName
          ? a.friendlyName < b.friendlyName
            ? -1
            : 1
          : a.value < b.value
          ? -1
          : 1
      );
    if (this.state.active) this.setActive(this.state.active);
    this.setState({
      messages,
      origins,
    });
  }

  sendSMS(msg) {
    fetch(`${ENDPOINT}:${config.port}/sendSMS`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    })
      .then((res) => res.json())
      .then((res) =>
        socket.emit("broadcast_update", {
          origin: res.from,
          target: res.to,
          timestamp: res.dateCreated,
          content: res.body,
        })
      );
  }

  async updateFriendly(object) {
    const results = await fetch(`${ENDPOINT}:${config.port}/smartMatchSMS`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    }).then((res) => res.json());
  }

  async setActive(active) {
    const friendlyName = await fetch(
      `${ENDPOINT}:${config.port}/matchSMS?n=${active.replace("+", "")}`
    ).then((res) => res.json());
    this.setState({
      active,
      friendlyName: friendlyName ? friendlyName.friendlyName : "",
    });
    this.getSMSByNum(active);
  }

  componentDidMount() {
    socketListeners(socket, this);
    this.aquire();
  }

  render() {
    return (
      <_App>
        <Header
          updateFriendly={(object) => this.updateFriendly(object)}
          active={this.state.active}
          friendlyName={this.state.friendlyName}
          setActive={(active) => this.setActive(active)}
          origins={this.state.origins}
        />
        <Feed
          active={this.state.active}
          messages={this.state.filtered}
          friendlyName={this.state.friendlyName}
        />
        <TextInput
          active={this.state.active}
          send={(message) =>
            this.state.active
              ? this.sendSMS({ message, target: this.state.active })
              : null
          }
        />
      </_App>
    );
  }
}
