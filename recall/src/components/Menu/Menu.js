import React, { Component } from "react";
import { actions } from "./component.js";
import { connect } from "react-redux";
import config from "electron-json-config";
import { NavLink } from "react-router-dom";
import fns from "../../fns";

class Menu extends Component {
  state = {
    tasks: [],
    access: { level: 6 }
  };

  async access() {
    const token = await fns.readToken();
    const access = await fns.getUserAccess(token);
    this.setState({
      access
    });
  }

  async tasks() {
    if (this.state.access.level === 0) {
      const tasks = await fns.getTasks();
      tasks.length > this.state.tasks ? fns.taskBarAlert(true) : null;
      this.setState({ tasks: tasks.length > 0 ? tasks : [] });
    }
  }

  componentWillReceiveProps(newProps) {
    this.access();
  }

  componentDidMount() {
    (async () => {
      await this.access();
      await this.tasks();
      this.interval = setInterval(() => this.tasks(), 5000);
    })();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <nav className="nav-group">
        <h5 className="nav-group-title">Navigation</h5>
        <div>
          {this.props.username ? (
            <MenuRow path="/" label="Logout" icon="logout" />
          ) : (
            <MenuRow path="/" label="Login" icon="home" />
          )}
          {this.state.access.level < 5 ? (
            <MenuRow
              path="/entry_interface"
              label="Card Management"
              icon="icon icon-book"
            />
          ) : null}
          {this.state.access.level === 0 ? (
            <MenuRow
              path="/tasks"
              label={`Tasks ${this.state.tasks.length > 0
                ? `(${this.state.tasks.length})`
                : ""}`}
              icon="icon icon-clipboard"
            />
          ) : null}
          {this.state.access.level === 0 ? (
            <MenuRow path="/admin" label={`Admin`} icon="icon icon-megaphone" />
          ) : null}
          <MenuRow path="/settings" label="Settings" icon="icon icon-cog" />
        </div>
      </nav>
    );
  }
}

const MenuRow = props => {
  return (
    <NavLink
      to={props.path}
      className="nav-group-item"
      activeClassName="active"
      exact={true}
    >
      <span className={"icon icon-" + props.icon} />
      {props.label}
    </NavLink>
  );
};

const Menu_mapStateToProps = state => {
  return {
    ...state,
    username: state.Home.username
  };
};
const Menu_mapDispatchToProps = dispatch => {
  return {};
};

Menu = connect(Menu_mapStateToProps, Menu_mapDispatchToProps)(Menu);

export default Menu;
