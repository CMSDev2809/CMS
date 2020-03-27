import React, { Component } from "react";
import { connect } from "react-redux";
import config from "electron-json-config";
import { TextInput, SelectBox, resetUID } from "../inputs.js";
import { actions } from "./component.js";
import fns from "../../fns";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      status: "",
      se: <div />
    };
  }

  componentDidMount() {
    if (!this.props.logged) {
      this.autoLogin();
    }
  }

  setName(username, logged) {
    this.props.loginUser({ username, logged });
    this.setState({ status: "", logged });
  }

  async autoLogin() {
    const token = await fns.readToken();
    const access = await fns.getUserAccess(token);
    if (access.username) {
      this.setName(access.username, true);
    }
  }

  login() {
    fns.loginUser(this.state.username, this.state.password).then(res => {
      if (res.success === false) {
        this.setState({ status: res.error });
      } else {
        fns.writeToken(res.token);
        this.setName(res.username, true);
        this.props.history.push("/entry_interface");
      }
    });
  }

  logout() {
    fns.writeToken("");
    this.props.loginUser({ username: "", logged: false });
  }

  default() {
    return (
      <div className="home">
        <div className="box">
          <div className={"colored-background"}>
            <div className="padded">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
              </form>
              <button
                className="btn btn-large btn-primary"
                onClick={() => this.login()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <h4>{this.state.status.length > 0 ? this.state.status : null}</h4>
      </div>
    );
  }

  logged() {
    return (
      <div className="home">
        <h1>Logout</h1>
        <div className="box">
          <div className={"colored-background"}>
            <div className="padded">
              <form />
              <button
                className="btn btn-large btn-primary"
                onClick={() => this.logout()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.props.logged ? this.logged() : this.default()}</div>;
  }
}

const Home_mapStateToProps = state => {
  return {
    ...state.Home,
    logged: state.Home.logged
  };
};
const Home_mapDispatchToProps = dispatch => {
  return {
    loginUser: (token, logged) => {
      dispatch(actions.loginUser(token, logged));
    }
  };
};

Home = connect(Home_mapStateToProps, Home_mapDispatchToProps)(Home);

export default Home;
