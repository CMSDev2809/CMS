import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./react_carousel.css";

import Img1 from "./img/slide1.jpg";
import Img2 from "./img/slide2.jpg";
import Img3 from "./img/slide3.jpg";

class ReactCarousel extends Component {
  render() {
    return (
      <div className="react_carousel">
        <div className="carousel">
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            showThumbs={false}
            width={"100%"}
          >
            <div>
              <img alt={""} src={Img1} />
            </div>
            <div>
              <img alt={""} src={Img2} />
            </div>
            <div>
              <img alt={""} src={Img3} />
            </div>
          </Carousel>
        </div>
        <div className="react_carousel-text">
          <div style={{ float: "right" }}>Community Supervision Services</div>
        </div>
        <Link to={"/services"}>
          <div className="react_carousel-text_button">
            Services and Technologies
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ReactCarousel);
