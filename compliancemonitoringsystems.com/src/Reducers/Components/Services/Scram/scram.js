import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import Img from "./img/services_alcohol_monitoring.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fns from "../../../fns";
import Config from "../../../config";

class Scram extends Component {
  componentDidMount() {
    fns.autoScroll();
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>Scram Systems</h1>
        <img alt={""} src={Img} style={{ width: "100%" }} />
        <ServicesNav />
        <p>
          Our flagship technology, the SCRAM CAM system is the world’s most
          widely used and trusted 24/7 transdermal alcohol testing system, for
          use with high-risk, hardcore DUI and alcohol offenders. It combines
          24/7 alcohol testing with optional house arrest monitoring in a single
          device.
          <br />
          <br />SCRAM CAM Provides Accountability and Encourages Compliance:
        </p>
        <ul style={{ marginTop: "-50px" }}>
          <li>Flexible monitoring level for multiple needs</li>
          <li>
            Eliminates testing gaps—no ability to miss a test or drink around
            testing schedules
          </li>
          <li>
            Goes where the client goes—no transportation to a testing center
          </li>
          <li>
            Studies show CAM is most effective for offenders assessed with
            alcohol dependence or addiction
          </li>
          <li>
            Works well in conjunction with treatment to enforce compliance and
            better identify when intervention may be needed
          </li>
        </ul>
        <t>A Complete Transdermal Alcohol Testing System:</t>
        <ul style={{ marginTop: "25px" }}>
          <li>Tests for alcohol every 30 minutes, 24/7</li>
          <li>Optional House Arrest/RF Monitoring in one device</li>
          <li>
            Auto data uploads via a variety of options (conventional base
            station, wireless base station, DirectConnect™)
          </li>
          <li>Testing is automated, no participation required</li>
          <li>
            Daily Action Plans (DAPs) help agents determine where they need to
            spend their time—and where they don’t
          </li>
        </ul>
        <Link to={"/scram"}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Scram);
