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

import Img from "./img/scram.png";
import ImgIcon from "./img/gps.jpg";

class ServicesScram extends Component {
  render() {
    this.props.setService("Scram CAM");
    return (
      <div className="home">
        <Header />
        <div className="services-container">
          <ServiceDisplay
            title={"Scram CAM"}
            img={Img}
            img_icon={ImgIcon}
            subTitle={"Transdermal Alcohol Monitoring"}
            text={`Our flagship technology, the SCRAM CAM system is the world’s most widely used and trusted 24/7 transdermal alcohol testing system, for use with high-risk, hardcore DUI and alcohol offenders. It combines 24/7 alcohol testing with optional house arrest monitoring in a single device.`}
            subBlock={
              <div>
                <h2>
                  SCRAM CAM Provides Accountability and Encourages Compliance:
                </h2>
                <ul>
                  <li>Flexible monitoring level for multiple needs</li>
                  <li>
                    Eliminates testing gaps—no ability to miss a test or drink
                    around testing schedules
                  </li>
                  <li>
                    Goes where the client goes—no transportation to a testing
                    center
                  </li>
                  <li>
                    Studies show CAM is most effective for offenders assessed
                    with alcohol dependence or addiction
                  </li>
                  <li>
                    Works well in conjunction with treatment to enforce
                    compliance and better identify when intervention may be
                    needed
                  </li>
                </ul>
                <h2>A Complete Transdermal Alcohol Testing System:</h2>
                <ul>
                  <li>Tests for alcohol every 30 minutes, 24/7</li>
                  <li>Optional House Arrest/RF Monitoring in one device</li>
                  <li>
                    Auto data uploads via a variety of options (conventional
                    base station, wireless base station, DirectConnect™)
                  </li>
                  <li>Testing is automated, no participation required</li>
                  <li>
                    Daily Action Plans (DAPs) help agents determine where they
                    need to spend their time—and where they don’t
                  </li>
                </ul>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesScram);
