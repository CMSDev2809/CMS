import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar/nav_bar";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="header">
        <NavBar layout={"footer"} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
