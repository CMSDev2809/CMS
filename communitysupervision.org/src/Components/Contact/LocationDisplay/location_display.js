import React, { Component } from "react";
import { connect } from "react-redux";
import ContactDisplayCard from "./ContactDisplayCard/contact_display_card";
import "./location_display.css";

class LocationDisplay extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  createContacts(contacts) {
    if (contacts) {
      return contacts.map(element => (
        <ContactDisplayCard contact={element} icon={false} />
      ));
    }
  }

  renderInfo() {
    return (
      <div>
        <h2>Contact</h2>
        <h3>
          Phone Number:{" "}
          {
            this.props.Locations[this.props.location].contactInformation
              .officeNumber
          }
        </h3>
        {this.props.Locations[this.props.location].contactInformation
          .faxNumber ? (
          <h3>
            Fax Number:{" "}
            {
              this.props.Locations[this.props.location].contactInformation
                .faxNumber
            }
          </h3>
        ) : (
          ""
        )}
        <h2>Address</h2>
        <h3>{this.props.Locations[this.props.location].address.firstLine}</h3>
        <h3>{this.props.Locations[this.props.location].address.secondLine}</h3>
        <h2>Staff</h2>
      </div>
    );
  }

  renderPage() {
    return (
      <div>
        <h1>{this.props.Locations[this.props.location].locationName}</h1>
        <iframe
          src={this.props.Locations[this.props.location].googleMapURI}
          frameborder="2"
        >
          allowfullscreen>
        </iframe>
        {this.renderInfo()}
        {this.createContacts(
          this.props.Locations[this.props.location].contacts
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="location_display">
        {this.props.Locations && this.props.location ? this.renderPage() : ""}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.locationReducer.location
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LocationDisplay);
