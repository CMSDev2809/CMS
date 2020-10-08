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

const NewBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: red;
  color: red;
  position: relative;
  margin: 20px;
  margin-left: 0px;
  margin-right: 0px;
  & .sub {
    background-color: #282c34;
    position: absolute;
    top: -21px;
    left: 15%;
    padding: 12px;
  }
`;

export default class _ extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  componentWillReceiveProps(newProps) {
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
    let newTrigger = false;
    return (
      <Feed ref={this.scrollRef}>
        <table>
          <tbody>
            {this.props.messages
              ? this.props.messages.map((el, i) => (
                  <tr>
                    <td
                      align={
                        el.origin === config.twilioPhoneNumber
                          ? "right"
                          : "left"
                      }
                    >
                      <React.Fragment>
                        {el.new && !newTrigger ? (
                          <NewBar>
                            {(newTrigger = true)}
                            <div className={"sub"}>New Messages</div>
                          </NewBar>
                        ) : null}
                        <Message
                          friendlyName={this.props.friendlyName}
                          content={el.content}
                          timestamp={el.timestamp}
                          origin={el.origin}
                        />
                      </React.Fragment>
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
