import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import "./micro_service_bar.css";

class MicroServiceBar extends Component {
  render() {
    const colsPerRow = this.props.simple
      ? this.props.services.length
      : this.props.colsPerRow;
    const rowStyle = {
      marginBottom: "50px"
    };
    let comps = [];
    let temp = [];
    for (let i = 0; i < this.props.services.length; i++) {
      temp.push(
        <Fade left delay={this.props.delayInc * i}>
          {this.props.services[i]}
        </Fade>
      );
      if (i % colsPerRow === 0 && i > 0) {
        comps.push(<div style={{ display: "inline-flex" }}>{temp}</div>);
        temp = [];
      }
    }
    comps.push(<div style={{ display: "inline-flex" }}>{temp}</div>);
    return (
      <div className="micro_service_bar">
        <div className="inner_border">
          {this.props.hideServiceText ? (
            <div />
          ) : (
            <div>
              <Fade left delay={0}>
                <h1>{this.props.title}</h1>
              </Fade>
              <center>
                <Fade left delay={500}>
                  <p>{this.props.subTitle}</p>
                </Fade>
              </center>
            </div>
          )}
          <center>
            <div style={{ textAlign: "justify" }}>{comps}</div>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MicroServiceBar);
