import React from "react";
import styled from "styled-components";
import { Message } from "../index";
const config = require("../../../../config");

const Feed = styled.div`
  padding: 20px;
  height: calc(100% - 345px);
  margin-top: 25px;
  overflow-y: auto;
  & table {
    width: calc(100% - 20px);
  }
`;

export default class _ extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  componentWillReceiveProps(newProps) {
    console.dir(this.scrollRef.current);
    if (
      this.props.messages !== newProps.messages ||
      this.props.active !== newProps.active
    )
      setTimeout(
        () =>
          (this.scrollRef.current.scrollTop = this.scrollRef.current.scrollHeight),
        1
      );
  }

  render() {
    return (
      <Feed ref={this.scrollRef}>
        <table>
          <tbody>
            {this.props.messages
              ? this.props.messages.map((el) => (
                  <tr>
                    <td
                      align={
                        el.origin === config.twilioPhoneNumber
                          ? "right"
                          : "left"
                      }
                    >
                      <Message
                        friendlyName={this.props.friendlyName}
                        content={el.content}
                        timestamp={el.timestamp}
                        origin={el.origin}
                      />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </Feed>
    );
  }
}
