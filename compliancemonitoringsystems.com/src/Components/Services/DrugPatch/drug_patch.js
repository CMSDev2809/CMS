import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import Img from "./img/services_drug_patch2.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fns from "../../../fns";
import Config from "../../../config";

class DrugPatch extends Component {
  componentDidMount() {
    fns.autoScroll();
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>Drug Patch</h1>
        <img alt={""} src={Img} style={{ width: "100%" }} />
        <ServicesNav />
        <p>
          PharmChek® drugs of abuse patch uses sweat as the specimen source. It
          provides an alternative to urine collection and offers a number of
          advantages. Because the sweat patch is worn on the skin for up to 10
          days or longer, it not only acts as a deterrent to continued drug use,
          but also increases the window of detection to include any period when
          it is worn. With sweat testing - unlike urine - the parent drug as
          well as the drug metabolite can typically be detected. Therefore, it
          is easier to identify which drug was actually taken. The following are
          the advantages of the PharmChek® drugs of abuse sweat patch:
        </p>
        <ul style={{ marginTop: "-50px" }}>
          <li>Increased window of detection</li>
          <li>Acts as a deterrent to drug abuse</li>
          <li>Detects Parent Drug and Drug Metabolites</li>
          <li>Variable Removal Date</li>
          <li>Quick Application & Removal</li>
          <li>No Urine Collections</li>
          <li>No Sample Substitution</li>
          <li>
            No Sample Dilution Elimantes requirement for same-sex collections as
            seen in other testing methods such as urinalysis
          </li>
          <li>
            Screens for: Marijuana, Cocaine, Opiates,
            Amphetamine/Methamphetamine & PCP
          </li>
        </ul>
        <div>
          <video width="400" height="300" controls>
            <source src={require("./pharmcheck.mp4")} type="video/mp4" />
          </video>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <b>
            <i>Video courtesy of pharmcheck.com</i>
          </b>
        </div>
        <Link to={"/drug_patch"}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrugPatch);
