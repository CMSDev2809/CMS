import React from "react";
import styled from "styled-components";

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
  render() {
    return (
      <div style={{ width: "350px", position: "relative" }}>
        <SuperText>
          {this.props.pos === "receive"
            ? "(406) 529-1789"
            : "Compliance Monitoring Systems"}
        </SuperText>
        <Message>{this.props.text}</Message>
        <SubText>5:24 PM - September 21, 2020</SubText>
      </div>
    );
  }
}
