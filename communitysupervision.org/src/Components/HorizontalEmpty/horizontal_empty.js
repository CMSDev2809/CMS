import React, { Component } from "react";
import { connect } from "react-redux";
import "./horizontal_empty.css";

class HorizontalEmpty extends Component {
  render() {
    return <div className="horizontal_empty" />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalEmpty);
