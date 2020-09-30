import React from "react";
import styled from "styled-components";
import { Header } from "./components/index";
import { TextInput, Feed } from "./components/index";
import socketListeners from "./socketListeners/socketListeners";
import _appMethods from "./_appMethods";

const PRODUCTION = true;

const config = require("../../config");

const openSocket = require("socket.io-client");
const socket = openSocket(
  PRODUCTION
    ? `${config.productionEndpoint}:${config.port}`
    : `${config.developmentEndpoint}:${config.port}`
);

const ENDPOINT = PRODUCTION
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
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      friendlyName: "",
      filtered: null,
      origins: [],
    };
    _appMethods(this, ENDPOINT, config, socket, socketListeners);
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
          setFiltered={(filtered) => this.setFiltered(filtered)}
          deleteConversation={(active) => this.deleteConversation(active)}
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
