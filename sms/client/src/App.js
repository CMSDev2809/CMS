import React from "react";
import styled from "styled-components";
import { Header } from "./components/index";
import { TextInput, Feed, Message } from "./components/index";

const config = require("../../config");

const openSocket = require("socket.io-client");

const _App = styled.div`
  position: relative;
  background-color: #282c34;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default class App extends React.Component {
  state = {
    messages: [],
  };

  async aquire() {
    const messages = await fetch(
      `${config.developmentEndpoint}:4300/getSMS`
    ).then((res) => res.json());
    this.setState({ messages });
  }

  componentDidMount() {
    this.aquire();
  }

  push(message) {
    const messages = this.state.messages;
    messages.push(
      <tr>
        <td align={message.pos === "receive" ? "left" : "right"}>
          <Message text={message.text} pos={message.pos} />
        </td>
      </tr>
    );
    this.setState({
      messages,
    });
  }

  render() {
    return (
      <_App>
        <Header />
        <Feed messages={this.state.messages} />
        <TextInput test={(text) => this.push({ text, pos: "send" })} />
      </_App>
    );
  }
}
