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

import Img from "./img/house_arrest.png";
import ImgIcon from "./img/gps.jpg";

class ServicesHouseArrest extends Component {
  render() {
    this.props.setService("House Arrest");
    return (
      <div className="home">
        <Header />
        <div className="services-container">
          <ServiceDisplay
            title={"House Arrest"}
            img={Img}
            img_icon={ImgIcon}
            subTitle={"Permiter Based Location Monitoring"}
            text={`3M™ Electronic Monitoring Home Curfew Monitoring systems are powerful, comprehensive monitoring tools that help ensure the monitoring needs of our clients are accounted for and securely performed, while enabling careful management of operational resources.`}
            subBlock={
              <div>
                <h2>
                  Two compatible models of monitoring systems are available.
                  Monitoring data transfer can be performed over landline (PSTN)
                  or cellular (GSM) networks. Both types of monitoring units can
                  operate alongside each other, to help fit operator needs.
                </h2>
                <h2>Key features:</h2>
                <ul>
                  <li>Multiple offender monitoring</li>
                  <li>Enhanced memory</li>
                  <li>Improved RF modules and processing power</li>
                  <li>
                    Enhanced communication and software download capabilities
                  </li>
                  <li>Flexible scheduling and information management</li>
                  <li>Highly advanced tilt sensors and tamper alarms</li>
                  <li>Configurable monitoring range</li>
                  <li>Operational cost savings</li>
                  <li>Industry leading transmitter capabilities</li>
                  <li>Extended range of officer tools</li>
                  <li>Simple, quick installation</li>
                </ul>
                <h2>
                  {`Our curfew monitoring systems can also be used to complement
                  GPS tracking capabilities by monitoring offenders' compliance
                  with their restrictive schedule while at home. The base unit
                  is used as a standalone home curfew system, extending
                  comprehensive home detention capabilities. Key features:`}
                </h2>
                <ul>
                  <li>Standard landline and power connection</li>
                  <li>
                    LED lights indicate power, violation and phone line status
                  </li>
                  <li>24-hour built-in back up battery</li>
                  <li>
                    Caller ID helps prevent offenders from relocating the unit
                    to an unauthorized phone line
                  </li>
                  <li>
                    Two-way communication between base unit and monitoring
                    center
                  </li>
                  <li>Cost effective</li>
                </ul>
                <h2>
                  SCRAM Systems House Arrest technology, available since 2010 in
                  our SCRAM CAM device is now available as a standalone system
                  and is optimized to work with multiple options:
                </h2>
                <ul>
                  <li>Home Internet routers</li>
                  <li>Standard or digital phone lines</li>
                  <li>DSL</li>
                  <li>Vonage®</li>
                  <li>Or an optional SCRAM-provided wireless system</li>
                </ul>
                <h2>The Most Flexible House Arrest System on the Market:</h2>
                <ul>
                  <li>
                    Multiple Base Station options mean it’s easy to utilize
                    SCRAM House Arrest in any household
                  </li>
                  <li>
                    Flexible options ensure anyone can use the SCRAM House
                    Arrest System without the need for expensive installation of
                    phone or Internet service
                  </li>
                  <li>
                    Reliable tamper technology substantially reduces false
                    alerts
                  </li>
                  <li>
                    Offers variable range and leave window settings to agents to
                    set varying proximity distances and schedules
                  </li>
                </ul>
                <h2>SCRAM House Arrest Features</h2>
                <ul>
                  <li>Standalone RF system—the smallest available today</li>
                  <li>
                    Instantaneous alerts and summary reports of movement while
                    the offender is in residence
                  </li>
                  <li>Both scheduled and random verification</li>
                  <li>
                    Multiple anti-tamper systems, cut-strap detection, and
                    waterproof design
                  </li>
                  <li>One-year field replaceable battery</li>
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
  ServicesHouseArrest
);
