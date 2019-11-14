import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-responsive-modal";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import TransparentHeader from "../../TransparentHeader/transparent_header";
import { setLocation } from "../../../Actions/location";
import LinkButton from "../../LinkButton/link_button";
import Fade from "react-reveal/Fade";
import Media from "react-media";
import Med from "../../../config";
import "./location_nav.css";

class LocationNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.updateLocation("missoula");
  }

  updateLocation(key) {
    this.setState({ arrowClass: true });
    this.props.setLocationReducer(key);
    window.scrollTo(0, 0);
  }

  locations(fontSize, iconOffset) {
    let locations = [];
    for (let key in this.props.Locations) {
      locations.push(
        <div onClick={() => this.updateLocation(key)}>
          <div className="location_card">
            <i
              class="fas fa-angle-right"
              style={{ fontSize: "35px", marginTop: `${iconOffset}px` }}
            />
            <LinkButton
              text={this.props.Locations[key].locationName}
              fontSize={fontSize}
              fn={
                this.state.modalStatus
                  ? () => this.setState({ modalStatus: false })
                  : null
              }
            />
          </div>
        </div>
      );
    }
    return locations;
  }

  render() {
    const buttonOffset = 45;
    return (
      <div className="location_nav">
        <Modal
          showCloseIcon={false}
          open={this.state.modalStatus}
          onClose={() =>
            this.setState({ modalStatus: !this.state.modalStatus })}
          center
          styles={{
            overlay: {
              width: "100%"
            },
            modal: {
              width: "100%",
              borderRadius: "3px"
            }
          }}
        >
          <div style={{ marginTop: `-${buttonOffset}px` }}>
            <div
              className="location_nav-button"
              onClick={() =>
                this.setState({ modalStatus: !this.state.modalStatus })}
            >
              <h1>
                <i class="far fa-address-book" />
              </h1>
            </div>
          </div>
          <div style={{ marginTop: `${buttonOffset}px` }}>
            <h2>Other Locations</h2>
            {this.locations(18, 17.5)}
          </div>
        </Modal>
        <Media query={`(min-width: ${Med.limit}px)`}>
          <div className="location_nav-extended">
            <h2>Other Locations</h2>
            <div>{this.locations(30, 7.5)}</div>
          </div>
        </Media>
        <Media query={`(max-width: ${Med.limit - 1}px)`}>
          <div
            className="location_nav-button"
            onClick={() =>
              this.setState({ modalStatus: !this.state.modalStatus })}
          >
            <h1>
              <i class="fas fa-address-book" />
            </h1>
          </div>
        </Media>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setLocationReducer: location => dispatch(setLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationNav);
