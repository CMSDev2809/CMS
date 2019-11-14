import React, { Component } from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";
import Form from "./form";
import { Grid, Row, Col } from "react-bootstrap";
import ShoppingCart from "../ShoppingCart/shopping_cart";
import Highlighter from "./highlighter";
import Development from "../Development/development";

class Checkout extends Component {
  render() {
    return (
      <div>
        <h1>Pay Online</h1>
        <p>
          {`Compliance Monitoring Systems allows you to pay off an invoice online
          in one easy step.`}
        </p>
        <Grid>
          <Row className="show-grid">
            <Col xl={12} md={5}>
              <Form />
            </Col>
            <MediaQuery query="(min-width: 995px)">
              <Col xl={0} md={7}>
                <Highlighter />
              </Col>
            </MediaQuery>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
