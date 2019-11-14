import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavBar from "../NavBar/navbar";
import Img1 from "./img/logo.png";
import Config from "../../config";

class Footer extends Component {
  render() {
    let bttnMargin = 10;
    return (
      <div className="footer">
        <div className={"logo"}>
          <img
            alt={""}
            src={Img1}
            style={{ width: "50px", margin: "5px" }}
          />Copyright Compliance Monitoring Systems © 2019
        </div>
        <div className={"links"}>
          <Link to={"/"}>Home</Link>
          <Link
            to={"/services"}
            onClick={() => this.props.setServicePage("home")}
          >
            Services
          </Link>
          <Link to={"/about_us"}>About Us</Link>
          <Link to={"/news"}>News</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/referral"}>Refer a Client</Link>
          <Link to={"/pay"}>Pay Online</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
