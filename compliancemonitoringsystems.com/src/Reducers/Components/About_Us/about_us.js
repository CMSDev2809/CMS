import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ServicesNav from "../ServicesNav/services_nav";
import Config from "../../config";
import Endorsement1 from "./img/endorsement_1.png";
import MediaQuery from "react-responsive";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIndex: 1
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <h1>About Us</h1>
          <p>
            {`Compliance Monitoring Systems, LLC. is the premier state-wide
            service provider in Montana for cost effective electronic
            monitoring, alcohol monitoring, home detention, drug testing and
            pre-trial services. CMS is the leader in the most accurate and
            innovative technology operable in Montana. CMS is the largest SCRAM
            service provider in Montana, providing 75% of SCRAM services
            throughout the state. We offer alcohol monitoring (SCRAM) for high
            risk offenders that is both evidence based and court accepted as
            well as alcohol monitoring for low risk individuals through Remote
            Breath testing, twice daily PBT's, and semi-quantitative in-house
            EtG's. CMS utilizes more than one manufacturer of electronic
            monitoring equipment so that we may provide the best solution for
            each agency's unique demographics based on location, cell service,
            GPS signal and specific court/agency needs (GPS tracking and Home
            Detention). CMS has an in-house drug testing lab utilizing Siemens
            Viva E EMIT drug testing methodology (urinalysis lab) that allows us
            to process our own urine samples within minutes of the sample
            entering our lab. CMS is a local distributor for the PharmChem Drugs
            of Abuse Sweat Patch for individuals who are unable to travel for
            urinalysis or are in need of 24/7 drug testing.`}
          </p>
          <h2>Mission Statement</h2>
          <p>
            Through continuous monitored alcohol abstinence and innovative drug
            testing, Compliance Monitoring Systems is committed to effectively
            partnering with the criminal justice system and community agencies
            to promote and assist in the maintenance of a sober, responsible and
            accountable community while providing a cost-effective alternative
            to incarceration.
          </p>
          <h2>Endorsements</h2>
          <MediaQuery query="(min-width: 779px)">
            <img src={Endorsement1} width={"50%"} />
          </MediaQuery>
          <MediaQuery query="(max-width: 780px)">
            <img src={Endorsement1} width={"100%"} />
          </MediaQuery>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
