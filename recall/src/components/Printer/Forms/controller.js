import React, { Component } from "react";
import form1 from "./Form1/form1";
import form2 from "./Form2/form2";

export default class Controller extends Component {
  selectForm(str) {
    let cb;
    switch (str) {
      case "form1":
        cb = form1;
        break;
      case "form2":
        cb = form2;
        break;
      default:
        cb = form1;
    }
    return Array.isArray(this.props.data) ? (
      <div>
        {this.props.data.map((element, index) => (
          <div>
            {index % 3 === 0 && index > 0 ? (
              <div style={{ pageBreakAfter: "always" }} />
            ) : null}
            {cb(element)}
          </div>
        ))}
      </div>
    ) : (
      cb(this.props.data)
    );
  }

  render() {
    return <div>{this.selectForm(this.props.form)}</div>;
  }
}
