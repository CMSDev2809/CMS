import React, { Component } from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import MicroServicesContainer from "./MicroServicesContainer/micro_services_container";
import { setService } from "../../Actions/service";
import TransparentHeader from "../TransparentHeader/transparent_header";
import Config from "../../config";
import "../Home/home.css";

import BannerImg from "./img/banner.png";

class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    this.props.setService("");
    return (
      <div className="services">
        <Header />
        <TransparentHeader title={"Solutions"} titleColor={"white"} />
        <MediaQuery query={`(min-width: ${Config.limit}px)`}>
          <MicroServicesContainer simple={false} />
        </MediaQuery>
        <MediaQuery query={`(max-width: ${Config.limit - 1}px)`}>
          <MicroServicesContainer simple={false} useIcons={true} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Services);
