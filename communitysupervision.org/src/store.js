import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import serviceReducer from "./Reducers/serviceReducer";
import locationReducer from "./Reducers/locationReducer";

export const history = createHistory();
const middleware = routerMiddleware(history);

let rootReducer = combineReducers({
  serviceReducer,
  locationReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
