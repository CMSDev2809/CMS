import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import Img from "./img/services_house_arrest.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fns from "../../../fns";
import Config from "../../../config";

class HouseArrest extends Component {
  componentDidMount() {
    fns.autoScroll();
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>House Arrest</h1>
        <img alt={""} src={Img} style={{ width: "100%" }} />
        <ServicesNav />
        <p>
          3M™ Electronic Monitoring Home Curfew Monitoring systems are powerful,
          comprehensive monitoring tools that help ensure the monitoring needs
          of our clients are accounted for and securely performed, while
          enabling careful management of operational resources.
          <br />
          <br />
          Two compatible models of monitoring systems are available. Monitoring
          data transfer can be performed over landline (PSTN) or cellular (GSM)
          networks. Both types of monitoring units can operate alongside each
          other, to help fit operator needs.
          <br />
          <br />
          Key features:
        </p>
        <ul style={{ marginTop: "-50px" }}>
          <li>Multiple offender monitoring</li>
          <li>Enhanced memory</li>
          <li>Improved RF modules and processing power</li>
          <li>Enhanced communication and software download capabilities</li>
          <li>Flexible scheduling and information management</li>
          <li>Highly advanced tilt sensors and tamper alarms</li>
          <li>Configurable monitoring range</li>
          <li>Operational cost savings</li>
          <li>Industry leading transmitter capabilities</li>
          <li>Extended range of officer tools</li>
          <li>Simple, quick installation</li>
        </ul>
        <t>
          {`Our curfew monitoring systems can also be used to complement GPS
          tracking capabilities by monitoring offenders' compliance with their
          restrictive schedule while at home. The base unit is used as a
          standalone home curfew system, extending comprehensive home detention
          capabilities.`}
        </t>
        <t>Key features:</t>
        <ul style={{ marginTop: "25px" }}>
          <li>Standard landline and power connection</li>
          <li>LED lights indicate power, violation and phone line status</li>
          <li>24-hour built-in back up battery</li>
          <li>
            Caller ID helps prevent offenders from relocating the unit to an
            unauthorized phone line
          </li>
          <li>Two-way communication between base unit and monitoring center</li>
          <li>Cost effective</li>
        </ul>
        <t>
          SCRAM Systems House Arrest technology, available since 2010 in our
          SCRAM CAM device is now available as a standalone system and is
          optimized to work with multiple options:
        </t>
        <ul style={{ marginTop: "25px" }}>
          <li>Home Internet routers</li>
          <li>Standard or digital phone lines</li>
          <li>DSL</li>
          <li>Vonage®</li>
          <li>Or an optional SCRAM-provided wireless system</li>
        </ul>
        <t>The Most Flexible House Arrest System on the Market:</t>
        <ul style={{ marginTop: "25px" }}>
          <li>
            Multiple Base Station options mean it’s easy to utilize SCRAM House
            Arrest in any household
          </li>
          <li>
            Flexible options ensure anyone can use the SCRAM House Arrest System
            without the need for expensive installation of phone or Internet
            service
          </li>
          <li>Reliable tamper technology substantially reduces false alerts</li>
          <li>
            Offers variable range and leave window settings to agents to set
            varying proximity distances and schedules
          </li>
        </ul>
        <t>SCRAM House Arrest Features</t>
        <ul style={{ marginTop: "25px" }}>
          <li>Standalone RF system—the smallest available today</li>
          <li>
            Instantaneous alerts and summary reports of movement while the
            offender is in residence
          </li>
          <li>Both scheduled and random verification</li>
          <li>
            Multiple anti-tamper systems, cut-strap detection, and waterproof
            design
          </li>
          <li>One-year field replaceable battery</li>
        </ul>
        <Link to={"/house_arrest"}>
          <Button>
            <div
              class="glyphicon glyphicon-hand-right"
              style={{ marginRight: "10px", float: "left" }}
            />
            <div style={{ float: "left" }}>Facts and Questions</div>
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HouseArrest);
