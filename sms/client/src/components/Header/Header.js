import React from "react";
import { Header, Img } from "arclight-react";
import styled from "styled-components";

const _Header = styled.div`
  color: #d7d7d7;
  height: 125px;
  border-bottom: 1px solid white;
`;

export default class _ extends React.Component {
  render() {
    return (
      <_Header>
        <Header
          name={"StylishLeft"}
          textDisplay={{
            left: null,
            center: null,
            right: null,
          }}
          theme={"Dark"}
          info={{
            width: "100%",
            height: "150px",
            crown: (
              <React.Fragment>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Img
                          src={require("../../img/logo.png")}
                          style={{
                            height: "100px",
                          }}
                        />
                      </td>
                      <td>
                        <h1>
                          <b>
                            <i>SMS</i>
                          </b>
                        </h1>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </React.Fragment>
            ),
          }}
          controls={[]}
        />
      </_Header>
    );
  }
}
