import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import Img from "./img/services_remote_breath2.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fns from "../../../fns";
import Config from "../../../config";

class RemoteBreath extends Component {
  componentDidMount() {
    fns.autoScroll();
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>Remote Breath</h1>
        <img alt={""} src={Img} style={{ width: "100%" }} />
        <ServicesNav />
        <p>
          The world’s first handheld, wireless, portable breath alcohol device
          with automated facial recognition and GPS with every single test. For
          your lower-risk offenders or those who have earned less intensive
          testing and monitoring. SCRAM Remote Breath is the most flexible
          option in breath alcohol testing for low-risk offenders from the
          industry-leading line of electronic monitoring solutions.
          <br />
          <br />SCRAM Remote Breath Alcohol Tester With GPS Location Monitoring
        </p>
        <ul style={{ marginTop: "-50px" }}>
          <li>Automated Facial Intelligence™</li>
          <li>One-piece, handheld, cellular</li>
          <li>DOT-approved Dräger® fuel cell</li>
          <li>GPS location with every test</li>
          <li>Client text message reminders and notifications</li>
          <li>Rugged, built for corrections</li>
          <li>Integrates with SCRAMNET™</li>
          <li>Random, scheduled, on-demand testing</li>
        </ul>
        <t>Automated Facial Intelligence (AFI™)</t>
        <ul style={{ marginTop: "25px" }}>
          <li>
            The first and only automated, intelligent bio confirmation system to
            be used in alcohol testing
          </li>
          <li>
            Government security grade FACIAL RECOGNITION software—not just
            photos
          </li>
          <li>Automated matching—reduces manual review of photos by 90-95%</li>
          <li>
            High-resolution images—clearly defines the 5-10% you do review
          </li>
          <li>
            AFI means FTE Officer to Offender Ratios, along with liability, will
            be drastically reduced
          </li>
        </ul>
        {/*
        <Link to={"/remote_breath"}>
          <Button>
            <div
              class="glyphicon glyphicon-hand-right"
              style={{ marginRight: "10px", float: "left" }}
            />
            <div style={{ float: "left" }}>Facts and Questions</div>
          </Button>
        </Link>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RemoteBreath);
