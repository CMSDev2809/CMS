import React, { Component } from "react";
import { connect } from "react-redux";
import config from "electron-json-config";
import { Prompt } from "react-router-dom";
import * as deepEqual from "deep-equal";
import { TextInput, SelectBox, resetUID } from "../inputs.js";
import { actions } from "./component.js";
import fns from "../../fns";
import "./admin.css";

import Accounts from "./accounts";

class Admin extends Component {
  state = {
    panel: <div />
  };

  async setPanel(categ) {
    switch (categ) {
      case "accounts":
        this.setState({ panel: <Accounts /> });
        return;
      default:
        this.setState({ panel: <Accounts /> });
    }
  }

  render() {
    return (
      <div>
        <div className="box" style={{ marginTop: "35px" }}>
          <header className="toolbar toolbar-header">
            <h1 className="title">Admin Functions</h1>
          </header>
          <div className={"admin"}>
            <button
              className="btn btn-large btn-primary"
              onClick={() => this.setPanel("accounts")}
            >
              User Accounts
            </button>
          </div>
        </div>
        {this.state.panel}
      </div>
    );
  }
}

const Admin_mapStateToProps = state => {
  return {
    ...state.Admin
  };
};
const Admin_mapDispatchToProps = dispatch => {
  return {};
};

Admin = connect(Admin_mapStateToProps, Admin_mapDispatchToProps)(Admin);

export default Admin;
