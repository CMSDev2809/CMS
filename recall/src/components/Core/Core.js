import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { components, history, store } from "../components.js";
import styles from "./component.less";

const Core = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="core">
          <div className="window">
            <div className="window-content">
              <div className="pane-group">
                <div className="pane-sm sidebar">
                  <components.Menu />
                </div>
                <div className="pane padded">
                  <components.Header />
                  <AppRouter />
                </div>
              </div>
            </div>
            <components.Footer />
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={components.Home} />
      <Route exact path="/tasks" component={components.Tasks} />
      <Route exact path="/admin" component={components.Admin} />
      <Route
        exact
        path="/entry_interface"
        component={components.EntryInterface}
      />
      <Route exact path="/settings" component={components.Settings} />
    </Switch>
  );
};

export default Core;
