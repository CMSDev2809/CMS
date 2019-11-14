import React, { Component } from "react";
import { connect } from "react-redux";
import "./contact_display_card.css";

class ContactDisplayCard extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div className="contact_display_card">
          <h3>{this.props.contact.name}</h3>
          <h4>{this.props.contact.title}</h4>
          <h4>{this.props.contact.phonenumber}</h4>
          <h4>
            <a href={`mailto:${this.props.contact.email}`}>
              {this.props.contact.email}
            </a>
          </h4>
          {this.props.icon ? (
            <div className="icon">
              <i class="fas fa-address-book" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactDisplayCard);
