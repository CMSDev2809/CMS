import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setServicePage } from "../../Actions/serviceActions";
import MediaQuery from "react-responsive";
import Config from "../../config";

class Services extends Component {
  render() {
    return (
      <div>
        <div className="services">
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("scram")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={require("./img/homebutton_1.png")} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={require("./img/homebutton_1.png")}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("gps")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={require("./img/homebutton_2.png")} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={require("./img/homebutton_2.png")}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("urinalysis")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={require("./img/homebutton_3.png")} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={require("./img/homebutton_3.png")}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("drug_patch")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={require("./img/homebutton_4.png")} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={require("./img/homebutton_4.png")}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("remote_breath")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={require("./img/homebutton_5.png")} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={require("./img/homebutton_5.png")}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("house_arrest")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={require("./img/homebutton_6.png")} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={require("./img/homebutton_6.png")}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button
              onClick={() => this.props.setServicePage("paternity_testing")}
            >
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={require("./img/homebutton_7.png")} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={require("./img/homebutton_7.png")}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("intoxalock")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={require("./img/homebutton_8.png")} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={require("./img/homebutton_8.png")}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
        </div>
        <MediaQuery query="(max-width: 779px)">
          <div
            class="glyphicon glyphicon-transfer"
            style={{ display: "inline-block" }}
          />
          <h3
            style={{
              display: "inline-block",
              fontSize: "15px",
              marginTop: "-10px",
              marginLeft: "10px",
            }}
          >
            Swipe to scroll
          </h3>
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setServicePage: (servicePage) => dispatch(setServicePage(servicePage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
