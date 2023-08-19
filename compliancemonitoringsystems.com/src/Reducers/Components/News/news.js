import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Grid, Col, Row } from "react-bootstrap";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Stories from "./exportedStories";
import Story from "../Story/story";
import MediaQuery from "react-responsive";
import fns from "../../fns";

class News extends Component {
  state = {
    activeStoryIndex: 0,
    stories: this.assignStories(0),
    infoDivClass: "fadeIn",
    paraText: Stories[0].title,
    paraImg: Stories[0].img,
    paraPreview: Stories[0].paraPreview,
    paraVid: Stories[0].paraVid,
    paraCreditText: Stories[0].creditText,
    leftStoryAnim: "",
    centerStoryAnim: "",
    rightStoryAnim: ""
  };

  assignStories(index) {
    return Stories.map((value, arrayIndex) => (
      <Story
        className={""}
        settings={value}
        large={index === arrayIndex ? true : false}
        opacity={1}
      />
    ));
  }

  fadeIn() {
    setTimeout(
      () =>
        this.setState({
          infoDivClass: "fadeIn",
          paraText: Stories[this.state.activeStoryIndex].title,
          paraImg: Stories[this.state.activeStoryIndex].img,
          paraPreview: Stories[this.state.activeStoryIndex].paraPreview,
          paraVid: Stories[this.state.activeStoryIndex].paraVid,
          paraCreditText: Stories[this.state.activeStoryIndex].creditText
        }),
      500
    );
  }

  decrementStoryIndex() {
    const activeStoryIndex =
      this.state.activeStoryIndex === 0
        ? Stories.length - 1
        : this.state.activeStoryIndex - 1;
    this.setState({
      activeStoryIndex,
      stories: this.assignStories(activeStoryIndex),
      infoDivClass: "fadeOut",
      leftStoryAnim: "_moveToCenterFromLeft",
      centerStoryAnim: "_moveToRightFromCenter",
      rightStoryAnim: "_moveToLeftFromRight"
    });
    this.fadeIn();
  }

  incrementStoryIndex() {
    const activeStoryIndex =
      this.state.activeStoryIndex === Stories.length - 1
        ? 0
        : this.state.activeStoryIndex + 1;
    this.setState({
      activeStoryIndex,
      stories: this.assignStories(activeStoryIndex),
      infoDivClass: "fadeOut",
      leftStoryAnim: "_moveToRightFromLeft",
      centerStoryAnim: "_moveToLeftFromCenter",
      rightStoryAnim: "_moveToCenterFromRight"
    });
    this.fadeIn();
  }

  renderStories() {
    const cellDivisor = 4;
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={cellDivisor} sm={cellDivisor} md={cellDivisor}>
              <div className={this.state.leftStoryAnim}>
                {
                  this.state.stories[
                    this.state.activeStoryIndex < 1
                      ? Stories.length - 1
                      : this.state.activeStoryIndex - 1
                  ]
                }
              </div>
            </Col>
            <Col xs={cellDivisor} sm={cellDivisor} md={cellDivisor}>
              <div className={this.state.centerStoryAnim}>
                {this.state.stories[this.state.activeStoryIndex]}
              </div>
            </Col>
            <Col xs={cellDivisor} sm={cellDivisor} md={cellDivisor}>
              <div className={this.state.rightStoryAnim}>
                {
                  this.state.stories[
                    this.state.activeStoryIndex >= Stories.length - 1
                      ? 0
                      : this.state.activeStoryIndex + 1
                  ]
                }
              </div>
            </Col>
          </Row>
        </Grid>
        {this.renderNavigation()}
        <span
          style={{
            display: "block",
            width: "100%",
            borderTop: "3px solid",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        />
      </div>
    );
  }

  renderNavigation() {
    return (
      <div>
        <center>
          <div style={{ display: "inline-block", marginTop: "20px" }}>
            <Button
              style={{ margin: "10px", width: "100px" }}
              onClick={() => this.decrementStoryIndex()}
            >
              Previous
            </Button>
            <Button
              style={{ margin: "10px", width: "100px" }}
              onClick={() => this.incrementStoryIndex()}
            >
              Next
            </Button>
          </div>
        </center>
      </div>
    );
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <h1 style={{ marginBottom: "50px" }}>In the News</h1>
          {this.renderStories()}
          <div className={this.state.infoDivClass}>
            <div style={{ display: "flex", position: "relative" }}>
              <div className="rounded_img">
                <img src={this.state.paraImg} />
              </div>
              <MediaQuery query="(min-width: 779px)">
                <h2
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "20px",
                    left: "275px"
                  }}
                >
                  {this.state.paraText}
                </h2>
                <h3
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "0px",
                    left: "275px"
                  }}
                >
                  {Stories[this.state.activeStoryIndex].articleLink ? (
                    <a
                      href={`${Stories[this.state.activeStoryIndex]
                        .articleLink}`}
                      target="_blank"
                    >
                      Read the full story
                    </a>
                  ) : null}
                </h3>
              </MediaQuery>
              <MediaQuery query="(max-width: 780px)">
                <h2
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "20px",
                    left: "150px",
                    fontSize: "15px"
                  }}
                >
                  {this.state.paraText}
                </h2>
                <h3
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "0px",
                    left: "150px",
                    fontSize: "12px"
                  }}
                >
                  {Stories[this.state.activeStoryIndex].articleLink ? (
                    <a
                      href={`${Stories[this.state.activeStoryIndex]
                        .articleLink}`}
                      target="_blank"
                    >
                      Read the full story
                    </a>
                  ) : null}
                </h3>
              </MediaQuery>
            </div>
            <p style={{ marginTop: "35px" }}>{this.state.paraPreview}</p>
            <h3
              style={{
                marginTop: "-75px",
                marginBottom: "25px",
                marginLeft: "15px",
                fontSize: "18px",
                fontStyle: "italic"
              }}
            >{`${this.state.paraCreditText}`}</h3>
            {this.state.paraVid ? (
              <div style={{ marginBottom: "30px" }}>
                <MediaQuery query="(min-width: 779px)">
                  <div className="grow">
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "32px",
                        marginBottom: "0px"
                      }}
                    >
                      Video
                    </h2>
                    <iframe
                      width="100%"
                      height="250"
                      src={this.state.paraVid + "?showinfo=0&controls=1"}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 780px)">
                  <div className="static_vid">
                    <h2
                      style={{
                        textAlign: "left",
                        fontSize: "32px",
                        marginBottom: "0px"
                      }}
                    >
                      Video
                    </h2>
                    <iframe
                      width="100%"
                      height="250"
                      src={this.state.paraVid + "?showinfo=0&controls=1"}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </MediaQuery>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(News);
