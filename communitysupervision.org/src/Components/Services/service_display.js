import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class ServicesGPS extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Fade left delay={0}>
          <h1>{this.props.title}</h1>
        </Fade>
        <div className="service_display">
          <Fade left delay={500}>
            <div className="custom_image">
              <img src={this.props.img} />
            </div>
          </Fade>
          <div style={{ display: "block" }}>
            <Fade left delay={1000}>
              <h2>{this.props.subTitle}</h2>
              <p>{this.props.text}</p>
            </Fade>
          </div>
        </div>
        <Fade left delay={1500}>
          {this.props.subBlock ? this.props.subBlock : <div />}
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesGPS);
