import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Grid, Col, Row } from "react-bootstrap";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Stories from "./exportedStories";
import Story from "../Story/story";
import MediaQuery from "react-responsive";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

class Glide extends Component {
  render() {
    const content = [
      {
        title: "yo",
        description: "yolo"
      },
      {
        title: "yo2",
        description: "yolo2"
      }
    ];
    return (
      <div className="home">
        <div className="container">
          <Header />
          <div className={"glide"}>
            <Slider>
              {content.map((article, index) => (
                <div key={index}>
                  <h2>{article.title}</h2>
                  <h3>{article.description}</h3>
                  <img src={require("./img/img_kpax.png")} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Glide);
