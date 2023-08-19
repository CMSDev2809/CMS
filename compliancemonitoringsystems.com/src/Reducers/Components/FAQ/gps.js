import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Img from "../Services/GPS/img/services_gps_tracking.png";
import { Button } from "react-bootstrap";
import Config from "../../config";

class GPS extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <img alt={""} src={Img} style={{ width: "100%" }} />
          <h1 style={{ margin: "50px" }}>GPS Questions and Answers</h1>
          <p3
          >{`Someone I know or I have been ordered to be placed on GPS. What do I need to do?`}</p3>
          <p2
          >{`Is the person still in jail? If yes, is there a bond? The bond needs to be
              paid before we can get someone out on GPS. If you are in jail and there is
              no bond in place or you are not in jail, please use our map to find and
              contact an agent closest to you. The agent will inform you of the cost
              and what you will need to do. Typically there is an installation fee and
              a per day cost that must be paid in advance.`}</p2>
          <p3>{`Do I have to be court ordered to wear a gps unit?`}</p3>
          <p2
          >{`No. You may voluntarily participate in the GPS program. To get more information
              on how to voluntarily enroll in a GPS program, please contact the territory
              manager closest to you.`}</p2>
          <p3>{`Is the GPS waterproof?`}</p3>
          <p2>{`The GPS unit is waterproof up to 50ft.`}</p2>
          <p3
          >{`My Bracelet vibrated and there are lights flashing. What do I do?`}</p3>
          <p2
          >{`Your bracelet is informing you of an alarm. Look to see what LED is flashing to
              tell you of what you need to do.`}</p2>
          <p2>
            <b>{`Flashing Red PWR:`}</b>
            {` Charge the GPS. You must charge the GPS within 30min of the flashing
                red PWR or the GPS will die and you will be in violation. Once the device is fully charged,
                it will vibrate once and the PWR LED will be solid green. Remove the charger.`}
          </p2>
          <p2>
            <b>{`Flashing Red GPS:`}</b>
            {` Walk outside with the GPS uncovered to an area with a clear view of the sky.
                  Don't stand under trees, building awnings, etc. When the alarm has cleared, the GPS LED
                  will be off.`}
          </p2>
          <p2>
            <b>{`Flashing Red ZONE:`}</b>
            {` Either leave the location where you are not permitted to be or go to
                    the location you are scheduled to be. When the alarm has cleared the Zone LED will be off.`}
          </p2>
          <p2>
            <b>{`Flashing Red, PWR, GPS, ZONE:`}</b>
            {` Your agent has sent an alert for you to contact them. Press
                    the Acknowledge Button to acknowledge the alert. The GPS and Zone LEDs will stop flashing
                    and be off. The PWR LED will be flashing green.`}
          </p2>
          <Link to={"/services"}>
            <Button>
              <div
                class="glyphicon glyphicon-hand-right"
                style={{ marginRight: "10px", float: "left" }}
              />
              <div style={{ float: "left" }}>Services</div>
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GPS);
