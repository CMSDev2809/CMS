import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar/nav_bar";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar layout={"header"} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
