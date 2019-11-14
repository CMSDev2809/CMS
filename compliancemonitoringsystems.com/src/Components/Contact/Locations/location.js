import React, { Component } from "react";
import { connect } from "react-redux";
import LocationNav from "../LocationsNav/locations_nav";
import MediaQuery from "react-responsive";
import fns from "../../../fns";

class Contact extends Component {
  render() {
    fns.autoScroll();
    let contactBuilder = [];
    let subIndent = 37.5;
    let glyphiconMarginRight = 10;
    let bottomMargin = 60;
    this.props.selectedLocation.contacts.map(index =>
      contactBuilder.push(
        <div>
          <MediaQuery query="(max-width: 780px)">
            <div style={{ marginTop: "20px", marginBottom: "40px" }}>
              <h3>{index.name}</h3>
              <div>{index.title}</div>
              <div>
                <a href={"tel:" + index.phonenumber}>{index.phonenumber}</a>
              </div>
              <div>
                <a style={{ fontSize: "14px" }} href={"mailto:" + index.email}>
                  {index.email}
                </a>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery query="(min-width: 779px)">
            <div style={{ marginTop: "20px", marginBottom: "40px" }}>
              <h3>{index.name}</h3>
              <div>{index.title}</div>
              <div>
                <a href={"tel:" + index.phonenumber}>{index.phonenumber}</a>
              </div>
              <div>
                <a href={"mailto:" + index.email}>{index.email}</a>
              </div>
            </div>
          </MediaQuery>
        </div>
      )
    );
    return (
      <div>
        <LocationNav />
        <h1 style={{ textAlign: "left", marginLeft: "-5px" }}>
          {this.props.selectedLocation.locationName}
        </h1>
        <div>
          <MediaQuery query="(max-width: 780px)">
            <iframe
              src={this.props.selectedLocation.googleMapURI}
              frameborder="2"
              width="300"
              height="150"
            >
              allowfullscreen>
            </iframe>
          </MediaQuery>
          <MediaQuery query="(min-width: 779px)">
            <iframe
              src={this.props.selectedLocation.googleMapURI}
              frameborder="2"
              width="700"
              height="450"
            >
              allowfullscreen>
            </iframe>
          </MediaQuery>
        </div>
        <div style={{ marginBottom: `${bottomMargin}px` }}>
          <h2>
            <div
              class="glyphicon glyphicon-phone"
              style={{ marginRight: `${glyphiconMarginRight}px` }}
            />Contact
          </h2>
          <div style={{ marginLeft: `${subIndent}px` }}>
            <div>
              Office Number:{" "}
              <a
                href={
                  "tel:" +
                  this.props.selectedLocation.contactInformation.officeNumber
                }
              >
                {this.props.selectedLocation.contactInformation.officeNumber}
              </a>
            </div>
            {this.props.selectedLocation.contactInformation.faxNumber ? (
              <div>
                Fax Number:{" "}
                {this.props.selectedLocation.contactInformation.faxNumber}
              </div>
            ) : (
              ""
            )}
          </div>
          <div style={{ marginLeft: `${subIndent}px` }}>
            <a style={{ cursor: "pointer" }}>
              <h4
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight - 950,
                    behavior: "smooth"
                  })}
              >
                Leave a comment!
              </h4>
            </a>
          </div>
        </div>
        <div style={{ marginBottom: `${bottomMargin}px` }}>
          <h2>
            <div
              class="glyphicon glyphicon-globe"
              style={{ marginRight: `${glyphiconMarginRight}px` }}
            />Address
          </h2>
          <div style={{ marginLeft: `${subIndent}px` }}>
            <div>{this.props.selectedLocation.address.firstLine}</div>
            <div>{this.props.selectedLocation.address.secondLine}</div>
          </div>
        </div>
        <div>
          <h2>
            <div
              class="glyphicon glyphicon-user"
              style={{ marginRight: `${glyphiconMarginRight}px` }}
            />Staff
          </h2>
          <MediaQuery query="(max-width: 780px)">
            <div style={{ marginLeft: `${subIndent - 25}px` }}>
              {contactBuilder}
            </div>
          </MediaQuery>
          <MediaQuery query="(min-width: 799px)">
            <div style={{ marginLeft: `${subIndent}px` }}>{contactBuilder}</div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedLocation: state.locationReducer.selectedLocation
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
