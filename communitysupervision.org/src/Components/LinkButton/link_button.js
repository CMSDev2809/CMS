import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import "./link_button.css";

class LinkButton extends Component {
  specialFn() {
    if (this.props.fn) {
      this.props.fn();
    }
  }

  render() {
    const className = this.props.small ? "link_img-small" : "link_img";
    const customFontSize = this.props.fontSize
      ? { fontSize: `${this.props.fontSize}px` }
      : {};
    return (
      <div onClick={() => this.specialFn()}>
        {this.props.img ? (
          <div className={className}>
            <div style={customFontSize}>
              {this.props.route ? (
                <Link to={this.props.route}>{this.props.text}</Link>
              ) : (
                this.props.text
              )}
            </div>
          </div>
        ) : (
          <div className="link_button">
            <div style={customFontSize}>
              {this.props.route ? (
                <Link to={this.props.route}>{this.props.text}</Link>
              ) : (
                this.props.text
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LinkButton);
