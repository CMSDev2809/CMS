import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";
import { Provider } from "react-redux";
import HttpsRedirect from "react-https-redirect";
import "babel-polyfill";
import App from "./App";

ReactDOM.render(
  <HttpsRedirect>
    <Provider store={store}>
      <App />
    </Provider>
  </HttpsRedirect>,
  document.getElementById("root")
);
registerServiceWorker();
