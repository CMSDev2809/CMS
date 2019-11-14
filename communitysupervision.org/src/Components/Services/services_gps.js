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

import Img from "./img/gps.png";
import ImgIcon from "./img/gps.jpg";

class ServicesGPS extends Component {
  render() {
    this.props.setService("GPS");
    return (
      <div className="home">
        <Header />
        <div className="services-container">
          <ServiceDisplay
            title={"GPS Tracking"}
            img={Img}
            img_icon={ImgIcon}
            subTitle={"Geosynchronous Location Tracking"}
            text={`3M™ One-Piece GPS Offender Tracking System integrates tracking, communication and mapping technologies. Operators can efficiently track offenders virtually anywhere, anytime, at varying levels of intensity through a single, compact body-worn unit.`}
            subBlock={
              <div>
                <p>
                  The system features the ability to define inclusion and
                  exclusion zones, animated and birds-eye-view mapping and the
                  convenience of an offender wearing just one device on the leg.
                  The system communicates certain events to the offender through
                  vibrations and LED lights and can switch monitoring intensity
                  modes remotely through software downloads, or automatically,
                  per program rules definition.
                </p>
                <p>
                  3M™ One-Piece GPS Offender Tracking System features full house
                  arrest supervision and will report technical events or
                  violations of schedule restrictions, enabling agencies to
                  apply home curfew restrictions in line with their program.
                </p>
                <h2>Key Features:</h2>
                <ul>
                  <li>Increased window of detection</li>
                  <li>
                    Four supervision levels: active, alert, passive, and
                    optional RF curfew monitoring
                  </li>
                  <li>
                    Multiple methods of offender communication: LED lights and
                    vibration
                  </li>
                  <li>
                    Collects GPS points every 60 seconds (adjustable); once
                    every 15 seconds when in zone violation
                  </li>
                  <li>User configurable alerts and program rules</li>
                  <li>
                    Continued tracking and offender alerts independent of
                    communication availability
                  </li>
                  <li>Remote software upgrades and modifications</li>
                  <li>
                    Multiple tracking technologies, back up location detection
                    using LBS
                  </li>
                  <li>Reliable data storage</li>
                  <li>Remote software upgrades and modifications</li>
                  <li>Functionality status indications</li>
                  <li>Multiple tamper detections</li>
                  <li>
                    Securely fits on offender's ankle using an adjustable, easy
                    to install strap
                  </li>
                  <li>Compact and lightweight</li>
                  <li>Hypoallergenic, water and tamper resistant</li>
                  <li>36+ hour battery power</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesGPS);
