import React, { Component } from "react";
import { connect } from "react-redux";
import Invoice from "./img/invoice.png";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0.0
    };
    this.posistions = {
      invoice: {
        width: 10.75,
        x: 83.5,
        y: 8.75
      },
      clientName: {
        width: 20,
        x: 6.75,
        y: 18
      },
      total: {
        width: 10.5,
        x: 85,
        y: 93.25
      },
      service: {
        width: 35,
        x: 2,
        y: 44
      }
    };
  }

  render() {
    if (this.props.show) {
      this.state.opacity = 0.4;
    } else {
      this.state.opacity = 0.0;
    }
    return (
      <div>
        {this.props.pos ? (
          <div
            style={{
              backgroundColor: "rgb(5, 0, 255)",
              width: `${this.posistions[this.props.pos].width}%`,
              height: `2.25%`,
              left: `${this.posistions[this.props.pos].x *
                this.props.invoiceScale}%`,
              top: `${this.posistions[this.props.pos].y *
                this.props.invoiceScale}%`,
              position: "absolute",
              opacity: `${this.state.opacity}`,
              borderRadius: "3px"
            }}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

class Highlighter extends Component {
  constructor(props) {
    super(props);
    this.state = { invoiceScale: 1.0 };
  }

  render() {
    let show = false;
    let box = "";
    switch (this.props.selectedBox) {
      case 1:
        box = "invoice";
        show = true;
        break;
      case 10:
        box = "clientName";
        show = true;
        break;
      case 4:
        box = "total";
        show = true;
        break;
      case 3:
        box = "service";
        show = true;
        break;
      default:
        show = false;
    }
    return (
      <div>
        <Box show={show} pos={box} invoiceScale={this.state.invoiceScale} />
        <img
          alt={""}
          src={Invoice}
          style={{ width: `${this.state.invoiceScale * 100}%` }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedBox: state.transactionReducer.selectedBox
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Highlighter);
