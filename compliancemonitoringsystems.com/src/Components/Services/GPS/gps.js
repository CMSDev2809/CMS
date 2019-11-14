import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import Img from "./img/services_gps_tracking.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fns from "../../../fns";
import Config from "../../../config";

class GPS extends Component {
  componentDidMount() {
    fns.autoScroll();
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>GPS Monitoring</h1>
        <img alt={""} src={Img} style={{ width: "100%" }} />
        <ServicesNav />
        <p>
          3M™ One-Piece GPS Offender Tracking System integrates tracking,
          communication and mapping technologies. Operators can efficiently
          track offenders virtually anywhere, anytime, at varying levels of
          intensity through a single, compact body-worn unit.
          <br />
          <br />
          The system features the ability to define inclusion and exclusion
          zones, animated and birds-eye-view mapping and the convenience of an
          offender wearing just one device on the leg. The system communicates
          certain events to the offender through vibrations and LED lights and
          can switch monitoring intensity modes remotely through software
          downloads, or automatically, per program rules definition.
          <br />
          <br />
          3M™ One-Piece GPS Offender Tracking System features full house arrest
          supervision and will report technical events or violations of schedule
          restrictions, enabling agencies to apply home curfew restrictions in
          line with their program.
          <br />
          <br />
          Key Features:
        </p>
        <ul style={{ marginTop: "-50px" }}>
          <li>Increased window of detection</li>
          <li>
            Four supervision levels: active, alert, passive, and optional RF
            curfew monitoring
          </li>
          <li>
            Multiple methods of offender communication: LED lights and vibration
          </li>
          <li>
            Collects GPS points every 60 seconds (adjustable); once every 15
            seconds when in zone violation
          </li>
          <li>User configurable alerts and program rules</li>
          <li>
            Continued tracking and offender alerts independent of communication
            availability
          </li>
          <li>Remote software upgrades and modifications</li>
          <li>
            Multiple tracking technologies, back up location detection using LBS
          </li>
          <li>Reliable data storage</li>
          <li>Remote software upgrades and modifications</li>
          <li>Functionality status indications</li>
          <li>Multiple tamper detections</li>
          <li>
            {`Securely fits on offender's ankle using an adjustable, easy to
            install strap`}
          </li>
          <li>Compact and lightweight</li>
          <li>Hypoallergenic, water and tamper resistant</li>
          <li>36+ hour battery power</li>
        </ul>
        <Link to={"/gps"}>
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

export default connect(mapStateToProps, mapDispatchToProps)(GPS);
