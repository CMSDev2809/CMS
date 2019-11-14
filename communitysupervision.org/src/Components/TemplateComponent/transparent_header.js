import React, { Component } from "react";
import { connect } from "react-redux";
import "./TemplateComponent.css";

class TemplateComponent extends Component {
  render() {
    return <div className="template_component">stuff</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateComponent);
