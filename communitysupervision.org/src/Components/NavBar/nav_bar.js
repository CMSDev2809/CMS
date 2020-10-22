import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton/link_button";
import { Grid, Row, Col } from "react-bootstrap";
import Media from "react-media";
import Fade from "react-reveal/Fade";
import Med from "../../config";
import "./nav_bar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderStatus: false,
      linkAnims: false,
    };
  }

  linkAnims(component, delay) {
    return (
      <div>
        {this.state.linkAnims ? (
          <Fade left delay={delay} spy={this.state.sliderStatus}>
            {component}
          </Fade>
        ) : (
          <div>{component}</div>
        )}
      </div>
    );
  }

  linkButtons(linkButtonFontSize, animate) {
    const delayInc = 0;
    let delay = 0;
    const components = [
      <LinkButton fontSize={linkButtonFontSize} text={"Home"} route={"/"} />,
      <LinkButton
        fontSize={linkButtonFontSize}
        text={"Services"}
        route={"/services"}
      />,
      <LinkButton
        fontSize={linkButtonFontSize}
        text={"About Us"}
        route={"/about_us"}
      />,
      <LinkButton
        fontSize={linkButtonFontSize}
        text={"Contact"}
        route={"/contact"}
      />,
      <LinkButton
        fontSize={linkButtonFontSize}
        text={"Indigent Funding Request"}
        route={"/apply"}
      />,
      <LinkButton
        fontSize={linkButtonFontSize}
        text={"Refer"}
        route={"/refer"}
      />,
    ];
    return (
      <div className="link_buttons">
        {components.map((element) =>
          this.linkAnims(element, (delay += delayInc))
        )}
      </div>
    );
  }

  render() {
    const sliderClass = this.state.sliderStatus ? "slider-show" : "slider-hide";
    return (
      <div className="nav_bar">
        {this.props.layout === "header" ? (
          <div>
            <div className="nav_bar-header">
              <div className="link_buttons-container">
                <Media query={`(min-width: ${Med.limit}px)`}>
                  {this.linkButtons(18)}
                </Media>
                <Media query={`(max-width: ${Med.limit - 1}px)`}>
                  <div
                    className="bars"
                    onClick={() =>
                      this.setState({ sliderStatus: !this.state.sliderStatus })
                    }
                  >
                    <i class="fas fa-bars" />
                  </div>
                </Media>
              </div>
              <div className="nav_img">
                <LinkButton text={"CSS"} img={true} route={"/"} />
              </div>
            </div>
            <Media query={`(max-width: ${Med.limit - 1}px)`}>
              <div className={sliderClass}>
                <div
                  style={{
                    float: "right",
                    marginTop: "-40px",
                    marginBottom: "10px",
                  }}
                >
                  {this.linkButtons(14, true)}
                </div>
              </div>
            </Media>
          </div>
        ) : (
          <div className="nav_bar-footer">
            <div className="footer_links">
              <Link to={"/"}>Home</Link>
              <Link to={"/services"}>Services</Link>
              <Link to={"/about_us"}>About Us</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/apply"}>Indigent Funding Request</Link>
              <Link to={"/refer"}>Refer</Link>
            </div>
            <div className="nav_img">
              <LinkButton text={"CSS"} small={true} img={true} route={"/"} />
            </div>
            <Media query={`(min-width: ${Med.limit * 1.25}px)`}>
              <div className="copyright">
                Copyright Community Supervision Services © 2020
              </div>
            </Media>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
