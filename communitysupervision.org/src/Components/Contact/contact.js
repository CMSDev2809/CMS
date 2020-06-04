import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import TransparentHeader from "../TransparentHeader/transparent_header";
import LocationNav from "./LocationNav/location_nav";
import LocationDisplay from "./LocationDisplay/location_display";
import Fade from "react-reveal/Fade";
import "./contact.css";
const Locations = require("../../../../locationList");

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="contact">
        <Header />
        <TransparentHeader title={"Contact Us"} titleColor={"white"} />
        <div className={"content"}>
          <LocationNav Locations={Locations} />
          <Fade left spy={this.props.location}>
            <LocationDisplay Locations={Locations} />
          </Fade>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.locationReducer.location,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
