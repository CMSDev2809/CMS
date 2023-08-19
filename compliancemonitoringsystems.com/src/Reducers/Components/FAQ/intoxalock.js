import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Img from "../Services/PaternityTesting/img/services_paternity_testing.png";
import { Button } from "react-bootstrap";
import Config from "../../config";

class Intoxalock extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <img alt={""} src={Img} style={{ width: "100%" }} />
          <h1 style={{ margin: "50px" }}>
            Paternity Testing Questions and Answers
          </h1>
          <p3>{``}</p3>
          <p2>{``}</p2>
          <Link to={"/services"}>
            <Button>
              <div
                class="glyphicon glyphicon-hand-right"
                style={{ marginRight: "10px", float: "left" }}
              />
              <div style={{ float: "left" }}>Services</div>
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Intoxalock);
