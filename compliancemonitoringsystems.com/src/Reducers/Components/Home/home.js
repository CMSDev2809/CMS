import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/header";
import CustomCarousel from "../Carousel/carousel";
import Footer from "../Footer/footer";
import ServicesNav from "../ServicesNav/services_nav";
import MediaQuery from "react-responsive";

import config from "../../config";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <CustomCarousel />
          <h1>Superior Service with Quality Products</h1>
          <ServicesNav />
          <p>
            {`Compliance Monitoring Systems is Montana's leading provider of
            Electronic Monitoring and Program Services - combining the most
            trusted and proven technology to get the most accurate results in
            the market. Through state of the art technology and innovative
            monitoring programs, our alcohol and substance monitoring, drug
            testing and GPS tracking is setting the standards in Montana. With
            the exceptional customer service, Compliance Monitoring Systems is
            committed to working with the criminal justice system and community
            agencies to promote and assist in the maintenance of a sober,
            responsible and accountable community while providing a
            cost-effective alternative to incarceration.`}
          </p>
        </div>
        <Footer excl={"home"} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
