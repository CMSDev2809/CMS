import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";
import fns from "../../fns";
import "./header.css";

class Header extends Component {
  state = {
    loaderColor: "yellow"
  };

  loader() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
    return (
      <ClipLoader
        className={override}
        sizeUnit={"px"}
        size={25}
        color={this.state.loaderColor}
        loading={true}
      />
    );
  }

  setColor() {
    fns
      .ping(fns.readFromSave())
      .then(
        res =>
          res.success
            ? this.setState({ loaderColor: "green" })
            : this.setState({ loaderColor: "red" })
      )
      .catch(() => this.setState({ loaderColor: "red" }));
  }

  componentDidMount() {
    this.setColor();
    this.interval = setInterval(() => this.setColor(), 5000);
  }

  render() {
    return (
      <div className="header">
        {this.props.username ? (
          <div className="container">
            <h2>Logged in as:</h2>
            <h1>{this.props.username}</h1>
            {this.loader()}
          </div>
        ) : (
          <div>{this.loader()}</div>
        )}
      </div>
    );
  }
}

const Header_mapStateToProps = state => {
  return {
    ...state.Header,
    username: state.Home.username
  };
};
const Header_mapDispatchToProps = dispatch => {
  return {};
};

Header = connect(Header_mapStateToProps, Header_mapDispatchToProps)(Header);

export default Header;
