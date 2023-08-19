import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Img from "../Services/Scram/img/services_alcohol_monitoring.png";
import { Button } from "react-bootstrap";
import Config from "../../config";

class Scram extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <img alt={""} src={Img} style={{ width: "100%" }} />
          <h1 style={{ margin: "50px" }}>Scram Questions and Answers</h1>
          <p3
          >{`I’ve been court ordered to wear a SCRAM Continuous Alcohol Monitoring
                Bracelet but I don’t know where to go to get started.`}</p3>
          <p2>
            {`The court or agency referring you to CAM may manage your monitoring
              internally or have a specific company they would like you to go to for
              the monitoring. If the court did not provide you with that information, you can use our `}
            <a
              href="https://www.scramsystems.com/providers/"
              style={{ color: "blue" }}
              target="blank"
            >
              Service Provider Locator
            </a>
            {` to find the closest provider in your area.`}
          </p2>
          <p3
          >{`Do I have to be court ordered to wear a SCRAM CAM Bracelet?`}</p3>
          <p2>
            {`No. You may voluntarily participate in the SCRAM CAM program. To get more information
              on how to voluntarily enroll in a SCRAM program, please contact your local `}
            <a
              href="https://www.scramsystems.com/providers/"
              style={{ color: "blue" }}
              target="blank"
            >
              Service Provider Locator
            </a>
            {`.`}
          </p2>
          <p3>{`How much does it cost to wear SCRAM CAM?`}</p3>
          <p2>{`There is typically a one-time installation fee and a requirement
              that you pay all or contribute to the daily monitoring fee. Program
              charges can vary based on your individual sentence, local program parameters,
              other financial obligations, etc., so you will need to talk with your
              supervising agency or local SCRAMSystems Authorized Service Provider for details.`}</p2>
          <p3>{`Does the bracelet make noise?`}</p3>
          <p2>{`When the SCRAM CAM Bracelet takes a reading every 30 minutes, a
              light buzzing sound can be heard, but is generally reported to be "discreet."`}</p2>
          <p3
          >{`I have a digital phone line. Will that work with the SCRAM Base Station?`}</p3>
          <p2
          >{`The SCRAM Base Station can work with an analog or digital phone line.`}</p2>
          <p3
          >{`What products should I refrain from using while wearing SCRAM CAM?`}</p3>
          <p2
          >{`We recommend you avoid using any products on or near the bracelet that contain
              alcohol. The application of small quantities of cologne or perfume in areas far
              from the bracelet should not be problematic. Avoid lotions or any other
              products with alcohol on or near the bracelet.`}</p2>
          <p3>{`Can I travel and go through TSA screening?`}</p3>
          <p2
          >{`Whether or not you can travel and leave your current jurisdiction is up to your supervising
              agency. Please be sure to check first with your agent. We also recommend that you carry
              your paperwork that addresses your participation in a SCRAM CAM monitoring program. When
              passing through security, inform the TSA agent that you are wearing an electronic monitoring
              device that you cannot remove. The TSA agent may “swab” the bracelet and test it. However,
              you should be permitted to pass through security while wearing theSCRAM CAM Bracelet.`}</p2>
          <p3
          >{`Is it safe to wear SCRAM CAM during an MRI, X-Ray, or CT scan?`}</p3>
          <p2
          >{`You cannot wear a monitoring bracelet if you need an MRI. You will need to contact your
              supervising agent prior to a scheduled appointment to make arrangements to have the bracelet
              removed prior to the procedure. Your agent may have additional requirements.`}</p2>
          <p3
          >{`Can I exercise with the bracelet on? Will it flop around and will that register as tampering?`}</p3>
          <p2
          >{`Exercise will have no impact to the functions of the bracelet. For comfort, you might want to
              wear a sweat band or a sock rolled down to prevent the bracelet from “bouncing” on the ankle
              bone. Just make sure nothing gets between the bracelet and leg.`}</p2>
          <p3>{`Can I wear boots or leggings?`}</p3>
          <p2
          >{`You can’t wear anything that would go between the skin and the bracelet. You can wear boots or
              leggings over the top, but be cautious that boots could cause the bracelet to rub and
              even create a blister.`}</p2>
          <p3
          >{`Will I set off alarms when I go through security checkpoints, like leaving a department or convenience store?`}</p3>
          <p2
          >{`No. It's no different than your cell phone or any other jewelry you might wear.`}</p2>
          <p3>{`Can I shower? What about swimming or hot tubs?`}</p3>
          <p2
          >{`While you are not allowed to submerge the bracelet in water (swimming pools, hot tubs, the
              bath tub), you can shower, and in fact you need to shower in order to keep the area around the
              bracelet clean. You can check out the SCRAM CAM Participant Video for a demonstration of the
              best way to clean regularly around the bracelet.`}</p2>
          <p3>{`Can I wear cologne or perfume?`}</p3>
          <p2
          >{`We recommend that you avoid using any products on or near the bracelet that contain
              alcohol. The application of a small amount of cologne or perfume in areas far from
              the bracelet should not be problematic. But please be aware that if it does trigger
              an alcohol alert, you will be held accountable with your supervising agent.`}</p2>
          <p3>{`What lotions can I wear?`}</p3>
          <p2>{`Avoid lotions with alcohol on or near the bracelet.`}</p2>
          <p3>{`Can I spray tan?`}</p3>
          <p2>{`Absolutely not.`}</p2>
          <p3>{`Can I use hair coloring/hair dye?`}</p3>
          <p2
          >{`We recommend that SCRAM CAM clients refrain from using any alcohol-containing products on or
              around the bracelet. Many clients are exposed to hair color and other similar products without
              any noticeable transdermal alcohol concentration (TAC) detections. When in doubt, we recommend
              reporting the questionable activity to your PO or supervising agent so that notes may be
              placed in your client record to take the activity into consideration while analyzing the data.`}</p2>
          <p3>{`What if I kiss someone who has been drinking?`}</p3>
          <p2
          >{`Kissing someone who has been drinking has no impact on SCRAM CAM testing or results.`}</p2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Scram);
