import React from "react";
import styled from "styled-components";
import { TextField, Button, Transition, Loader } from "arclight-react";
const config = require("../../../../config");

const _padding = "150px";
const _dims = "300px";

const SignIn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  background-color: #e0e0e0;
  border-radius: 6px;
  padding: 20px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(${_dims} * 1.5);
  height: ${_dims};
`;

const Block = styled.div`
  margin: 20px;
`;

export default class _ extends React.Component {
  state = {
    loaded: true,
    animation: "bounceInDown",
    username: "",
    password: "",
    errMsg: null,
  };

  render() {
    return (
      <SignIn>
        <Loader
          size={175}
          type={"DotLoader"}
          loaded={this.state.loaded}
          theme={"Dark"}
        >
          <Wrapper>
            <Transition trans={{ animation: "bounceInDown" }}>
              <Body>
                <Block>
                  <h1>Sign In</h1>
                </Block>
                <Block>
                  <TextField
                    value={this.state.username}
                    theme={"Light"}
                    placeholder={"Username"}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                </Block>
                <Block>
                  <TextField
                    value={this.state.password}
                    theme={"Light"}
                    password
                    placeholder={"Password"}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </Block>
                {this.state.errMsg ? (
                  <Block>
                    <h3 style={{ color: "red" }}>{this.state.errMsg}</h3>
                  </Block>
                ) : null}
                <Block>
                  <Button
                    onClick={async () => {
                      this.setState({ loaded: false });
                      const res = await this.props.signIn({
                        username: this.state.username,
                        password: this.state.password,
                      });
                      if (res && res.code > 200) {
                        this.setState({
                          loaded: true,
                          errMsg: res.msg ? res.msg : "User does not exist",
                        });
                      }
                    }}
                    theme={"Dark"}
                    pop
                  >
                    Sign In
                  </Button>
                </Block>
              </Body>
            </Transition>
          </Wrapper>
        </Loader>
      </SignIn>
    );
  }
}
