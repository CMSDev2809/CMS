import React from "react";
import styled from "styled-components";
import config from "../../../../config";

const Message = styled.div`
  width: 100%;
  background-color: #d7d7d7;
  border-radius: 4px;
  padding: 15px;
  text-align: left;
`;

const SuperText = styled.div`
  color: #d7d7d7;
  text-align: left;
  padding: 6px;
`;

const SubText = styled.div`
  color: #d7d7d7;
  text-align: right;
  padding: 6px;
  margin-right: -30px;
`;

export default class _ extends React.Component {
  formatTime(date) {
    return date;
  }

  render() {
    return (
      <div id={this.props.id} style={{ width: "350px", position: "relative" }}>
        <SuperText>
          {this.props.origin === config.twilioPhoneNumber
            ? "Compliance Monitoring Systems"
            : `${
                this.props.friendlyName
                  ? `${this.props.friendlyName} (${this.props.origin})`
                  : this.props.origin
              }`}
        </SuperText>
        <Message>{this.props.content}</Message>
        <SubText>{this.formatTime(this.props.timestamp)}</SubText>
      </div>
    );
  }
}
