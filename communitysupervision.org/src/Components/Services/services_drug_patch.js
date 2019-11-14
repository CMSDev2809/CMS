import React, { Component } from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ServiceDisplay from "./service_display";
import MicroServicesContainer from "./MicroServicesContainer/micro_services_container";
import { setService } from "../../Actions/service";
import Config from "../../config";
import "./services.css";
import "../Home/home.css";

import Img from "./img/drug_patch.png";
import ImgIcon from "./img/gps.jpg";

class ServicesDrugPatch extends Component {
  render() {
    this.props.setService("Drug Patch");
    return (
      <div className="home">
        <Header />
        <div className="services-container">
          <ServiceDisplay
            title={"Drug Patch"}
            img={Img}
            img_icon={ImgIcon}
            subTitle={"Reliable Transdermal Drug Metabolite Surveillance"}
            text={`PharmChek® drugs of abuse patch uses sweat as the specimen source. It provides an alternative to urine collection and offers a number of advantages. Because the sweat patch is worn on the skin for up to 10 days or longer, it not only acts as a deterrent to continued drug use, but also increases the window of detection to include any period when it is worn. With sweat testing - unlike urine - the parent drug as well as the drug metabolite can typically be detected. Therefore, it is easier to identify which drug was actually taken.`}
            subBlock={
              <div>
                <h2>
                  The following are the advantages of the PharmChek® drugs of
                  abuse sweat patch:
                </h2>
                <ul>
                  <li>Increased window of detection</li>
                  <li>Acts as a deterrent to drug abuse</li>
                  <li>Detects Parent Drug and Drug Metabolites</li>
                  <li>Variable Removal Date</li>
                  <li>Quick Application & Removal</li>
                  <li>No Urine Collections</li>
                  <li>No Sample Substitution</li>
                  <li>
                    No Sample Dilution Elimantes requirement for same-sex
                    collections as seen in other testing methods such as
                    urinalysis
                  </li>
                  <li>
                    Screens for: Marijuana, Cocaine, Opiates,
                    Amphetamine/Methamphetamine & PCP
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <MediaQuery query={`(min-width: ${Config.limit}px)`}>
          <MicroServicesContainer simple={false} />
        </MediaQuery>
        <MediaQuery query={`(max-width: ${Config.limit - 1}px)`}>
          <MicroServicesContainer
            simple={false}
            useIcons={true}
            hideServiceText={true}
          />
        </MediaQuery>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setService: service => dispatch(setService(service))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesDrugPatch);
