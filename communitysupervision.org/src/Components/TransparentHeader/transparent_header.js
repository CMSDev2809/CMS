import React, { Component } from "react";
import { connect } from "react-redux";
import "./transparent_header.css";

class TransparentHeader extends Component {
  render() {
    const style = { color: this.props.titleColor ? this.props.titleColor : "" };
    return (
      <div className="transparent_header">
        <h1 style={style}>{this.props.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TransparentHeader);
