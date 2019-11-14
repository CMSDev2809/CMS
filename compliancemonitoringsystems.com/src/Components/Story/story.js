import React, { Component } from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";

class Story extends Component {
  render() {
    const width = this.props.large ? 100 : 85;
    const marginTop = this.props.large ? 20 : 0;
    const marginLeft = this.props.large ? 0 : 7.5;
    return (
      <div
        style={{
          opacity: `${this.props.opacity}`,
          width: `100%`,
          display: "inline-block",
          textAlign: "center",
          marginTop: `${marginTop}px`
        }}
      >
        <img
          alt={""}
          src={this.props.settings.img}
          width={`${width}%`}
          style={{
            borderWidth: "4px",
            borderStyle: "solid",
            borderRadius: "0px",
            padding: "1px",
            borderColor: "rgb(64, 64, 64)"
          }}
        />
        <div
          style={{
            textAlign: "left",
            fontWeight: "bold",
            marginLeft: `${marginLeft}%`
          }}
        >
          <MediaQuery query="(min-width: 779px)">
            {this.props.settings.title}
          </MediaQuery>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Story);
