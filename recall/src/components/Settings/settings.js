import React, { Component } from "react";
import { connect } from "react-redux";
import config from "electron-json-config";
import { Prompt } from "react-router-dom";
import * as deepEqual from "deep-equal";
import { TextInput, SelectBox, resetUID } from "../inputs.js";
import { actions } from "./component.js";
import fns from "../../fns";
import "./settings.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directoryPath: "",
      port: "",
      limit: 10,
      printLayout: 0,
      placeHolderText: 0,
      contactEmail: "",
      receiptEmail: 0
    };
  }

  async getSettings() {
    const settings = await fns.readFromSave();
    this.setState({
      directoryPath: settings.db,
      port: settings.port,
      limit: parseInt(settings.limit),
      printLayout: settings.printLayout,
      placeHolderText: settings.placeHolderText,
      contactEmail: settings.contactEmail,
      receiptEmail: parseInt(settings.receiptEmail)
    });
  }

  submit() {
    if (window.confirm("Save new settings?")) {
      fns.writeToSave({
        db: this.state.directoryPath,
        port: this.state.port,
        limit: this.state.limit,
        printLayout: this.state.printLayout,
        placeHolderText: this.state.placeHolderText,
        contactEmail: this.state.contactEmail,
        receiptEmail: this.state.receiptEmail
      });
    }
  }

  cancel() {
    this.getSettings();
  }

  componentDidMount() {
    this.getSettings();
  }

  render() {
    return (
      <div>
        <div className="box" style={{ marginTop: "35px" }}>
          <header className="toolbar toolbar-header">
            <h1 className="title">Settings</h1>
          </header>
          <div className="padded">
            <label>Database Directory</label>
            <div>
              <div className="db">
                <div style={{ marginRight: "12.5px", width: "75%" }}>
                  <input
                    label="Database Directory"
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={this.state.directoryPath}
                    onChange={e =>
                      this.setState({ directoryPath: e.target.value })}
                  />
                </div>
                :
                <div style={{ marginLeft: "12.5px", width: "25%" }}>
                  <input
                    label="Database Directory"
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={this.state.port}
                    onChange={e => this.setState({ port: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="padded">
            <label>Enable Receipt Email</label>
            <div>
              <select
                value={parseInt(this.state.receiptEmail)}
                class="form-control"
                onChange={e => {
                  this.setState({
                    receiptEmail: e.target.value
                  });
                }}
              >
                <option value={0}>False</option>
                <option value={1}>True</option>
              </select>
            </div>
          </div>
          {this.state.receiptEmail > 0 ? (
            <div className="padded">
              <label>Receipt Email</label>
              <div>
                <div className="db">
                  <div style={{ marginRight: "12.5px", width: "75%" }}>
                    <input
                      label="Database Directory"
                      type="text"
                      className="form-control"
                      placeholder=""
                      value={this.state.contactEmail}
                      onChange={e =>
                        this.setState({ contactEmail: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="padded">
            <label>Print Layout</label>
            <div>
              <select
                value={parseInt(this.state.printLayout)}
                class="form-control"
                onChange={e => {
                  this.setState({
                    printLayout: e.target.value
                  });
                }}
              >
                <option value={0}>Single</option>
                <option value={1}>Multiple</option>
              </select>
            </div>
          </div>
          <div className="padded">
            <label>Show Placeholder Text</label>
            <div>
              <select
                value={parseInt(this.state.placeHolderText)}
                class="form-control"
                onChange={e => {
                  this.setState({
                    placeHolderText: e.target.value
                  });
                }}
              >
                <option value={0}>False</option>
                <option value={1}>True</option>
              </select>
            </div>
          </div>
          <div className="padded">
            <label>Pagination Limit</label>
            <div>
              <div className="db">
                <div style={{ marginRight: "12.5px", width: "75%" }}>
                  <input
                    label="Pagination Limit"
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={this.state.limit}
                    onChange={e =>
                      this.setState({
                        limit: e.target.value
                      })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button
            style={{ marginRight: "5px" }}
            className="btn btn-large btn-primary"
            onClick={() => this.submit()}
          >
            Submit
          </button>
          <button
            className="btn btn-large btn-negative"
            onClick={() => this.cancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

const Settings_mapStateToProps = state => {
  return {};
};
const Settings_mapDispatchToProps = dispatch => {
  return {};
};

Settings = connect(Settings_mapStateToProps, Settings_mapDispatchToProps)(
  Settings
);

export default Settings;
