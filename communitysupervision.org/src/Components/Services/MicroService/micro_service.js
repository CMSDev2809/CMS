import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./micro_service.css";

import Img1 from "./img/service_1-alt.png";
import Img2 from "./img/service_2-alt.png";
import Img3 from "./img/service_3-alt.png";
import Img4 from "./img/service_4-alt.png";
import Img5 from "./img/service_5-alt.png";
import Img6 from "./img/service_6-alt.png";
import Img7 from "./img/service_7-alt.png";

const Images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

class MicroService extends Component {
  render() {
    const className = this.props.simple
      ? "micro_service-simple"
      : "micro_service";
    const className2 = this.props.simple
      ? "micro_service-outline-simple"
      : "micro_service-outline";
    const outline =
      this.props.title === this.props.selectedService
        ? "micro_service-simple_outline"
        : "";
    return (
      <Link
        style={{
          textDecoration: "none",
          color: "inherit"
        }}
        to={this.props.link}
      >
        {this.props.useIcons ? (
          <div className="icon_link">
            <img src={Images[this.props.img - 1]} />
          </div>
        ) : (
          <div className={className}>
            <div className={outline}>
              <img src={Images[this.props.img - 1]} />
            </div>
            {this.props.simple ? (
              <h2>{this.props.title}</h2>
            ) : (
              <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
              </div>
            )}
            <div className={className2} />
          </div>
        )}
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  selectedService: state.serviceReducer.serviceReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MicroService);
