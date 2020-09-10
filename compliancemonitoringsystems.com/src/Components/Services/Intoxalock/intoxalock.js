import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import Img from "./img/intoxalock.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fns from "../../../fns";
import Config from "../../../config";
import "./intoxalock.css";

class Intoxalock extends Component {
  componentDidMount() {
    fns.autoScroll();
  }

  render() {
    let divSpace = 30;
    return (
      <div className={"intox"}>
        <h1 style={{ textAlign: "left" }}>Intoxalock</h1>
        <img alt={""} src={Img} style={{ width: "100%" }} />
        <ServicesNav />
        <table width={"100%"}>
          <tbody>
            <tr>
              <td>
                <img src={require("./img/promo1.png")} width={"100%"} />
              </td>
              <td>
                <img src={require("./img/promo2.png")} width={"100%"} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={"block"}>
          <h2>What is an Ignition Interlock Device?</h2>
          <div>
            Most people are required to install an ignition interlock device
            after a drunk driving conviction. Voluntary alcohol monitoring
            options are also available to help guarantee sober driving.
          </div>
          <div>
            An ignition interlock device, often referred to as a car
            breathalyzer, is a small, hand-held breathalyzer that is installed
            in your car. The device has a mouthpiece in it that you will blow
            into before starting your car. With a clean breath sample, you'll
            immediately be able to start your car.
          </div>
          <div>
            Intoxalock's state specialists are ready to answer your questions
            and help you through the process, one step at a time. It takes less
            than 10 minutes.
          </div>
          <div>
            Because of our exclusive partnership, you may be eligible for a free
            Intoxalock ignition interlock installation.{" "}
            <b>
              Call (833) 382-0400 or{" "}
              <a
                href={
                  "https://intoxalock.com/partners/preferred-quick-start?refcode=CMS"
                }
              >
                click here
              </a>{" "}
              to get started now.
            </b>
          </div>
          <h2 style={{ marginTop: "45px", marginBottom: "45px" }}>
            Why Choose Intoxalock?
          </h2>
          <div className={"block"}>
            <h2>The easiest device.</h2>
            <div>
              We provide an industry leading ignitoin interlock device that is
              easy to use with its simple blow pattern and one button keypad.
              When you compare Intoxalock to other ignition interlock devices in
              the market, it's easy to see why it's a top choice among
              customers, state administrators, attorneys and more.
            </div>
          </div>
          <div className={"block"}>
            <h2>The most convenient locations.</h2>
            <div>
              Intoxalock has more locations as any other provider. In fact, we
              have a location within 15 miles of over 91% of our customers. Our
              installers are professional, trained and certified. Same or
              next-day install is available in most areas.{" "}
              <b>
                Call (833) 382-0400 or{" "}
                <a
                  href={
                    "https://intoxalock.com/partners/preferred-quick-start?refcode=CMS"
                  }
                >
                  click here
                </a>{" "}
                to find an installation and service locations near you.
              </b>
            </div>
          </div>
          <div className={"block"}>
            <h2>24/7/365 support from bi-lingual state-specific experts.</h2>
            <div>
              Many Intoxalock Ignition Interlock representatives have been in
              your shoes. We understand that this can happen to anyone and are
              here to help you. We are your partner through the process and can
              educate you on state ignition interlock device laws and
              regulations
            </div>
            <div>
              Plus, you can easily manage your account, check calibration and
              billing dates, make payments, and more from the free Intoxalock
              Mobile App
            </div>
          </div>
          <div className={"block"}>
            <h2>Affordable pricing with flexible payment options.</h2>
            <div>
              Ignition interlock devices are leased (or rendted), not purchased,
              The cost of your individual monthly lease payment will depend on
              several factors. On average, Intoxalock devices cost around $2.50
              a day. Voluntary customers are eligible for a substantial
              discount.
            </div>
            <div>
              Intoxalock's pricing is affordable and provides the beest value to
              customers. Intoxalock allows for either montly or bi-weekly
              payment options to help you manage the costs associated with
              ignition interlock devices. Some state offer discounts or
              financial assistance for ignition interlock devices or
              installation.
            </div>
            <div>
              <b>
                Call (833) 382-0400 or{" "}
                <a
                  href={
                    "https://intoxalock.com/partners/preferred-quick-start?refcode=CMS"
                  }
                >
                  click here
                </a>{" "}
                to get a free quote now.
              </b>
            </div>
          </div>
          <div className={"block"}>
            <h2>A trusted, industry leading company.</h2>
            <div>
              Intoxalock has been in business for over 30 years, and is an
              industry leading provider of ignition interlock devices serving
              more than 150,000 customers annually. Intoxalock has more 5-star
              reviews on TrustPilot than any other ignition interlock provider,
              and we are the only interlock company to never be decertified or
              suspended from a state due to compliance violations. Our ignition
              interlock devices meet state requirements in 46 states across the
              nation, and our alcohol monitoring products are used in all 50
              states.
            </div>
          </div>
          <div className={"block"}>
            <h2>SPECIAL OFFER: FREE INSTALL!</h2>
            <div>
              Because of Intoxalock's partnership with Compliance Monitoring
              Systems, you are eligible for a FREE Intoxalock Ignitino Interlock
              installation!
            </div>
            <div>
              Call now and ask for the Free Installation rebate, which will
              provide an account credit of up to $100 for the cost of your
              installation. <b>Call for full offer details: (833) 382-0400</b>.
            </div>
          </div>
        </div>
        {/*
        <Link to={"/paternity_testing"}>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Intoxalock);
