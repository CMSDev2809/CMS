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

import Img from "./img/remote_breath.png";
import ImgIcon from "./img/gps.jpg";

class ServicesRemoteBreath extends Component {
  render() {
    this.props.setService("Scram Remote Breath");
    return (
      <div className="home">
        <Header />
        <div className="services-container">
          <ServiceDisplay
            title={"Remote Breath"}
            img={Img}
            img_icon={ImgIcon}
            subTitle={"Portable and Convenient 24 Hour Alcohol Monitoring"}
            text={`The world’s first handheld, wireless, portable breath alcohol device with automated facial recognition and GPS with every single test. For your lower-risk offenders or those who have earned less intensive testing and monitoring. SCRAM Remote Breath is the most flexible option in breath alcohol testing for low-risk offenders from the industry-leading line of electronic monitoring solutions.`}
            subBlock={
              <div>
                <h2>
                  SCRAM Remote Breath Alcohol Tester With GPS Location
                  Monitoring
                </h2>
                <ul>
                  <li>utomated Facial Intelligence™</li>
                  <li>One-piece, handheld, cellular</li>
                  <li>DOT-approved Dräger® fuel cell</li>
                  <li>GPS location with every test</li>
                  <li>Client text message reminders and notifications</li>
                  <li>Rugged, built for corrections</li>
                  <li>Integrates with SCRAMNET™</li>
                  <li>Random, scheduled, on-demand testing</li>
                </ul>
                <h2>Automated Facial Intelligence (AFI™)</h2>
                <ul>
                  <li>
                    The first and only automated, intelligent bio confirmation
                    system to be used in alcohol testing
                  </li>
                  <li>
                    Government security grade FACIAL RECOGNITION software—not
                    just photos
                  </li>
                  <li>
                    Automated matching—reduces manual review of photos by 90-95%
                  </li>
                  <li>
                    High-resolution images—clearly defines the 5-10% you do
                    review
                  </li>
                  <li>
                    AFI means FTE Officer to Offender Ratios, along with
                    liability, will be drastically reduced
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

export default connect(mapStateToProps, mapDispatchToProps)(
  ServicesRemoteBreath
);
