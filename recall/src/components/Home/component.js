import config from "electron-json-config";

// Init reduxHelper
import reduxHelper from "../../utils/reduxHelper.js";
const reduxUtil = reduxHelper("Home");

// Include component
import component from "./Home.js";

// Action Definitions
const LOGIN_USER = reduxUtil.defineAction("LOGIN_USER");

// Initial State
const initialState = {
  // get this from config file (second parameter is the default value if not found)
};

// Make Actions
const actions = {
  loginUser: reduxUtil.createAction(LOGIN_USER)
};

// Make reducer
const reducer = reduxUtil.createReducer(
  {
    [LOGIN_USER]: (state, action) => {
      return { ...state, ...action.payload };
    }
  },
  initialState
);

// Export
export { component, actions, reducer };
