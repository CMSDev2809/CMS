import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import TransparentHeader from "../TransparentHeader/transparent_header";
import Logo from "./img/cms_logo.png";
import Img1 from "./img/drug_patch.png";
import Img2 from "./img/scram.png";
import Img3 from "./img/remote_breath.png";
import Img4 from "./img/house_arrest.png";
import Img5 from "./img/gps.png";
import Img6 from "./img/urinalysis.png";
import Img7 from "./img/pretrial_supervision.png";
import ServicesImport from "./services_new_list";
import "./services_new.css";

const Img = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

class Navigator extends Component {
  render() {
    const boxSize = [
      this.props.x2 - this.props.x1,
      this.props.y2 - this.props.y1
    ];
    return (
      <div className="navigator">
        <div>
          <div className="navigator-title">
            <h1>{this.props.title}</h1>
          </div>
          <div className="navigator-services">
            {this.props.services ? (
              this.props.services.map((element, index) => (
                <div style={{ position: "relative" }}>
                  <div
                    id={"backbox"}
                    className={
                      this.props.cardIndex === index
                        ? "navigator-card-selected-backbox"
                        : ""
                    }
                  />
                  <div
                    className={
                      this.props.cardIndex === index
                        ? "navigator-card-selected"
                        : "navigator-card"
                    }
                    onClick={() => {
                      const serviceTitle = {
                        primaryText: ServicesImport[index].title1,
                        secondaryText: ServicesImport[index].title2
                      };
                      this.props.setCard(serviceTitle, index, Img[index]);
                    }}
                  >
                    <div
                      className={
                        this.props.cardIndex === index
                          ? ""
                          : "navigator-card-dot"
                      }
                    />
                    <div className="navigator-card-content">
                      <h2>{element.h1}</h2>
                      <h3>{element.h2}</h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

class ServicesNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceTitle: {
        primaryText: ServicesImport[0].title1,
        secondaryText: ServicesImport[0].title2
      },
      focusImg: Img[0],
      cardIndex: 0,
      coordsObject: {
        activePosition: "top",
        top: [50, 0],
        right: [100, 50],
        topRight: [75, 7],
        topTopRight: [62.5, 2],
        left: [0, 50],
        bottom: [50, 100],
        bottomRight: [75, 93],
        bottomBottomRight: [62.5, 98],
        bottomRightRight: [87.5, 83],
        topRightRight: [87.5, 17]
      },
      linePoints: {
        p1: { x: "0px", y: "0px" },
        m: { x: "0px", y: "0px" },
        p2: { x: "0px", y: "0px" }
      },
      bulletList: [
        <li>NO CELL PHONE COVERAGE NEEDED</li>,
        <li>DEVICE AUTOMATICALLY TURNS ON FOR TESTING</li>,
        <li>DESIGNED FOR THE CRIMINAL JUSTICE SYSTEM</li>,
        <li>CAN SCHEDULE UP TO SIX TESTS DAILY</li>
      ]
    };
  }

  setLinePoints() {
    const unit = "%";
    this.setState({
      linePoints: {
        p1: { x: `${45 + unit}`, y: `${25 + unit}` },
        m: { x: `${"0" + unit + 50}`, y: `${0 + unit}` },
        p2: { x: `${"0" + unit}`, y: `${"0" + unit}` }
      }
    });
  }

  componentDidMount() {
    this.setFocusDotPosition("topRightRight");
    this.setLinePoints();
  }

  setFocusDotPosition(position) {
    const coordsObject = this.state.coordsObject;
    coordsObject.activePosition = position;
    this.setState({ coordsObject });
  }

  render() {
    const dotCoords = this.state.coordsObject[
      this.state.coordsObject.activePosition
    ];
    const serviceTitle = this.state.serviceTitle;
    return (
      <div className="services_new">
        <Header />
        <div className="page_content" id="page_content">
          <div className={"navigator-card-selected-line"}>
            <svg width="100%" height="100%" style={{ position: "absolute" }}>
              <line
                x1={`${this.state.linePoints.p1.x}`}
                y1={`${this.state.linePoints.p1.y}`}
                x2={`${this.state.linePoints.m.x}`}
                y2={`${this.state.linePoints.m.y}`}
                style={{ stroke: "rgb(0, 124, 204)", strokeWidth: "5" }}
              />
              <line
                x1={`${this.state.linePoints.m.x}`}
                y1={`${this.state.linePoints.m.y}`}
                x2={`${this.state.linePoints.p2.x}`}
                y2={`${this.state.linePoints.p2.y}`}
                style={{ stroke: "rgb(0, 124, 204)", strokeWidth: "5" }}
              />
            </svg>
          </div>
          <center>
            <div className="title_div-wrapper">
              <div className={"title_div"}>
                <img src={Logo} />
                <div className="title_div-text">
                  <h1>{serviceTitle.primaryText}</h1>
                  <h2>{serviceTitle.secondaryText}</h2>
                </div>
              </div>
            </div>
          </center>
          <div className="content-wrapper">
            <div className="focus_img-wrapper">
              <div className="focus_img">
                <img src={this.state.focusImg} />
                <div
                  className={"focus_img-dot"}
                  id={"focus-dot"}
                  style={{
                    top: `${dotCoords[1]}%`,
                    left: `${dotCoords[0]}%`
                  }}
                />
              </div>
              <div className="bullet_list">
                <ul>{this.state.bulletList}</ul>
              </div>
            </div>
            <div className="navigator-wrapper">
              <Navigator
                title={"CMS Programs Available"}
                services={ServicesImport}
                cardIndex={this.state.cardIndex}
                setCard={(serviceTitle, cardIndex, focusImg) =>
                  this.setState({ serviceTitle, cardIndex, focusImg })}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesNew);
