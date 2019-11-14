import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
import Home from "./Components/Home/home";
import Services from "./Components/Services/services";
import ServicesNew from "./Components/ServicesNew/services_new";
import ServicesGPS from "./Components/Services/services_gps";
import ServicesHouseArrest from "./Components/Services/services_house_arrest";
import ServicesScram from "./Components/Services/services_scram";
import ServicesRemoteBreath from "./Components/Services/services_remote_breath";
import ServicesDrugPatch from "./Components/Services/services_drug_patch";
import ServicesPretrialSupervision from "./Components/Services/services_pretrial_supervision";
import ServicesUrinalysis from "./Components/Services/services_urinalysis";
import AboutUs from "./Components/AboutUs/about_us";
import Contact from "./Components/Contact/contact";
import Refer from "./Components/Refer/refer";
import { history } from "./store";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} history={history} />
          <Route
            exact
            path="/services"
            component={Services}
            history={history}
          />
          <Route
            exact
            path="/services-gps"
            component={ServicesGPS}
            history={history}
          />
          <Route
            exact
            path="/services-house_arrest"
            component={ServicesHouseArrest}
            history={history}
          />
          <Route
            exact
            path="/services-scram"
            component={ServicesScram}
            history={history}
          />
          <Route
            exact
            path="/services-remote_breath"
            component={ServicesRemoteBreath}
            history={history}
          />
          <Route
            exact
            path="/services-drug_patch"
            component={ServicesDrugPatch}
            history={history}
          />
          <Route
            exact
            path="/services-pretrial_supervision"
            component={ServicesPretrialSupervision}
            history={history}
          />
          <Route
            exact
            path="/services-urinalysis"
            component={ServicesUrinalysis}
            history={history}
          />
          <Route exact path="/about_us" component={AboutUs} history={history} />
          <Route exact path="/contact" component={Contact} history={history} />
          <Route exact path="/refer" component={Refer} history={history} />
        </div>
      </Router>
    );
  }
}
