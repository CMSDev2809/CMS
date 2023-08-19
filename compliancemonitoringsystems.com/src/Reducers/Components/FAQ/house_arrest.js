import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Img from "../Services/HouseArrest/img/services_house_arrest.png";
import { Button } from "react-bootstrap";
import Config from "../../config";

class HouseArrest extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <img alt={""} src={Img} style={{ width: "100%" }} />
          <h1 style={{ margin: "50px" }}>House Arrest Questions and Answers</h1>
          <p3>{`How does the ankle bracelet work?`}</p3>
          <p2
          >{`When an individual is required to serve time on house arrest they must wear an ankle bracelet.
              However, the ankle bracelet is not the only piece of equipment involved. The individual must
              allow the area agent to install a monitoring device within the individual's residence.
              House arrest commitments can require the defendant to remain at home at all hours of the day
              or the defendant might be allowed to attend work while on house arrest. The monitoring device
              is programmed with the defendant's schedule. When the defendant is supposed to be home the
              device will search for the ankle bracelet. The monitoring device then reports if the defendant
              is present or absent to a central location through the telephone line or cellular signal.`}</p2>
          <p3>{`Is the House arrest equipment waterproof?`}</p3>
          <p2
          >{`The HA bracelet is waterproof but cannot be submerged deeper than 50ft or it will damage the
              equipment. The base station is NOT waterproof.`}</p2>
          <p3>{`Who else can remove it once they are off the program?`}</p3>
          <p2
          >{`The only people allowed to remove the bracelet is your agent and a doctor, and you need to
              let your agent know if a doctor is going to remove it.`}</p2>
          <p3
          >{`Can I move the base unit around from room to room or house to house?`}</p3>
          <p2
          >{`Once the base station is plugged into your home it must stay plugged into that socket/room/house
              for the duration of your sentence. The base station is designed to detect if it has been unplugged
              and will send your agent an alert informing them that the base station location is untrusted.`}</p2>
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

export default connect(mapStateToProps, mapDispatchToProps)(HouseArrest);
