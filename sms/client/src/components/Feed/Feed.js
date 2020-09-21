import React from "react";
import styled from "styled-components";

const Feed = styled.div`
  padding: 10px;
  height: calc(100% - 290px);
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

  componentDidMount() {
    this.scrollRef.current.scrollTop = this.scrollRef.current.scrollHeight;
  }

  render() {
    return (
      <Feed ref={this.scrollRef}>
        <table>
          <tbody>{this.props.messages}</tbody>
        </table>
      </Feed>
    );
  }
}
