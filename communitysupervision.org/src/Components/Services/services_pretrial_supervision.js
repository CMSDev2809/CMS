import React, { Component } from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ServiceDisplay from "./service_display";
import MicroServicesContainer from "./MicroServicesContainer/micro_services_container";
import { setService } from "../../Actions/service";
import Config from "../../config";
import "./services.css";
import "../Home/home.css";

import Img from "./img/pretrial_supervision.png";
import ImgIcon from "./img/gps.jpg";

class ServicesPretrialSupervision extends Component {
  render() {
    this.props.setService("Pre-Trial Supervision");
    return (
      <div className="home">
        <Header />
        <div className="services-container">
          <ServiceDisplay
            title={"Pre-Trial Supervision"}
            img={Img}
            img_icon={ImgIcon}
            subTitle={"Supervision and Assessment"}
            text={`Pre-Trial supervision is an alternative to incarceration whichcan assist in ensuring defendants follow court ordered conditions as well as make their upcoming court dates.`}
            subBlock={
              <p>
                Pre-Trial Supervision allows check-ins and meeting with a
                designated pre-trial supervision officer to ensure
                accountability and compliance with court ordered conditions.
                Pre-Trial supervision officers allow the defendant to be drug
                and alcohol tested in the office or at a random basis. Combined
                with electronic monitoring, pre-trial supervision officers can
                better supervise the defendants.
              </p>
            }
          />
        </div>
        <MediaQuery query={`(min-width: ${Config.limit}px)`}>
          <MicroServicesContainer simple={false} />
        </MediaQuery>
        <MediaQuery query={`(max-width: ${Config.limit - 1}px)`}>
          <MicroServicesContainer
            simple={false}
            useIcons={true}
            hideServiceText={true}
          />
        </MediaQuery>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setService: service => dispatch(setService(service))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ServicesPretrialSupervision
);
