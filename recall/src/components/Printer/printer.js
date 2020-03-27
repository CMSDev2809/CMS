import React, { Component } from "react";
import { connect } from "react-redux";
import config from "electron-json-config";
import { actions } from "./component.js";
import ReactToPrint from "react-to-print";
import fns from "../../fns";
import "./printer.css";

import Controller from "./Forms/controller";

class ComponentToPrint extends Component {
  render() {
    return <Controller form={this.props.form} data={this.props.data} />;
  }
}

class Printer extends Component {
  state = {
    form: "form1"
  };

  componentDidMount() {
    (async () => {
      const settings = await fns.readFromSave();
      this.setState({
        form: parseInt(settings.printLayout) === 0 ? "form1" : "form2"
      });
    })();
  }

  render() {
    return (
      <div style={this.props.batch ? { display: "inline-block" } : {}}>
        <ReactToPrint
          trigger={() => (
            <button className="button">
              <div className="icon">
                <div className="icon icon-print" />
              </div>
              <div>{this.props.batch ? `Print All` : `Print`}</div>
            </button>
          )}
          content={() => this.componentRef}
        />
        <div style={{ display: "none" }}>
          <ComponentToPrint
            data={this.props.data}
            ref={el => (this.componentRef = el)}
            form={this.state.form}
          />
        </div>
      </div>
    );
  }
}

const Printer_mapStateToProps = state => {
  return {
    ...state.Printer
  };
};
const Printer_mapDispatchToProps = dispatch => {
  return {};
};

Printer = connect(Printer_mapStateToProps, Printer_mapDispatchToProps)(Printer);

export default Printer;
