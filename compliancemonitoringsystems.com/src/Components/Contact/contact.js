import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { setSelectedLocation } from "../../Actions/locationActions";
import { setLocations } from "../../Actions/locationActions";
import { setContacts } from "../../Actions/locationActions";
import Location from "./Locations/location";
import Contacts from "./contactList";
import Locations from "./locationList";
import CommentBox from "../CommentBox/comment_box";
import Config from "../../config";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: Contacts
    };
    this.props.setSelectedLocation(Locations.missoula);
  }

  render() {
    return (
      <div className="home">
        {this.props.selectedLocation ? (
          <div>
            <div className="container">
              <Header />
              <Location />
              <CommentBox />
              <Modal bsSize="small" show={this.props.show}>
                <Modal.Body>YO</Modal.Body>
              </Modal>
            </div>
            <Footer excl={"contact"} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedLocation: state.locationReducer.selectedLocation
});

const mapDispatchToProps = dispatch => ({
  setSelectedLocation: location => dispatch(setSelectedLocation(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
