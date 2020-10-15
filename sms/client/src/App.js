import React from "react";
import styled from "styled-components";
import { TextInput, Feed, Header, SignIn } from "./components/index";
import { Transition } from "arclight-react";
import socketListeners from "./socketListeners/socketListeners";
import _appMethods from "./_appMethods";

const config = require("../../config");

const PRODUCTION = config.production;

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
      showNew: false,
      authenticated: false,
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
        {this.state.authenticated ? (
          <Transition inheritDimensions trans={{ animation: "bounceInUp" }}>
            <Header
              showNew={this.state.showNew}
              markSMSAsRead={(n) => this.markSMSAsRead(n)}
              signOut={() => this.signOut()}
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
          </Transition>
        ) : (
          <SignIn signIn={(credentials) => this.signIn(credentials)} />
        )}
      </_App>
    );
  }
}
