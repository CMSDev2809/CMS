import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";
import { Provider } from "react-redux";
import HttpsRedirect from "react-https-redirect";
import App from "./App";
import "babel-polyfill";
import "./normalize.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
