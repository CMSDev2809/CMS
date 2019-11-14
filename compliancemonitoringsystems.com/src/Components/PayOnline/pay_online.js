import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Checkout from "../Checkout/checkout";
import Config from "../../config";

class PayOnline extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <Checkout />
        </div>
        <Footer excl={"pay_online"} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PayOnline);
