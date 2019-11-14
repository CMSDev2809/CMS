import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Media from "react-media";
import "./text_pic_block.css";
import Med from "../../../config";

import Img1 from "./img/mtns.jpg";
import Img2 from "./img/abstract.jpg";
const Images = [Img1, Img2];

// - Available Props -
// textColor
// link
// linkText
// title
// subTitle
// text

class TextPicBlock extends Component {
  textBlock() {
    const style = this.props.textColor ? { color: this.props.textColor } : {};
    return (
      <div className="text_pic_block-text">
        <h1 style={style}>{this.props.title}</h1>
        <h2 style={style}>{this.props.subTitle}</h2>
        <p style={style}>{this.props.text}</p>
        {this.props.link ? (
          <Link to={this.props.link}>{this.props.linkText}</Link>
        ) : (
          <div />
        )}
      </div>
    );
  }

  imgBlock() {
    return (
      <div>
        {this.props.img ? (
          <div>
            <img src={Images[this.props.img - 1]} />
            <div className="text_pick_block-img-outline" />
          </div>
        ) : this.props.icon ? (
          <div>
            <i class={`${this.props.icon}`} />
            <div className="text_pick_block-icon-outline" />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }

  render() {
    const className =
      this.props.layout === 3 ? "text_pic_block-alt" : "text_pic_block";
    const altClassName =
      this.props.layout === 3 ? "text_pic_block-alt-background" : "";
    return (
      <div className={className}>
        {this.props.layout === 3 ? (
          <div />
        ) : this.props.layout === 2 ? (
          <Media query={`(min-width: ${Med.limit}px)`}>{this.imgBlock()}</Media>
        ) : (
          this.textBlock()
        )}
        <div className={altClassName}>
          {this.props.layout === 3 || this.props.layout === 2 ? (
            this.textBlock()
          ) : (
            <Media query={`(min-width: ${Med.limit}px)`}>
              {this.imgBlock()}
            </Media>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TextPicBlock);
