import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import { connect } from "react-redux";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Config from "../../config";

class CustomCarousel extends Component {
  render() {
    return (
      <div className={"carousel"}>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={true}
          width={"100%"}
        >
          <div className={"img-content"}>
            <img alt={""} src={require("./img/homeslider1.png")} />
          </div>
          <div className={"img-content"}>
            <img alt={""} src={require("./img/homeslider2.png")} />
          </div>
          <div className={"img-content"}>
            <img alt={""} src={require("./img/homeslider3.png")} />
          </div>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CustomCarousel);
