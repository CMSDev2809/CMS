import React from "react";
import {
  Header,
  Img,
  Dropdown,
  Button,
  FontAwesomeIcon,
  TextField,
} from "arclight-react";
import styled from "styled-components";

const config = require("../../../../config");

const _Header = styled.div`
  color: #d7d7d7;
  height: 125px;
  border-bottom: 1px solid white;
  & table {
    margin-bottom: 20px;
    & td {
      padding: 20px;
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }
`;

const NewNotify = styled.div`
  position: absolute;
  margin: 10px;
  top: 10px;
  right: 100px;
`;

export default class _ extends React.Component {
  state = {
    showControls: false,
    field: "",
    oField: "",
    pNum: "",
    oPNum: "",
    generatingNew: true,
  };

  componentWillReceiveProps(newProps) {
    if (this.props.active !== newProps.active) {
      this.setState({
        showControls: false,
        field: "",
        oField: "",
        pNum: "",
        oPNum: "",
      });
    }
  }

  render() {
    return (
      <_Header>
        {this.props.showNew ? (
          <NewNotify>
            <FontAwesomeIcon
              size={"60px"}
              color={"red"}
              trans={{ animation: "pulse", count: "infinite" }}
              theme={"Dark"}
              icon={"exclamation"}
            />
          </NewNotify>
        ) : null}
        <Header
          name={"StylishLeft"}
          textDisplay={{
            left: null,
            center: (
              <table>
                <tbody>
                  <tr>
                    {this.state.pNum.length === 12 ? (
                      <React.Fragment>
                        <Button
                          theme={"Light"}
                          pop
                          onClick={() =>
                            window.confirm("Open conversation?")
                              ? (() => {
                                  this.props.updateFriendly({
                                    number: this.state.pNum.replace("+", ""),
                                    friendlyName: this.state.field,
                                  });
                                  this.props.setActive(this.state.pNum);
                                  this.setState({
                                    generatingNew: false,
                                    showControls: false,
                                    oField: "",
                                    pNum: "",
                                    oNum: "",
                                    field: "",
                                  });
                                })()
                              : null
                          }
                        >
                          Confirm
                        </Button>
                        <div style={{ width: "8px" }} />
                      </React.Fragment>
                    ) : null}
                    {this.props.active ? (
                      <React.Fragment>
                        <td>
                          <div style={{ display: "inline-flex" }}>
                            {this.state.showControls &&
                            (this.state.field !== this.state.oField ||
                              !(this.state.field.length > 0) ||
                              this.state.generatingNew) ? (
                              <React.Fragment>
                                <Button
                                  theme={"Light"}
                                  pop
                                  onClick={() =>
                                    window.confirm("Save Changes?")
                                      ? (() => {
                                          this.props.updateFriendly({
                                            number: this.props.active.replace(
                                              "+",
                                              ""
                                            ),
                                            friendlyName: this.state.field,
                                          });
                                          this.setState({
                                            showControls: false,
                                            oField: "",
                                            pNum: "",
                                            oNum: "",
                                            field: "",
                                          });
                                        })()
                                      : null
                                  }
                                >
                                  Confirm
                                </Button>
                                <div style={{ width: "8px" }} />
                              </React.Fragment>
                            ) : null}
                            <Button
                              theme={"Light"}
                              pop
                              onClick={() =>
                                this.setState({
                                  showControls: !this.state.showControls,
                                  field: this.state.oField,
                                })
                              }
                            >
                              {this.state.showControls ? "Cancel" : "Edit"}
                            </Button>
                          </div>
                        </td>
                      </React.Fragment>
                    ) : null}
                    {this.state.showControls || this.state.generatingNew ? (
                      <React.Fragment>
                        <td>
                          <TextField
                            theme={"Dark"}
                            readonly={false}
                            value={this.state.field}
                            placeholder={"Friendly Name"}
                            onChange={(e) =>
                              this.setState({ field: e.target.value })
                            }
                          />
                        </td>
                        <td>
                          {this.state.generatingNew ? (
                            <TextField
                              theme={"Dark"}
                              readonly={false}
                              value={this.state.pNum}
                              placeholder={"Phone Number"}
                              onChange={(e) =>
                                this.setState({ pNum: e.target.value })
                              }
                            />
                          ) : (
                            <h4>({this.props.active})</h4>
                          )}
                        </td>
                      </React.Fragment>
                    ) : this.props.friendlyName ? (
                      <React.Fragment>
                        <td>
                          <h2>{this.props.friendlyName}</h2>
                        </td>
                        <td>
                          <h4>({this.props.active})</h4>
                        </td>
                      </React.Fragment>
                    ) : (
                      <td>
                        <h2 style={{ marginBottom: "-10px" }}>
                          {this.props.active}
                        </h2>
                      </td>
                    )}
                    {this.props.active ? (
                      <td>
                        <Button
                          theme={"Light"}
                          pop
                          size={10}
                          textColor={"red"}
                          onClick={() =>
                            window.confirm("Delete SMS conversation?")
                              ? this.props.deleteConversation(this.props.active)
                              : null
                          }
                        >
                          Delete
                        </Button>
                      </td>
                    ) : null}
                  </tr>
                </tbody>
              </table>
            ),
            right:
              this.props.origins.length > 0 ? (
                <Dropdown
                  defaultValue={"<New Conversation>"}
                  allowNone={"<New Conversation>"}
                  theme={"Light"}
                  onChange={(e) => {
                    if (this.props.active)
                      this.props.markSMSAsRead(this.props.active);
                    if (e.target.value === "<New Conversation>") {
                      this.setState({ generatingNew: true });
                      this.props.setActive(null);
                      this.props.setFiltered([]);
                    } else {
                      this.setState({ generatingNew: false });
                      this.props.setActive(e.target.value);
                    }
                  }}
                  items={this.props.origins}
                />
              ) : null,
          }}
          theme={"Dark"}
          info={{
            width: "100%",
            height: "150px",
            crown: (
              <div>
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
              </div>
            ),
          }}
          controls={[
            <div
              style={{ top: 0, right: 0, position: "absolute", margin: "15px" }}
            >
              <Button theme={"Light"} pop onClick={() => this.props.signOut()}>
                <FontAwesomeIcon theme={"Light"} icon={"signOut"} />
              </Button>
            </div>,
          ]}
        />
      </_Header>
    );
  }
}
