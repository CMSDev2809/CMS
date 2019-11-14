import React, { Component } from "react";
import { connect } from "react-redux";
import Img from "./img.png";
import NavBar from "../NavBar/navbar";
import Config from "../../config";

class Header extends Component {
  render() {
    let curve = -2.5;
    return (
      <div className="header">
        <img alt={""} src={Img} style={{ float: "left" }} />
        <div className="txt" style={{ marginRight: "-50px" }}>
          <div className="sub" style={{ marginLeft: `${curve}px` }}>
            Compliance
          </div>
          <div className="sub">Monitoring</div>
          <div className="sub" style={{ marginLeft: `${curve}px` }}>
            Systems
          </div>
        </div>
        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
