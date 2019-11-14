import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import { setServicePage } from "../../../Actions/serviceActions";
import Img from "./img/header_services.png";
import Scram from "../Scram/scram";
import GPS from "../GPS/gps";
import Urinalysis from "../Urinalysis/urinalysis";
import HouseArrest from "../HouseArrest/house_arrest";
import PaternityTesting from "../PaternityTesting/paternity_testing";
import RemoteBreath from "../RemoteBreath/remote_breath";
import DrugPatch from "../DrugPatch/drug_patch";
import fns from "../../../fns";
import Config from "../../../config";

class Home extends Component {
  constructor(props) {
    super(props);
    if (!this.props.servicePage) {
      this.props.setServicePage("home");
    }
  }

  componentDidMount() {
    fns.autoScroll();
  }

  render() {
    return (
      <div>
        {this.props.servicePage === "home" ? (
          <div>
            <h1>Services</h1>
            <img alt={""} src={Img} style={{ width: "100%" }} />
            <ServicesNav />
            <p>
              {`Offering the most trusted programs with the most accurate products, CMS' ankle bracelet, drug patch and onsite drug testing programs are leading Montana's monitoring services. When the need to find the reliable testing and monitoring, turn to Compliance Monitoring Systems.`}
            </p>
          </div>
        ) : (
          ""
        )}
        {this.props.servicePage === "scram" ? <Scram /> : ""}
        {this.props.servicePage === "gps" ? <GPS /> : ""}
        {this.props.servicePage === "urinalysis" ? <Urinalysis /> : ""}
        {this.props.servicePage === "drug_patch" ? <DrugPatch /> : ""}
        {this.props.servicePage === "remote_breath" ? <RemoteBreath /> : ""}
        {this.props.servicePage === "house_arrest" ? <HouseArrest /> : ""}
        {this.props.servicePage === "paternity_testing" ? (
          <PaternityTesting />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  servicePage: state.serviceReducer.servicePage
});

const mapDispatchToProps = dispatch => ({
  setServicePage: servicePage => dispatch(setServicePage(servicePage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
