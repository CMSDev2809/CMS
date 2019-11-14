import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img1 from "./img/homebutton_1.png";
import Img2 from "./img/homebutton_2.png";
import Img3 from "./img/homebutton_3.png";
import Img4 from "./img/homebutton_4.png";
import Img5 from "./img/homebutton_5.png";
import Img6 from "./img/homebutton_6.png";
import Img7 from "./img/homebutton_7.png";
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
                <img alt={""} src={Img1} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={Img1}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("gps")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={Img2} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={Img2}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("urinalysis")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={Img3} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={Img3}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("drug_patch")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={Img4} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={Img4}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("remote_breath")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={Img5} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={Img5}
                  style={{ width: "60px", height: "50px" }}
                />
              </MediaQuery>
            </Button>
          </Link>
          <Link to="/services">
            <Button onClick={() => this.props.setServicePage("house_arrest")}>
              <MediaQuery query="(min-width: 780px)">
                <img alt={""} src={Img6} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={Img6}
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
                <img alt={""} src={Img7} />
              </MediaQuery>
              <MediaQuery query="(max-width: 779px)">
                <img
                  alt={""}
                  src={Img7}
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
              marginLeft: "10px"
            }}
          >
            Swipe to scroll
          </h3>
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setServicePage: servicePage => dispatch(setServicePage(servicePage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
