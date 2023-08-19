import React, { Component } from "react";
import { connect } from "react-redux";

class Development extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "yellow",
          width: "100%",
          height: "75px",
          verticalAlign: "middle",
          display: "flex"
        }}
      >
        <h2
          style={{
            margin: "auto"
          }}
        >
          <div
            class="glyphicon glyphicon-warning-sign"
            style={{ marginRight: `25px` }}
          />This page is under development and will be ready soon.
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Development);
