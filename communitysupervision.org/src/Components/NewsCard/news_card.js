import React, { Component } from "react";
import { connect } from "react-redux";
import "./news_card.css";

import Img1 from "./img/1.jpg";
const Images = [Img1];

class NewsCard extends Component {
  render() {
    return (
      <a
        style={{ textDecoration: "none", color: "inherit" }}
        href={this.props.link}
        target={"blank"}
      >
        <div className="news_card">
          <img src={Images[this.props.img - 1]} />
          <h1>{this.props.title}</h1>
          <h2>{this.props.date}</h2>
          <p>{this.props.text}</p>
        </div>
      </a>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);
