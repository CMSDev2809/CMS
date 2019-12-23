import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import Locations from "../../../../../locationList";
import {
  setSelectedLocation,
  setLocationModalToggle,
  setNavModal
} from "../../../Actions/locationActions";
import MediaQuery from "react-responsive";
import { SlideToggle } from "react-slide-toggle";
import "./locations_nav.css";

class NavBar extends Component {
  render() {
    let navArray = [];
    for (let key in Locations) {
      navArray.push(
        <div>
          <Button
            onClick={() => {
              this.props.setSelectedLocation(Locations[key]);
              this.props.setLocationModalToggle(false);
              this.props.setNavModal(false);
            }}
            style={
              this.props.locationModalToggle
                ? { width: "175px", marginBottom: "3px" }
                : { width: "250px" }
            }
          >
            <div
              class="glyphicon glyphicon-hand-right"
              style={{ marginRight: "10px", float: "left" }}
            />
            <div style={{ float: "left" }}>{Locations[key].locationName}</div>
          </Button>
        </div>
      );
    }
    return (
      <div className="locationsNav" style={{ float: "right" }}>
        <MediaQuery query="(max-width: 779px)">
          <Modal
            show={
              this.props.locationModalToggle
                ? this.props.locationModalToggle
                : false
            }
            style={{
              width: "250px",
              zIndex: 5000,
              marginTop: "65px"
            }}
            backdrop={false}
          >
            <Modal.Body>
              <h3>Other Locations</h3>
              {navArray}
            </Modal.Body>
          </Modal>
        </MediaQuery>
        <MediaQuery query="(min-width: 780px)">
          <h3>Other Locations</h3>
          {navArray}
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedLocation: state.locationReducer.selectedLocation,
  locationModalToggle: state.locationReducer.locationModalToggle
});

const mapDispatchToProps = dispatch => ({
  setSelectedLocation: location => dispatch(setSelectedLocation(location)),
  setLocationModalToggle: boolean => dispatch(setLocationModalToggle(boolean)),
  setNavModal: boolean => dispatch(setNavModal(boolean))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
