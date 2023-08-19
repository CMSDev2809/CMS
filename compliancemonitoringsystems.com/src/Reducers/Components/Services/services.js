import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ServicesNav from "../ServicesNav/services_nav";
import Home from "./Home/home";
import Config from "../../config";

class Services extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <Home />
        </div>
        <Footer excl={"services"} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
