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

import Img from "./img/viva-e.png";
import ImgIcon from "./img/gps.jpg";

class ServicesUrinalysis extends Component {
  render() {
    this.props.setService("Urinalysis Drug Testing");
    return (
      <div className="home">
        <Header />
        <div className="services-container">
          <ServiceDisplay
            title={"Urinalysis"}
            img={Img}
            img_icon={ImgIcon}
            subTitle={"Precise and Accurate Drug Metabolite Analysis"}
            text={`Compliance Monitoring Systems began providing urinalysis services to Western Montana utilizing the Siemen’s Viva E Analyzer in 2012. Siemens’ Laboratories operate in 95% of all hospitals in the State of Montana and they are the industry leader with regards to the criminal justice system. The VIVA - E® System processes gold-standard Syva® EMIT® reagents for therapeutic drug monitoring (TDM), immunosuppressant drug monitoring (ISD), drugs of abuse testing (DAT), as well as performing validity testing of samples. Siemen’s VIVA-E® is built on a proven heritage of over 40 years of experience.`}
            subBlock={
              <div>
                <p>
                  CMS is able to provide these services in Western Montana
                  Judicial System including Probation and Parole offices, local
                  courts, treatment courts as well as child protective services.
                  CMS also began providing services to the private sector in the
                  form of pre-employment, reasonable suspicion and random
                  urinalysis testing for local businesses. The following are the
                  drugs monitored of the Siemens urinalysis.
                </p>
                <div style={{ display: "inline-flex" }}>
                  <ul>
                    <li>Amphetamine</li>
                    <li>Barbiturates</li>
                    <li>Benzodiazepines</li>
                    <li>Cocaine</li>
                    <li>
                      Ethyl Glucuronide (EtG-Alcohol) semi-quantitative results
                      for alcohol levels
                    </li>
                    <li>K2 (Spice)</li>
                    <li>Methadone</li>
                    <li>Opiates</li>
                    <li>
                      THC semi-quantitative results for cannabinoid levels
                    </li>
                    <li>Synthetic Opiates</li>
                    <li>
                      Diagnostic integrity through barcode sample identification
                    </li>
                    <li>
                      Tetrahydrocannabinol (THC-Marijuana) semi-quantitative
                      results for true THC levels
                    </li>
                  </ul>
                  <ul>
                    <li>99.9% accuracy</li>
                    <li>Processes 133 tests per hour</li>
                    <li>Ability to conduct up to 12 tests per sample</li>
                    <li>Results in as little as 15 minute</li>
                    <li>
                      Built on a proven heritage of over 40 years of experience
                    </li>
                  </ul>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ServicesUrinalysis);
