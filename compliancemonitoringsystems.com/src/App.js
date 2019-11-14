import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
import Home from "./Components/Home/home";
import Services from "./Components/Services/services";
import AboutUs from "./Components/About_Us/about_us";
import Contact from "./Components/Contact/contact";
import PayOnline from "./Components/PayOnline/pay_online";
import Scram from "./Components/FAQ/scram";
import RemoteBreath from "./Components/FAQ/remote_breath";
import GPS from "./Components/FAQ/gps";
import Urinalysis from "./Components/FAQ/urinalysis";
import HouseArrest from "./Components/FAQ/house_arrest";
import PaternityTesting from "./Components/FAQ/paternity_testing";
import DrugPatch from "./Components/FAQ/drug_patch";
import Refer from "./Components/Refer/refer";
import News from "./Components/News/news";
//import News from "./Components/News/glide";
import { history } from "./store";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about_us" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/scram" component={Scram} />
          <Route exact path="/remote_breath" component={RemoteBreath} />
          <Route exact path="/gps" component={GPS} />
          <Route exact path="/drug_patch" component={DrugPatch} />
          <Route exact path="/paternity_testing" component={PaternityTesting} />
          <Route exact path="/house_arrest" component={HouseArrest} />
          <Route exact path="/urinalysis" component={Urinalysis} />
          <Route exact path="/pay" component={PayOnline} />
          <Route exact path="/referral" component={Refer} />
          <Route exact path="/news" component={News} />
        </div>
      </Router>
    );
  }
}
