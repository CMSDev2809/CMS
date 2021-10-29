import React, { Component } from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setServicePage } from "../../Actions/serviceActions";
import {
  setLocationModalToggle,
  setNavModal
} from "../../Actions/locationActions";
import Config from "../../config";

class NavBar extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    if (Config.resetWindow) {
      window.scrollTo(0, 0);
    }
  }

  modalToggle() {
    this.props.setLocationModalToggle(true);
  }

  exposed() {
    return (
      <div>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Link to={"/services"}>
          <Button onClick={() => this.props.setServicePage("home")}>
            Services
          </Button>
        </Link>
        <Link to={"/about_us"}>
          <Button>About Us</Button>
        </Link>
        <Link to={"/news"}>
          <Button>News</Button>
        </Link>
        <Link to={"/contact"}>
          <Button>Contact</Button>
        </Link>
      /*  <Link to={"/referral"}>
          <Button>Refer a Client</Button>
        </Link>*/
        <Link to={"/pay"}>
          <Button>Pay Online</Button>
        </Link>
        <Link to={"/careers"} target={"_blank"}>
          <Button>Careers</Button>
        </Link>
      </div>
    );
  }

  simplified() {
    return (
      <div>
        <Button
          style={{ width: "50px", height: "50px", float: "right" }}
          onClick={() => {
            this.props.setLocationModalToggle(false);
            this.props.setNavModal(!this.props.navModalToggle);
          }}
        >
          <div class="glyphicon glyphicon-menu-hamburger" />
        </Button>
        <Modal
          show={this.props.navModalToggle}
          style={{ width: "250px", zIndex: 5000 }}
          backdrop={false}
        >
          <Modal.Body>
            <div>
              <Link to={"/"}>
                <Button
                  style={{ width: "175px", marginBottom: "3px" }}
                  onClick={() => this.props.setNavModal(false)}
                >
                  Home
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/services"}>
                <Button
                  style={{ width: "175px", marginBottom: "3px" }}
                  onClick={() => this.props.setNavModal(false)}
                >
                  Services
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/about_us"}>
                <Button
                  style={{ width: "175px", marginBottom: "3px" }}
                  onClick={() => this.props.setNavModal(false)}
                >
                  About Us
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/news"}>
                <Button
                  style={{ width: "175px", marginBottom: "3px" }}
                  onClick={() => this.props.setNavModal(false)}
                >
                  News
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/contact"}>
                <Button
                  style={{ width: "175px", marginBottom: "3px" }}
                  onClick={() => {
                    this.props.setNavModal(false);
                    this.modalToggle();
                  }}
                >
                  Locations
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/referral"}>
                <Button
                  style={{ width: "175px", marginBottom: "3px" }}
                  onClick={() => this.props.setNavModal(false)}
                >
                  Refer a Client
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/pay"}>
                <Button
                  style={{ width: "175px", marginBottom: "3px" }}
                  onClick={() => this.props.setNavModal(false)}
                >
                  Pay Online
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/careers"} target={"_blank"}>
                <Button
                  style={{ width: "175px", marginBottom: "3px" }}
                  onClick={() => this.props.setNavModal(false)}
                >
                  Careers
                </Button>
              </Link>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <div className="navbar">
        <MediaQuery query="(min-width: 779px)">{this.exposed()}</MediaQuery>
        <MediaQuery query="(max-width: 780px)">{this.simplified()}</MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationModalToggle: state.locationReducer.locationModalToggle,
  navModalToggle: state.locationReducer.navModalToggle
});

const mapDispatchToProps = dispatch => ({
  setServicePage: servicePage => dispatch(setServicePage(servicePage)),
  setLocationModalToggle: boolean => dispatch(setLocationModalToggle(boolean)),
  setNavModal: boolean => dispatch(setNavModal(boolean))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
