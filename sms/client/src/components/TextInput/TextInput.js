import React from "react";
import { TextArea } from "arclight-react";
import styled from "styled-components";

const _TextArea = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 20px);
  padding: 10px;
`;

export default class _ extends React.Component {
  state = { value: "" };

  componentDidMount() {
    document.body.addEventListener("keydown", (e) =>
      e.keyCode === 13 ? this.enter() : null
    );
  }

  enter() {
    this.props.test(this.state.value);
  }

  render() {
    return (
      <_TextArea>
        <TextArea
          readonly={false}
          value={this.state.value}
          height={"75px"}
          theme={"Dark"}
          controls={[]}
          placeholder={"Build your message"}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
      </_TextArea>
    );
  }
}
