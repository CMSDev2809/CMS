import React from "react";
import { TextArea } from "arclight-react";
import styled from "styled-components";

const _TextArea = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 20px);
  padding: 10px;
  ${(props) =>
    props.active ? "opacity: 1;" : "opacity: 0.3; pointer-events: none;"}
`;

export default class _ extends React.Component {
  render() {
    return (
      <_TextArea active={this.props.active}>
        <TextArea
          readonly={this.props.active ? false : true}
          value={null}
          height={"75px"}
          theme={"Dark"}
          controls={[]}
          placeholder={"Build your message"}
          onEnter={(e) => this.props.send(e)}
        />
      </_TextArea>
    );
  }
}
