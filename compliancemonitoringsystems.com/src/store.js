import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import locationReducer from "./Reducers/locationReducer";
import serviceReducer from "./Reducers/serviceReducer";
import cartReducer from "./Reducers/cartReducer";
import transactionReducer from "./Reducers/transactionReducer";

export const history = createHistory();
const middleware = routerMiddleware(history);

let rootReducer = combineReducers({
  locationReducer,
  serviceReducer,
  cartReducer,
  transactionReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
