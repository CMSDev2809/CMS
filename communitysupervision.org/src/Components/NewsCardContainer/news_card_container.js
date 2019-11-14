import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
import "./news_card_container.css";

class NewsCardContainer extends Component {
  render() {
    const colsPerRow = 3;
    let comps = [];
    let temp = [];
    for (let i = 0; i < this.props.newsCards.length; i++) {
      if (i % colsPerRow === 0 && i > 0) {
        comps.push(<Row>{temp}</Row>);
        temp = [];
      }
      temp.push(<Col sm={12 / colsPerRow}>{this.props.newsCards[i]}</Col>);
    }
    if (temp.length > 0) {
      comps.push(<Row>{temp}</Row>);
    }
    return (
      <div className="news_card_container">
        <center>
          <Grid>{comps}</Grid>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewsCardContainer);
